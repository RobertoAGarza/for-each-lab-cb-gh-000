function iterativeLog(arr, callback){
  arr.forEach(callback)
}

function callback(element, index, array){
  console.log(`${index}: ${element}`)
}

function iterate(callback){
  var arr = ["cat","dog", "mouse"]
  arr.forEach(callback)
  return arr
}
