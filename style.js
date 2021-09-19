/*const InputElementRef = document.getElementById('insertar')
const BotonElementRef = document.getElementById('agregar')
const BotonElElementRef = document.getElementById('eliminar')
const BotonActElementRef = document.getElementById('actualizar')
const ListaRef = document.getElementById('Lista')

var tareas =[]

window.onload = () => {
    const tareasconelformato= JSON.parse(window.localStorage.getItem('tareas'))
 
    tareas = tareasconelformato
    tareas.forEach( tarea => {
        agregartareaeneldom(tarea.nombre)
    });
    
    

   
}

function guardarEnlocalstorage(tareas)
{
    window.localStorage.setItem('tareas',JSON.stringify(tareas))
}

function agregarTarea(tarea){
    const tareaconId = {id:Math.random(),...tarea}
    tareas.push(tareaconId)
    guardarEnlocalstorage(tareas)
    return tareas
}
function eliminarTraea(nombreDelatarea)
{
    const tareasFiltradas=tareas.filter((tareas)=> {
        return tarea.nombre !=nombreDelatarea
    })
    tareas=tareasFiltradas
    guardarEnlocalstorage(tareas)

}
function actualizarTarea(tareaParaEditar)
{
    const tareasFiltradas=tareas.filter((tarea) => {
        return tarea.id!= tareaParaEditar.id
    })
    tareasFiltradas.push(tareaParaEditar)
    guardarEnlocalstorage
}
function agregartareaeneldom(valor_del_input)
{
    const li= document.createElement('li')
    li.textContent =valor_del_input
    ListaRef .appendChild(li)
}
BotonElementRef.addEventListener('click', ()  =>{
    const valor_del_input =InputElementRef.value
    const nuevaTarea={Nombre:valor_del_input}
    agregarTarea(nuevaTarea)
    InputElementRef.value=''
  agregartareaeneldom(valor_del_input)

    
})



