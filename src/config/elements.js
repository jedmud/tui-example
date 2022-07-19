module.exports = [
    {
        name: 'rainbow',
        type: 'box',
        slot: 'rainbow',
        options: {
            hard: true,
        },
    },
    {
        name: 'left',
        type: 'box',
        slot: 'left',
    },
    {
        name: 'main',
        type: 'scroller',
        slot: 'main',
    },
    {
        name: 'prompt',
        type: 'prompt',
        slot: 'prompt',
        options: {
            first: true,
        },
    },
    {
        name: 'vitals',
        type: 'metrics',
        slot: 'vitals',
        options: {
            gauges: [
                {
                    name: 'enemy',
                    bg: 'black',
                    fg: 'red',
                },
                {
                    name: 'hp',
                    bg: 'black',
                    fg: 'green',
                },
                {
                    name: 'mana',
                    bg: 'black',
                    fg: 'cyan',
                },
                {
                    name: 'stamina',
                    bg: 'black',
                    fg: 'yellow',
                }
            ]
        },
    },
    {
        name: 'ticker',
        type: 'timer',
        slot: 'ticker',
    },
    {
        name: 'title',
        type: 'box',
        slot: 'title',
    },
    {
        name: 'stats',
        type: 'metrics',
        slot: 'stats',
        options: {
            axis: 'vertical',

            gauges: [
                {
                    name: 'enemy',
                    bg: 'black',
                    fg: 'magenta',
                    chr: '■',
                },
                {
                    name: 'hp',
                    bg: 'black',
                    fg: 'blue',
                    chr: '■',
                },
                {
                    name: 'mana',
                    bg: 'black',
                    fg: 'cyan',
                    chr: '■',
                },
            ]
        }
    },
]
