const Slots = require('@jedmud/tui-slots')
const { Elements } = require('@jedmud/tui-elements')
const BoxElement = require('@jedmud/tui-box-element')

const slots = new Slots()

slots.configure([
    {
        name: 'outer',
        parent: 'screen',
        top: 10,
        bottom: 10,
        left: 10,
        right: 10,
        borders: {
            right: '|',
            left: '|',
            top: '-',
            bottom: '-',
        },
        padding: {
            left: 2,
            right: 2,
            top: 2,
            bottom: 2,
        },
    },
    {
        name: 'inner',
        parent: 'outer',
        top: 5,
        height: 4,
        left: 5,
        width: 100,
        borders: {
            right: '|',
            left: '|',
            top: '-',
            bottom: '-',
        },
    }
]).resolve().write()

const elements = (new Elements()).create({
    box: BoxElement,
}, [
    {
        name: 'main',
        type: 'box',
        slot: 'inner',
    }
])

elements.configure(slots.fetch()).unmute()

elements.elements.main.set([
    'hello',
    'i am a box',
]).write()

setTimeout(()=> {
    slots.restore()
}, 5000)
