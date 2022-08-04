window.onload = function () {
    let firstName = document.querySelector("#first-name")
    let lastName = document.querySelector("#last-name")
    let email = document.querySelector("#email")
    let password = document.querySelector("#password")
    let avisoError1 = document.querySelector('.aviso-error1')
    let avisoError2 = document.querySelector('.aviso-error2')
    let avisoError3 = document.querySelector('.aviso-error3')
    let avisoError4 = document.querySelector('.aviso-error4')
    let button = document.querySelector(".create-account")
    let errores = []
    let regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/

    firstName.addEventListener("focus", () => {
        firstName.style.borderColor = "green"
    }),
        firstName.addEventListener("blur", () => {
            if (!regExAlpha.test(firstName.value) || (firstName.value.length < 3)) {
                firstName.style.borderColor = "red"
                errores.push(avisoError1.innerText = "El nombre debe contener al menos 3 caracteres")
            } else {
                avisoError1.innerText = ""
            }
        })
    lastName.addEventListener("focus", () => {
        lastName.style.borderColor = "green"
    }),
    lastName.addEventListener("blur", () => {
            if (lastName.value.length < 3) {
                lastName.style.borderColor = "red"
                errores.push(avisoError2.innerText = "El apellido debe contener al menos 3 caracteres")
            } else {
                avisoError2.innerText = ""
            }
        })
    email.addEventListener("focus", () => {
        email.style.borderColor = "green"
    }),
    email.addEventListener("blur", () => {
            if (email.value.length < 3) {
                email.style.borderColor = "red"
                errores.push(avisoError3.innerText = "Debe ingresar un email válido ")
            } else {
                avisoError3.innerText = ""
            }
        })
    password.addEventListener("focus", () => {
        password.style.borderColor = "green"
    }),
    password.addEventListener("blur", () => {
            if (password.value.length < 8) {
                password.style.borderColor = "red"
                errores.push(avisoError4.innerText = "La contraseña debe contener al menos 8 caracteres.")
            } else {
                avisoError4.innerText = ""
            }
        })
    button.addEventListener("click", function (e) {
        if (errores.length > 0) {
            e.preventDefault()
        }
    }
    )
}