function getIndexsForPalindrome(word) {
    let reversa = ""
    if (word[0] == word[word.length - 1]) {
        for (let i = word.length - 1; i >= 0; i--) {
            reversa += word[i]
        }
    }
    if (reversa == word) {//ya es palindromo
        return []
    }
    else {
        for (let i = 0; i < word.length; i++) {
            for (let j = 0; j < word.length; j++) {
                if (word[i] != word[j]) {
                    //cambiar letra
                    let palabraMod = word.split('')
                    const letraCambiar = palabraMod[j]
                    palabraMod[j] = word[i]
                    palabraMod[i] = letraCambiar
                    //palindromo?
                    reversa = ""
                    for (let k = palabraMod.length - 1; k >= 0; k--) {
                        reversa += palabraMod[k]
                    }
                    let plabraComparar = (palabraMod.toString())
                    plabraComparar = plabraComparar.replaceAll(',', '')
                    if (reversa == plabraComparar) {//es palindromo
                        return [i, j]
                    }
                }
            }
        }
        return null
    }
}
getIndexsForPalindrome('abab')