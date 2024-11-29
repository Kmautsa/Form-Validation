const form = document.getElementById('myForm');
const elements = form.elements;

function validateForm() {
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].value === "") {
            console.log("This input is empty!");
        } else {
            console.log("This input has some data: " + elements[i].value);
        }
    }
}

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form submission
    validateForm();
});  