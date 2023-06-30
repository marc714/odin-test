function reverseString(string) {
    return string.split("").reverse().join("")
}

const calculator = {
    add: function(x, y) {
        return x + y;
    },
    subtract: function(x, y) {
        return x - y;
    },
    divide: function(x, y) {
        return x / y;
    },
    multiply: function(x, y) {
        return x * y;
    }
}

const base = ["a","b","c","d","e","f","g","h","i","j",
                  "k","l","m","n","o","p","q","r","s","t",
                  "u","v","w","x","y","z","!",".","?"];

function caesarCipher(string, shiftFactor) {    
    const stringArray = string.split("");
    
    const baseArray = [];
    stringArray.forEach(el => {
        baseArray.push(base.indexOf(el))
    });
    console.log("baseArray:")
    console.log(baseArray);
    
    const shiftArray = [];
    baseArray.forEach(el => {
        shiftArray.push(el + shiftFactor)
    });
		console.log("shiftArray:")
    console.log(shiftArray)
    
    const adjustedArray = [];
    shiftArray.forEach(el => {
        // if(el > 25) {  // if el is greater than last index 25
        //   let temp = el - base.length; // el - length (26 in case of A-z)
        //   adjustedArray.push(temp);
        // } else {
        //     adjustedArray.push(el);
        // }
        adjustedArray.push(overLimit(el))
    })
    console.log("adjustedArray:")
    console.log(adjustedArray)
    return adjustedArray;
}

function overLimit(num){
	if(num <= base.length -1) {
    return num;
  }
  return overLimit(num - base.length)
}

function decrypt(){ return }

// spread operator https://codeburst.io/javascript-arrays-finding-the-minimum-maximum-sum-average-values-f02f1b0ce332
function analyzeArray(array) {
    const sum = array.reduce(
        (a, b) => a + b, 0
      );
      
      const avg = sum / array.length
      
      const min = Math.min(...array)
      const max = Math.max(...array)
      const length = array.length
      
      // Object Shorthand
      return { average: avg, min, max, length }
}

export {
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
}


console.log(reverseString("jam"))