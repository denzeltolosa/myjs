let button = document.getElementById('btn');

button.addEventListener('click', () => {
const number = parseInt(document.getElementById('number').value);
const result = document.getElementById('output');
let number_status=false

if(number === '' || isNaN(number) || (number <= 0)){
    document.getElementById('number_error').innerHTML = 'Please input a number';
}else{
    document.getElementById('number_error').innerHTML = '';
    number_status=true;
}

if(number%2==0){
      document.getElementById("output").innerHTML = "Even Number";
}else{
      document.getElementById("output").innerHTML = "Odd Number";
}
if(number == ''|| isNaN(number) || (number <= 0)){
    document.getElementById("output").innerHTML = "Error!";
}

      
});

function addBy()
{
        var num1 = parseInt(document.getElementById("firstNumber").value);
        var num2 = parseInt(document.getElementById("secondNumber").value);
        document.getElementById("result").innerHTML = num1 + num2;
}
function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function subtractBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 - num2;
}

function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 / num2;
}

function palin()
{
var a,no,b,temp=0;

no=Number(document.getElementById("no_input").value);

b=no;
while(no>0)
{
a=no%10;
no=parseInt(no/10);
temp=temp*10+a;
}
document.getElementById("results").innerHTML = temp;
}

String.prototype.reverse=function(){
        return this.split("").reverse().join("");
    }
    function reverse(){
    document.getElementById('outcome').innerHTML = document.getElementById('string').value.reverse();
    }


function myFunction() {
        var txt;
        var person = prompt("Please enter your name:");
        if (person == null || person == "") {
          txt = "User cancelled the prompt.";
        } else {
          txt = "Hello " + person + "! How are you today?";
        }
        document.getElementById("demo").innerHTML = txt;
      }

      function convertMinutestoSec(){
        var m = document.getElementById('minute').value;
        var sec = (m * 60);
        document.getElementById("convert").innerHTML = sec;
      }

// Letters for hexadecimal conversion
const letters = ["A", "B", "C", "D", "E", "F"];

function convert() {
  let convType = document.getElementById("options").value;
  let initValue = document.getElementById("initVal").value;

  // The correct conversion is decided based on the dropdown selection
  switch (convType) {
    case "BINDEC":
      if (isBin(initValue) == true) {
        var res = convertBinaryDecimal(initValue);
      } else {
        alert("You're wrong.");
      }
      break;
    case "DECBIN":
      if (isDec(initValue) == true) {
        var res = convertDecimalBinary(initValue);
      } else {
        alert("You're wrong.");
      }
      break;
    case "DECHEX":
      if (isDec(initValue) == true) {
        var bin = convertDecimalBinary(initValue);
        var res = convertBinaryHexadecimal(bin);
      } else {
        alert("You're wrong.");
      }
      break;
    case "BINHEX":
      if (isBin(initValue) == true) {
        var res = convertBinaryHexadecimal(initValue);
      } else {
        alert("You're wrong.");
      }
      break;
    case "HEXDEC":
      if (isHex(initValue) == true) {
        var res = convertHexadecimalDecimal(initValue);
      } else {
        alert("You're wrong.");
      }
      break;
    case "HEXBIN":
      if (isHex(initValue) == true) {
        var dec = convertHexadecimalDecimal(initValue);
        var res = convertDecimalBinary(dec);
      } else {
        alert("You're wrong.");
      }
      break;
  }

  // Simple output statement
  document.getElementById("out").innerHTML = res;
}

// This function converts between bin and dec
function convertBinaryDecimal(val) {
  let revArr = val.split("").reverse();
  let total = 0;
  for (i = 0; i < revArr.length; i++) {
    total = total + revArr[i] * Math.pow(2, i);
  }
  return total;
}

// This function converts between dec and bin
function convertDecimalBinary(val) {
  let rems = [];
  do {
    rems.push(val % 2);
    val = Math.floor(val / 2);
  } while (val != 0);
  return rems.reverse().join("");
}

// This function converts between binary and hexadecimal
function convertBinaryHexadecimal(val) {
  val = val.split("");
  val = val.reverse();
  while (val.length % 4 != 0) {
    val.push("0");
  }
  val = val.reverse();
  let arr = [];
  let count = 0;
  for (i = 0; i < Math.floor(val.length / 4); i++) {
    arr.push([]);
    for (a = 0; a < 4; a++) {
      arr[i][a] = val[i * 4 + a];
    }
  }
  let finalArr = [];
  for (i = 0; i < arr.length; i++) {
    for (a = 0; a < 4; a++) {
      count += arr[i][a] * Math.pow(2, 3 - a);
    }
    finalArr[i] = count;
    count = 0;
  }
  for (i = 0; i < finalArr.length; i++) {
    if (finalArr[i] > 9) {
      finalArr[i] = letters[finalArr[i] - 10];
    }
  }
  return finalArr.join("");
}

// This function converts between hexadecmial and decimal
function convertHexadecimalDecimal(val) {
  val = val.split("");

  for (i = 0; i < val.length; i++) {
    if (val[i].search(/[a-f]/i) != -1) {
      let index = letters.indexOf(val[i]);
      index = index + 10;
      val[i] = index;
    }
  }
  console.log(val);

  let count = 0;
  let total = 0;
  for (i = val.length - 1; i > -1; i--) {
    total += val[i] * Math.pow(16, count);
    count++;
  }
  return total;
}

function isBin(string) {
  if (string.search(/[2-9]/) != -1 || string.search(/[a-z]/i) != -1) {
    return false;
  } else {
    return true;
  }
}

function isDec(string) {
  if (string.search(/[a-z]/i) != -1) {
    return false;
  } else {
    return true;
  }
}

function isHex(string) {
  if (string.search(/[g-z]/i) != -1) {
    return false;
  } else {
    return true;
  }
}

function convertEmoji(){
        var string = document.getElementById('emoji').value;
        if (string == "smile")   {
                var res = string.replace("smile","😊")
            }
            if (string == "sad")   {
                var res = string.replace("sad","😔")
            }
            if (string == "angry")   {
                var res = string.replace("angry","😠")
            }
            if (string == "sleepy")   {
                var res = string.replace("sleepy","😴")
            }
            if (string == "sleepy")   {
                var res = string.replace("sleepy","😪")
            }
            if (string == "fear")   {
                var res = string.replace("fear","😨")
            }
            if (string == "tired")   {
                var res = string.replace("tired","😫")
            }
            document.getElementById("res").innerHTML = res;
}

function DoubleString(){

        var str = document.getElementById("str").value;
        var repeatNTimes = (str, n) => {
                let outcome = '';
                for(let i = 0; i < str.length; i++){
                   // using the String.prototype.repeat() function
                   outcome += str[i].repeat(n);

                };
                return outcome;

             }
             
             document.getElementById("double").innerHTML = (repeatNTimes(str, 2));
            
}

