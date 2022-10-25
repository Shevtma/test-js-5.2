# There are different types of JavaScript operators:

1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators
4. Logical Operators
5. Conditional Operators
6. Type Operators

## JavaScript Arithmetic Operators
Arithmetic operators are used to perform arithmetic on numbers.

|Operator|Description|
|--------|-----------|
| + |Addition|
| - |Subtraction|
| * |Multiplication|
| ** |Exponentiation (ES2016)|
| / |Division|
| % |Modulus (Division Remainder)|
| ++ |Increment|
| -- |Decrement|

## JavaScript Assignment Operators
Assignment operators assign values to JavaScript variables.

|Operator|Example|Same As|
|--------|-------|-------|
|=|x = y|x = y|
|+=|x += y|x = x + y|
|-=|x -= y|x = x - y|
|*=|x *= y|x = x * y|
|/=|x /= y|x = x / y|
|%=|x %= y|x = x % y|
|**=|x **= y|x = x ** y|

The `addition assignment operator (+=)` adds a value to a variable.

### Adding JavaScript Strings

The `+ operator` can also be used to add (concatenate) strings. When used on strings, the + operator is called the concatenation operator.
The `+= assignment operator` can also be used to add (concatenate) strings

### Adding Strings and Numbers

Adding two numbers, will return the sum, but adding a number and a string will return a string.

## JavaScript Comparison Operators

|Operator|Description|
|--------|-----------|
|==|equal to|
|===|equal value and equal type|
|!=|not equal|
|!==|not equal value or not equal type|
|>|greater than|
|<|less than|
|>=|greater than or equal to|
|<=|less than or equal to|
|?|ternary operator|

## JavaScript Logical Operators

|Operator|Description|
|--------|-----------|
|&&|logical and|
||||logical or|
|!|logical not|

## JavaScript Type Operators

|Operator|Description|
|--------|-----------|
|typeof|Returns the type of a variable|
|instanceof|Returns true if an object is an instance of an object type|

## JavaScript Bitwise Operators

Bit operators work on 32 bits numbers.

Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.

|Operator|Description|Example|Same as|Result|Decimal|
|--------|-----------|-------|-------|------|-------|
|&|AND|5 & 1|0101 & 0001|0001| 1|
|\||OR|5 \| 1|0101 \| 0001|0101| 5|
|~|NOT|~ 5| ~0101|1010|10|
|^|XOR|5 ^ 1|0101 ^ 0001|0100|4|
|<<|left shift|5 << 1|0101 << 1|1010|10|
|>>|right shift|5 >> 1|0101 >> 1|0010|2|
|>>>|unsigned right shift|5 >>> 1|0101 >>> 1|0010|2|

# Динамическая типизация данных

В JavaScript одной и той же переменной могут быть присвоены значения разных типов, например:

```let x;           // Значение переменной x не определено
x = 5;           // В переменной x хранится число
x = "John";      // В переменной x хранится строка
```