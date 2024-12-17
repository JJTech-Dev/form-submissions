
document.addEventListener('DOMContentLoaded', () =>{
    let name = document.getElementsById("name").value
    let email = document.getElementsById("email").value
    let message = document.getElementsById("message").value
    let form = document.getElementsById("form")

    form.addEventListener("submit", (event) => {
        event.preventDefault()
        if(name&&email&&message){
            alert("Form Successfully Submit!")
        }
        else{
            alert("Form Incomplete Dumbahh")
        }

        
    })




})