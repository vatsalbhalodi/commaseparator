const getCommaSeparatedLink = () => {
    let textArea = document.getElementById("textArea");
    let string = textArea.value;
    if(string == ""){alert("Please enter QIDs");}else{

  let array = string.split("\n");
  array = array.filter(function(str) {
    return /\S/.test(str);
});
let duplicate = [];
array1 = array.map(el => el.trim());
duplicate = findDuplicates(array1);
array = getUnique(array1);
    
    let commaseparetedString = array.reduce((item, value) => item+","+value);

    let Count = document.getElementById("Count")
    Count.innerHTML = array.length;
    let Count1 = document.getElementById("duplicateqid")
    Count1.innerHTML = duplicate.length;
    let result1 = document.getElementById("Comma");
    result1.innerHTML = commaseparetedString; 
    let duplicate1 = document.getElementById("duplicate");
    duplicate1.innerHTML = duplicate; 
    let result = document.getElementById("result");
    result.innerHTML = "https://lms.testbook.com/manage/questions/"+ commaseparetedString;
    
  return commaseparetedString;
}
}

function getUnique(array){
        var uniqueArray = [];
        var uniqueArray1 = [];
        var uniqueArray2 = [];
        // Loop through array values
        for(i=0; i < array.length; i++){
            if(uniqueArray.indexOf(array[i]) === -1) {
                uniqueArray.push(array[i].replace(/[^a-zA-Z0-9]/g, ""));
            }
        }
        uniqueArray.forEach((i) => { let z = i.match(/.{24}/g); uniqueArray1.push(...z);})
        for(i=0; i < uniqueArray1.length; i++){
            if(uniqueArray2.indexOf(uniqueArray1[i]) === -1) {
                uniqueArray2.push(uniqueArray1[i]);
            }
        }



        return uniqueArray2;
    }

const findDuplicates = (array) => {
  let vatsal = [];
  for(i=0; i < array.length; i++){
                vatsal.push(array[i].replace(/[^a-zA-Z0-9]/g, ""));
            
        }
  //let vatsal = array.replace(/[^a-zA-Z0-9 ]/g, "");
  let vatsal1 = [];
  vatsal.forEach((i) => { let z = i.match(/.{24}/g); vatsal1.push(...z);})
  let sorted_arr = vatsal1.slice().sort(); // You can define the comparing function here. 
  // JS by default uses a crappy string compare.
  // (we use slice to clone the array so the
  // original array won't be modified)
  let results = [];
  for (let i = 0; i < sorted_arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
      results.push(sorted_arr[i].replace(/[^a-zA-Z0-9 ]/g, ""));
    }
  }
  return results;
}

function copy() {
  let textarea = document.getElementById("result");
  if(textarea.value == ""){alert("No LMS Link");}else{
  textarea.select();
  document.execCommand("copy");
}}

function copyQids() {
  let textarea = document.getElementById("Comma");
  if(textarea.value == ""){alert("There is no comma separated QIDs");}else{
  textarea.select();
  document.execCommand("copy");
}}

function myFunction(){
  alert("This software is exclusively for Testbook.com. For any suggestions/queries write to vatsal.bhalodi@testbook.com.")
}

function openLink(){
  let texturl = document.getElementById("result").value;
  if(texturl == ""){alert("Sorry, No Link for Open. So please convert Qids Into Link");}else{
  window.open(texturl,'_Blank');
}}

