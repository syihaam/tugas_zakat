//TODO: isi variabel di bawah dgn fungsi getElementById sesuai id
var inputGram = document.getElementById("emas-gram");
var tombol = document.getElementById("hitung");
var hasil = document.getElementById("hasil");
var historyList = document.getElementById("history");

//TODO: isi dgn nilai harga emas/gram rumahan
var hargaEmasRupiah = 2000000;

function muatHistory(){
    let data = localStorage.getItem("zakatHistory");

    if(data === null){
        data = [];
    } else {
        data = JSON.parse(data);
    }

    historyList.innerHTML = "";
    for(var i = 0; i < data.length; i++){
        var li = document.createElement("li");
        li.innerHTML = '<span>' + data[i] + '</span>';
        historyList.appendChild(li);
    }

    console.log(data);
}

//simpan ke localStorage key `zakatHistory`
function simpanHistory(text){
    let data = localStorage.getItem("zakatHistory");
    if(data === null){
        data = [];
    } else {
        data = JSON.parse(data);
    }

    data.unshift(text);

    if(data.length > 10){
        data = data.slice(0, 10);
    }

    localStorage.setItem("zakatHistory", JSON.stringify(data));
    muatHistory();
}

tombol.addEventListener("click", function(){
    //TODO: ambil nilai input emas, parsing ke number, nisab = 85
    var input = inputGram.value.trim();
    var emas = parseFloat(input);
    var nisab = 85;

    console.log(emas);

    //TODO: jika input tidak valid
    if(input === "") {
        alert("KOSONG!!!!");
        hasil.textContent = "Tolong coba lagi";
        return;
    }

    //TODO: jika emas < nisab
    if(emas < nisab){
        hasil.textContent = "Belum Wajib Zakat";
        simpanHistory(`${emas} gram maka "Belum Wajib Zakat"`);
    } else {
        //TODO: hitung zakat = emas*0.025
        let zakat = emas * 0.025;
        let rupiah = zakat * hargaEmasRupiah;

        hasil.textContent = `Wajib Zakat Emas ${zakat} gram atau Rp.${rupiah.toLocaleString()}`;
        simpanHistory(`${emas} gram maka wajib zakat sebesar Rp.${rupiah.toLocaleString()}`);
    }

    console.log(hasil);
    inputGram.value = "";
});

//TODO: panggil muatHistory() agar riwayat langsung tampil
muatHistory();
