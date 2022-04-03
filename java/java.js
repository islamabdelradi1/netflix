const emails= document.getElementById("email");
const labels = document.getElementById("labels");
emails.addEventListener("click", (eo) => {
    labels.classList.remove("labels-1");
    labels.classList.add("titleEmail");

});

const emailss= document.getElementById("emails2");
const labelss = document.getElementById("labels11");

emailss.addEventListener("click", (eo) => {
    labelss.classList.remove("labels1");
    labelss.classList.add("titleEmail1");

})