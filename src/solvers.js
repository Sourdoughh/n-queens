/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = []; //fixme
  var board = new Board({'n': n});
  var boardState = board.rows();

  //boardState[rowIndex][j]
  // board.hasAnyRowConflicts(boardState[rowIndex][j]) || board.hasAnyColConflicts(boardState[rowIndex][j])

    for(var rowIndex = 0; rowIndex < boardState.length; rowIndex++){
      for(var j = 0; j < boardState[rowIndex].length; j++){
        board.togglePiece(rowIndex, j);
        if(board.hasAnyRooksConflicts(boardState[rowIndex][j])){
          board.togglePiece(rowIndex, j);//if above state are true, untoggle.
        }
      }
      // console.log('BOARD.GET(ROWINDEX): ', board.get(rowIndex))
      solution.push(board.get(rowIndex));
    }
  // console.log('Solution: ', solution)
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({n:n});

  var findSolution = function(row){
    if(row === n){
      solutionCount++;
      return;
    }

    for(var i = 0; i < n; i++){
      board.togglePiece(row, i);
      if(!board.hasAnyRooksConflicts()){
        findSolution(row+1);
      }
      board.togglePiece(row, i);
    }
  };

  findSolution(0);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = []; //fixme
  var count = 0;
  var board = new Board({'n': n});
  var boardState = board.rows();
  console.log('BOARD: ', board.rows())

  var findSolution = function(col){
    console.log('COL: ', col)
    for(var rowIndex = 0; rowIndex < boardState.length; rowIndex++){
      for(var j = col; j < boardState[rowIndex].length; j++){
        board.togglePiece(rowIndex, j);
        if(board.hasAnyQueensConflicts()){
          board.togglePiece(rowIndex, j);//if above state are true, untoggle.
        }
      }
      solution.push(board.get(rowIndex));
      count++;
    }
  }

  findSolution(0);

  if(true){
    var num = 0;
    num++;
    console.log('NUM: ', num)
    solution = [];
    findSolution(num);
  }

  // console.log('Solution: ', solution)

  // console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({n:n});

  if(n < 3){
    return n;
  }

  var findSolution = function(row){
    if(row === n){
      solutionCount++;
      return;
    }

    for(var i = 0; i < n; i++){
      board.togglePiece(row, i);
      if(!board.hasAnyQueensConflicts()){
        findSolution(row+1);
      }
      board.togglePiece(row, i);
    }
  };

  findSolution(0);
  return solutionCount;
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
