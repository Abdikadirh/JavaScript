// // Deklarera variabler och tilldela värden
// let firstName = "Abdikadir";
// let lastName = "Hussein";
// let age = 25;
// prompt (prompt, age);
// // Skriv ut meningen med console.log()
// console.log(`Hej, jag heter ${firstName} ${lastName} och jag är ${age} år gammal.`);

// let a = 5;
// let b = 10;

// console.log(a);
// console.log(b);

// let c = a;
// a = b;
// b = c;

// console.log(a);
// // console.log(b);

// let firstName = "Abdikadir";
// let middleName = "Abdullahi";
// let lastName = "Hussein";

// let fullName = firstName+" "+middleName+" "+lastName;

// console.log("My full name is: " + fullName);

// let fullName = `${firstName} ${middleName} ${lastName}`;	

// console.log("My full name is :", `${fullName}`);

// let radius = 5;
// let area = Math.PI * radius * radius;
// console.log(`Omkretsen av en cirkel med radie ${radius} är:`, area);

// let omkrets = 2 * Math.PI * radius; 
// console.log(omkrets);

// 16OKt

// Grundläggande Aritmetiska Operationer (Lätt) Uppgift: Deklarera två variabler a och b med värdena 12 och 5. Beräkna och skriv ut summan, differensen, produkten, kvoten och resten av a och b.

// Exempel på utskrift:

// makefile Kopiera kod a = 12, b = 5 Summa: 17 Differens: 7 Produkt: 60 Kvot: 2.4 Rest: 2
// let a = 12;
// let b = 5;
// let summa = a + b;
// let differens = a - b;
// let produkt = a * b;
// let kvot = a / b;
// let rest = a % b;
// console.log("Summa:", summa);
// console.log("Differens:", differens);
// console.log("Produkt:", produkt);
// console.log("Kvot:", kvot);
// console.log("Rest:", rest);


// Övning 2: Temperaturkonvertering (Lätt) Uppgift: Skriv ett program som omvandlar temperatur från Celsius till Fahrenheit. Be användaren ange temperaturen i Celsius. Använd formeln F = C * 9/5 + 32. Skriv ut resultatet.

// Övning 3: Jämförelseoperatorer (Medel) Uppgift: Be användaren ange två tal. Jämför talen och skriv ut vilket som är störst, eller om de är lika.

// let tal1 = Number(prompt("Ange ett tal:"));
// let tal2 = Number(prompt("Ange ett till tal:"));
// if (tal1 > tal2) {
//     console.log(tal1, " är större.");
// } else if (tal2 > tal1) {
//     console.log(tal2, " är större.");
// } else {
//     console.log("De är lika.");
// }

// Övning 4: Even eller Udda (Medel) Uppgift: Skriv ett program som ber användaren ange ett tal. Använd modulusoperatorn % för att avgöra om talet är jämnt eller udda. Skriv ut resultatet.
// let number = Number(prompt("(Even or odd)Ange ett tal:"));
// let result = number % 2;
// console.log(result);4

// if (result == 0) {
//     console.log("Talet är jämnt.");
// } else if (result == isNaN) {
//     console.log("Talet är NaN.");
// } else {
//     console.log("Talet är udda.");
// }

// Övning 5: Logiska Operatorer (Medel) Uppgift: Be användaren ange sin ålder och om de har giltig legitimation (true/false). Använd logiska operatorer för att avgöra om personen får komma in på en klubb (minst 18 år och giltig legitimation). Skriv ut om de får komma in eller inte.

// let person = prompt("Har du legitimation ja/nej?");
// let personsAge =prompt("Är du 18 år ja/nej?");
// if (person === "ja" || "JA" && personsAge === "ja" || "JA") {
//     console.log("Du kan komma in.");
// } else {        
//     console.log("Du kan inte komma in.");JA
// }


// Övning 6: Enkel Kalkylator (Medel) Uppgift: Skriv ett program som ber användaren ange två tal och en operator (+, -, *, /, %). Utför operationen och skriv ut resultatet. Hantera division med noll genom att kontrollera om nämnaren är noll.
// Be användaren ange två tal
// let number1 = parseFloat(prompt("Ange det första talet:"));
// let operator = prompt("Ange en operator (+, -, *, /, %):");
// let number2 = parseFloat(prompt("Ange det andra talet:"));

// let result;

// // Kontrollera vilken operation som ska utföras
// if (operator === "+") {
//   result = number1 + number2;
// } else if (operator === "-") {
//   result = number1 - number2;
// } else if (operator === "*") {
//   result = number1 * number2;
// } else if (operator === "/") {
//   // Hantera division med noll
//   if (number2 !== 0) {
//     result = number1 / number2;
//   } else {
//     result = "Fel: Division med noll är inte tillåten!";
//   }
// } else if (operator === "%") {
//   // Hantera modulus med noll
//   if (number2 !== 0) {
//     result = number1 % number2;
//   } else {
//     result = "Fel: Modulus med noll är inte tillåten!";
//   }
// } else {
//   result = "Fel: Ogiltig operator!";
// }

// // Skriv ut resultatet
// console.log(`Resultatet är: ${result}`);
