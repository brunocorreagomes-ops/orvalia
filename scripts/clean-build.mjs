import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
// Only generated outputs beneath this repository are removed.
for (const directory of ['../dist/', '../dist-server/']) {
  fs.rmSync(fileURLToPath(new URL(directory, import.meta.url)), { recursive: true, force: true });
}
