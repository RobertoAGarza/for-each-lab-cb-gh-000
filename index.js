function iterativeLog(arr, callback){
  arr.forEach(callback)
}

function callback(element, index, array){
  console.log(`${index}: ${element}`)
}