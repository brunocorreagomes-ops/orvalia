import { test } from 'node:test';
import assert from 'node:assert/strict';
import { handle, validate, confirmed } from './api/contact.js';
const body = { name: 'Teste', company: 'Orvalia', email: 'orvaliastudio@gmail.com', priority: 'Diagnóstico completo' };
const req = (data = body, origin = 'https://orvalia.com.br') => new Request('https://example.test/api/contact', { method: 'POST', headers: { origin, 'content-type': 'application/json' }, body: JSON.stringify(data) });
test('rejects invalid fields and unknown origins before contacting the provider', async () => {
  assert.equal(validate({ ...body, email: 'invalid' }), null);
  assert.equal(validate({ ...body, context: 'x'.repeat(5001) }), null);
  assert.equal(validate({ ...body, website_check: 'spam' }), null);
  assert.equal((await handle(req(body, 'https://example.org'), () => { throw Error('must not call'); })).status, 403);
});
test('does not treat HTTP 200 or a sign-in page as a confirmed submission', async () => {
  const response = await handle(req(), async () => new Response('<h1>Sign in</h1>'));
  assert.equal(response.status, 502);
  assert.equal((await response.json()).ok, false);
});
test('maps the fields and requires an explicit provider receipt', async () => {
  const response = await handle(req(), async (_, options) => {
    const params = new URLSearchParams(options.body);
    assert.equal(params.get('emailAddress'), body.email);
    assert.equal(params.get('entry.522600955'), body.name);
    assert.equal(params.get('entry.607905347'), body.company);
    assert.equal(params.get('entry.695967425'), body.priority);
    return new Response('Solicitação recebida pela Orvalia. Obrigado por contar sobre seu projeto.');
  });
  assert.equal(response.status, 200);
  assert.equal((await response.json()).ok, true);
});

test('a receipt mentioned only in hidden script data is not a confirmation', () => {
  assert.equal(confirmed('<script>const receipt = "Solicitação recebida pela Orvalia."</script><form>Required fields missing</form>'), false);
  assert.equal(confirmed('<div>Solicitação recebida pela Orvalia.</div>'), true);
});
