const InputElementRef = document.getElementById('insertar')
const BotonElementRef = document.getElementById('agregar')
const BotonElElementRef = document.getElementById('eliminar')
const ListaRef = document.getElementById('Lista')

BotonElementRef.addEventListener('click', function() {
    localStorage.setItem('Mensaje', InputElementRef.value)
    const listItem = document.createElement('li')
    listItem.innerHTML = InputElementRef.value 
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




