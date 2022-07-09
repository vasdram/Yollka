module.exports = {
    semi: true,
    trailingComma: 'all',
    singleQuote: true,
    printWidth: 120,
    tabWidth: 4,
    importOrder: [
        'react',
        'classnames',
        "<THIRD_PARTY_MODULES>",
        '^@layouts/(.*)$',
        '^@screens/(.*)$',
        '^@components/(.*)$',
        '^@elements/(.*)$',
        '(.scss)$',
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true
};
