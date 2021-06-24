window.onscroll = function(){
    if(document.documentElement.scrollTop > 500){
        document.querySelector('.gotop').classList.add('show');
    }else{
        document.querySelector('.gotop').classList.remove('show');
    }
}

document.querySelector('.gotop').addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});