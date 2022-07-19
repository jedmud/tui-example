module.exports = [
    {
        name: 'top',
        parent: 'screen',
        top: 0,
        bottom: 4,
        left: 0,
        right: 0,
    },
    {
        name: 'left',
        parent: 'top',
        top: 0,
        bottom: 0,
        left: 0,
        width: 50,
        borders: {
            right: '|'
        },
        padding: {
            left: 1,
            right: 1,
        },
    },
    {
        name: 'right',
        parent: 'top',
        top: 0,
        bottom: 0,
        right: 0,
        width: 90,
        borders: {
            left: '|'
        },
    },
    {
        name: 'main',
        parent: 'top',
        top: 0,
        bottom: 0,
        left: 50,
        right: 90,
        padding: {
            left: 2,
            top: 0,
            right: 2,
            bottom: 0,
        },
    },
    {
        name: 'bottom',
        parent: 'screen',
        height: 4,
        bottom: 0,
        left: 0,
        right: 0,
        borders: {
            top: '-'
        }
    },
    {
        name: 'prompt',
        parent: 'bottom',
        height: 2,
        bottom: 0,
        left: 0,
        right: 0,
        borders: {
            top: '-',
        },
    },
    {
        name: 'vitals',
        parent: 'bottom',
        height: 1,
        top: 0,
        left: 49,
        right: 0,
        borders: {
            left: '|',
        },
        padding: {
            left: 1,
        },
    },
    {
        name: 'ticker',
        parent: 'bottom',
        height: 1,
        top: 0,
        left: 45,
        width: 2,
    },
    {
        name: 'title',
        parent: 'bottom',
        height: 1,
        top: 0,
        left: 0,
        width: 10,
    },
    {
        name: 'rainbow',
        parent: 'right',
        top: 0,
        height: 6,
        right: 0,
        left: 0,
        borders: {
            bottom: '-'
        },
        padding: {
            left: 1,
            right: 1,
        },
    },
    {
        name: 'stats',
        parent: 'right',
        top: 10,
        height: 7,
        right: 5,
        left: 5,
        borders: {
            bottom: '═',
            top: '═',
        },
        padding: {
            left: 5,
            right: 5,
            top: 1,
            bottom: 1,
        },
    },
]
