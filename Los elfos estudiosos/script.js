function getIndexsForPalindrome(word) {
    const isPalindrome = (str) => str === str.split('').reverse().join('')
    if (isPalindrome(word)) {
        return []
    }
    else {
        const palSep = word.split('')
        for (let i = 0; i < word.length; i++) {
            for (let j = i + 1; j < word.length; j++) {
                if (word[i] !== word[j]) {
                    let palMod = [...palSep]
                    [palMod[i], palMod[j]] = [palMod[j], palMod[i]]
                    if (isPalindrome(palMod.join(''))) {
                        return [i, j]
                    }
                }
            }
        }
        return null
    }
}
getIndexsForPalindrome('abab')