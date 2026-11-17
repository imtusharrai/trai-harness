#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

echo "==> Fetching updates from upstream (DeepSeek Harness)..."
git fetch upstream

CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo "==> Current branch: ${CURRENT_BRANCH}"

echo "==> Merging upstream/master into ${CURRENT_BRANCH}..."
git merge upstream/master --no-edit

echo "==> Installing dependencies..."
pnpm install

echo "==> Building native system bindings for Intel Mac (x86_64)..."
pnpm run build:native-system

echo "==> Building client artifacts..."
pnpm run build:artifacts

echo "==> Packaging Trai Harness for macOS Intel (x86_64)..."
pnpm run package:desktop:mac:x64:unsigned

echo "==> Installing updated application into /Applications/Trai Harness.app..."
rm -rf "/Applications/Trai Harness.app"
cp -R "apps/desktop/.desktop-build/targets/mac-x64/unsigned-artifacts/mac/Trai Harness.app" "/Applications/Trai Harness.app"
xattr -cr "/Applications/Trai Harness.app"
cp "apps/desktop/.desktop-build/targets/mac-x64/unsigned-artifacts/trai-harness-"*"-mac-x64-unsigned.dmg" "$HOME/Downloads/"

echo "==> Pushing updated ${CURRENT_BRANCH} to origin (your fork)..."
git push origin "${CURRENT_BRANCH}" || true

echo "==> Done! Trai Harness has been updated and installed into /Applications."
