function greet() {
      console.log("Hello, Welcome!");
    }
    greet();

    function add(a, b) {
      console.log("Sum:", a + b);
    }
    add(5, 10);

    function multiply(a, b) {
      return a * b;
    }
    console.log("Multiply:", multiply(4, 3));

    function square(n) {
      return n * n;
    }
    console.log("Square:", square(6));

    function isEven(n) {
      return n % 2 === 0;
    }
    console.log("IsEven:", isEven(7));

    function getName() {
      return "Saravanan";
    }
    console.log("Name:", getName());

    function greetUser(name) {
      console.log("Hello " + name);
    }
    greetUser("Mapla");

    function areaOfCircle(r) {
      return 3.14 * r * r;
    }
    console.log("Circle Area:", areaOfCircle(5));

    function factorial(n) {
      let fact = 1;
      for (let i = 1; i <= n; i++) {
        fact *= i;
      }
      return fact;
    }
    console.log("Factorial:", factorial(5));

    function reverseString(str) {
      return str.split("").reverse().join("");
    }
    console.log("Reverse:", reverseString("hello"));

    function toUpper(str) {
      return str.toUpperCase();
    }
    console.log("Upper:", toUpper("zoho"));

    function minValue(a, b) {
      return a < b ? a : b;
    }
    console.log("Min:", minValue(10, 6));

    function maxValue(a, b) {
      return a > b ? a : b;
    }
    console.log("Max:", maxValue(10, 6));

    function concatStrings(s1, s2) {
      return s1 + " " + s2;
    }
    console.log("Concat:", concatStrings("Hello", "World"));

    function simpleInterest(p, r, t) {
      return (p * r * t) / 100;
    }
    console.log("SI:", simpleInterest(1000, 5, 2));

    function celsiusToFahrenheit(c) {
      return (c * 9) / 5 + 32;
    }
    console.log("C→F:", celsiusToFahrenheit(37));

    function checkPositive(n) {
      return n > 0 ? "Positive" : "Negative";
    }
    console.log("Check:", checkPositive(-4));

    function getLength(arr) {
      return arr.length;
    }
    console.log("Length:", getLength([1,2,3,4,5]));

    function sumArray(arr) {
      let sum = 0;
      for (let num of arr) sum += num;
      return sum;
    }
    console.log("Array Sum:", sumArray([10, 20, 30]));

    function randomNumber() {
      return Math.floor(Math.random() * 100);
    }
    console.log("Random:", randomNumber());