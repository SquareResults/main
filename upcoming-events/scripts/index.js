
// Close the modal if the user clicks outside of it
window.onclick = function (event) {
    var modal = document.getElementById("myModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
    }

    const form = document.querySelector("#my-form")
    const submitButton = document.querySelector("#submit")
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyrRUAcHfEPy39Y-IeXaZ_4h5chly1fOQ99MnFzRM8gH_I60bUTNNxs0k5lr3adnarhDQ/exec'

    form.addEventListener('submit', e => {
    submitButton.disabled = true
    e.preventDefault()
    let requestBody = new FormData(form)
    fetch(scriptURL, { method: 'POST', body: requestBody})
        .then(response => {
            document.getElementById("my-form").addEventListener("submit", function (e) {
                e.preventDefault(); // Prevent the form from actually submitting
                // Show the modal
                document.getElementById("myModal").style.display = "block";
            });          
            submitButton.disabled = false
        })
        .catch(error => {
        alert('Error!', error.message)
        submitButton.disabled = false
        }
        )
    })