let f1 = function() { console.log("Hello from anonymous 1"); };
    f1();

    let f2 = function(a, b) { console.log("Sum:", a + b); };
    f2(5, 3);

    let f3 = function(a, b) { return a * b; };
    console.log("Multiply:", f3(4, 6));

    let f4 = function(name) { return "Hi " + name; };
    console.log(f4("Saravanan"));

    let f5 = function(x) { return x * x; };
    console.log("Square:", f5(7));

    let f6 = function(n) { return n % 2 === 0; };
    console.log("Even?", f6(10));

    let f7 = function(str) { return str.toUpperCase(); };
    console.log(f7("hello"));

    let f8 = function(str) { return str.split("").reverse().join(""); };
    console.log(f8("mapla"));

    let f9 = function(p, r, t) { return (p * r * t) / 100; };
    console.log("SI:", f9(1000, 5, 2));

    let f10 = function(arr) { return arr.length; };
    console.log("Array Length:", f10([1, 2, 3, 4]));

    let f11 = function(arr) { let sum = 0; arr.forEach(x => sum += x); return sum; };
    console.log("Sum of Array:", f11([10, 20, 30]));

    let f12 = function(a, b) { return a > b ? a : b; };
    console.log("Max:", f12(8, 4));

    let f13 = function(a, b) { return a < b ? a : b; };
    console.log("Min:", f13(8, 4));

    let f14 = function(tempC) { return (tempC * 9) / 5 + 32; };
    console.log("C→F:", f14(30));

    let f15 = function(x) { return x > 0 ? "Positive" : "Negative"; };
    console.log(f15(-7));

    let f16 = function(n) { let fact = 1; for (let i = 1; i <= n; i++) fact *= i; return fact; };
    console.log("Factorial:", f16(5));

    let f17 = function(str1, str2) { return str1 + " " + str2; };
    console.log(f17("Good", "Morning"));

    let f18 = function(arr) { return arr.map(x => x * 2); };
    console.log("Doubled:", f18([1,2,3]));

    let f19 = function(a, b, c) { return (a + b + c) / 3; };
    console.log("Average:", f19(10, 20, 30));

    let f20 = function(radius) { return 3.14 * radius * radius; };
    console.log("Circle Area:", f20(6));

    let f21 = function(n) { return n.toString().length; };
    console.log("Digits:", f21(12345));

    let f22 = function(word) { return word.includes("a"); };
    console.log("Contains 'a'?", f22("mapla"));

    let f23 = function(arr) { return Math.max(...arr); };
    console.log("Array Max:", f23([2,5,9,1]));

    let f24 = function(arr) { return Math.min(...arr); };
    console.log("Array Min:", f24([2,5,9,1]));

    let f25 = function(s) { return s.charAt(0).toUpperCase() + s.slice(1); };
    console.log(f25("javascript"));

    let f26 = function(n) { return n % 10; };
    console.log("Last digit:", f26(347));

    let f27 = function(n) { return Math.floor(Math.random() * n); };
    console.log("Random under 50:", f27(50));

    let f28 = function(n) { return n % 5 === 0; };
    console.log("Divisible by 5?", f28(25));

    let f29 = function(arr) { return arr.filter(x => x % 2 === 0); };
    console.log("Even numbers:", f29([1,2,3,4,5,6]));

    let f30 = function(str) { return str.length; };
    console.log("String length:", f30("anonymous"));