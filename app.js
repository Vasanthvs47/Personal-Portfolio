function MyFunction(x){
    x.classList.toggle("change");
    document.getElementById("OP").classList.toggle("hide");
}
function ScrollTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
window.onscroll = function(){
    const buttun = document.getElementById("UP");
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        buttun.style.display = "block";
    }
    else{
        buttun.style.display = "none";
    }
}
const progressBars = document.querySelectorAll('.progress-bar');

for (let progressBar of progressBars) {
    progressBar.style.width = progressBar.getAttribute('data-percentage') + '%';
}
