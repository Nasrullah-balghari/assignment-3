//Question-1
var a = +prompt("Enter the number");
++a;
a++;
--a;
a--;
document.write("Result:"+"<br>");
document.write("The value of a is "+a +"<br>");
document.write("---------------------------------")
document.write("<br>");
document.write("The value of ++a is: "+" "+ ++a);
document.write("<br>");
document.write("The value of a is: "+a);
document.write("<br>");
document.write("The value of a++ is: "+ a++);
document.write("<br>");
document.write("The value of a is: "+a);
document.write("<br>");
document.write("The value of --a is: "+ --a);
document.write("<br>");
document.write("The value of a is: "+a);
document.write("<br>");
document.write("The value of a-- is: "+ a--);
document.write("<br>");
document.write("The value of a is: "+ a);

//Question-2
var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
document.write("a is "+a);
document.write("<br>");
document.write("b is "+b)
document.write("<br>");
document.write("result is "+result);

//Question-3
var name = prompt("Please enter your name","name");
document.write("Welcome to our store "+name)

//Question-4,5
var num = + prompt("Enter number to get table!")
document.write("Table of the number you have entered!")
document.write("<br>")
document.write(num+" x 1"+" = " +num*1);
document.write("<br>")
document.write(num+" x 2"+" = "+num*2);
document.write("<br>")
document.write(num+" x 3"+" = "+num*3);
document.write("<br>")
document.write(num+" x 4"+" = "+num*4);
document.write("<br>")
document.write(num+" x 5"+" = "+num*5);
document.write("<br>")
document.write(num+" x 6"+" = "+num*6);
document.write("<br>")
document.write(num+" x 7"+" = "+num*7);
document.write("<br>")
document.write(num+" x 8"+" = "+num*8);
document.write("<br>")
document.write(num+" x 9"+" = "+num*9);
document.write("<br>")
document.write(num+" x 10"+" = "+num*10);
document.write("<br>")

//Question-6
var sub1 = prompt("Enter your first subject name");
var sub2 = prompt("Enter your second subject name");
var sub3 = prompt("Enter your third subject name");
var totalMark = 100;
var obtMark1 = +prompt("Enter obtain mark for first subject");
var obtMark2 = +prompt("Enter obtain mark for first subject");
var obtMark3 = +prompt("Enter obtain mark for first subject");
var perOfSub1 = (obtMark1/totalMark) * 100;
var perOfSub2 = (obtMark2/totalMark) * 100;
var perOfSub3 = (obtMark3/totalMark) * 100;
var resultTotalMark = totalMark * 3;
var totalObtMark = obtMark1 + obtMark2 + obtMark3;
var per = (totalObtMark/resultTotalMark) * 100;
document.write(`<table>
<tr>
<th>Subject</th>
<th>Total Marks</th>
<th>Obtained Marks</th>
<th>Percentage</th>
</tr>
<tr>
<td>${sub1}</td>
<td>${totalMark}</td>
<td>${obtMark1}</td>
<td>${perOfSub1}%</td>
</tr>
<tr>
<td>${sub2}</td>
<td>${totalMark}</td>
<td>${obtMark2}</td>
<td>${perOfSub2}%</td>
</tr>
<tr>
<td>${sub3}</td>
<td>${totalMark}</td>
<td>${obtMark3}</td>
<td>${perOfSub3}%</td>
</tr>
<tr>
<td></td>
<td>${resultTotalMark}</td>
<td>${totalObtMark}</td>
<td>${per}%</td>
</tr>
</table`);





