// Sample questions for bulk import
// Copy this file and modify with your own questions

const questions = [
  {
    title: "Find the Smallest Number in Array",
    description: "Write a Python program to find the smallest number in a given array of integers. The program should iterate through the array and keep track of the minimum value found.",
    code: `arr = [5, 2, 8, 1, 9, -4, 0]
smallest = arr[0]

for num in arr:
    if num < smallest:
        smallest = num

print("Smallest number in the array:", smallest)`,
    expectedOutput: "Smallest number in the array: -4",
    points: 10
  },
  
  {
    title: "Calculate Sum of Even Numbers",
    description: "Create a Python program that calculates the sum of all even numbers in a given list. The program should iterate through the list and add only the even numbers to a running total.",
    code: `numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
sum_even = 0

for num in numbers:
    if num % 2 == 0:
        sum_even += num

print("Sum of even numbers:", sum_even)`,
    expectedOutput: "Sum of even numbers: 30",
    points: 15
  },
  
  {
    title: "Reverse a String",
    description: "Write a Python program to reverse a given string. You should implement this using string slicing, which is an efficient way to reverse strings in Python.",
    code: `text = "Hello World"
reversed_text = text[::-1]

print("Original:", text)
print("Reversed:", reversed_text)`,
    expectedOutput: `Original: Hello World
Reversed: dlroW olleH`,
    points: 8
  },
  
  {
    title: "Count Vowels in String",
    description: "Create a Python program that counts the number of vowels (a, e, i, o, u) in a given string. The program should be case-insensitive and handle both uppercase and lowercase letters.",
    code: `text = "Programming is Fun"
vowels = "aeiouAEIOU"
count = 0

for char in text:
    if char in vowels:
        count += 1

print(f"Number of vowels in '{text}': {count}")`,
    expectedOutput: "Number of vowels in 'Programming is Fun': 5",
    points: 12
  },
  
  {
    title: "Find Prime Numbers",
    description: "Write a Python program to find all prime numbers between 1 and 20. A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.",
    code: `def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

primes = []
for num in range(1, 21):
    if is_prime(num):
        primes.append(num)

print("Prime numbers between 1 and 20:", primes)`,
    expectedOutput: "Prime numbers between 1 and 20: [2, 3, 5, 7, 11, 13, 17, 19]",
    points: 20
  },
  
  {
    title: "Fibonacci Sequence",
    description: "Generate the first 10 numbers in the Fibonacci sequence. In this sequence, each number is the sum of the two preceding ones, starting from 0 and 1.",
    code: `n = 10
fibonacci = [0, 1]

for i in range(2, n):
    next_num = fibonacci[i-1] + fibonacci[i-2]
    fibonacci.append(next_num)

print(f"First {n} Fibonacci numbers:", fibonacci)`,
    expectedOutput: "First 10 Fibonacci numbers: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]",
    points: 18
  },
  
  {
    title: "Remove Duplicates from List",
    description: "Write a Python program to remove duplicate elements from a list while preserving the original order of first occurrence of each element.",
    code: `numbers = [1, 2, 3, 2, 4, 1, 5, 3, 6]
unique_numbers = []

for num in numbers:
    if num not in unique_numbers:
        unique_numbers.append(num)

print("Original list:", numbers)
print("List without duplicates:", unique_numbers)`,
    expectedOutput: `Original list: [1, 2, 3, 2, 4, 1, 5, 3, 6]
List without duplicates: [1, 2, 3, 4, 5, 6]`,
    points: 14
  },
  
  {
    title: "Calculate Factorial",
    description: "Create a Python program to calculate the factorial of a given number. The factorial of n (denoted as n!) is the product of all positive integers less than or equal to n.",
    code: `def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)

number = 5
result = factorial(number)
print(f"Factorial of {number} is: {result}")`,
    expectedOutput: "Factorial of 5 is: 120",
    points: 16
  },
  
  {
    title: "Check Palindrome",
    description: "Write a Python program to check if a given string is a palindrome. A palindrome reads the same forwards and backwards, ignoring spaces and case.",
    code: `def is_palindrome(text):
    # Remove spaces and convert to lowercase
    cleaned = text.replace(" ", "").lower()
    return cleaned == cleaned[::-1]

word = "A man a plan a canal Panama"
if is_palindrome(word):
    print(f"'{word}' is a palindrome")
else:
    print(f"'{word}' is not a palindrome")`,
    expectedOutput: "'A man a plan a canal Panama' is a palindrome",
    points: 17
  },
  
  {
    title: "Sort List Using Bubble Sort",
    description: "Implement the bubble sort algorithm in Python to sort a list of numbers in ascending order. Bubble sort repeatedly steps through the list, compares adjacent elements and swaps them if they're in the wrong order.",
    code: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

numbers = [64, 34, 25, 12, 22, 11, 90]
print("Original array:", numbers)
sorted_numbers = bubble_sort(numbers.copy())
print("Sorted array:", sorted_numbers)`,
    expectedOutput: `Original array: [64, 34, 25, 12, 22, 11, 90]
Sorted array: [11, 12, 22, 25, 34, 64, 90]`,
    points: 22
  }
];

module.exports = { questions };
