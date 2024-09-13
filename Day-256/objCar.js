// Define an object representing a car
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "blue",
    // Method to display car details
    displayDetails: function() {
        console.log(`Car: ${this.make} ${this.model}, Year: ${this.year}, Color: ${this.color}`);
    },
    // Method to change the color of the car
    changeColor: function(newColor) {
        this.color = newColor;
        console.log(`The car color has been changed to ${this.color}`);
    }
};

// Accessing object properties
console.log(car.make); // Output: Toyota
console.log(car.model); // Output: Corolla

// Calling object methods
car.displayDetails(); // Output: Car: Toyota Corolla, Year: 2020, Color: blue
car.changeColor("red"); // Output: The car color has been changed to red
car.displayDetails(); // Output: Car: Toyota Corolla, Year: 2020, Color: red
