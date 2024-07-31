
let arr2 = [1, "string", null, undefined, 2, 5, {}, []];

function isNumber(...arr) {
  let onlyNumbers = arr.filter((num) => typeof num === "number");
  return onlyNumbers;
}


console.log(isNumber(...arr2));



const isNumber2  = (...arr) => arr.filter((num) => typeof num === "number") 
  
  console.log(isNumber(...arr2));


  function onlyNumbers(...randomArray) {
    let newArray = []

    for (let i = 0; i < randomArray.length; i++){
        if( typeof randomArray[i] === 'number' ) {
newArray.push(randomArray[i])
        }
    }
    return newArray
  }

  console.log(onlyNumbers(...arr2))