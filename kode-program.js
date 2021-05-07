var dataKegiatan = ["Mandi", "Olahraga"];

function showKegiatan() {
    var listKegiatan = document.getElementById("list-dilakukan");
    listKegiatan.innerHTML = "";
    //tulisan delet dan edit
    for (let i = 1; i < dataKegiatan.length; i++) {
    var btnEdit = "<a href='#' onclick='editKegiatan("+i+")'>Edit</a>";
    var btnHapus ="<a href='#' onclick='hapusKegiatan("+i+")'>Hapus</a>";   
        
    listKegiatan.innerHTML += "<li>" +i+". "+ dataKegiatan[i] + " ["+ btnEdit + " | " + btnHapus + "]" + "</li>";
    }
}
function addKegiatan() {
    var input = document.querySelector("input[name=to-do]");
    dataKegiatan.push(input.value);
    showKegiatan();
}
function editKegiatan(id) {
    var newKegiatan = prompt("Masukan Nama Baru!", dataKegiatan[id]);
    dataKegiatan[id] = newKegiatan;
    showKegiatan();
}
function hapusKegiatan(id) {
    dataKegiatan.splice(id, 1);
    showKegiatan();
}
showKegiatan();