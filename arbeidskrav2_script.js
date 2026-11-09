const students = [
    { name: "Alice", age: 20, grade: "6", workexperience: 2 },
    { name: "Bob", age: 22, grade: "5", workexperience: 1 },
    { name: "Charlie", age: 19, grade: "4", workexperience: 0 },
    { name: "David", age: 21, grade: "5", workexperience: 3 },
    { name: "Eve", age: 23, grade: "6", workexperience: 4 },
    { name: "Frank", age: 20, grade: "3", workexperience: 1 },
    { name: "Grace", age: 22, grade: "2", workexperience: 2 },
    { name: "Hannah", age: 39, grade: "1", workexperience: 5 },
    { name: "Ian", age: 21, grade: "4", workexperience: 1 },
    { name: "Jack", age: 23, grade: "5", workexperience: 3 },
    { name: "Kathy", age: 20, grade: "6", workexperience: 4 },
    { name: "Liam", age: 22, grade: "3", workexperience: 2 },
    { name: "Mia", age: 19, grade: "2", workexperience: 1 },
    { name: "Noah", age: 21, grade: "1", workexperience: 0 },
    { name: "Olivia", age: 23, grade: "4", workexperience: 3 },
    { name: "Paul", age: 40, grade: "5", workexperience: 10 },
    { name: "Quinn", age: 22, grade: "6", workexperience: 0 },
    { name: "Ryan", age: 19, grade: "3", workexperience: 0 },
    { name: "Sophia", age: 21, grade: "2", workexperience: 0 },
    { name: "Tyler", age: 23, grade: "1", workexperience: 0 }
];

const grades = [
    { letter: "A", score: 6 },
    { letter: "B", score: 5 },
    { letter: "C", score: 4 },
    { letter: "D", score: 3 },
    { letter: "E", score: 2 },
    { letter: "F", score: 1}
];


//Lagrer lengden av students arrayet
let antallStudenter = students.length;
//Linker antallStudenter til HTML ID attributen "studentCount" så nettsiden oppdaterer seg med students.length
document.getElementById("studentCount").innerHTML = antallStudenter;
console.log("Antall studenter: " + antallStudenter);

//Deklarerer en variabel som starter på null, oppdateres senere
let totalKarakterer = 0;
//For så å iterere over key-value pairene til (grade:"tall")
for (const student of students)
    {
    //Summen av karakterene blir lagt til her, en etter en
    totalKarakterer += Number(student.grade)
    };

//Bruker totalKarakter som har summen av alle karakterene og deler den på antall studenter. Lagrer gjennomsnittet i en ny variabel
let gjennomsnittsKarakter = totalKarakterer / students.length;


//Switch casen bestemmer hvilket gjennomsnitt som tilhører hvilken bokstav
// switch (true) 
//     {
//     case (gjennomsnittsKarakter >= 5.5):
//         gjennomsnittsKarakter = "A";
//         break;
//     case (gjennomsnittsKarakter >= 4.5):
//         gjennomsnittsKarakter = "B";
//         break;
//     case (gjennomsnittsKarakter >= 3.5):
//         gjennomsnittsKarakter = "C";
//         break;
//     case (gjennomsnittsKarakter >= 2.5):
//         gjennomsnittsKarakter = "D";
//         break;
//     case (gjennomsnittsKarakter >= 1.5):
//         gjennomsnittsKarakter = "E";
//         break;
//     default:
//         gjennomsnittsKarakter = "F";
//    }


//Alternativ til switch-casen.
if (gjennomsnittsKarakter >= 5.5) {
    gjennomsnittsKarakter = "A";
} else if (gjennomsnittsKarakter >= 4.5) {
    gjennomsnittsKarakter = "B";
} else if (gjennomsnittsKarakter >= 3.5) {
    gjennomsnittsKarakter = "C";
} else if (gjennomsnittsKarakter >= 2.5) {
    gjennomsnittsKarakter = "D";
} else if (gjennomsnittsKarakter >= 1.5) {
    gjennomsnittsKarakter = "E";
} else {
    gjennomsnittsKarakter = "F";
}

//Linker gjennomsnittsKarakter til HTML ID attributen "averageGrade" så nettsiden oppdaterer seg
console.log(gjennomsnittsKarakter);
document.getElementById("averageGrade").innerHTML = gjennomsnittsKarakter;

//Tomme variabler for karakterer, oppdaterer i for-loopen med switch-case
let karakterA = 0;
let karakterB = 0;
let karakterC = 0;
let karakterD = 0;
let karakterE = 0;
let karakterF = 0;

//Logikk for oppdatering, har laget både en switch-case og en elif. Bruk den du vil
// for (const student of students)
//     {
//     switch (true) 
//         {
//         case (Number(student.grade) == 6):
//             karakterA++;
//             break; 
//         case (Number(student.grade) == 5):
//             karakterB++;
//             break;
//         case (Number(student.grade) == 4):
//             karakterD++;
//             break;
//         case (Number(student.grade) == 3):
//             karakterC++;
//             break;
//         case (Number(student.grade) == 2):
//             karakterE++;
//             break;
//         default:
//             karakterF++;
//         }
//     }; 

for (const student of students)
    if (Number(student.grade == 6)) {
        karakterA++;
    } else if (Number(student.grade == 5)) {
        karakterB++;
    } else if (Number(student.grade == 4)) {
        karakterC++;
    } else if (Number(student.grade == 3)) {
        karakterD++;
    } else if (Number(student.grade == 2)) {
        karakterE++;
    } else {
        karakterF++;
    }


//Formattert console.log()
console.log(`Karakter A: ${karakterA} Karakter B: ${karakterB}
Karakter C: ${karakterC} Karakter D: ${karakterD}
Karakter E: ${karakterE} Karakter F: ${karakterF}`);


//Linker til HTML ID attribute og viser på nettsiden
document.getElementById("gradeA").innerHTML = karakterA;
document.getElementById("gradeB").innerHTML = karakterB;
document.getElementById("gradeC").innerHTML = karakterC;
document.getElementById("gradeD").innerHTML = karakterD;
document.getElementById("gradeE").innerHTML = karakterE;
document.getElementById("gradeF").innerHTML = karakterF;


//Deklarerer en variabel som starter på null, oppdateres senere
let totalAlder = 0;
//For så å iterere over key-value pairene til (grade:"tall")
for (const student of students)
    {
    //Summen av karakterene blir lagt til her, en etter en
    totalAlder += Number(student.age)
    };

let gjennomsnittAlder = totalAlder / students.length;
console.log(gjennomsnittAlder);
document.getElementById("averageAge").innerHTML = gjennomsnittAlder;

//Samme som TotalAlder, start 0, oppdater senere
let rettFraVGS = 0;
//Itererer
for (const alder of students) 
    {
    /*Logikk for å ikke hente noe annet enn 19-åringene.
    Noe rart skjer om man skriver ";" bak siste parantes.
    3 blir plutselig til 20, noe som ikke stemmer*/
    if (alder.age == 19)
        //Oppdaterer
        rettFraVGS++
    };

console.log(rettFraVGS);
document.getElementById("highSchool").innerHTML = rettFraVGS;

//Samme som totalAlder og rettFraVGS
let arbeidsErfaring = 0;
//Iterate that shi
for (const erfaring of students)
    {
    //Logic that shi
    if (erfaring.workexperience > 0)
        //Update that shi
        arbeidsErfaring++
    };

//Siste console.log og HTML ID link
console.log(arbeidsErfaring);
document.getElementById("workExperience").innerHTML = arbeidsErfaring;