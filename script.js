function submitDetails(){
    var StudentName = document.getElementById("StudentName").value;
    var Address = document.getElementById("Address").value;
    var DOB = document.getElementById("DOB").value;
    var Class = document.getElementById("Class").value;
    var RollNumber = document.getElementById("RollNo").value;
    var ContactNo = document.getElementById("ContactNumber").value;
    var Photodata = document.getElementById("photo").files[0];

    if (Photodata) {
        var reader = new FileReader();
        reader.onload = function(e) {
            localStorage.setItem("StudentPhoto", e.target.result); // Corrected variable name
            proceedToNextPage(); // Call function to save data and redirect after image is loaded
        };
        reader.readAsDataURL(Photodata); // Convert image to base64 string

        proceedToNextPage(); // If no photo is selected, just proceed
    }

    function proceedToNextPage() {
        localStorage.setItem("StudentName", StudentName);
        localStorage.setItem("Address", Address);
        localStorage.setItem("DOB", DOB);
        localStorage.setItem("Class", Class);
        localStorage.setItem("RollNo", RollNumber);
        localStorage.setItem("ContactNo", ContactNo);
        window.location.href = "IDcard.html";
    }
}

function change(){
    window.location.href = "./IDcard.html";
}
