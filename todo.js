// Pilih elemen
var input = document.getElementById("input-tugas");
var tombol = document.getElementById("tombol-tambah");
var daftar = document.getElementById("daftar-tugas");

// Array tugas
var tugas = [];

// FUNGSI: Tampilkan tugas
function tampilkan() {
  daftar.innerHTML = ""; // Kosongkan dulu

  for (var i = 0; i < tugas.length; i++) {
    var li = document.createElement("li");
    li.className = "item-tugas";
    li.innerHTML =
      "<span>" +
      tugas[i] +
      '</span><button onclick="hapus(' +
      i +
      ')">Hapus</button>';
    daftar.appendChild(li);
  }
}

// FUNGSI: Tambah tugas
function tambah() {
  var teks = input.value.trim();

  if (teks === "") {
    alert("Tugas kosong!");
    return;
  }

  tugas.push(teks); // Masukkan ke array
  localStorage.setItem("tugas", JSON.stringify(tugas)); // Simpan ke localStorage

  input.value = ""; // Kosongkan input
  tampilkan(); // Tampilkan ulang
}

// FUNGSI: Hapus tugas
function hapus(index) {
  tugas.splice(index, 1); // Hapus dari array
  localStorage.setItem("tugas", JSON.stringify(tugas)); // Simpan perubahan
  tampilkan(); // Tampilkan ulang
}

// FUNGSI: Muat data dari localStorage
function muat() {
  var data = localStorage.getItem("tugas");
  if (data !== null) {
    tugas = JSON.parse(data);
  }
  tampilkan();
}

// Event tombol
tombol.addEventListener("click", tambah);

// Jalankan saat halaman dimuat
muat();
