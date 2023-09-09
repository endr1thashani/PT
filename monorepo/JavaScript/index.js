const form = document.getElementById("form");
const shuffleCheckBox = document.getElementById("shuffle");
const changeCheckBox = document.getElementById("change");
const showCheckBox = document.getElementById("showContent");
const resultCheckBox = document.getElementById("result");

shuffleCheckBox.addEventListener("click", function (e) {
    e.preventDefault();
    const checkboxes = Array.from(form.elements.checkbox);
    checkboxes.sort(() => Math.random() - 0.5);
    checkboxes.forEach((checkbox, index) => {
        const label = checkbox.parentElement;
        form.insertBefore(label, form.children[index]);
    });
});

changeCheckBox.addEventListener("click", function (e) {
    e.preventDefault();
    const spans = form.querySelectorAll('span');
    const spanText = [
        "First Text",
        "Second Text",
        "Third Text",
        "Fourth Text"
    ];
    spans.forEach((span ,index) => {
        span.textContent = spanText[index];
    });
    const checkboxes = Array.from(form.elements.checkbox);
    checkboxes.forEach((checkbox ,index)=> {
        checkbox.value = spanText[index]
    })
});

showCheckBox.addEventListener("click", function (e) {
    e.preventDefault();
    const selectedCheckboxes = Array.from(form.elements.checkbox).filter((checkbox) => checkbox.checked);
    const selectedValues = selectedCheckboxes.map((checkbox) => checkbox.value);
    if(selectedCheckboxes.length === 0) {
        resultCheckBox.textContent = "Select a option!"
    }else{
        resultCheckBox.textContent = "Selected Values: " + selectedValues.join(", ");
    }
});
