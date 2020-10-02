
// You should implement your task here.

module.exports = function towelSort (matrix) {
	if (matrix === undefined || matrix.length === 0) {
		return []
	}else{
		for(let i = 0; i < matrix.length; i++){
			if (i % 2 === 0) {
				matrix[i].sort((a,b) => a - b)
  			}else{
  				matrix[i].sort((a,b) => b - a)
  			}
		}
	return matrix.reduce((acc, val) => acc.concat(val), [])
	}
}
