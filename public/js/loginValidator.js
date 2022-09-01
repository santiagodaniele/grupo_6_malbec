window.onload = function () {
    let email = document.querySelector("#email")
    let password = document.querySelector("#password")
    let avisoError1 = document.querySelector('.aviso-error1')
    let avisoError2 = document.querySelector('.aviso-error2')
    let button = document.querySelector(".buttons")
    let regExMail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    let errores = []

    email.addEventListener("focus", () => {
        email.style.borderColor = "green"
    }),
    email.addEventListener("blur", () => {
            if (!regExMail.test(email.value) || (email.value.length < 3)) {
                email.style.borderColor = "red"
                errores.push(avisoError1.innerText = "Debe ingresar un email válido ")
            } else {
                avisoError1.innerText = ""
                errores.pop()
            }
        })
    password.addEventListener("focus", () => {
        password.style.borderColor = "green"
    }),
    password.addEventListener("blur", () => {
            if (password.value.length < 5) {
                password.style.borderColor = "red"
                errores.push(avisoError2.innerText = "La contraseña debe contener al menos 8 caracteres.")
            } else {
                avisoError2.innerText = ""
                errores.pop()
            }
        })
    button.addEventListener("click", function (e) {
        if (errores.length > 0) {
            e.preventDefault()
        }
        else {
            form.submit
        }
    }
    )
}