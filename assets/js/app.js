let accordio = document.getElementsByClassName("accordion");
let i;
let lenght = accordio.length;
for (i = 0; i< lenght; i++){
    accordio[i].addEventListener("click", function()
    {this.classList.toggle("active");
      let panel= this.nextElementSibling;
      if (panel.style.maxHeight){
          panel.style.maxHeight = null;
      }
      else{
          panel.style.maxHeight = panel.scrollHeight + "px"
      }
    })
}