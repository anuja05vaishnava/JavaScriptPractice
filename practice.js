/*Count Repeated letter*/

let obj={}
const repeats=[];
const inputString='javascript'

for( let x = 0, length = str.length; x < length; x++) {
    var l = str.inputString(x)
    obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);
}

console.log(obj)


/*Reverse letter*/

constReverseString = inputString.split('').reverse().join('');

/*Check Anagram*/

const str1 = 'Mary';
const str2 = 'Army'
constStr1Sorted = str1.split('').sort().join('');
constStr2Sorted = str1.split('').sort().join('');

const validate = constStr1Sorted === constStr2Sorted ? 'Yes':'No';

/*Check vovels and consonents*/

const InputString = 'Hello World';
for (let count = 0; count <= userData.legth; count++){
if((InputString.charAt(count).match(/[aeiou]/))){       
    a++;
    e++;
    i++;
    o++;
    u++;
} else if((InputString.charAt(count).match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/))){
    consonants++;
}
}

console.log(consonants)

/* Dynamic Forms */

<h1>Sample layout</h1>
  <div class="wrapper">
    <div id="survey_options">
      <input type="text" name="Name" class="options" size="50" placeholder="Name">
      <input type="text" name="Email" class="options" size="50" placeholder="Email">
      <input type="text" name="feild" class="options" size="50" placeholder="Another Field">
    </div>
    <div class="controls">
      <a href="#" id="add_more_fields"><i class="fa fa-plus"></i>Add More</a>
      <a href="#" id="remove_fields"><i class="fa fa-plus"></i>Remove Field</a>
    </div>
  </div>

body {
  background-color: #f0f5ff;
  font-family: 'Jost',sans-serif;
  color: #fff;
}

.wrapper {
  width: 400px;
  margin: 40px auto;
  padding: 10px;
  border-radius: 5px;
  background: white;
  box-shadow: 0px 10px 40px 0px rgba(47,47,47,.1);
}

input[type="text"]{
  padding: 10px;
  margin: 10px auto;
  display: block;
  border-radius: 5px;
  border: 1px solid lightgrey;
  background: none;
  width: 274px;
  color: black;
}

input[type="text"]:focus {
  outline: none;
}

.controls {
  width: 294px;
  margin: 15px auto;
}

#remove_fields {
  float: right;
}
.controls a i.fa-minus {
  margin-right: 5px;
}

a {
  color: black;
  text-decoration: none;
}

h1 {
  text-align: center;
  font-size: 48px;
  color: #232c3d;
}


var options = document.getElementById('options');
var add_more_fields = document.getElementById('add_more_fields');
var remove_fields = document.getElementById('remove_fields');

add_more_fields.onclick = function(){
  var newField = document.createElement('input');
  newField.setAttribute('type','text');
  newField.setAttribute('name','Name');
  newField.setAttribute('class','options');
  newField.setAttribute('siz',50);
  newField.setAttribute('placeholder','field');
  survey_options.appendChild(newField);
}

remove_fields.onclick = function(){
  var input_tags = survey_options.getElementsByTagName('input');
  if(input_tags.length > 2) {
    survey_options.removeChild(input_tags[(input_tags.length) - 1]);
  }
}


  document.getElementById('print-values-btn').onclick = function() {
      let allTextBoxes = document.getElementsByName('options');  
      for(let i of allTextBoxes){
          console.log(i.value) //here you will be able to see all values in the console
      }
  }
