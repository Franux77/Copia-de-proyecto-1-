// class Activity {
//     constructor(id,title,description,imgUrl){
//         this.id=id,
//         this.title=title,
//         this.description=description,
//         this.imgUrl=imgUrl
//     }
// }

// class Repository{
//     constructor(){
//         this.activities=[];
//         this.contador=1;
//     }

//     getAllActivities(){
//         return this.activities
//     }
//     createActivity(title,description,imgUrl){
//         const newActivity= new  Activity(this.contador,title,description,imgUrl)
//         this.activities.push(newActivity);
//         this.contador++;
//         return "Tu actividad ha sido creada con exito"
//     }
//     deleteActivity(id){
//         const filtrados = this.activities.filter((Activity)=>Activity.id !== id)
//         this.activities=filtrados
//         return "Tu actividad ha sido eliminada con exito"
//     }
// }
// ////////////////////////////////////////////////////////////////////////////////
// const boton=document.getElementById("boton");

// const repository= new Repository();

// boton.addEventListener("click",(event)=>{
//     event.preventDefault();

//     const nombre=document.getElementById("titulo").value;
//     const descripcion=document.getElementById("descripcion").value;
//     const url=document.getElementById("url").value;

//     if (nombre==="" || descripcion==="" || url=== "") {
//         alert("No están completos los campos")
//         return;
//     };
//     repository.createActivity(nombre,descripcion,url);
    
//     agregarAlContenedor();
    
//     const tarjetasContainer=document.getElementById("tarjetasContainer");
//     tarjetas.forEach(div=> tarjetasContainer.appendChild(div));
//    ///////////////////////////////////////////////////////////////////////////// 
//     function agregarAlContenedor() {
//         const tarjetasContainer=document.getElementById("tarjetasContainer");

//         const tarjetas= repository.getAllActivities.map(({id,title,descripcion,url})=>{
            
//         const div=document.createElement("div");
//         const titulo=document.createElement("h2");
//         const imagen=document.createElement("img");
//         const parrafo=document.createElement("p");
            
//         div.classList.add(div);
//         titulo.innerHTML=title;
//         imagen.src=imgUrl;
//         parrafo.innerHTML=description;

//         div.appendChild(titulo);
//         div.appendChild(imagen);
//         div.appendChild(parrafo);

//             return div;
//         });
// }})
class Activity {
    constructor(id, title, description, imgUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

class Repository {
    constructor() {
        this.activities = [];
        this.contador = 1;
    }

    getAllActivities() {
        return this.activities;
    }

    createActivity(title, description, imgUrl) {
        const newActivity = new Activity(this.contador, title, description, imgUrl);
        this.activities.push(newActivity);
        this.contador++;
        return "Tu actividad ha sido creada con éxito";
    }

    deleteActivity(id) {
        const filtrados = this.activities.filter(activity => activity.id !== id);
        this.activities = filtrados;
        return "Tu actividad ha sido eliminada con éxito";
    }
}

////////////////////////////////////////////////////////////////////////////////
const boton = document.getElementById("boton");

const repository = new Repository();

boton.addEventListener("click", (event) => {
    event.preventDefault();

    const nombre = document.getElementById("titulo").value;
    const descripcion = document.getElementById("descripcion").value;
    const url = document.getElementById("url").value;

    if (nombre === "" || descripcion === "" || url === "") {
        alert("No están completos los campos");
        return;
    }

    repository.createActivity(nombre, descripcion, url);
    agregarAlContenedor();
});

function agregarAlContenedor() {
    const tarjetasContainer = document.getElementById("tarjetasContainer");
    tarjetasContainer.innerHTML = "";

    const tarjetas = repository.getAllActivities().map(({ id, title, description, imgUrl }) => {
        const div = document.createElement("div");
        const titulo = document.createElement("h2");
        const imagen = document.createElement("img");
        const parrafo = document.createElement("p");

        div.classList.add("tarjeta");
        titulo.innerHTML = title;
        imagen.src = imgUrl;
        parrafo.innerHTML = description;

        div.appendChild(titulo);
        div.appendChild(imagen);
        div.appendChild(parrafo);

        return div;
    });

    tarjetas.forEach(div => tarjetasContainer.appendChild(div));
}
