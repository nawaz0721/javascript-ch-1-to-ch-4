//!------------Chapter No 1------------!
document.write("<br> Chapter No 1 <br>")
// (Q1)greet your website visitor
alert("Welcome to our website");

//(Q2) Display Message
alert("Error! Please enter a valid password");

//(Q3) Display Message using line break
alert("Welcome to javascript land \n Happy Coding");

//(Q4) Display Message in sequence
alert("Welcome to javascript land....");
alert("Happy Coding!");

//(Q5) console message
console.log("Hello! I can run JS through my web browser's console");

//(Q6)Use Alert
function showAlert(){
    alert("hello world");
}


//!------------Chapter No 2------------!
document.write("<br> Chapter No 2 <br>")
//(Qustion 1)
var UserName="Ahmed Nawaz Gondal";

//(Question 2)
var myName=UserName;

//(Question 3)
var message;
message="Hello World";
alert(message);

//(Question 4)
var student_name= "Ahmed Nawaz Gondal"
var student_age= "22"
var course="Web and Mobile Application Development"
alert(" My name is " + student_name + "\n I am " + student_age + "years old " + "\n I am doing " + course);

//(Question 5)
var pizza = " PIZZA \n PIZZ \n PIZ \n PI \n P";
alert(pizza);

//(Question 6)
var email = "nawaz07210721@gmail.com"
alert("My email adress is " + email);

//(Question 7)
var book;
book = "A smart way to learn Javascript";
alert("I am trying to learn from the book " + book);

//(Question 8)
document.write("Yah! I can write HTML content through JavaScript");

//(Qustion 9)
var style;
style="“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
alert(style);
document.write("</br>" + style + "</br>");

//!------------Chapter No 3------------!
document.write("<br> Chapter No 3")
//(Qustion 1)
var age;
age="22";
alert("I am " + age + " years old");

//(Qustion 2)
var site;
site="10";
alert("You have visited this site" + site + " times")

//(Qustion 3)
var birthYear;
birthYear="2002"
document.write("<br> My birthyear is" + birthYear);

//(Qustion 4)
var visitor_name;
visitor_name=" Ahmed Nawaz Gondal "
var product_title;
product_title=" T-Shirt's ";
var quantity;
quantity=" 10 ";

document.write( "<br>" + visitor_name + "ordered" + quantity + product_title + "on XYZ Clothing Store <br>")

//!------------Chapter No 4------------!
document.write("<br> Chapter No 4 ")
//(Qustion 1)
var first_Name="Ahmed" , middle_Name="Nawaz" , last_Name="Gondal";

//(Qustion 2)

// Legal variable name
var first_Name;
var middle_Name;
var last_Name;
var birthYear;
var age;

// Illegal variable name
// var first@Name;
// var middle#Name;
// var last name;
// var birth+year;
// var <Age>; 

//(Qustion 3)

document.write("<br> <br> a) Rules for naming JS Variables ");
var num="number";
var dollor="$";
var under_score="_";

document.write("<br> b) Variable names can only contain " + num + " , " + dollor + " , " + under_score);
document.write(" For example $my_1stVariable");

var letter="letter"
document.write("<br> c) Variables must begin with a "+ letter + " , " + dollor + " , " + under_score);
document.write(" For example $name, _name or name");

var sen="sensitive";
document.write("<br> d) Variable names are case " + sen );

var key="keywords";
document.write("<br> e) Variable names should not be JS " + key);  