class Rosetta {

    constructor() {
        this.romans = ["I", "V", "X", "L", "C", "D", "M"];
        this.arabs = [1, 5, 10, 50, 100, 500, 1000];
    }

    toArab (string) {

        if (!this.romanChecker(string)) {
            return "please introduce a valid roman number";
        }
    
        let numbersArray = [];
    
        for(let i=0; i<string.length; i++){
    
            numbersArray.push(this.arabs[this.romans.indexOf(string[i])]);
        }
    
        let convertedNumber = 0; 
    
        for (let i = numbersArray.length-1; i >= 0; i--) {
         
          if(numbersArray[i+1] === "undefined") {
              convertedNumber += numbersArray[i];
          } else if (numbersArray[i+1] > numbersArray[i]) {
              convertedNumber -= numbersArray[i]
          } else {
              convertedNumber += numbersArray[i]
          }
    
        }
     return convertedNumber;
    }
    
    
    romanChecker (string) {
    
        let str = string.toUpperCase();
        let numbersArray = [];
    
        for(let i=0; i<string.length; i++){
      
            numbersArray.push(this.arabs[this.romans.indexOf(string[i])]);
        }
    
        let checker = true;
            //checking that  V, L and D do not repeat nor precede a higher number) && I, X and C behave properly when substracting.
        for (let i = 0; i < numbersArray.length -1; i++) {
            
            if ((numbersArray[i] === 5 || numbersArray[i] === 50 || numbersArray[i] === 500) && numbersArray[i] <= numbersArray[i+1]) {
    
                checker = false;
                return checker;
    
            } else if (numbersArray[i] < numbersArray[i+1]) {
    
                (numbersArray[i+1] > this.arabs[this.romans.indexOf(str[i])+2]) ? checker = false : checker = true;
    
            }
        }
            //checking that I, X, C and M do not repeat more than thrice.
        for (let i = 0; i < numbersArray.length; i++) {
    
            if (str[i] === "I" && str[i+1] === "I" && str[i+2] === "I" && str[i+3] === "I") {
                checker = false;
                return checker;
            } else if(str[i] === "X" && str[i+1] === "X" && str[i+2] === "X" && str[i+3] === "X") {
                checker = false;
                return checker;
            } else if(str[i] === "C" && str[i+1] === "C" && str[i+2] === "C" && str[i+3] === "C") {
                checker = false;
                return checker;
            } else if(str[i] === "M" && str[i+1] === "M" && str[i+2] === "M" && str[i+3] === "M") {
                checker = false;
                return checker;
            }
        }
        return checker;
    }
    
    
    toRoman (num) {
    
        if (num > 3999 || num < 1) {
    
            console.log("please introduce a number between 1 and 3999")
        }; 
    
           let M = num / 1000;
           let C = num / 100;
           let X = num / 10;
           let I = num;
        
           let romanized = [];
        
            if(M > 0) {
                for(let i = 0; i< Math.floor(M); i++){
                    romanized.push("M")
                }
            }
            if( C >= 1) { 
                let roundedC = C - Math.floor(M)*10;
                if(roundedC >= 9) {
                    romanized.push("CM");
                } else if(roundedC >= 8) {
                    romanized.push("DCCC");
                } else if(roundedC >= 7) {
                    romanized.push("DCC");
                } else if (roundedC >= 6) {
                    romanized.push("DC");
                } else if (roundedC >= 5) {
                    romanized.push("D");
                } else if (roundedC >= 4) {
                    romanized.push("CD");
                } else if (roundedC >= 3) {
                    romanized.push("CCC");
                } else if (roundedC >= 2) {
                    romanized.push("CC");
                } else if (roundedC >= 1) {
                    romanized.push("C");
                }
            }
            
            if( X >= 1) { 
               let roundedX = X - Math.floor(C)*10;
                if(roundedX >= 9) {
                    romanized.push("XC");
                } else if(roundedX >= 8) {
                    romanized.push("LXXX");
                } else if(roundedX >= 7) {
                    romanized.push("LXX");
                } else if (roundedX >= 6) {
                    romanized.push("LX");
                } else if (roundedX >= 5) {
                    romanized.push("L");
                } else if (roundedX >= 4) {
                    romanized.push("XL");
                } else if (roundedX >= 3) {
                    romanized.push("XXX");
                } else if (roundedX >= 2) {
                    romanized.push("XX");
                } else if (roundedX >= 1) {
                    romanized.push("X");
                }
            }
        
            if( I >= 1) { 
               let roundedI = I - Math.floor(X)*10;
                if(roundedI >= 9) {
                    romanized.push("IX");
                } else if(roundedI >= 8) {
                    romanized.push("VIII");
                } else if(roundedI >= 7) {
                    romanized.push("VII");
                } else if (roundedI >= 6) {
                    romanized.push("VI");
                } else if (roundedI >= 5) {
                    romanized.push("V");
                } else if (roundedI >= 4) {
                    romanized.push("IV");
                } else if (roundedI >= 3) {
                    romanized.push("III");
                } else if (roundedI >= 2) {
                    romanized.push("II");
                } else if (roundedI >= 1) {
                    romanized.push("I");
                }
            }
            let response = romanized.join("");
            return response;
        }  

}

const numbers = new Rosetta;

console.log(numbers.toArab("XVI"));
console.log(numbers.romanChecker("LLL"));
console.log(numbers.toRoman(125));