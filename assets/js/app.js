const  collapse = (ele) =>{
    if(ele.classList.contains('cola')){
        ele.classList.remove("cola")
        ele.innerHTML  = "More <i class='fa fa-angle-down card-text'></i>"
        ele.parentElement.parentElement.querySelector(".col-div").style.display="none"
    }else{
        ele.classList.add("cola")
        ele.parentElement.parentElement.querySelector(".col-div").style.display="flex"
        ele.innerHTML  = "Less <i class='fa fa-angle-up card-text'></i>"
    }
}

document.querySelectorAll('.card-img-top').forEach(element => {
    element.onclick = () =>{
      window.location.href ="detail.html"
    }
});
  