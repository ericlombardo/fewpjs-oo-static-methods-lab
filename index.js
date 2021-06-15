
class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string) { 
    return string.replace(/[^a-zA-Z0-9-' ]/g, '') // g makes it global replace, not just first
  }

  static titleize(string) {
    const excludedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let newString = string.split(' ').map((word, index) => {
      if (index === 0 || !excludedWords.includes(word)) {
        return word.charAt(0).toUpperCase() + word.slice(1)
      } else {
        return word
      }
    })
    return newString.join(' ')
  }
}