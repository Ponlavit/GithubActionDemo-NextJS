var nextJest = require('next/jest');

var createJestConfig = nextJest();

var customJestConfig = {
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js',
    '@testing-library/jest-dom/extend-expect',
    '@testing-library/react',
  ],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['@swc/jest'],
  },
  moduleNameMapper: {
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^pages/(.*)$': '<rootDir>/src/pages/$1',
    '^models/(.*)$': '<rootDir>/src/models/$1',
    '^controllers/(.*)$': '<rootDir>/src/controllers/$1',
    '^commons/(.*)$': '<rootDir>/src/commons/$1',
    '^services/(.*)$': '<rootDir>/src/services/$1',
    '^libs/(.*)$': '<rootDir>/src/libs/$1',
  },
};

module.exports = createJestConfig(customJestConfig);
