module.exports = {
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ["<rootDir>/setup_tests.js"],
    collectCoverageFrom: ["<rootDir>/src/**/*.{js,ts,jsx,tsx}"]
};