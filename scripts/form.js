document.addEventListener("DOMContentLoaded", (e) =>{
    contactFormValidations();
});

const d = document;

function contactFormValidations(){
    const $form = d.querySelector(".contact-form");
    const $inputs = d.querySelectorAll(".contact-form [required]");
   // console.log($inputs);

    

    d.addEventListener("submit", (e)=> {
        e.preventDefault();

        fetch("https://formsubmit.co/ajax/franklucadi@gmail.com",{
            method: "POST",
            body: new FormData(e.target)
        })
            .then(res=> res.ok ? res.json(): Promise.reject(res))
            .then(json=> {
               // console.log(json);
                $form.reset();
                d.getElementById("resultado").innerHTML = "El mensaje se ha enviado"
            })
            .catch(err=>{
               // console.log(err);
            })
    })



};







