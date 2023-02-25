const testString = "The Mayor of Casterbridge12345 Lorem IPsum dolor amet"

function longestSubstring(str) {
  let candidates = []
  let arrayOfSmallerStrings = []

  let findBiggestOne = (arr) => {
    let rightOne = ""
    for (const el of arr) {
      if (el.length > rightOne.length) {
        rightOne = el
      }
    }

    return rightOne
  }

  let findSubstringFromCharacter = (substring) => {
    let currentSubString = ""
    let currentCandidate = ""

    for (let i = 0; i<substring.length; i++) {
      const current = substring[i]
      if (!currentSubString.includes(current)) {
        currentSubString += current
      } else {
        currentSubString = current
      }
  
      if (currentSubString.length > currentCandidate.length) {
        currentCandidate = currentSubString
      }
    }

    candidates.push(currentCandidate)
  }

  for (let i = 0; i < str.length; i++) {
    arrayOfSmallerStrings.push(str.substring(i))
  }

  findSubstringFromCharacter(str.substring(0))

  return findBiggestOne(candidates)
}

console.log(longestSubstring(testString))
