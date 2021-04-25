Part 1a
1. values added: 20
2. final result: 20
3. values added: 20
4. error: Uncaught ReferenceError: result is not defined
   The code will return an error because the variable 'result' is out of scope in line 13. It is only defined in the scope of the if statement.
5. error: Uncaught TypeError: Assignment to constant variable.
   The code will return an error because the variable 'result' is const, but we are trying to modify it in line 7.
6. error: Uncaught TypeError: Assignment to constant variable.
   The code will return an error because the variable 'result' is const, but we are trying to modify it in line 7.

Part 1b
1. 3 will be logged to console.
2. 150 will be logged to console.
3. 150 will be logged to console.
4. [50, 100, 150]
   The code will return this array because the variable 'discounted' is an array type and in the for loop, the discount math is computed and each discounted price is pushed to the array. Since [100, 200, 300] was the original array and the discount price was 0.5, then each item in the discounted array that is returned is half the price of the original value in the original array.
5. 'error: Uncaught ReferenceError: i is not defined' will be logged to console. This error occurrs because the variable 'i' is only defined within the scope of the for loop. Since the log to console line is outside the for loop, the variable 'i' is undefined at that point.
6. 'error: Uncaught ReferenceError: discountedPrice is not defined' will be logged to console. This error occurrs because the variable 'discountedPrice' is only defined within the scope of the for loop. Since the log to console line is outside the for loop, the variable 'discountedPrice' is undefined at that point.
7. 150 will be logged to console. This does not cause an error because the variable 'finalPrice' is within the scope of the function, and the log to console line is also within that scope and therefore 'finalPrice' is defined at that line.
8. [50, 100, 150] will be returned. This does not cause an error because the variable 'discounted' is within the scope of the function, and the return line is also within that scope and therefore 'discounted' is defined at that line, and the array with the discounted values is returned.
9. 'error: Uncaught ReferenceError: i is not defined' will be logged to console. This error occurrs because the variable 'i' is only defined within the scope of the for loop since it was declared using "let". Since the log to console line is outside the for loop, the variable 'i' is undefined at that point, which causes the error.
10. 3 will be logged to console. This does not cause an error because the variable 'length' is within the scope of the function, and the log to console line is also within that scope and therefore, 'length' is defined at that line.
11. [50, 100, 150] will be returned. This does not cause an error because the variable 'discounted' is within the scope of the function, and the return line is also within that scope and therefore 'discounted' is defined at that line, and the array with the discounted values is returned.
12. 
    1.  A. student.name
    2.  B. student["Grad Year"]
    3.  C. student.greeting()
    4.  D. student["Favorite Teacher"].name
    5.  E. student.courseLoad[0]
13. 
    1.  A. '32', because integers map to their exact string representation, so the '3' and '2' together makes '32' as a string
    2.  B. 1, because the '3' string gets converted to number type and then 3 - 2 = 1, when 3 is a number type like 2 is
    3.  C. 3, because null becomes 0 in math operations, and 3 + 0 = 3
    4.  D. '3null', because null gets converted to 'null' as a string like '3' is, and string concatenation makes the result '3null'
    5.  E. 4, because true becomes 1 in math operations, and 1 + 3 = 4
    6.  F. 0, because false becomes 0 and null becomes 0 in math operations, and 0 + 0 = 0
    7.  G. '3undefined', because undefined gets converted into a string, 'undefined' like '3' is and string concatenation makes the result '3undefined'
    8.  H. NaN, because undefined is NaN as a number and anything minus NaN is NaN
14. 
    1.  A. true, because string '2' gets converted to number type 2 and 2 > 1 is true
    2.  B. false, because the two strings are compared lexicographically, and the first character in '2' is greater than the first character in '12', so '2' < '12' is false
    3.  C. true, because string '2' gets converted to number type 2, and 2 == 2 is true
    4.  D. false, because === checks equality without type conversion and string '2' is not equal to number type 2
    5.  E. false, because true gets converted to number type 1, and 1 is not equal to 2
    6.  F. true, because Boolean(2) becomes true, since 2 is not 0, null, undefined, NaN, or "" and then true == true is true
15. === is a strict equality operator, which means that it checks equality without type conversion, while == does attempt type conversion before checkign equality.
16. Answer in part1b-question16.js
17. The result is [2, 4, 6]. Since the callback function passed in is doSomething, for every item in 'array', the modifyArray function calls the doSomething function on the item, which multiplies the item by 2 and returns it. Then, inside the for loop in the modifyArray function, the result from doSomething is pushed into an empty array newArr, which is the final result returned at the end and contains 2, 4, and 6.
18. Answer in part1b-question18.js
19. 1, 4, 3, 2