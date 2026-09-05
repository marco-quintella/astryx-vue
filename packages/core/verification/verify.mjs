#!/usr/bin/env node
/**
 * Standalone verification script.
 * Runs the playground build + preview, screenshots via Playwright, exits.
 * Used by CI and by humans to grab a fresh "what does the button look like?" image.
 */
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { existsSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '../../..');
const SCREENSHOTS_DIR = resolve(__dirname, 'screenshots');
if (!existsSync(SCREENSHOTS_DIR)) mkdirSync(SCREENSHOTS_DIR, { recursive: true });

const log = (...args) => console.log('[verify]', ...args);

async function run(cmd, args, opts = {}) {
  return new Promise((resolveP, rejectP) => {
    const p = spawn(cmd, args, { stdio: 'inherit', cwd: opts.cwd ?? ROOT, ...opts });
    p.on('exit', (code) => (code === 0 ? resolveP() : rejectP(new Error(`${cmd} exited ${code}`))));
  });
}

async function main() {
  log('Step 1: build playground');
  await run('pnpm', ['--filter', '@astryxdesign/playground', 'build']);

  log('Step 2: start preview server');
  const server = spawn('pnpm', ['--filter', '@astryxdesign/playground', 'preview'], {
    cwd: ROOT,
    stdio: 'pipe',
  });
  server.stdout.on('data', (d) => process.stdout.write(`[preview] ${d}`));
  server.stderr.on('data', (d) => process.stderr.write(`[preview] ${d}`));

  // Wait for server
  await new Promise((r) => setTimeout(r, 3000));

  try {
    log('Step 3: open browser and screenshot');
    const browser = await chromium.launch();
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
    const page = await ctx.newPage();
    await page.goto('http://127.0.0.1:4173', { waitUntil: 'networkidle' });

    const out = resolve(SCREENSHOTS_DIR, 'button-playground.png');
    await page.screenshot({ path: out, fullPage: true });
    log('Wrote', out);

    await browser.close();
  } finally {
    server.kill('SIGTERM');
  }
  log('Done.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
