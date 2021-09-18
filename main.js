const InputElementRef = document.getElementById('insertar',)
const InputElementRef2 = document.getElementById('insertar2',)
const BotonElementRef = document.getElementById('agregar')
const BotonElElementRef = document.getElementById('btn_eliminar')
const ListaRef = document.getElementById('Lista')

BotonElementRef.addEventListener('click', function() {
    localStorage.setItem('Mensaje', InputElementRef.value, InputElementRef2.value)

    // TODO Agregar un nuevo elemento en nuestro document html
    const listItem = document.createElement('li')
    listItem.innerHTML = InputElementRef.value +' '+InputElementRef2.value

    ListaRef.appendChild(listItem)
})

BotonElElementRef.addEventListener('click', function() {
    localStorage.removeItem('Mensaje')
})

window.onload = () => {
    const mensaje = localStorage.getItem('Mensaje')

    const listItem = document.createElement('li')
    listItem.innerHTML = mensaje

    ListaRef.appendChild(listItem)
}

//Obtener primer hijo
document.getElementById('Lista').firstChild

//Obtener el hijo n
document.getElementById('Lista').children[0]
