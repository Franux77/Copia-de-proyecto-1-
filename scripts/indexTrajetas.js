class Activity {
    constructor(id,title,description,imgUrl){
        this.id=id,
        this.title=title,
        this.description=description,
        this.imgUrl=imgUrl
    }
}

class Repository{
    constructor(){
        this.activities=[];
        this.contador=1;
    }

    getAllActivities(){
        return this.activities
    }
    createActivity(title,description,imgUrl){
        const newActivity= new  Activity(this.contador,title,description,imgUrl)
        this.activities.push(newActivity);
        this.contador++;
        return "Tu actividad ha sido creada con exito"
    }
    deleteActivity(id){
        const filtrados = this.activities.filter((Activity)=>Activity.id !== id)
        this.activities=filtrados
        return "Tu actividad ha sido eliminada con exito"
    }
}
const boton=document.getElementById("boton");
boton.addEventListener("click",(event)=>{
    event.preventDefault();

    const nombre=document.getElementById("titulo").value;
    const descripcion=document.getElementById("descripcion").value;
    const url=document.getElementById("url").value;
    const tarjetas=document.getElementById("tarjetasContainer");
    
    const title=document.createElement("h2");
    const parrafo=document.createElement("p");
    const img=document.createElement("img");
    const tarjeta=document.createElement("div");
    title.textContent = nombre;
    parrafo.textContent = descripcion;
    img.src = url;
    ////////////////////////////////////////////////
    tarjeta.classList.add("tarjeta")

    tarjeta.appendChild(title);
    tarjeta.appendChild(parrafo);
    tarjeta.appendChild(img);
    tarjetas.appendChild(tarjeta);
})