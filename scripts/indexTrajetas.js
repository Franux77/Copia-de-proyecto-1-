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
////////////////////////////////////////////////////////////////////////////////
const boton=document.getElementById("boton");

const repository= new Repository();

boton.addEventListener("click",(event)=>{
    event.preventDefault();

    const nombre=document.getElementById("titulo").value;
    const descripcion=document.getElementById("descripcion").value;
    const url=document.getElementById("url").value;

    if (nombre==="" || descripcion==="" || url=== "") {
        alert("No están completos los campos")
        return;
    };
    repository.createActivity(nombre,descripcion,url);
    
    agregarAlContenedor();
        
    tarjetas.forEach(element => {
        
    });
    
    function agregarAlContenedor() {
        const tarjetasContainer=document.getElementById("tarjetasContainer");
        const tarjetas=repository.getAllActivities.map(({id,title,descripcion,url})=>{
            
            const div=document.createElement("div");
                  const title=document.createElement("h2");
              const parrafo=document.createElement("p");
           const img=document.createElement("img");
            
        div.classList.add(div);
        titulo.innerHTML=title;
        imagen.src=imgUrl;
        parrafo.innerHTML=descripcion;

        div.appendChild(titulo);
        div.appendChild(imagen);
        div.appendChild(parrafo);

            return div;
        }
        )
        
    }






















    // title.textContent = nombre;
    // parrafo.textContent = descripcion;
    // img.src = url;
    // ////////////////////////////////////////////////
    // tarjeta.classList.add("tarjeta")

    // tarjeta.appendChild(title);
    // tarjeta.appendChild(parrafo);
    // tarjeta.appendChild(img);
    // tarjetas.appendChild(tarjeta);
})