//Given a square matrix of size n * n, calculate the absolute difference
//between the sums of its diagonals.
//November 8,2018

function diagonalDifference(matrix){
  var diagonal1=0;
  var diagonal2=0;
  for(var i=0;i<matrix.length;i++){
    diagonal1 += matrix[i][i];
    diagonal2 +=  matrix[i][matrix.length-1-i];
    console.log(diagonal1, diagonal2);
  }
  var difference = diagonal1-diagonal2;
  console.log(difference);
}
diagonalDifference([[1,2,13,5],
                    [4,5,6,5],
                    [7,8,9,5],
                    [1,1,1,1]]);
