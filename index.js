/* Palindrome checker */
function palindrome(str) {
    let straight = str.replace(/\W+|_/g, "").toLowerCase()
    let reverse= straight.split("").reverse().join("")
    return (straight === reverse)? true: false
  }
  console.log(palindrome("eye"));