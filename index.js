/* Palindrome checker */
function palindrome(str) {
    let straight = str.replace(/\W+|_/g, "").toLowerCase()
    let reverse = straight.split("").reverse().join("")
    if(straight === reverse){
      return true
    }return false
  }
  console.log(palindrome("eye"));