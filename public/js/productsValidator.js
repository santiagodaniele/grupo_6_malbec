window.onload = function () {
    let name = document.querySelector("#name")
    let brand = document.querySelector("#bodega")
    let price = document.querySelector("#price")
    let description = document.querySelector("#description")
    let stock = document.querySelector("#stock")
    let discount = document.querySelector("#discount")
    let category = document.querySelector("#category")
    let subcategory = document.querySelector("#subCategory_id")
    let variedad = document.querySelector("#variedad")
    let avisoError1 = document.querySelector('.aviso-error1')
    let avisoError2 = document.querySelector('.aviso-error2')
    let avisoError3 = document.querySelector('.aviso-error3')
    let avisoError4 = document.querySelector('.aviso-error4')
    let avisoError5 = document.querySelector('.aviso-error5')
    let avisoError6 = document.querySelector('.aviso-error6')
    let avisoError7 = document.querySelector('.aviso-error7')
    let avisoError8 = document.querySelector('.aviso-error8')
    let avisoError9 = document.querySelector('.aviso-error9')
    let button = document.querySelector(".button2")
    let errores = []
    let regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/
    let regExMail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    name.addEventListener("focus", () => {
        name.style.borderColor = "green"
    }),
        name.addEventListener("blur", () => {
            if (name.value.length < 3) {
                name.style.borderColor = "red"
                errores.push(avisoError1.innerText = "El nombre debe contener al menos 3 caracteres")
            } else {
                avisoError1.innerText = ""
                errores.pop()
            }
        })
    brand.addEventListener("focus", () => {
        brand.style.borderColor = "green"
    }),
        brand.addEventListener("blur", () => {
            if (brand.value.length < 3) {
                brand.style.borderColor = "red"
                errores.push(avisoError2.innerText = "La marca debe contener al menos 3 caracteres")
            } else {
                avisoError2.innerText = ""
                errores.pop()
            }
        })
    price.addEventListener("focus", () => {
        price.style.borderColor = "green"
    }),
        price.addEventListener("blur", () => {
            if (regExAlpha.test(price.value) || (price.value.length <= 0)) {
                price.style.borderColor = "red"
                errores.push(avisoError3.innerText = "El precio debe ser indicado en números mayores a 0")
            } else {
                avisoError3.innerText = ""
                errores.pop()
            }
        })
    description.addEventListener("focus", () => {
        description.style.borderColor = "green"
    }),
        description.addEventListener("blur", () => {
            if (description.value.length < 20) {
                description.style.borderColor = "red"
                errores.push(avisoError4.innerText = "La descripción debe contener al menos 20 caracteres")
            } else {
                avisoError4.innerText = ""
                errores.pop()
            }
        })
    stock.addEventListener("focus", () => {
        stock.style.borderColor = "green"
    }),
        stock.addEventListener("blur", () => {
            if (regExAlpha.test(stock.value) || (stock.value.length <= 0)) {
                stock.style.borderColor = "red"
                errores.push(avisoError5.innerText = "El stock debe ser indicado en números mayores a 0")
            } else {
                avisoError5.innerText = ""
                errores.pop()
            }
        })
    discount.addEventListener("focus", () => {
        discount.style.borderColor = "green"
    }),
        discount.addEventListener("blur", () => {
            if (regExAlpha.test(discount.value) || (discount.value.length <= 0)) {
                discount.style.borderColor = "red"
                errores.push(avisoError6.innerText = "El descuento debe ser indicado en números mayores a 0")
            } else {
                avisoError6.innerText = ""
                errores.pop()
            }
        })
    category.addEventListener("focus", () => {
        category.style.borderColor = "green"
    }),
        category.addEventListener("blur", () => {
            if (category.value == "") {
                category.style.borderColor = "red"
                errores.push(avisoError7.innerText = "Debe seleccionar una categoría.")
            } else {
                avisoError7.innerText = ""
                errores.pop()
            }
        })
    subcategory.addEventListener("focus", () => {
        subcategory.style.borderColor = "green"
    }),
        subcategory.addEventListener("blur", () => {
            if (subcategory.value == "") {
                subcategory.style.borderColor = "red"
                errores.push(avisoError8.innerText = "Debe seleccionar una subcategoría.")
            } else {
                avisoError8.innerText = ""
                errores.pop()
            }
        })
    variedad.addEventListener("focus", () => {
        variedad.style.borderColor = "green"
    }),
        variedad.addEventListener("blur", () => {
            if (variedad.value == "") {
                variedad.style.borderColor = "red"
                errores.push(avisoError9.innerText = "Debe seleccionar una variedad.")
            } else {
                avisoError9.innerText = ""
                errores.pop()
            }
        })
    button.addEventListener("click", function (e) {
        if (errores.length > 0) {
            e.preventDefault()
        }
    }
    )
}