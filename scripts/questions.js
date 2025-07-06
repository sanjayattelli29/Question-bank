// Sample questions for bulk import
// Copy this file and modify with your own questions

const questions = [
  {
    title: "Find the Smallest Number in Array",
    description: "Write a Python program to find the smallest number in a given array of integers.",
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
    title: "Find the Largest Number in Array",
    description: "Write a Python program to find the largest number in a given array of integers.",
    code: `arr = [5, 2, 8, 1, 9, -4, 0]
largest = arr[0]

for num in arr:
    if num > largest:
        largest = num

print("Largest number in the array:", largest)`,
    expectedOutput: "Largest number in the array: 9",
    points: 10
  },
  {
    title: "Find the Second Smallest and Second Largest Element in Array",
    description: "Write a Python program to find the second smallest and second largest elements in an array.",
    code: `arr = [5, 2, 8, 1, 9, -4, 0]
sorted_arr = sorted(set(arr))

if len(sorted_arr) >= 2:
    second_smallest = sorted_arr[1]
    second_largest = sorted_arr[-2]
    print(f"Second smallest: {second_smallest}, Second largest: {second_largest}")
else:
    print("Array doesn't have enough unique elements")`,
    expectedOutput: "Second smallest: 0, Second largest: 8",
    points: 15
  },
  {
    title: "Reverse a Given Array",
    description: "Write a Python program to reverse the elements of a given array.",
    code: `arr = [1, 2, 3, 4, 5]
reversed_arr = arr[::-1]

print("Original array:", arr)
print("Reversed array:", reversed_arr)`,
    expectedOutput: "Original array: [1, 2, 3, 4, 5]\nReversed array: [5, 4, 3, 2, 1]",
    points: 10
  },
  {
    title: "Count Frequency of Each Element in Array",
    description: "Write a Python program to count the frequency of each element in an array.",
    code: `arr = [1, 2, 2, 3, 3, 3, 4]
frequency = {}

for num in arr:
    frequency[num] = frequency.get(num, 0) + 1

for num, count in frequency.items():
    print(f"{num}: {count}")`,
    expectedOutput: "1: 1\n2: 2\n3: 3\n4: 1",
    points: 15
  },
  {
    title: "Rearrange Array in Increasing-Decreasing Order",
    description: "Write a Python program to rearrange array elements in increasing-decreasing order.",
    code: `arr = [1, 5, 3, 9, 2, 8, 4, 7, 6]
arr.sort()
mid = len(arr) // 2

result = arr[:mid] + arr[mid:][::-1]
print("Rearranged array:", result)`,
    expectedOutput: "Rearranged array: [1, 2, 3, 4, 9, 8, 7, 6, 5]",
    points: 15
  },
  {
    title: "Calculate Sum of Array Elements",
    description: "Write a Python program to calculate the sum of all elements in an array.",
    code: `arr = [1, 2, 3, 4, 5]
total_sum = sum(arr)

print("Array:", arr)
print("Sum of elements:", total_sum)`,
    expectedOutput: "Array: [1, 2, 3, 4, 5]\nSum of elements: 15",
    points: 10
  },
  {
    title: "Rotate Array by K Elements",
    description: "Write a Python program to rotate an array by K elements to the right.",
    code: `arr = [1, 2, 3, 4, 5, 6, 7]
k = 3
n = len(arr)
k = k % n

rotated = arr[-k:] + arr[:-k]
print("Original array:", arr)
print(f"Array rotated by {k} positions:", rotated)`,
    expectedOutput: "Original array: [1, 2, 3, 4, 5, 6, 7]\nArray rotated by 3 positions: [5, 6, 7, 1, 2, 3, 4]",
    points: 15
  },
  {
    title: "Average of All Elements in Array",
    description: "Write a Python program to find the average of all elements in an array.",
    code: `arr = [10, 20, 30, 40, 50]
average = sum(arr) / len(arr)

print("Array:", arr)
print("Average:", average)`,
    expectedOutput: "Array: [10, 20, 30, 40, 50]\nAverage: 30.0",
    points: 10
  },
  {
    title: "Find the Median of Array",
    description: "Write a Python program to find the median of a given array.",
    code: `arr = [3, 1, 4, 1, 5, 9, 2, 6]
sorted_arr = sorted(arr)
n = len(sorted_arr)

if n % 2 == 0:
    median = (sorted_arr[n//2 - 1] + sorted_arr[n//2]) / 2
else:
    median = sorted_arr[n//2]

print("Sorted array:", sorted_arr)
print("Median:", median)`,
    expectedOutput: "Sorted array: [1, 1, 2, 3, 4, 5, 6, 9]\nMedian: 3.5",
    points: 15
  },
  {
    title: "Remove Duplicates from Sorted Array",
    description: "Write a Python program to remove duplicates from a sorted array.",
    code: `arr = [1, 1, 2, 2, 3, 4, 4, 5]
unique_arr = []

for i in range(len(arr)):
    if i == 0 or arr[i] != arr[i-1]:
        unique_arr.append(arr[i])

print("Original array:", arr)
print("Array without duplicates:", unique_arr)`,
    expectedOutput: "Original array: [1, 1, 2, 2, 3, 4, 4, 5]\nArray without duplicates: [1, 2, 3, 4, 5]",
    points: 15
  },
  {
    title: "Remove Duplicates from Unsorted Array",
    description: "Write a Python program to remove duplicates from an unsorted array.",
    code: `arr = [4, 2, 1, 3, 2, 4, 5, 1]
unique_arr = list(set(arr))

print("Original array:", arr)
print("Array without duplicates:", unique_arr)`,
    expectedOutput: "Original array: [4, 2, 1, 3, 2, 4, 5, 1]\nArray without duplicates: [1, 2, 3, 4, 5]",
    points: 15
  },
  {
    title: "Add Element in Array",
    description: "Write a Python program to add an element at a specific position in an array.",
    code: `arr = [1, 2, 4, 5]
element = 3
position = 2

arr.insert(position, element)
print("Array after insertion:", arr)`,
    expectedOutput: "Array after insertion: [1, 2, 3, 4, 5]",
    points: 10
  },
  {
    title: "Find All Repeating Elements in Array",
    description: "Write a Python program to find all repeating elements in an array.",
    code: `arr = [1, 2, 3, 2, 4, 5, 3, 6]
frequency = {}
repeating = []

for num in arr:
    frequency[num] = frequency.get(num, 0) + 1

for num, count in frequency.items():
    if count > 1:
        repeating.append(num)

print("Repeating elements:", repeating)`,
    expectedOutput: "Repeating elements: [2, 3]",
    points: 15
  },
  {
    title: "Find All Non-Repeating Elements in Array",
    description: "Write a Python program to find all non-repeating elements in an array.",
    code: `arr = [1, 2, 3, 2, 4, 5, 3, 6]
frequency = {}
non_repeating = []

for num in arr:
    frequency[num] = frequency.get(num, 0) + 1

for num, count in frequency.items():
    if count == 1:
        non_repeating.append(num)

print("Non-repeating elements:", non_repeating)`,
    expectedOutput: "Non-repeating elements: [1, 4, 5, 6]",
    points: 15
  },
  {
    title: "Find All Symmetric Pairs in Array",
    description: "Write a Python program to find all symmetric pairs in an array of pairs.",
    code: `pairs = [(1, 2), (3, 4), (2, 1), (5, 6), (4, 3)]
symmetric_pairs = []

for i in range(len(pairs)):
    for j in range(i + 1, len(pairs)):
        if pairs[i][0] == pairs[j][1] and pairs[i][1] == pairs[j][0]:
            symmetric_pairs.append((pairs[i], pairs[j]))

print("Symmetric pairs:", symmetric_pairs)`,
    expectedOutput: "Symmetric pairs: [((1, 2), (2, 1)), ((3, 4), (4, 3))]",
    points: 20
  },
  {
    title: "Maximum Product Subarray",
    description: "Write a Python program to find the maximum product of a contiguous subarray.",
    code: `arr = [2, 3, -2, 4]
max_product = arr[0]
current_max = arr[0]
current_min = arr[0]

for i in range(1, len(arr)):
    if arr[i] < 0:
        current_max, current_min = current_min, current_max
    
    current_max = max(arr[i], current_max * arr[i])
    current_min = min(arr[i], current_min * arr[i])
    max_product = max(max_product, current_max)

print("Maximum product subarray:", max_product)`,
    expectedOutput: "Maximum product subarray: 6",
    points: 20
  },
  {
    title: "Replace Elements by Their Rank",
    description: "Write a Python program to replace each element of array by its rank.",
    code: `arr = [20, 15, 26, 2, 98, 6]
sorted_unique = sorted(set(arr))
rank_map = {val: rank + 1 for rank, val in enumerate(sorted_unique)}

ranked_arr = [rank_map[num] for num in arr]
print("Original array:", arr)
print("Ranked array:", ranked_arr)`,
    expectedOutput: "Original array: [20, 15, 26, 2, 98, 6]\nRanked array: [4, 3, 5, 1, 6, 2]",
    points: 20
  },
  {
    title: "Sort Elements by Frequency",
    description: "Write a Python program to sort array elements according to their frequency.",
    code: `arr = [4, 5, 6, 5, 4, 3]
frequency = {}

for num in arr:
    frequency[num] = frequency.get(num, 0) + 1

sorted_by_freq = sorted(arr, key=lambda x: (-frequency[x], x))
print("Original array:", arr)
print("Sorted by frequency:", sorted_by_freq)`,
    expectedOutput: "Original array: [4, 5, 6, 5, 4, 3]\nSorted by frequency: [4, 4, 5, 5, 3, 6]",
    points: 20
  },
  {
    title: "Rotate Array Elements to Left",
    description: "Write a Python program to rotate array elements to the left by one position.",
    code: `arr = [1, 2, 3, 4, 5]
rotated_left = arr[1:] + [arr[0]]

print("Original array:", arr)
print("Left rotated array:", rotated_left)`,
    expectedOutput: "Original array: [1, 2, 3, 4, 5]\nLeft rotated array: [2, 3, 4, 5, 1]",
    points: 15
  },
  {
    title: "Rotate Array Elements to Right",
    description: "Write a Python program to rotate array elements to the right by one position.",
    code: `arr = [1, 2, 3, 4, 5]
rotated_right = [arr[-1]] + arr[:-1]

print("Original array:", arr)
print("Right rotated array:", rotated_right)`,
    expectedOutput: "Original array: [1, 2, 3, 4, 5]\nRight rotated array: [5, 1, 2, 3, 4]",
    points: 15
  },
  {
    title: "Find Equilibrium Index of Array",
    description: "Write a Python program to find the equilibrium index where sum of left elements equals sum of right elements.",
    code: `arr = [1, 7, 3, 6, 5, 6]
total_sum = sum(arr)
left_sum = 0

for i in range(len(arr)):
    total_sum -= arr[i]
    if left_sum == total_sum:
        print("Equilibrium index:", i)
        break
    left_sum += arr[i]
else:
    print("No equilibrium index found")`,
    expectedOutput: "Equilibrium index: 3",
    points: 20
  },
  {
    title: "Circular Rotation by K Positions",
    description: "Write a Python program to perform circular rotation of array by K positions.",
    code: `arr = [1, 2, 3, 4, 5, 6]
k = 2
n = len(arr)
k = k % n

rotated = arr[k:] + arr[:k]
print("Original array:", arr)
print(f"Circularly rotated by {k} positions:", rotated)`,
    expectedOutput: "Original array: [1, 2, 3, 4, 5, 6]\nCircularly rotated by 2 positions: [3, 4, 5, 6, 1, 2]",
    points: 15
  },
  {
    title: "Sort Array According to Another Array",
    description: "Write a Python program to sort one array according to the order defined by another array.",
    code: `arr1 = [2, 1, 2, 5, 7, 1, 9, 9, 7, 7, 7, 7]
arr2 = [2, 1, 7, 9]

result = []
for num in arr2:
    count = arr1.count(num)
    result.extend([num] * count)

remaining = [x for x in arr1 if x not in arr2]
result.extend(sorted(remaining))

print("Sorted according to arr2:", result)`,
    expectedOutput: "Sorted according to arr2: [2, 2, 1, 1, 7, 7, 7, 7, 7, 9, 9, 5]",
    points: 20
  },
  {
    title: "Search Element in Array",
    description: "Write a Python program to search for an element in an array and return its index.",
    code: `arr = [10, 20, 30, 40, 50]
target = 30

try:
    index = arr.index(target)
    print(f"Element {target} found at index {index}")
except ValueError:
    print(f"Element {target} not found in array")`,
    expectedOutput: "Element 30 found at index 2",
    points: 10
  },
  {
    title: "Check if Array is Subset of Another",
    description: "Write a Python program to check if one array is a subset of another array.",
    code: `arr1 = [1, 2, 3]
arr2 = [1, 2, 3, 4, 5, 6]

is_subset = all(item in arr2 for item in arr1)

print(f"Array {arr1} is subset of {arr2}: {is_subset}")`,
    expectedOutput: "Array [1, 2, 3] is subset of [1, 2, 3, 4, 5, 6]: True",
    points: 15
  },
  {
    title: "Count Distinct Elements in Array",
    description: "Write a Python program to count the number of distinct elements in an array.",
    code: `arr = [1, 2, 3, 2, 4, 1, 5, 6, 3]
distinct_count = len(set(arr))

print("Array:", arr)
print("Number of distinct elements:", distinct_count)`,
    expectedOutput: "Array: [1, 2, 3, 2, 4, 1, 5, 6, 3]\nNumber of distinct elements: 6",
    points: 10
  },
  {
    title: "Move All Zeros to End of Array",
    description: "Write a Python program to move all zeros to the end of array while maintaining relative order of non-zero elements.",
    code: `arr = [0, 1, 0, 3, 12]
non_zero = [x for x in arr if x != 0]
zeros = [0] * (len(arr) - len(non_zero))
result = non_zero + zeros

print("Original array:", arr)
print("Array with zeros moved to end:", result)`,
    expectedOutput: "Original array: [0, 1, 0, 3, 12]\nArray with zeros moved to end: [1, 3, 12, 0, 0]",
    points: 15
  },
  {
    title: "Check if Number is Palindrome",
    description: "Write a Python program to check if a number is palindrome or not.",
    code: `num = 121
original = num
reversed_num = 0

while num > 0:
    digit = num % 10
    reversed_num = reversed_num * 10 + digit
    num //= 10

print(f"{original} is palindrome: {original == reversed_num}")`,
    expectedOutput: "121 is palindrome: True",
    points: 10
  },
  {
    title: "Find All Palindrome Numbers in Range",
    description: "Write a Python program to find all palindrome numbers in a given range.",
    code: `start = 100
end = 200
palindromes = []

for num in range(start, end + 1):
    if str(num) == str(num)[::-1]:
        palindromes.append(num)

print(f"Palindromes between {start} and {end}: {palindromes}")`,
    expectedOutput: "Palindromes between 100 and 200: [101, 111, 121, 131, 141, 151, 161, 171, 181, 191]",
    points: 15
  },
  {
    title: "Check if Number is Prime",
    description: "Write a Python program to check if a number is prime.",
    code: `num = 17

if num < 2:
    is_prime = False
else:
    is_prime = True
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            is_prime = False
            break

print(f"{num} is prime: {is_prime}")`,
    expectedOutput: "17 is prime: True",
    points: 15
  },
  {
    title: "Find All Prime Numbers in Range",
    description: "Write a Python program to find all prime numbers in a given range.",
    code: `start = 10
end = 30
primes = []

for num in range(start, end + 1):
    if num > 1:
        is_prime = True
        for i in range(2, int(num ** 0.5) + 1):
            if num % i == 0:
                is_prime = False
                break
        if is_prime:
            primes.append(num)

print(f"Prime numbers between {start} and {end}: {primes}")`,
    expectedOutput: "Prime numbers between 10 and 30: [11, 13, 17, 19, 23, 29]",
    points: 20
  },
  {
    title: "Check if Number is Armstrong Number",
    description: "Write a Python program to check if a number is an Armstrong number.",
    code: `num = 153
original = num
digits = len(str(num))
sum_of_powers = 0

while num > 0:
    digit = num % 10
    sum_of_powers += digit ** digits
    num //= 10

print(f"{original} is Armstrong number: {original == sum_of_powers}")`,
    expectedOutput: "153 is Armstrong number: True",
    points: 15
  },
  {
    title: "Check if Number is Perfect Number",
    description: "Write a Python program to check if a number is a perfect number.",
    code: `num = 28
sum_of_divisors = 0

for i in range(1, num):
    if num % i == 0:
        sum_of_divisors += i

print(f"{num} is perfect number: {num == sum_of_divisors}")`,
    expectedOutput: "28 is perfect number: True",
    points: 15
  },
  {
    title: "Check if Number is Even or Odd",
    description: "Write a Python program to check if a number is even or odd.",
    code: `num = 15

if num % 2 == 0:
    result = "even"
else:
    result = "odd"

print(f"{num} is {result}")`,
    expectedOutput: "15 is odd",
    points: 5
  },
  {
    title: "Check if Number is Positive or Negative",
    description: "Write a Python program to check if a number is positive or negative.",
    code: `num = -5

if num > 0:
    result = "positive"
elif num < 0:
    result = "negative"
else:
    result = "zero"

print(f"{num} is {result}")`,
    expectedOutput: "-5 is negative",
    points: 5
  },
  {
    title: "Sum of First N Natural Numbers",
    description: "Write a Python program to find the sum of first N natural numbers.",
    code: `n = 10
sum_natural = n * (n + 1) // 2

print(f"Sum of first {n} natural numbers: {sum_natural}")`,
    expectedOutput: "Sum of first 10 natural numbers: 55",
    points: 10
  },
  {
    title: "Sum of Arithmetic Progression Series",
    description: "Write a Python program to find the sum of an arithmetic progression series.",
    code: `first_term = 2
common_diff = 3
n_terms = 5

sum_ap = n_terms * (2 * first_term + (n_terms - 1) * common_diff) // 2
print(f"Sum of AP series: {sum_ap}")`,
    expectedOutput: "Sum of AP series: 40",
    points: 15
  },
  {
    title: "Sum of Geometric Progression Series",
    description: "Write a Python program to find the sum of a geometric progression series.",
    code: `first_term = 2
common_ratio = 3
n_terms = 4

if common_ratio == 1:
    sum_gp = first_term * n_terms
else:
    sum_gp = first_term * (common_ratio ** n_terms - 1) // (common_ratio - 1)

print(f"Sum of GP series: {sum_gp}")`,
    expectedOutput: "Sum of GP series: 80",
    points: 15
  },
  {
    title: "Greatest of Two Numbers",
    description: "Write a Python program to find the greatest of two numbers.",
    code: `num1 = 25
num2 = 18

if num1 > num2:
    greatest = num1
else:
    greatest = num2

print(f"Greatest of {num1} and {num2}: {greatest}")`,
    expectedOutput: "Greatest of 25 and 18: 25",
    points: 5
  },
  {
    title: "Greatest of Three Numbers",
    description: "Write a Python program to find the greatest of three numbers.",
    code: `num1 = 25
num2 = 18
num3 = 30

greatest = max(num1, num2, num3)
print(f"Greatest of {num1}, {num2}, and {num3}: {greatest}")`,
    expectedOutput: "Greatest of 25, 18, and 30: 30",
    points: 10
  },
  {
    title: "Leap Year Check",
    description: "Write a Python program to check if a year is a leap year.",
    code: `year = 2024

if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    result = "leap year"
else:
    result = "not a leap year"

print(f"{year} is {result}")`,
    expectedOutput: "2024 is leap year",
    points: 10
  },
  {
    title: "Reverse Digits of Number",
    description: "Write a Python program to reverse the digits of a number.",
    code: `num = 12345
reversed_num = 0

while num > 0:
    digit = num % 10
    reversed_num = reversed_num * 10 + digit
    num //= 10

print(f"Reversed number: {reversed_num}")`,
    expectedOutput: "Reversed number: 54321",
    points: 10
  },
  {
    title: "Find Maximum Digit in Number",
    description: "Write a Python program to find the maximum digit in a number.",
    code: `num = 54321
max_digit = 0

while num > 0:
    digit = num % 10
    if digit > max_digit:
        max_digit = digit
    num //= 10

print(f"Maximum digit: {max_digit}")`,
    expectedOutput: "Maximum digit: 5",
    points: 10
  },
  {
    title: "Find Minimum Digit in Number",
    description: "Write a Python program to find the minimum digit in a number.",
    code: `num = 54321
min_digit = 9

while num > 0:
    digit = num % 10
    if digit < min_digit:
        min_digit = digit
    num //= 10

print(f"Minimum digit: {min_digit}")`,
    expectedOutput: "Minimum digit: 1",
    points: 10
  },
  {
    title: "Print Fibonacci Series up to Nth Term",
    description: "Write a Python program to print Fibonacci series up to Nth term.",
    code: `n = 7
a, b = 0, 1
fibonacci = []

for i in range(n):
    fibonacci.append(a)
    a, b = b, a + b

print(f"Fibonacci series up to {n} terms: {fibonacci}")`,
    expectedOutput: "Fibonacci series up to 7 terms: [0, 1, 1, 2, 3, 5, 8]",
    points: 15
  },
  {
    title: "Factorial of Number",
    description: "Write a Python program to find the factorial of a number.",
    code: `num = 5
factorial = 1

for i in range(1, num + 1):
    factorial *= i

print(f"Factorial of {num}: {factorial}")`,
    expectedOutput: "Factorial of 5: 120",
    points: 10
  },
  {
    title: "Power of Number",
    description: "Write a Python program to calculate the power of a number.",
    code: `base = 2
exponent = 5
result = base ** exponent

print(f"{base} raised to power {exponent}: {result}")`,
    expectedOutput: "2 raised to power 5: 32",
    points: 10
  },
  {
    title: "Find All Factors of Number",
    description: "Write a Python program to find all factors of a number.",
    code: `num = 12
factors = []

for i in range(1, num + 1):
    if num % i == 0:
        factors.append(i)

print(f"Factors of {num}: {factors}")`,
    expectedOutput: "Factors of 12: [1, 2, 3, 4, 6, 12]",
    points: 15
  },
  {
    title: "Find All Prime Factors of Number",
    description: "Write a Python program to find all prime factors of a number.",
    code: `num = 60
prime_factors = []
d = 2

while d * d <= num:
    while num % d == 0:
        prime_factors.append(d)
        num //= d
    d += 1

if num > 1:
    prime_factors.append(num)

print(f"Prime factors: {prime_factors}")`,
    expectedOutput: "Prime factors: [2, 2, 3, 5]",
    points: 20
  },
  {
    title: "Check if Number is Strong Number",
    description: "Write a Python program to check if a number is a strong number.",
    code: `num = 145
original = num
sum_of_factorials = 0

while num > 0:
    digit = num % 10
    factorial = 1
    for i in range(1, digit + 1):
        factorial *= i
    sum_of_factorials += factorial
    num //= 10

print(f"{original} is strong number: {original == sum_of_factorials}")`,
    expectedOutput: "145 is strong number: True",
    points: 20
  },
  {
    title: "Check if Number is Automorphic",
    description: "Write a Python program to check if a number is automorphic.",
    code: `num = 25
square = num ** 2
str_num = str(num)
str_square = str(square)

is_automorphic = str_square.endswith(str_num)
print(f"{num} is automorphic: {is_automorphic}")`,
    expectedOutput: "25 is automorphic: True",
    points: 15
  },
  {
    title: "GCD of Two Numbers",
    description: "Write a Python program to find the GCD of two numbers.",
    code: `a = 48
b = 18

while b:
    a, b = b, a % b

print(f"GCD: {a}")`,
    expectedOutput: "GCD: 6",
    points: 15
  },
  {
    title: "LCM of Two Numbers",
    description: "Write a Python program to find the LCM of two numbers.",
    code: `a = 12
b = 18
original_a, original_b = a, b

while b:
    a, b = b, a % b

gcd = a
lcm = (original_a * original_b) // gcd
print(f"LCM: {lcm}")`,
    expectedOutput: "LCM: 36",
    points: 15
  },
  {
    title: "Check if Number is Harshad Number",
    description: "Write a Python program to check if a number is a Harshad number.",
    code: `num = 12
original = num
sum_of_digits = 0

while num > 0:
    sum_of_digits += num % 10
    num //= 10

is_harshad = original % sum_of_digits == 0
print(f"{original} is Harshad number: {is_harshad}")`,
    expectedOutput: "12 is Harshad number: True",
    points: 15
  },
  {
    title: "Check if Number is Abundant Number",
    description: "Write a Python program to check if a number is an abundant number.",
    code: `num = 12
sum_of_divisors = 0

for i in range(1, num):
    if num % i == 0:
        sum_of_divisors += i

is_abundant = sum_of_divisors > num
print(f"{num} is abundant number: {is_abundant}")`,
    expectedOutput: "12 is abundant number: True",
    points: 15
  },
  {
    title: "Sum of Digits of Number",
    description: "Write a Python program to find the sum of digits of a number.",
    code: `num = 12345
sum_of_digits = 0

while num > 0:
    sum_of_digits += num % 10
    num //= 10

print(f"Sum of digits: {sum_of_digits}")`,
    expectedOutput: "Sum of digits: 15",
    points: 10
  },
  {
    title: "Sum of Numbers in Range",
    description: "Write a Python program to find the sum of all numbers in a given range.",
    code: `start = 1
end = 10
total_sum = sum(range(start, end + 1))

print(f"Sum of numbers from {start} to {end}: {total_sum}")`,
    expectedOutput: "Sum of numbers from 1 to 10: 55",
    points: 10
  },
  {
    title: "Permutations: N People in R Seats",
    description: "Write a Python program to calculate permutations of N people in R seats.",
    code: `import math

n = 5
r = 3
permutations = math.factorial(n) // math.factorial(n - r)

print(f"Permutations of {n} people in {r} seats: {permutations}")`,
    expectedOutput: "Permutations of 5 people in 3 seats: 60",
    points: 15
  },
  {
    title: "Add Two Fractions",
    description: "Write a Python program to add two fractions.",
    code: `from fractions import Fraction

frac1 = Fraction(1, 3)
frac2 = Fraction(1, 4)
result = frac1 + frac2

print(f"{frac1} + {frac2} = {result}")`,
    expectedOutput: "1/3 + 1/4 = 7/12",
    points: 15
  },
  {
    title: "Replace All 0s with 1s in Integer",
    description: "Write a Python program to replace all 0s with 1s in an integer.",
    code: `num = 10203
str_num = str(num)
result = str_num.replace('0', '1')

print(f"Original number: {num}")
print(f"After replacing 0s with 1s: {result}")`,
    expectedOutput: "Original number: 10203\nAfter replacing 0s with 1s: 11213",
    points: 10
  },
  {
    title: "Check if Number Can Be Sum of Two Primes",
    description: "Write a Python program to check if a number can be expressed as sum of two primes.",
    code: `def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

num = 20
found = False

for i in range(2, num // 2 + 1):
    if is_prime(i) and is_prime(num - i):
        print(f"{num} = {i} + {num - i}")
        found = True
        break

if not found:
    print(f"{num} cannot be expressed as sum of two primes")`,
    expectedOutput: "20 = 3 + 17",
    points: 20
  },
  {
    title: "Area of Circle",
    description: "Write a Python program to calculate the area of a circle.",
    code: `import math

radius = 5
area = math.pi * radius ** 2

print(f"Area of circle with radius {radius}: {area:.2f}")`,
    expectedOutput: "Area of circle with radius 5: 78.54",
    points: 10
  },
  {
    title: "Roots of Quadratic Equation",
    description: "Write a Python program to find the roots of a quadratic equation.",
    code: `import math

a, b, c = 1, -5, 6
discriminant = b ** 2 - 4 * a * c

if discriminant > 0:
    root1 = (-b + math.sqrt(discriminant)) / (2 * a)
    root2 = (-b - math.sqrt(discriminant)) / (2 * a)
    print(f"Roots: {root1:.2f}, {root2:.2f}")
elif discriminant == 0:
    root = -b / (2 * a)
    print(f"Root: {root:.2f}")
else:
    print("No real roots")`,
    expectedOutput: "Roots: 3.00, 2.00",
    points: 15
  },
  {
    title: "Count Digits in Number",
    description: "Write a Python program to count the number of digits in a number.",
    code: `num = 12345
count = 0

while num > 0:
    count += 1
    num //= 10

print(f"Number of digits: {count}")`,
    expectedOutput: "Number of digits: 5",
    points: 10
  },
  {
    title: "Convert Number to Binary String Manually",
    description: "Write a Python program to convert a number to binary string manually.",
    code: `num = 10
binary = ""

if num == 0:
    binary = "0"
else:
    while num > 0:
        binary = str(num % 2) + binary
        num //= 2

print(f"Binary representation: {binary}")`,
    expectedOutput: "Binary representation: 1010",
    points: 15
  },
  {
    title: "Convert Number to Hexadecimal Manually",
    description: "Write a Python program to convert a number to hexadecimal manually.",
    code: `num = 255
hex_digits = "0123456789ABCDEF"
hexadecimal = ""

if num == 0:
    hexadecimal = "0"
else:
    while num > 0:
        hexadecimal = hex_digits[num % 16] + hexadecimal
        num //= 16

print(f"Hexadecimal representation: {hexadecimal}")`,
    expectedOutput: "Hexadecimal representation: FF",
    points: 15
  },
  {
    title: "Count Trailing Zeros in Factorial",
    description: "Write a Python program to count trailing zeros in factorial of a number.",
    code: `n = 10
count = 0
i = 5

while i <= n:
    count += n // i
    i *= 5

print(f"Trailing zeros in {n}!: {count}")`,
    expectedOutput: "Trailing zeros in 10!: 2",
    points: 20
  },
  {
    title: "Print Binary Representation of Power of 2",
    description: "Write a Python program to print binary representation of powers of 2.",
    code: `for i in range(5):
    power_of_2 = 2 ** i
    binary = bin(power_of_2)[2:]
    print(f"2^{i} = {power_of_2} = {binary}")`,
    expectedOutput: "2^0 = 1 = 1\n2^1 = 2 = 10\n2^2 = 4 = 100\n2^3 = 8 = 1000\n2^4 = 16 = 10000",
    points: 15
  },
  {
    title: "Find Nth Digit in Sequence of Integers",
    description: "Write a Python program to find the Nth digit in a sequence of integers.",
    code: `n = 15
sequence = ""
num = 1

while len(sequence) < n:
    sequence += str(num)
    num += 1

print(f"The {n}th digit in sequence: {sequence[n-1]}")`,
    expectedOutput: "The 15th digit in sequence: 2",
    points: 20
  },
  {
    title: "Convert Binary to Decimal",
    description: "Write a Python program to convert a binary number to decimal.",
    code: `binary = "1010"
decimal = 0
power = 0

for digit in reversed(binary):
    if digit == '1':
        decimal += 2 ** power
    power += 1

print(f"Binary {binary} in decimal: {decimal}")`,
    expectedOutput: "Binary 1010 in decimal: 10",
    points: 10
  },
  {
    title: "Convert Binary to Octal",
    description: "Write a Python program to convert a binary number to octal.",
    code: `binary = "1010110"
decimal = int(binary, 2)
octal = oct(decimal)[2:]

print(f"Binary {binary} in octal: {octal}")`,
    expectedOutput: "Binary 1010110 in octal: 126",
    points: 15
  },
  {
    title: "Convert Decimal to Binary",
    description: "Write a Python program to convert a decimal number to binary.",
    code: `decimal = 10
binary = ""

if decimal == 0:
    binary = "0"
else:
    while decimal > 0:
        binary = str(decimal % 2) + binary
        decimal //= 2

print(f"Decimal 10 in binary: {binary}")`,
    expectedOutput: "Decimal 10 in binary: 1010",
    points: 10
  },
  {
    title: "Convert Decimal to Octal",
    description: "Write a Python program to convert a decimal number to octal.",
    code: `decimal = 64
octal = ""

if decimal == 0:
    octal = "0"
else:
    while decimal > 0:
        octal = str(decimal % 8) + octal
        decimal //= 8

print(f"Decimal 64 in octal: {octal}")`,
    expectedOutput: "Decimal 64 in octal: 100",
    points: 10
  },
  {
    title: "Convert Octal to Binary",
    description: "Write a Python program to convert an octal number to binary.",
    code: `octal = "126"
decimal = int(octal, 8)
binary = bin(decimal)[2:]

print(f"Octal {octal} in binary: {binary}")`,
    expectedOutput: "Octal 126 in binary: 1010110",
    points: 15
  },
  {
    title: "Convert Octal to Decimal",
    description: "Write a Python program to convert an octal number to decimal.",
    code: `octal = "126"
decimal = 0
power = 0

for digit in reversed(octal):
    decimal += int(digit) * (8 ** power)
    power += 1

print(f"Octal {octal} in decimal: {decimal}")`,
    expectedOutput: "Octal 126 in decimal: 86",
    points: 10
  },
  {
    title: "Convert Digits/Numbers to Words",
    description: "Write a Python program to convert digits or numbers to words.",
    code: `def number_to_words(num):
    ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
           "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
           "seventeen", "eighteen", "nineteen"]
    
    tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
    
    if num == 0:
        return "zero"
    elif num < 20:
        return ones[num]
    elif num < 100:
        return tens[num // 10] + ("" if num % 10 == 0 else " " + ones[num % 10])
    
number = 25
result = number_to_words(number)
print(f"Number {number} in words: {result}")`,
    expectedOutput: "Number 25 in words: twenty five",
    points: 20
  },
  {
    title: "Bubble Sort Algorithm",
    description: "Write a Python program to implement bubble sort algorithm.",
    code: `arr = [64, 34, 25, 12, 22, 11, 90]
n = len(arr)

for i in range(n):
    for j in range(0, n - i - 1):
        if arr[j] > arr[j + 1]:
            arr[j], arr[j + 1] = arr[j + 1], arr[j]

print("Sorted array:", arr)`,
    expectedOutput: "Sorted array: [11, 12, 22, 25, 34, 64, 90]",
    points: 15
  },
  {
    title: "Selection Sort Algorithm",
    description: "Write a Python program to implement selection sort algorithm.",
    code: `arr = [64, 25, 12, 22, 11]
n = len(arr)

for i in range(n):
    min_idx = i
    for j in range(i + 1, n):
        if arr[j] < arr[min_idx]:
            min_idx = j
    arr[i], arr[min_idx] = arr[min_idx], arr[i]

print("Sorted array:", arr)`,
    expectedOutput: "Sorted array: [11, 12, 22, 25, 64]",
    points: 15
  },
  {
    title: "Insertion Sort Algorithm",
    description: "Write a Python program to implement insertion sort algorithm.",
    code: `arr = [12, 11, 13, 5, 6]

for i in range(1, len(arr)):
    key = arr[i]
    j = i - 1
    while j >= 0 and arr[j] > key:
        arr[j + 1] = arr[j]
        j -= 1
    arr[j + 1] = key

print("Sorted array:", arr)`,
    expectedOutput: "Sorted array: [5, 6, 11, 12, 13]",
    points: 15
  },
  {
    title: "Quick Sort Algorithm",
    description: "Write a Python program to implement quick sort algorithm.",
    code: `def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)

arr = [3, 6, 8, 10, 1, 2, 1]
sorted_arr = quick_sort(arr)
print("Sorted array:", sorted_arr)`,
    expectedOutput: "Sorted array: [1, 1, 2, 3, 6, 8, 10]",
    points: 20
  },
  {
    title: "Merge Sort Algorithm",
    description: "Write a Python program to implement merge sort algorithm.",
    code: `def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    result.extend(left[i:])
    result.extend(right[j:])
    return result

arr = [12, 11, 13, 5, 6, 7]
sorted_arr = merge_sort(arr)
print("Sorted array:", sorted_arr)`,
    expectedOutput: "Sorted array: [5, 6, 7, 11, 12, 13]",
    points: 20
  },
  {
    title: "Check if String is Palindrome",
    description: "Write a Python program to check if a string is palindrome.",
    code: `string = "madam"
cleaned = string.lower().replace(" ", "")
is_palindrome = cleaned == cleaned[::-1]

print(f"'{string}' is palindrome: {is_palindrome}")`,
    expectedOutput: "'madam' is palindrome: True",
    points: 10
  },
  {
    title: "Count Vowels, Consonants, Spaces",
    description: "Write a Python program to count vowels, consonants, and spaces in a string.",
    code: `string = "Hello World"
vowels = consonants = spaces = 0

for char in string:
    if char.lower() in 'aeiou':
        vowels += 1
    elif char.isalpha():
        consonants += 1
    elif char == ' ':
        spaces += 1

print(f"Vowels: {vowels}, Consonants: {consonants}, Spaces: {spaces}")`,
    expectedOutput: "Vowels: 3, Consonants: 7, Spaces: 1",
    points: 15
  },
  {
    title: "Find ASCII Value of Character",
    description: "Write a Python program to find the ASCII value of a character.",
    code: `char = 'A'
ascii_value = ord(char)

print(f"ASCII value of '{char}': {ascii_value}")`,
    expectedOutput: "ASCII value of 'A': 65",
    points: 5
  },
  {
    title: "Remove All Vowels from String",
    description: "Write a Python program to remove all vowels from a string.",
    code: `string = "Hello World"
result = ""

for char in string:
    if char.lower() not in 'aeiou':
        result += char

print(f"Original: {string}")
print(f"Without vowels: {result}")`,
    expectedOutput: "Original: Hello World\nWithout vowels: Hll Wrld",
    points: 10
  },
  {
    title: "Remove Spaces from String",
    description: "Write a Python program to remove all spaces from a string.",
    code: `string = "Hello World Python"
result = string.replace(" ", "")

print(f"Original: {string}")
print(f"Without spaces: {result}")`,
    expectedOutput: "Original: Hello World Python\nWithout spaces: HelloWorldPython",
    points: 5
  },
  {
    title: "Remove All Non-Alphabet Characters",
    description: "Write a Python program to remove all non-alphabet characters from a string.",
    code: `string = "Hello123 World!@#"
result = ""

for char in string:
    if char.isalpha():
        result += char

print(f"Original: {string}")
print(f"Only alphabets: {result}")`,
    expectedOutput: "Original: Hello123 World!@#\nOnly alphabets: HelloWorld",
    points: 10
  },
  {
    title: "Reverse a String",
    description: "Write a Python program to reverse a string.",
    code: `string = "Hello World"
reversed_string = string[::-1]

print(f"Original: {string}")
print(f"Reversed: {reversed_string}")`,
    expectedOutput: "Original: Hello World\nReversed: dlroW olleH",
    points: 5
  },
  {
    title: "Remove Brackets from Algebraic Expression",
    description: "Write a Python program to remove brackets from an algebraic expression.",
    code: `expression = "a+(b-c)*d"
result = ""

for char in expression:
    if char not in '()[]{}':
        result += char

print(f"Original: {expression}")
print(f"Without brackets: {result}")`,
    expectedOutput: "Original: a+(b-c)*d\nWithout brackets: a+b-c*d",
    points: 10
  },
  {
    title: "Sum of All Numbers in String",
    description: "Write a Python program to find the sum of all numbers in a string.",
    code: `string = "abc12def34ghi56"
total = 0
current_num = ""

for char in string + " ":
    if char.isdigit():
        current_num += char
    else:
        if current_num:
            total += int(current_num)
            current_num = ""

print(f"String: {string}")
print(f"Sum of numbers: {total}")`,
    expectedOutput: "String: abc12def34ghi56\nSum of numbers: 102",
    points: 15
  },
  {
    title: "Capitalize First and Last Character of Each Word",
    description: "Write a Python program to capitalize first and last character of each word.",
    code: `string = "hello world python"
words = string.split()
result = []

for word in words:
    if len(word) == 1:
        result.append(word.upper())
    else:
        new_word = word[0].upper() + word[1:-1] + word[-1].upper()
        result.append(new_word)

print(f"Original: {string}")
print(f"Modified: {' '.join(result)}")`,
    expectedOutput: "Original: hello world python\nModified: HellO WorlD PythoN",
    points: 15
  },
  {
    title: "Frequency of Characters in String",
    description: "Write a Python program to find the frequency of each character in a string.",
    code: `string = "hello"
frequency = {}

for char in string:
    frequency[char] = frequency.get(char, 0) + 1

for char, count in frequency.items():
    print(f"'{char}': {count}")`,
    expectedOutput: "'h': 1\n'e': 1\n'l': 2\n'o': 1",
    points: 15
  },
  {
    title: "Find Non-Repeating Characters",
    description: "Write a Python program to find all non-repeating characters in a string.",
    code: `string = "hello world"
frequency = {}
non_repeating = []

for char in string:
    frequency[char] = frequency.get(char, 0) + 1

for char in string:
    if frequency[char] == 1 and char not in non_repeating:
        non_repeating.append(char)

print(f"String: {string}")
print(f"Non-repeating characters: {non_repeating}")`,
    expectedOutput: "String: hello world\nNon-repeating characters: ['h', 'e', 'w', 'r', 'd']",
    points: 15
  },
  {
    title: "Check if Two Strings are Anagrams",
    description: "Write a Python program to check if two strings are anagrams.",
    code: `str1 = "listen"
str2 = "silent"

cleaned1 = str1.lower().replace(" ", "")
cleaned2 = str2.lower().replace(" ", "")

is_anagram = sorted(cleaned1) == sorted(cleaned2)
print(f"'{str1}' and '{str2}' are anagrams: {is_anagram}")`,
    expectedOutput: "'listen' and 'silent' are anagrams: True",
    points: 15
  },
  {
    title: "Count Common Subsequences Between Two Strings",
    description: "Write a Python program to count common characters between two strings.",
    code: `str1 = "hello"
str2 = "world"
common_chars = []

for char in str1:
    if char in str2 and char not in common_chars:
        common_chars.append(char)

print(f"String 1: {str1}")
print(f"String 2: {str2}")
print(f"Common characters: {common_chars}")
print(f"Count: {len(common_chars)}")`,
    expectedOutput: "String 1: hello\nString 2: world\nCommon characters: ['l', 'o']\nCount: 2",
    points: 15
  },
  {
    title: "Wildcard Matching of Two Strings",
    description: "Write a Python program to check if a string matches a pattern with wildcard '*'.",
    code: `def wildcard_match(text, pattern):
    if not pattern:
        return not text
    if not text:
        return pattern == '*' * len(pattern)
    
    if pattern[0] == '*':
        return wildcard_match(text[1:], pattern) or wildcard_match(text, pattern[1:])
    elif pattern[0] == text[0]:
        return wildcard_match(text[1:], pattern[1:])
    else:
        return False

text = "hello"
pattern = "h*o"
result = wildcard_match(text, pattern)
print(f"Text: {text}, Pattern: {pattern}, Match: {result}")`,
    expectedOutput: "Text: hello, Pattern: h*o, Match: True",
    points: 20
  },
  {
    title: "Return Maximum Occurring Character",
    description: "Write a Python program to find the character that occurs most frequently in a string.",
    code: `string = "hello world"
frequency = {}
max_char = ""
max_count = 0

for char in string:
    if char != ' ':
        frequency[char] = frequency.get(char, 0) + 1
        if frequency[char] > max_count:
            max_count = frequency[char]
            max_char = char

print(f"String: {string}")
print(f"Maximum occurring character: '{max_char}' ({max_count} times)")`,
    expectedOutput: "String: hello world\nMaximum occurring character: 'l' (3 times)",
    points: 15
  },
  {
    title: "Remove All Duplicates from String",
    description: "Write a Python program to remove all duplicate characters from a string.",
    code: `string = "hello world"
result = ""
seen = set()

for char in string:
    if char not in seen:
        result += char
        seen.add(char)

print(f"Original: {string}")
print(f"Without duplicates: {result}")`,
    expectedOutput: "Original: hello world\nWithout duplicates: helo wrd",
    points: 10
  },
  {
    title: "Print All Duplicate Characters",
    description: "Write a Python program to print all duplicate characters in a string.",
    code: `string = "hello world"
frequency = {}
duplicates = []

for char in string:
    frequency[char] = frequency.get(char, 0) + 1

for char, count in frequency.items():
    if count > 1 and char != ' ':
        duplicates.append(char)

print(f"String: {string}")
print(f"Duplicate characters: {duplicates}")`,
    expectedOutput: "String: hello world\nDuplicate characters: ['l', 'o']",
    points: 15
  },
  {
    title: "Remove Characters from String1 Present in String2",
    description: "Write a Python program to remove characters from string1 that are present in string2.",
    code: `str1 = "hello world"
str2 = "aeiou"
result = ""

for char in str1:
    if char not in str2:
        result += char

print(f"String 1: {str1}")
print(f"String 2: {str2}")
print(f"Result: {result}")`,
    expectedOutput: "String 1: hello world\nString 2: aeiou\nResult: hll wrld",
    points: 10
  },
  {
    title: "Replace Each Letter with Next Lexicographic Letter",
    description: "Write a Python program to replace each letter with the next letter in alphabetical order.",
    code: `string = "hello"
result = ""

for char in string:
    if char.isalpha():
        if char == 'z':
            result += 'a'
        elif char == 'Z':
            result += 'A'
        else:
            result += chr(ord(char) + 1)
    else:
        result += char

print(f"Original: {string}")
print(f"Next letters: {result}")`,
    expectedOutput: "Original: hello\nNext letters: ifmmp",
    points: 15
  },
  {
    title: "Find the Largest Word in String",
    description: "Write a Python program to find the largest word in a string.",
    code: `string = "Hello beautiful world"
words = string.split()
largest_word = ""

for word in words:
    if len(word) > len(largest_word):
        largest_word = word

print(f"String: {string}")
print(f"Largest word: {largest_word}")`,
    expectedOutput: "String: Hello beautiful world\nLargest word: beautiful",
    points: 10
  },
  {
    title: "Sort Characters in String",
    description: "Write a Python program to sort all characters in a string.",
    code: `string = "hello"
sorted_chars = ''.join(sorted(string))

print(f"Original: {string}")
print(f"Sorted: {sorted_chars}")`,
    expectedOutput: "Original: hello\nSorted: ehllo",
    points: 10
  },
  {
    title: "Count Number of Words in String",
    description: "Write a Python program to count the number of words in a string.",
    code: `string = "Hello beautiful world"
word_count = len(string.split())

print(f"String: {string}")
print(f"Number of words: {word_count}")`,
    expectedOutput: "String: Hello beautiful world\nNumber of words: 3",
    points: 5
  },
  {
    title: "Find Word with Highest Repeated Letters",
    description: "Write a Python program to find the word with the highest number of repeated letters.",
    code: `string = "hello beautiful world"
words = string.split()
max_repeats = 0
target_word = ""

for word in words:
    char_count = {}
    for char in word:
        char_count[char] = char_count.get(char, 0) + 1
    
    repeats = sum(1 for count in char_count.values() if count > 1)
    if repeats > max_repeats:
        max_repeats = repeats
        target_word = word

print(f"String: {string}")
print(f"Word with most repeated letters: {target_word}")`,
    expectedOutput: "String: hello beautiful world\nWord with most repeated letters: hello",
    points: 20
  },
  {
    title: "Change Case of Each Character",
    description: "Write a Python program to change the case of each character in a string.",
    code: `string = "Hello World"
result = ""

for char in string:
    if char.islower():
        result += char.upper()
    elif char.isupper():
        result += char.lower()
    else:
        result += char

print(f"Original: {string}")
print(f"Case changed: {result}")`,
    expectedOutput: "Original: Hello World\nCase changed: hELLO wORLD",
    points: 10
  },
  {
    title: "Concatenate Two Strings",
    description: "Write a Python program to concatenate two strings.",
    code: `str1 = "Hello"
str2 = "World"
result = str1 + " " + str2

print(f"String 1: {str1}")
print(f"String 2: {str2}")
print(f"Concatenated: {result}")`,
    expectedOutput: "String 1: Hello\nString 2: World\nConcatenated: Hello World",
    points: 5
  },
  {
    title: "Find Substring in String and Its Index",
    description: "Write a Python program to find a substring in a string and return its index.",
    code: `string = "Hello World Python"
substring = "World"

try:
    index = string.index(substring)
    print(f"String: {string}")
    print(f"Substring: {substring}")
    print(f"Found at index: {index}")
except ValueError:
    print(f"Substring '{substring}' not found")`,
    expectedOutput: "String: Hello World Python\nSubstring: World\nFound at index: 6",
    points: 10
  },
  {
    title: "Reverse Words in String",
    description: "Write a Python program to reverse the order of words in a string.",
    code: `string = "Hello World Python"
words = string.split()
reversed_words = " ".join(reversed(words))

print(f"Original: {string}")
print(f"Reversed words: {reversed_words}")`,
    expectedOutput: "Original: Hello World Python\nReversed words: Python World Hello",
    points: 10
  }
];

module.exports = { questions };
