const Slots = require('@jedmud/tui-slots')
const { Elements } = require('@jedmud/tui-elements')
const PromptElement = require('@jedmud/tui-prompt-element')
const Keypress = require('@jedmud/keypress')

const slots = new Slots()

slots.configure([
    {
        name: 'prompt',
        parent: 'screen',
        height: 3,
        bottom: 5,
        left: 10,
        right: 10,
        borders: {
            right: '|',
            left: '|',
            top: '-',
            bottom: '-',
        },
    }
]).resolve().write()

const elements = new Elements({
    prompt: PromptElement,
}, [
    {
        name: 'prompt',
        type: 'prompt',
        slot: 'prompt',
    }
])

elements.configure(slots.fetch()).unmute()

const keypress = (new Keypress()).listen()

elements.elements.prompt.set('ctrl-q to quit').select().write()

keypress.on('data', (name, code, e)=> {
    switch(name) {
        case 'ctrl-q':
            slots.restore()
            process.exit()
            break
        case 'ctrl-c':
            elements.elements.prompt.clear().write()
            break
        case 'backspace':
            elements.elements.prompt.pop().write()
            break
        case 'left':
            elements.elements.prompt.cursor.decrease().write()
            break
        case 'right':
            elements.elements.prompt.cursor.increase().write()
            break
        case 'return':
            elements.elements.prompt.select().write()
            break
        case 'up':
            elements.elements.prompt.history.up().select(false).write()
            break
        case 'down':
            elements.elements.prompt.history.down().select(false).write()
            break
    }

    if (code >= 32 && code <= 255 && code !== 127) {
        elements.elements.prompt.set(e.sequence).write()
    }
})
