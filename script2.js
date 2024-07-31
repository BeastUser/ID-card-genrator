window.onload = function() {
    // Check if the elements exist before setting their values
    if (document.getElementById("StudentNameVal")) {
        document.getElementById("StudentNameVal").innerText = localStorage.getItem("StudentName");
    }
    if (document.getElementById("ClassVal")) {
        document.getElementById("ClassVal").innerText = localStorage.getItem("Class");
    }
    if (document.getElementById("RollNoVal")) {
        document.getElementById("RollNoVal").innerText = localStorage.getItem("RollNo");
    }
    if (document.getElementById("DOBVal")) {
        document.getElementById("DOBVal").innerText = localStorage.getItem("DOB");
    }
    if (document.getElementById("AddressVal")) {
        document.getElementById("AddressVal").innerText = localStorage.getItem("Address");
    }
    if (document.getElementById("ContactNoVal")) {
        document.getElementById("ContactNoVal").innerText = localStorage.getItem("ContactNo");
    }
    if (document.getElementById("StudentPhoto")) {
        var photoData = localStorage.getItem("StudentPhoto"); // Corrected key name
        if (photoData) {
            document.getElementById("StudentPhoto").src = photoData;
        }
    }
};

function PrintID(){
    window.print();
}
