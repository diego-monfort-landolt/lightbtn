let onBtn = document.getElementById('grey');
let offBtn = document.getElementById('orange');
let imgchange = document.getElementById('imgchange');

onBtn.onclick = function() {
    imgchange.src = './on.png';
    document.body.style.backgroundColor= '#FFFFE0';
    
};
offBtn.onclick = function(){
    imgchange.src = './off.png';
    document.body.style.backgroundColor = '	#FAEBD7';
    
};