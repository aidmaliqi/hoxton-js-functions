/* WRITE THE CODE FOR THE FOLLOWING FUNCTIONS */

// Input: a (number), b (number)
// Action: Add both numbers together
// Output: The result (number)
function add(a , b ) {
    // write your code here
    let result = a + b
    console.log(result)
    return result
  }
  
  // Input: number
  // Action: Check if the number given is even or not
  // Output: The result (boolean)
  function isEven(number) {
    // write your code here
    if (number % 2 == 0 ) {
        return true
    }
    else{
        return false
    }
  }
  
  // Input: name (string)
  // Action: Greet the user by name
  // Output: The greeting (string)
  function greet( name ) {
    // write your code here
    let greet = ` hello mr.${name}`
    return greet
  }
  
  // Input: age (number)
  // Action: Check if the age is 18 or over
  // Output: The result (boolean)
  function isAnAdult(age) {
    // write your code here
    if (age >= 18) {
        return true
    } else {
        return false
    }
  }
  
  // Input: age (number)
  // Action: Check how many years are left until adulthood (18)
  // Output: The result (number)
  function yearsToAdulthood(age) {
    // write your code here
    if (age < 18) {
        let untilAdulthood = 18 - age
        return untilAdulthood
    } else {
        let Age = 'Alredy an adult'
        return Age
    }
    
  }
  let constumerObject = { age: 19 , name : "Jon" }
  // Input: person ({ age: number, name: string })
  // Action:
  //   - check if a person is an adult
  //   - if they are, greet them
  //   - if they are not, tell them to come back in X years (when they are)
  // Output: The result (string)
  function admit(person = {age : x ,name : "Jon" }) {
    // write your code here
    // use greet, isAnAdult and yearsToAdulthood to help you!
    if( person.age >= 18){
        let greet = `hello mr.${person.name}`
        return greet
    }
    else{
        let ageTillAdult = 18 - person.age
        let byeGreet = `come back in ${ageTillAdult} years (when they are adults)`
        return byeGreet
    }
  }
  
  console.log(admit(constumerObject))