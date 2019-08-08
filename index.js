//Print -10 through 5 using a counter and while loop.
//  var count = -10;
//
//  while (count <= 5) {
//      console.log(count);
//      count++;
//  }



//Write a While loop that counts backwards from 10 to 0
//Log the current count at the end of each iteration EXCEPT if the current count is ```5```

// var count = 11;
//
// while (count > 0){
//     count--;
//     if(count === 5){
//         continue;
//     }
//     console.log(count);
//
//}
//Asks the user ```Enter a word. Enter 'q' to quit.``` Create a while loop that will not quit until they enter 'q'.

 //   HINT: Use ```true``` condition so loop continues forever and ```break``` to exit the loop


 var password = "q";
 var isvalid = true;
 while (isvalid) {
     var entry = prompt("Enter valid letter");
     if (entry === password) {
         break;
     }
 }

//
//


















