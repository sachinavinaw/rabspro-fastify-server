// eslint-disable-next-line import/no-unresolved
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['e2e/**.spec.ts', 'src/**/*.spec.ts'],
    reporters: ['default', 'hanging-process'],
    coverage: {
      provider: 'istanbul',
      reporter: ['lcov'],
      exclude: ['src/exceptions/**/*.ts', 'src/business-day/**/*.ts', 'src/logger.ts'],
    },
    testTimeout: 20000,
    hookTimeout: 60000,
    teardownTimeout: 30000,
    typecheck: {
      tsconfig: './spec.tsconfig.ts',
    },
  },
});
