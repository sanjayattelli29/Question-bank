// Sample questions to populate the database
// You can run this file with: node scripts/populate-questions.js
// Or use the admin panel to add these manually

const sampleQuestions = [
  {
    title: "Hello World in Python",
    description: "Write a simple Python program that prints 'Hello, World!' to the console.",
    code: `print("Hello, World!")`,
    expectedOutput: "Hello, World!",
    points: 5
  },
  {
    title: "Basic Variables and String Concatenation",
    description: "Create variables for a person's first and last name, then print a greeting message.",
    code: `first_name = "John"
last_name = "Doe"
print("Hello, " + first_name + " " + last_name + "!")`,
    expectedOutput: "Hello, John Doe!",
    points: 10
  },
  {
    title: "Simple Mathematical Operations",
    description: "Perform basic arithmetic operations and display the results.",
    code: `a = 15
b = 4

print(f"Addition: {a} + {b} = {a + b}")
print(f"Subtraction: {a} - {b} = {a - b}")
print(f"Multiplication: {a} * {b} = {a * b}")
print(f"Division: {a} / {b} = {a / b}")`,
    expectedOutput: `Addition: 15 + 4 = 19
Subtraction: 15 - 4 = 11
Multiplication: 15 * 4 = 60
Division: 15 / 4 = 3.75`,
    points: 15
  },
  {
    title: "Working with Lists",
    description: "Create a list of fruits and perform various operations on it.",
    code: `fruits = ["apple", "banana", "orange", "grape"]

print("Original list:", fruits)
print("First fruit:", fruits[0])
print("Last fruit:", fruits[-1])

fruits.append("strawberry")
print("After adding strawberry:", fruits)

print("Number of fruits:", len(fruits))`,
    expectedOutput: `Original list: ['apple', 'banana', 'orange', 'grape']
First fruit: apple
Last fruit: grape
After adding strawberry: ['apple', 'banana', 'orange', 'grape', 'strawberry']
Number of fruits: 5`,
    points: 20
  },
  {
    title: "For Loop with Range",
    description: "Use a for loop to print numbers from 1 to 5 and their squares.",
    code: `for i in range(1, 6):
    square = i ** 2
    print(f"{i} squared is {square}")`,
    expectedOutput: `1 squared is 1
2 squared is 4
3 squared is 9
4 squared is 16
5 squared is 25`,
    points: 15
  },
  {
    title: "Conditional Statements",
    description: "Write a program to check if a number is positive, negative, or zero.",
    code: `number = -7

if number > 0:
    print(f"{number} is positive")
elif number < 0:
    print(f"{number} is negative")
else:
    print(f"{number} is zero")`,
    expectedOutput: "-7 is negative",
    points: 15
  },
  {
    title: "Simple Function Definition",
    description: "Define a function that calculates the area of a rectangle.",
    code: `def calculate_area(length, width):
    area = length * width
    return area

# Test the function
length = 8
width = 5
result = calculate_area(length, width)
print(f"The area of a {length}x{width} rectangle is {result} square units")`,
    expectedOutput: "The area of a 8x5 rectangle is 40 square units",
    points: 20
  },
  {
    title: "Dictionary Operations",
    description: "Create a dictionary to store student information and access its values.",
    code: `student = {
    "name": "Alice Johnson",
    "age": 20,
    "grade": "A",
    "subjects": ["Math", "Physics", "Chemistry"]
}

print(f"Student Name: {student['name']}")
print(f"Age: {student['age']}")
print(f"Grade: {student['grade']}")
print(f"Subjects: {', '.join(student['subjects'])}")`,
    expectedOutput: `Student Name: Alice Johnson
Age: 20
Grade: A
Subjects: Math, Physics, Chemistry`,
    points: 25
  }
];

console.log("Sample questions ready for database population:");
console.log(JSON.stringify(sampleQuestions, null, 2));
