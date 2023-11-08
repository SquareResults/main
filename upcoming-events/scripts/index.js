
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
        e.preventDefault();
        submitButton.disabled = true;
    
        let requestBody = new FormData(form);
        document.getElementById("myModal").style.display = "block"; 
        fetch(scriptURL, { method: 'POST', body: requestBody })
            .then(response => {
                // Handle the fetch response here
                document.getElementById("myModal").style.display = "block"; // Show the modal
            })
            .catch(error => {
                console.error('Error!', error);
                // Handle errors here
            })
            .finally(() => {
                submitButton.disabled = false; // Enable the button regardless of success or error
            });
    });
