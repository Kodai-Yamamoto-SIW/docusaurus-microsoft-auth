#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const sourceDir = path.resolve(__dirname, '../src');
const targetDir = path.resolve(__dirname, '../dist');

/**
 * Recursively copy static assets (currently CSS) from src to dist.
 */
const copyAssets = (currentSource, currentTarget) => {
  const entries = fs.readdirSync(currentSource, { withFileTypes: true });

  for (const entry of entries) {
    const sourcePath = path.join(currentSource, entry.name);
    const targetPath = path.join(currentTarget, entry.name);

    if (entry.isDirectory()) {
      copyAssets(sourcePath, targetPath);
      continue;
    }

    if (/\.module\.css$/i.test(entry.name)) {
      fs.mkdirSync(path.dirname(targetPath), { recursive: true });
      fs.copyFileSync(sourcePath, targetPath);
    }
  }
};

copyAssets(sourceDir, targetDir);
