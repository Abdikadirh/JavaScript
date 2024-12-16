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



// Övning: Temperaturbedömning (Lätt)

// Uppgift:

// Be användaren ange temperaturen i Celsius. Om temperaturen är över 30 grader, skriv ut "Det är väldigt varmt ute." Om temperaturen är mellan 20 och 30 grader, skriv ut "Det är varmt ute." Om temperaturen är mellan 10 och 20 grader, skriv ut "Det är svalt ute." Annars, skriv ut "Det är kallt ute."

// Tips: Kom ihåg att konvertera användarinmatningen till ett nummer.

// let temperatur = Number(prompt("Enter temperature in Celsius"));

// if (temperatur > 30) {
//     console.log("Det är väldigt varmt ute.");
// } else if (temperatur >= 20 && temperatur <= 30); {  
//     console.log("Det är varmt ute.");
// } else if (temperatur >= 10 && temperatur <= 20) {
//         console.log("Det är svalt ute.");
// } else {
//      console.log("Det är kallt ute.");
// }

// Övning: Betygskonvertering (Medel)

// Uppgift:

// Be användaren ange ett numeriskt betyg mellan 0 och 100. Konvertera betyget till en bokstav enligt följande: 90-100: A 80-89: B 70-79: C 60-69: D 0-59: F Skriv ut det motsvarande bokstavsbetyget.

// Tips: Använd flera if-else-if-satser för att kontrollera intervallen.

// let betyg = Number(prompt("Enter a number between 0 and 100"));
// if (betyg >= 90 && betyg <= 100) {
//     console.log("A");        
// } else if (betyg >= 80 && betyg <= 89) {
//     console.log("B");
// } else if (betyg >= 70 && betyg <= 79) {
//     console.log("C");
// } else if (betyg >= 60 && betyg <= 69) {
//     console.log("D");
// } else if (betyg >= 0 && betyg <= 59) {
//     console.log("F");        
// } else {
//     console.log("Not a number");
// }

// Övning: Butiksrabatt (Medel)

// Uppgift:

// Be användaren ange sin kundtyp: "Ny" eller "Återkommande". Be användaren ange köpbeloppet. Om kunden är "Återkommande" och köpbeloppet är över 500 kr, ge 15% rabatt. Om kunden är "Ny" och köpbeloppet är över 500 kr, ge 10% rabatt. Skriv ut det slutliga priset efter rabatt.

// Tips: Använd logiska operatorer för att kombinera villkor.

// Be användaren ange sin kundtyp
// let kundtyp = prompt("Ange din kundtyp ('Ny' eller 'Återkommande'):").trim();
// let köpbelopp = Number(prompt("Ange ditt köpbelopp i kronor:"));

// // Kontrollera om kundtypen och beloppet är giltiga
// if (kundtyp === "Återkommande" && köpbelopp > 500) {
//   let rabatt = köpbelopp * 0.15;
//   let slutligtPris = köpbelopp - rabatt;
//   console.log(`Du får 15% rabatt. Slutligt pris är: ${slutligtPris.toFixed(2)} kr`);
// } else if (kundtyp === "Ny" && köpbelopp > 500) {
//   let rabatt = köpbelopp * 0.10;
//   let slutligtPris = köpbelopp - rabatt;
//   console.log(`Du får 10% rabatt. Slutligt pris är: ${slutligtPris.toFixed(2)} kr`);
// } else {
//   console.log(`Ingen rabatt ges. Slutligt pris är: ${köpbelopp.toFixed(2)} kr`);
// }

// Övning: Trafikljus (Medel)

// Uppgift:

// Be användaren ange färgen på ett trafikljus: "Röd", "Gul" eller "Grön". Skriv ut följande meddelanden baserat på färgen: "Stanna" för "Röd". "Förbered att stanna" för "Gul". "Kör" för "Grön". Hantera även ogiltiga inmatningar.

// Tips: Använd if-else-satser och tänk på att göra inmatningen skiftlägesokänslig med toLowerCase().

// Be användaren ange färgen på trafikljuset
// let trafikljus = prompt("Ange färgen på trafikljuset ('Röd', 'Gul', 'Grön'):").trim().toLowerCase();

// // Kontrollera trafikljusets färg och skriv ut rätt meddelande
// if (trafikljus === "röd") {
//   console.log("Stanna");
// } else if (trafikljus === "gul") {
//   console.log("Förbered att stanna");
// } else if (trafikljus === "grön") {
//   console.log("Kör");
// } else {
//   console.log("Ogiltig inmatning. Ange 'Röd', 'Gul' eller 'Grön'.");
// }

// Övning: Nummer i Ord (Svår)

// Uppgift:

// Be användaren ange ett tal mellan 0 och 5. Konvertera talet till dess motsvarande ord och skriv ut det. 0: "Noll" 1: "Ett" 2: "Två" 3: "Tre" 4: "Fyra" 5: "Fem" Om talet är utanför intervallet, skriv ut "Ogiltigt tal".

// Tips: Använd if-else-satser eller en switch-sats.

let tal = Number(prompt("Ange ett tal mellan 0 och 5:"));
if (tal === 0) {
    console.log("noll");
    
} else if (tal === 1) {
    console.log("ett");
    
} else if (tal === 2) {
    console.log("två");
    
} else if (tal === 3) {
    console.log("tre");
} else if (tal === 4) {
    console.log("fyra");
    
} else if (tal === 5) {
    console.log("fem");
    
} else {
    console.log("Ogiltigt tal");
    
}