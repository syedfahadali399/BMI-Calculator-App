let form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    
    let height = parseFloat(document.getElementById("input-height").value)
    let weight = parseFloat(document.getElementById("input-weight").value)
    let show = document.getElementById("show")

    if(height < 0) {
        show.textContent = `Please enter valid height`;
    } else if (weight < 0) {
        show.textContent = `Please enter valid weight`
    } else {
        let bmiChecker = (weight / height).toFixed(2)
        show.textContent = bmiChecker
    }
})

document.getElementById("refresh-weight").addEventListener("click", () => {
    inputWeight.value = ""
})

document.getElementById("refresh-height").addEventListener("click", () => {
    inputHeight.value = ""
})

document.getElementById("refresh-result").addEventListener("click", () => {
    show.innerText = "0"
})
