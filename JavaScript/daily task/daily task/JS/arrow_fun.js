 let f1 = () => console.log("Hello from arrow 1");
    f1();

    let f2 = (a, b) => console.log("Sum:", a + b);
    f2(5, 7);

    let f3 = (a, b) => a * b;
    console.log("Multiply:", f3(4, 9));

    let f4 = name => "Hi " + name;
    console.log(f4("Yuvaraj"));

    let f5 = x => x * x;
    console.log("Square:", f5(6));

    let f6 = n => n % 2 === 0;
    console.log("Even?", f6(11));

    let f7 = str => str.toUpperCase();
    console.log(f7("arrow"));

    let f8 = str => str.split("").reverse().join("");
    console.log(f8("mukund"));

    let f9 = (p, r, t) => (p * r * t) / 100;
    console.log("SI:", f9(2000, 5, 3));

    let f10 = arr => arr.length;
    console.log("Array Length:", f10([2,4,6,8]));

    let f11 = arr => arr.reduce((a, b) => a + b, 0);
    console.log("Array Sum:", f11([10, 20, 30]));

    let f12 = (a, b) => a > b ? a : b;
    console.log("Max:", f12(15, 9));

    let f13 = (a, b) => a < b ? a : b;
    console.log("Min:", f13(15, 9));

    let f14 = c => (c * 9) / 5 + 32;
    console.log("C→F:", f14(28));

    let f15 = n => n > 0 ? "Positive" : "Negative";
    console.log(f15(-12));

    let f16 = n => { let fact = 1; for (let i=1;i<=n;i++) fact *= i; return fact; };
    console.log("Factorial:", f16(6));

    let f17 = (s1, s2) => s1 + " " + s2;
    console.log(f17("Arrow", "Function"));

    let f18 = arr => arr.map(x => x * 3);
    console.log("Triple:", f18([1,2,3]));

    let f19 = (a, b, c) => (a + b + c) / 3;
    console.log("Average:", f19(10, 20, 40));

    let f20 = r => 3.14 * r * r;
    console.log("Circle Area:", f20(10));

    let f21 = n => n.toString().length;
    console.log("Digits:", f21(123456));

    let f22 = word => word.includes("z");
    console.log("Contains 'z'?", f22("amazing"));

    let f23 = arr => Math.max(...arr);
    console.log("Array Max:", f23([1,3,9,4]));

    let f24 = arr => Math.min(...arr);
    console.log("Array Min:", f24([1,3,9,4]));

    let f25 = s => s.charAt(0).toUpperCase() + s.slice(1);
    console.log(f25("tamil"));

    let f26 = n => n % 10;
    console.log("Last digit:", f26(456));

    let f27 = n => Math.floor(Math.random() * n);
    console.log("Random < 100:", f27(100));

    let f28 = n => n % 5 === 0;
    console.log("Divisible by 5?", f28(45));

    let f29 = arr => arr.filter(x => x % 2 === 0);
    console.log("Even numbers:", f29([1,2,3,4,5,6]));

    let f30 = str => str.length;
    console.log("String length:", f30("Anonymous"));

    let f31 = arr => arr.join("-");
    console.log("Joined:", f31(["JS","Arrow","Func"]));

    let f32 = num => num ** 3;
    console.log("Cube:", f32(4));

    let f33 = year => (year % 4 === 0 ? "Leap Year" : "Not Leap Year");
    console.log("Leap Year?", f33(2024));

    let f34 = s => s.split(" ").length;
    console.log("Word count:", f34("Arrow functions are cool"));

    let f35 = arr => arr.sort((a,b)=>a-b);
    console.log("Sorted:", f35([5,2,9,1]));

    let f36 = () => new Date().getFullYear();
    console.log("Year:", f36());

    let f37 = arr => arr.every(x => x > 0);
    console.log("All positive?", f37([2,3,4]));

    let f38 = arr => arr.some(x => x < 0);
    console.log("Has negative?", f38([-1,2,3]));

    let f39 = str => str.replace("bad", "good");
    console.log(f39("This is a bad day"));

    let f40 = n => n === 1 ? 1 : n * f40(n-1);
    console.log("Recursive Factorial:", f40(5));