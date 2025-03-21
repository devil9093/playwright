const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests', // Path to test files
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    baseURL: 'http://localhost:8080',
    todoValue:'Test Todo 1'
  },
});