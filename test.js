// test.js

// 1. Unused variable (no-unused-vars)
const secretKey = 'abc123'

// 2. Insecure eval (security/detect-eval-with-expression)
function runUserCode(code) {
  eval(code)
}

// 3. DOM XSS (no-unsanitized / security/detect-innerhtml)
function render(userInput) {
  const out = document.getElementById('output')
  out.innerHTML = userInput
}

// 4. Missing semicolons & inconsistent indentation
const add = (a, b) => {
return a + b
}

console.log("Result:", add(2, 3))
