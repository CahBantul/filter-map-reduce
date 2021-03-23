const angka = [-1, 3, -2, 5, 6, 7, 8, 2, 1, 0, 4, 6, 7];

// menggunakan for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 5) {
//     newAngka.push(angka[i]);
//   }
// }
// console.log(newAngka);

// menggunakan filter
// const newAngka = angka.filter(a => a > 6);
// console.log(newAngka);

// map
// kalikan semua angka dengan 3
// const newAngka = angka.map(a => a * 3);
// console.log(newAngka);

// reduce
// jumlahkan seluruh elemen pada array
// const newAngka = angka.reduce(
//   (accumulator, currentValue) => accumulator + currentValue
// );
// console.log(newAngka);

// Method chaining
// cari angka > 5
// kalikan 3
// jumlahkan
const hasil = angka
  .filter((a) => a > 5)
  .map((a) => a * 3)
  .reduce((acc, curr) => acc + curr);
console.log(hasil);
