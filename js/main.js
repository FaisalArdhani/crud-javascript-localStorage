// Funtion validasi form setelah memasukkan data
function validateForm() {
    var name = document.getElementById("name").value;
    var umur = document.getElementById("umur").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;

    if (name == "") {
        alert("Masukkan Nama, Bro!");
        return false;
    }

    if (umur == "") {
        alert("Masukkan Umur, Bro!");
        return false;
    } else if (umur < 1) {
        alert("Umur tidak boleh nol atau kurang dari nol");
        return false;
    }

    if (address == "") {
        alert("Masukkan Alamat, Bro!");
        return false;
    }

    if (email == "") {
        alert("Masukkan Email, Bro!");
        return false;
    } else if (!email.includes("@")) {
        alert("Email tidak valid");
        return false;
    }

    return true;
}

// Function untuk menampilkan data
function showData() {
    var peopleList;
    if (localStorage.getItem("peopleList") == null) {
        peopleList = [];
    } else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    var html = "";

    peopleList.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.umur + "</td>";
        html += "<td>" + element.address + "</td>";
        html += "<td>" + element.email + "</td>";
        html += '<td><button onclick="deleteData(' + index + ')" class="btn btn-danger">Delete</button><button onclick="updateData(' + index + ')" class="btn btn-warning m-2">Edit</button></td>';
        html += "</tr>";
    });

    document.querySelector("#crudTable tbody").innerHTML = html;
}

// Memuat semua data saat dokumen atau halaman dimuat
window.onload = showData();

// Function untuk menambah data
function tambahData() {
    if (validateForm()) {
        var name = document.getElementById("name").value;
        var umur = document.getElementById("umur").value;
        var address = document.getElementById("address").value;
        var email = document.getElementById("email").value;

        var peopleList;
        if (localStorage.getItem("peopleList") == null) {
            peopleList = [];
        } else {
            peopleList = JSON.parse(localStorage.getItem("peopleList"));
        }

        peopleList.push({
            name: name,
            umur: umur,
            address: address,
            email: email
        });

        localStorage.setItem("peopleList", JSON.stringify(peopleList));
        showData();
        document.getElementById("name").value = "";
        document.getElementById("umur").value = "";
        document.getElementById("address").value = "";
        document.getElementById("email").value = "";
    }
}

// Function untuk menghapus data
function deleteData(index) {
    var peopleList = JSON.parse(localStorage.getItem("peopleList"));
    peopleList.splice(index, 1);
    localStorage.setItem("peopleList", JSON.stringify(peopleList));
    showData();
}

// Function untuk mengupdate data
function updateData(index) {
    // Sumbit button dan untuk mengupdate data dari local Storage
    document.getElementById("submit").style.display = "none";
    document.getElementById("update").style.display = "block";

    var peopleList;
    if (localStorage.getItem("peopleList") == null) {
        peopleList = [];
    } else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    document.getElementById("name").value = peopleList[index].name;
    document.getElementById("umur").value = peopleList[index].umur;
    document.getElementById("address").value = peopleList[index].address;
    document.getElementById("email").value = peopleList[index].email;

    document.querySelector("#update").onclick = function () {
        if (validateForm() == true) {
            peopleList[index].name = document.getElementById("name").value;
            peopleList[index].umur = document.getElementById("umur").value;
            peopleList[index].address = document.getElementById("address").value;
            peopleList[index].email = document.getElementById("email").value;

            localStorage.setItem("peopleList", JSON.stringify(peopleList));

            showData();
            document.getElementById("name").value = "";
            document.getElementById("umur").value = "";
            document.getElementById("address").value = "";
            document.getElementById("email").value = "";

            // Update button dan untuk submit data dari local Storage
            document.getElementById("submit").style.display = "block";
            document.getElementById("update").style.display = "none";
        }

        // Menghapus data yang akan diupdate
        // peopleList.splice(index, 1);
        // localStorage.setItem("peopleList", JSON.stringify(peopleList));
        // showData();
    }
}
