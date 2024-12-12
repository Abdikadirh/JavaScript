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

// // let fullName = firstName+" "+middleName+" "+lastName;

// // console.log("My full name is: " + fullName);

// let fullName = `${firstName} ${middleName} ${lastName}`;	

// console.log("My full name is :", `${fullName}`);

// let radius = 5;
// let area = Math.PI * radius * radius;
// console.log(`Omkretsen av en cirkel med radie ${radius} är:`, area);

// let omkrets = 2 * Math.PI * radius; 
// console.log(omkrets);

// 6 Övning: Implicit och explicit typkonvertering (Medel) Uppgift:

// Deklarera variablerna x = "5" (string) och y = 3 (number). Utför följande operationer och skriv ut resultaten: x + y Number(x) + y x * y x / y x - y x + y + y x + (y + y) Förklara skillnaderna i resultaten. Lösningstips:

// Förstå hur JavaScript hanterar typkonvertering vid olika operationer.

// let x = "5";
// let y = 3; 
// let xy = x + y;
// console.log(xy);
// let xy =Number(x) + y
// console.log(typeof xy);
// let xy = x * y;
// console.log(typeof xy);
// let xy = x / y;
// console.log(typeof xy);
// let xy = x - y;
// console.log(typeof xy);
// let xy = x + y + y;
// console.log(xy);
// console.log(typeof xy);
// let xy = x + (y + y);
// console.log(xy);
// console.log(typeof xy);

// 8 Övning: Skapa en enkel kalkylator för två tal (Svår) Uppgift:

// Be användaren att ange två tal via prompt(). Spara talen i variabler och konvertera dem till nummer. Be användaren välja en operation: addition, subtraktion, multiplikation eller division. Utför operationen och skriv ut resultatet. Hantera fall där användaren matar in ogiltiga värden eller försöker dela med noll. Lösningstips:

// Använd switch eller if-else för att hantera val av operation. Använd isNaN() för att kontrollera giltigheten av inmatade värden.

// let inputValue = prompt("Enter a number");
// let numberValue = Number(inputValue);
// if (!isNaN(numberValue)) {
//      console.log(numberValue, typeof numberValue);
//     } else { 
//      console.log("Not a number");
// }

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

// Övning 1: Använda toUpperCase() och toLowerCase() (Lätt) Uppgift:

// Be användaren ange en mening. Konvertera hela meningen till versaler och skriv ut resultatet. Konvertera hela meningen till gemener och skriv ut resultatet.

// let mening = prompt("Enter a sentence");
// // let versaler = mening.toUpperCase();
// // console.log(versaler);
// let gemener = mening.toLowerCase();
// console.log(gemener);

// Övning 2: Använda charAt() och slice() (Lätt) Uppgift:

// Deklarera en strängvariabel med värdet "JavaScript". Skriv ut det första tecknet i strängen med charAt(). Skapa en ny sträng som innehåller de första fyra tecknen i originalsträngen med slice().

// let strängVariabel = "JavaScript"; 
// // let förstaTeckn = strängVariabel.charAt(0);
// // console.log( förstaTeckn);

// let förstFyraTecknen = strängVariabel.slice(1, 7);
// console.log(förstFyraTecknen);

// Övning 4: Använda replace() och includes() (Medel) Uppgift:

// Deklarera en strängvariabel med värdet "Jag älskar programmering". Kontrollera om strängen innehåller ordet "programmering" med includes(). Ersätt ordet "programmering" med "JavaScript" med replace(). Skriv ut den nya strängen.

// let strängVariabel = "Jag älskar programmering";
// let test = strängVariabel.includes("programmering");
// console.log(test);
// let nytest = strängVariabel.replace("programmering", "JavaScript");
// console.log(nytest);    
