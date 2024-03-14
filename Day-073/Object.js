// DO NOT USE ARGUMENTS FOR INPUTS
// Object created as per following code, You have to just print the subject name having highest marks.
/*
var Stud = new Object();
Stud.Maths = parseInt(readLine().trim());
Stud.Physics = parseInt(readLine().trim());
Stud.Chemistry = parseInt(readLine().trim());
*/
// YOUR CODE GOES HERE
if(Stud.Maths>Stud.Physics){
    console.log("Maths");
}else if(Stud.Physics>Stud.Chemistry){
    console.log("Physics");
}else {
     console.log("Chemistry");
}
