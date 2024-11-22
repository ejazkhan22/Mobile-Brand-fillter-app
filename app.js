//todo/......Parsentage Calculator.........>//
//Declaring variables using const and let
const totalSubjects =5
 // Subject marks (using let for subjects that can be changed)
let sub1 = +prompt("Enter eng marks");
let sub2 = +prompt("Enter urdu marks");
let sub3 = +prompt("Enter sindhi marks");
let sub4 = +prompt("Enter math marks");
let sub5 = +prompt("Enter phy marks");

  // Calculating total marks
  const calcuLatingMarks =sub1+sub2+sub3+sub4+sub5;
   // Calculating percentage
   const percentage=  (calcuLatingMarks  / (totalSubjects* 100)) * 100; 
   // Determining grade based on percentage
   let grade;
   let conditiion=
         (percentage >= 90) ?grade= "A+" :
        (percentage >= 80) ?grade="A" :
        (percentage >= 70) ? grade="B" :
        (percentage >= 60) ?grade ="C" :
        (percentage >= 50) ?grade ="D":"fail"
 // Displaying results using template literals and document.write
           document.write("<h2>Student Mark Sheet</h2>");
           document.write(`<p><strong>Total Marks:</strong> ${calcuLatingMarks} / ${totalSubjects * 100}</p>`);
           document.write(`<p><strong>Percentage:</strong> ${percentage}%</p>`);
           document.write(`<p><strong>Grade:</strong> ${grade}</p>`);