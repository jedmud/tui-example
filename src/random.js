const { LoremIpsum } = require('lorem-ipsum')

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 16,
        min: 8
      },
      wordsPerSentence: {
        max: 16,
        min: 8
      }
})

module.exports = p => {
    return lorem.generateParagraphs(p).split('\n').map(str => {
        return str.rainbow
    })
}
