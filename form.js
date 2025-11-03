let inputNama = document.getElementById("nama");
let inputKota = document.getElementById("kota");
let inputPesan = document.getElementById("pesan");

inputNama.addEventListener("input",function(event) {
    const hasilNama = document.getElementById("hasil-nama");
    console.log(event);
    hasilNama.textContent = event.target.value;
});

// inputKota.addEventListener()

inputKota.addEventListener("input",function(event){
    const hasilKota = document.getElementById("hasil-kota");
    console.log(event);
    hasilKota.textContent = event.target.value;
});

inputPesan.addEventListener("input",function(event){
    const hasilPesan = document.getElementById("hasil-pesan");
    console.log(event);
    hasilPesan.textContent = event.target.value;
});



// const label = document.getElementsByClassName("input-label");
const label = document.getElementsByTagName("label");

for(urutan = 0; urutan < label.length;urutan++){
    label[urutan].style.display = "block"
    label[urutan].style.color = "blue"
    label[urutan].style.fontSize = "10px"
}

const input = document.getElementsByTagName("input");
for(i = 0;i < input.length;i++){
    input[i].style.border = "1px solid red"
}