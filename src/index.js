
// You should implement your task here.

module.exports = function towelSort (matrix) {

  arr = [];
  if(!matrix) return arr;
  for(let i=0; i<matrix.length; i++){
    if(i%2){
      matrix[i].reverse();
    }
    arr.push(...matrix[i]);
  }
  return arr;
}
