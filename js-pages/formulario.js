

const $form = document.querySelector("#form")
$form.addEventListener("click", CargaSubmit)

async function CargaSubmit(e){
    e.preventDefault()

    const form =new FormData(this)
    const respuesta= await fetch(this.action,{
        method:this.method,
        body:form,
        headers:{
            "Accept": "aplication/json"
        }
    })
    
    if (respuesta.ok){
      
 
    alert("mensaje enviado")
    
} 
        
    }


    


