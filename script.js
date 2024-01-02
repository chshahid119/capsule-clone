// Implementations for hamburger working 
hamburgerBtn=document.querySelector(".responsive-hamburger")
mobileMenu=document.querySelector(".hamburger-navbar")

hamburgerBtn.addEventListener("click",()=>{
    console.log("helloWorld")
    mobileMenu.classList.toggle("displayNone")
   
    
})


// Fixing flexbox gap property missing in some Safari Version
function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";
  
    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));
  
    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
  
    if (!isSupported) document.body.classList.add("no-flexboox-gap");
  }
  
  checkFlexGap();


