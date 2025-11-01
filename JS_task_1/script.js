////_________task_1______________________////
// var name = "sameen"
// var age = "28"
// var skills = "html , css , javascript"
// var bioData = "my Name is : " + " " + name + " \n" + "I Am  :" + age + " Years old " + " \n " + "I have strong Skills in : " + " " + skills;

// console.log(bioData);



////_________task_2______________________////

// function sum (a,b){
//    return a + b; 
    
// }
// console.log(sum(30 , 10));

////_________task_3______________________////

var sub1 = 59
var sub2 = 80
var sub3 = 70

function calculateTotal(sub1,sub2,sub3){
    return sub1 + sub2 +  sub3

}
function calculateAverage(sub1,sub2,sub3){
    return (sub1 + sub2 +  sub3)/3

}
console.log("Math : " + sub1);
console.log("English : " + sub2);
console.log("ISl : " + sub1);

var totalMarks = calculateTotal(sub1,sub2,sub3)
var averageMarks = calculateAverage(sub1,sub2,sub3)
console.log("Total marks of Three Subjects are :" + totalMarks);
console.log("Average of marks :" + averageMarks.toFixed(2));

