var inputs=document.querySelectorAll(".controls input");


function updateHandle(){
    var suffix=this.dataset.sizing || ' ';
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
}


inputs.forEach(input=> input.addEventListener('change',updateHandle))
inputs.forEach(input=> input.addEventListener('mousemove',updateHandle))