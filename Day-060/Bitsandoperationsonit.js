// DO NOT USE ARGUMENTS FOR INPUTS
// Input num valus is in variable *num*
var num = parseInt(readLine().trim());
// YOUR CODE GOES HERE
console.log(~num)

//BITWISE AND (&): When a bitwise AND is performed on a pair of bits, it returns 1 if both bits are 1.

//Example: 
 var x = 5; // 101
 var y = 1; // 1
 var z = x&y; 
//So here, 1 will be stored in z
//BITWISE OR (|): When a bitwise OR is performed on a pair of bits, it returns 1 if atleast one of the bits is 1.

//Example: 
 var x = 5; // 101
 var y = 1; // 1
 var z = x|y; 
//So here, 5 will be stored in z
//BITWISE XOR (^): When a bitwise XOR is performed on a pair of bits, it returns 1 if the bits are different.

//Example: 
 var x = 5; // 101
 var y = 1; // 1
 var z = x^y; 
//So here, 4 will be stored in z
//BITWISE NOT(~): Its is a unary operator i.e. accepts single operands. It flips the bits i.e 0 becomes 1 and 1 becomes 0.

//NOTE: JavaScript binary numbers are stored in two’s complement format. This means that a negative number is the bitwise NOT of the number plus 1.

//Example: 
 var x = 5; // 101
 var z = ~x; 
//So here, -6 will be stored in z
//(Zero Fill) Bitwise Left Shift (<<): One or more zero bits are pushed in from the right, and the leftmost bits fall off.

//Example: 
 var x = 5; // 00000000000000000000000000000101
 var z = x<<1; // 00000000000000000000000000001010 
//So here, 10 will be stored in z
//(Sign Preserving) Bitwise Right Shift (>>): Copies of the leftmost bit are pushed in from the left, and the rightmost bits fall off.

//Example: 
 var x = -5; // 11111111111111111111111111111011
 var z = x>>1; // 11111111111111111111111111111101 
//So here, -3 will be stored in z
//(Zero Fill) Right Shift (>>): One or more zero bits are pushed in from the left, and the rightmost bits fall off.

//Example: 
 var x = 5; // 00000000000000000000000000000101
 var z = x>>1; // 00000000000000000000000000000010
//So here, 2 will be stored in z 
