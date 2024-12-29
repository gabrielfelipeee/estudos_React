module.exports = {
    // Define o ambiente de teste como "jsdom", que simula um navegador para testes de componentes React.
    testEnvironment: "jest-environment-jsdom",

    // Arquivos que devem ser carregados após o ambiente ser configurado (por exemplo, extensões do Jest ou configurações extras).
    setupFilesAfterEnv: ["<rootDir>/setup_tests.js"],

    // Define quais arquivos serão considerados para a coleta de cobertura de testes.
    collectCoverageFrom: ["<rootDir>/src/**/*.{js,ts,jsx,tsx}"],

    // Mapeia arquivos SCSS e CSS para um proxy, permitindo simular classes de estilo em testes.
    moduleNameMapper: {
        '\\.(scss|css)$': 'identity-obj-proxy',
    },

    // Define como arquivos de diferentes tipos devem ser transformados antes de serem testados.
    transform: {
        // Usa o Babel para transformar arquivos JavaScript e TypeScript.
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
        // Transforma arquivos SCSS para que sejam interpretados corretamente durante os testes.
        '^.+\\.scss$': 'jest-css-modules-transform',
    },
}
