import { test } from 'node:test';
import assert from 'node:assert/strict';
import { safeAnalyticsParams, validMeasurementId } from '../src/lib/analytics.ts';
test('requires a correctly formatted measurement identifier', () => { assert.equal(validMeasurementId(''), false); assert.equal(validMeasurementId('placeholder'), false); assert.equal(validMeasurementId('G-TEST12345'), true); });
test('rejects contact data and query strings from analytics parameters', () => {
  const result = safeAnalyticsParams({ source_page: '/contato/', destination_path: '/portfolio/', email: 'person@example.com', name: 'Pessoa', context: 'mensagem privada', link_type: 'mailto', unexpected: 'x' });
  assert.deepEqual(result, { source_page: '/contato/', destination_path: '/portfolio/', link_type: 'mailto' });
  assert.deepEqual(safeAnalyticsParams({ source_page: '/contato/?email=person@example.com' }), {});
});
