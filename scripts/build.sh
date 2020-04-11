#!/bin/bash

# cd to the root dir
ROOT="$(pwd)/$(dirname "$0")/.."
cd "$ROOT" || exit 1

PATH="$(npm bin):$PATH"
DIR="$ROOT/dist"

# Clean up output dir
rm -rf "$DIR"
mkdir -p "$DIR"

# Transpile CommonJS versions of files
babel --env-name commonjs src --source-root src --out-dir "$DIR" --copy-files --quiet