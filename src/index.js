const Slots = require('@jedmud/tui-slots')
const { Elements } = require('@jedmud/tui-elements')
const BoxElement = require('@jedmud/tui-box-element')
const PromptElement = require('@jedmud/tui-prompt-element')
const ScrollerElement = require('@jedmud/tui-scroller-element')
const MetricsElement = require('@jedmud/tui-metrics-element')
const TimerElement = require('@jedmud/tui-timer-element')
const Keypress = require('@jedmud/keypress')
const slotsConfig = require('./config/slots')
const elementsConfig = require('./config/elements')
const random = require('./random')
const metric = require('./metric')

require('colors')

const slots = new Slots()
const keypress = (new Keypress()).listen()

slots.configure(slotsConfig).resolve().write()

const elements = (new Elements()).create({
    box: BoxElement,
    prompt: PromptElement,
    scroller: ScrollerElement,
    metrics: MetricsElement,
    timer: TimerElement,
}, elementsConfig)

elements.configure(slots.fetch()).unmute()

process.stdout.on('resize', ()=> {
    elements.mute()
    slots.resolve().write()
    elements.configure(slots.fetch())
    elements.unmute()
    elements.write()
})

elements.elements.left.set([
    '',
    'LEGEND'.bgBlue.bold,
    '',
    'ctrl-q: quit',
    'crtl-c: clear prompt',
    '',
    'left : cursor left',
    'right: cursor right',
    'up   : prompt history previous',
    'down : prompt history next',
    '',
    'ctrl-a: + 10 paragraphs',
    '',
    'pageUp: scroll up',
    'pageDown: scroll down',
    '',
    'ctrl-t: restart ticker',
]).write()

setInterval(()=> {
    elements.elements.rainbow.set(random(1)).write()

    elements.elements.vitals.set([
        metric('enemy'),
        metric('hp'),
        metric('mana'),
        metric('stamina'),
    ]).write()

    elements.elements.stats.set([
        metric('enemy'),
        metric('hp'),
        metric('mana'),
    ]).write()
}, 500)

setInterval(()=> {
    elements.elements.main.set('')
    elements.elements.main.set('Epoch was ' + Date.now() + ' seconds ago!')
    elements.elements.main.set('')

    elements.elements.main.last().write()
}, 5000)

elements.elements.main.set('Welcome to Jedmud TUI!'.cyan);
elements.elements.main.set('');
elements.elements.main.set('The experimental Terminal User Interface framework for NodeJs.');
elements.elements.main.set('');
elements.elements.main.set('');
elements.elements.main.set('');

elements.elements.main.last().write()

elements.elements.title.set(['TICKER'.cyan]).write()
elements.elements.ticker.set(30).write()

keypress.on('data', (name, code, e)=> {
    switch(name) {
        case 'ctrl-q':
            slots.restore()
            process.exit()
            break
        case 'ctrl-c':
            elements.elements.prompt.clear().write()
            break
        case 'ctrl-a':
            for (const p of random(10)) {
                elements.elements.main.set(p).last().write()
                elements.elements.main.set('').last().write()
            }
            break
        case 'pageup':
            elements.elements.main.prev().write()
            break
        case 'pagedown':
            elements.elements.main.next().write()
            break
        case 'ctrl-t':
            elements.elements.ticker.set(30).write()
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

            elements.elements.main.set(elements.elements.prompt.line).release().last().write()
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
