var inputgram = document.getElementById("emas-gram");
var tombol = document.getElementById("hitung");
var hasil = document.getElementById("hasil");
var historylist = document.getElementById("history");

var hargaEmasRupiah = 1100000;

function muatHIstory(){
        let data = localStorage.getItem("zakathistory");

        if(!data) {
            historylist.innerHTML = "";
            return;
        }

        let riwayat = JSON.parse(data);
        historylist.innerHTML = "";

        riwayat.forEach(function(item){
            let li = document.createElement("li");
            li.textContent = item;
            historylist.appendChild(li);
        });
}

function simpanHistory(text){
    let data = localStorage.getItem("zakathistory");
    let riwayat = data ? JSON.parse(data) : [];

    riwayat.unshift(text)
    if(riwayat.length > 10){
        riwayat.pop();
    }

    localStorage.setItem("zakathistory" , JSON.stringify(riwayat));
    muatHIstory();
}

tombol.addEventListener("click", function() {
    var emas = Number(inputgram.value);
    var nisab = 85;

    if (!emas || emas <= 0) {
        hasil.textContent = "Masukkan jumlah emas yang valid!";
        return;
    }

    if (emas < nisab) {
        let pesan = `Emas ${emas} gram → Belum wajib zakat.`;
        hasil.textContent = pesan;
        simpanHistory(pesan);
    } else {
    
        var zakat = emas * 0.025;
        var rupiah = zakat * hargaEmasRupiah;

        let pesan = `Zakat emas: ${zakat.toFixed(2)} gram (≈ Rp ${rupiah.toLocaleString()})`;
        hasil.textContent = pesan;
        simpanHistory(pesan);
    }

    inputgram.value = "";
});

muatHIstory();



