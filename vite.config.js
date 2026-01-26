import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        percentage: resolve(__dirname, 'tools/percentage-calculator.html'),
        emi: resolve(__dirname, 'tools/emi-calculator.html'),
        cgpa: resolve(__dirname, 'tools/cgpa-converter.html'),
        password: resolve(__dirname, 'tools/password-generator.html'),
        username: resolve(__dirname, 'tools/username-checker.html'),
        qr: resolve(__dirname, 'tools/qr-generator.html'),
      },
    },
  },
});
