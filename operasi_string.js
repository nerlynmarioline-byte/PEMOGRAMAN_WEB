// operasi string

// char at
let dataMhs= "doni mahasisea teknik informatika";
console.log(dataMhs);
console.log(dataMhs.charAt(3));

// concat
let namaDepan = "doni";
let namaBelakang = "dino";
let namaLengkap = namaDepan.concat(" ", namaBelakang);
console.log(namaLengkap);

// index of
console.log(dataMhs.indexOf("mahasiswa"));

// substring
console.log(dataMhs.substring(5, 12));
console.log(dataMhs.substring(12, 5));

// slice
console.log(dataMhs.slice(5, 15));
console.log(dataMhs.slice(15, 5)); // data kosong

// replace
ubahData = dataMhs.replace("deni", "dion");
console.log(ubahData);

// tolower
console.log(dataMhs.toLowerCase());

// uppercase
console.log(dataMhs.toUpperCase());