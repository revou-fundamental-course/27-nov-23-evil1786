function hitung() {
    let alas = document.getElementById("alas").value 
    let tinggi = document.getElementById("tinggi").value 
    let hasil = document.getElementById("hasil")
    var hsl = parseInt(alas) * parseInt(tinggi) / 2
    console.log(hsl)
    document.getElementById('hasil').value= hsl;  
}

function keliling() {
    let sisi1 = document.getElementById("sisi1").value
    let sisi2 = document.getElementById("sisi2").value
    let sisi3 = document.getElementById("sisi3").value
    let hasilKeliling = document.getElementById("hslKeliling")
    var kllg = parseInt(sisi1) + parseInt(sisi2) + parseInt(sisi3) 
    console.log(kllg)
    document.getElementById('hslKeliling').value = kllg; 
}