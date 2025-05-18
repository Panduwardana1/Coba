

for (i = 1; i < 5; i++) { // loop luar 
     for (j = 1; j < 3; j++ ) { // loop 2
          for (u = 1; u < 4; u++) {
               console.log("iterasi pada",i, j, u);
          }
     }
}

const angka = [1,3,45,6,3,56,777,43,0,9];

angka.sort((b ,a) => b - a)

for (let i = 0; i < angka.length; i++) {
     console.log(angka);
}
