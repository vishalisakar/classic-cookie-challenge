//cookies data
var cookie = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0]
];

//test cookie data 1
/*var cookie = [
  [1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1],
  [1, 0, 0, 1, 0],
  [0, 1, 1, 0, 1],
  [0, 0, 0, 0, 1]
];
*/

//test cookie data 2
 /*var cookie = [   
   [1, 1, 1, 1, 1], 
   [0, 1, 0, 1, 0],
   [1, 0, 1, 0, 1],
   [0, 1, 1, 0, 0],
   [1, 1, 1, 1, 1]
 ];
*/

//getting the length of cookies rows array.
const lenRow = cookie.length;

//getting the length of cookies colums array.
const lenCol = cookie[0].length;

/*-------------------------------------------------------- 
        checkCoockie function
-------------------------------------------------------- */
/*counting the chocolate chips in the give cookie
passing the value of array and arry row and column lengths respectively.
*/

function checkCoockie(cookie, lenRow, lenCol) { 
  
  //declaring the cout cookie variable for counting the lines of chocolate chip.
  var cookiesCount = 0;

  //loop get stats.
  //Row loop.
  for (var r = 0; r < lenRow; r++) {
    //Column loop
    for (var c = 0; c < lenCol; c++) {
      //check the element is chocolate chip
      if (cookie[r][c] == 1) {
        //increment the chocolate chip count when it found the chocolate chip.
        cookiesCount++;
        /* 
        now it checks for all the four sides of the current element,
        has chocolate chip, by calling the below function.
        */ 
        changePosition(cookie, lenRow, lenCol, r, c);
      }
    }
  }
  //print the number of chocolate chip lines.
  console.log("Total number of chocolate chip lines = " +cookiesCount);
}

/*-------------------------------------------------------- 
        changePosition function
-------------------------------------------------------- */
/*
this is a recursive funtion.
this function visits al the four sides, to see if has a choclate chip.
if it is a chocolate chip it will initialize to non chocolate chip.
this is done because we don't visite this element again. this is done 
because it is treated as a same line in the coockie path.
*/

function changePosition(cookie, maxCookieRowLen, maxcCookieColLen, rowIndex, colIndex) {
/* this condition check for the edges of the matrix which is 
out of box and it returns back to the changeposition function.
*/
  if (rowIndex < 0 || rowIndex >= maxCookieRowLen || colIndex < 0 || colIndex >= maxcCookieColLen || cookie[rowIndex][colIndex] == 0) {
    return ;
  }
  /* 
  if the neighbour is a chocolate chip it converted to non choclate chip 
  to avoid the again visiting the element because it is in same line.
  */ 
  cookie[rowIndex][colIndex] = 0;
  //down
  changePosition(cookie,maxCookieRowLen, maxcCookieColLen, rowIndex + 1, colIndex);
  //up
  changePosition(cookie,maxCookieRowLen, maxcCookieColLen, rowIndex - 1, colIndex);
  //left
  changePosition(cookie,maxCookieRowLen, maxcCookieColLen, rowIndex, colIndex - 1);
  //right
  changePosition(cookie,maxCookieRowLen, maxcCookieColLen, rowIndex, colIndex + 1);
}

checkCoockie(cookie, lenRow, lenCol);

// console.log(cookie);