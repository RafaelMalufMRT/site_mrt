#!/usr/bin/env bash
set -euo pipefail

export PATH="/Users/mrtmacbookm2pro/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:/Users/mrtmacbookm2pro/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin:$PATH"

pnpm install
pnpm dev --port 3000
