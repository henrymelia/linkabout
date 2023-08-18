export default {
  rootDir: "./src",
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.ts?$": "ts-jest",
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/infrastructure/tests/file-mock.ts",
  },
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  setupFilesAfterEnv: ["<rootDir>/infrastructure/tests/setup-tests.ts"],
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  moduleDirectories: ["node_modules", "./src"],
  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy",
    // "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/infrastructure/tests/file-mock.js",
  },
};
