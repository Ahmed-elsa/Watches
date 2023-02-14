let icon = document.querySelector(".titel  i")
let ul= document.querySelector(" .titel ul")
icon.style.color="#ffff"
icon.onclick =function(){
ul.style.display ="inline-block"
}
let arrow = document.querySelector('.on ')
window.onscroll = function(){
 this.scrollY >= 1000 ?   arrow.classList.add("show") : arrow.classList.remove("show")
  
}
arrow.onclick = function(){
    window.scrollTo({
        top :0,
        behavior :"smooth" 
    })
}
let login = document.querySelector(".user .zn")

let form = document.querySelector(".loging")
login.onclick = function(){
    form.style.display="block";
}
let close2 = document.querySelector(".loging .form span")
 
close2.onclick= function(){
    form.style.display="none"
}
let  userpassword = document.querySelector(".form .password")
let useremail = document.querySelector(".form .Phone")

document.forms[0].onsubmit = function(e){
    let pas = false
    let ph = false
    if(typeof userpassword ==="String"|| useremail.value.length == "11"){
        pas = true
        ph =  true
        console.log(typeof userpassword)
    }
    if(pas == false || ph ==false){
        e.preventDefault()
    }
}
 let h2 = document.querySelector(".first-ciass .container .fremwork  .active h2")
let close3 = document.querySelector(".first-ciass .container .fremwork  .input")
let spanShow =document.querySelector(".first-ciass .container .fremwork ")
let ShowImg =document.querySelector(".first-ciass .container .fremwork  .active div img   ")
let Showp =document.querySelector(".first-ciass .container .fremwork  .active div p strong ")
let ShowEGD =document.querySelector(".first-ciass .container .fremwork  .active div p span ")
// let namber = Math.round(parseFloat(clickp[i].innerHTML.slice(1,9)).toFixed(2) * 24 )

let ShowEm =document.querySelector(".first-ciass .container .fremwork  .active div p em")


//SLECT ELMENT::before
let click3 = document.querySelectorAll(".first-ciass .my_watch img")

click3.forEach((e) => {
   e.onclick=function(e){
    let overhed = document.createElement("div")
 
   document.body.appendChild(overhed)
    overhed.className="open2"
    //show Elmantes form
spanShow.style.display = "block"
 //show Elmantes img
 ShowImg.src = e.target.src
// show Elmantes Quality
ShowEm.innerHTML= e.target.alt
///////
let prise=this.parentNode.lastElementChild.firstElementChild.innerHTML
h2.innerHTML=this.nextElementSibling.innerHTML
Showp.innerHTML=prise
  ShowEGD.innerHTML= Math.round(parseFloat(prise.slice(1,9)).toFixed(2) * 24 )

  close3.onclick=function(){
    spanShow.style.display = "none"
    overhed.remove()
  }

   }
});
   
