function greet(){
    alert("Hei, welcome to dynamic web page");
}
const buttonId = document.getElementById('click');
buttonId.onclick = function(){
    alert("Button was clicked.")
}
buttonId.onmouseover = function(){
    buttonId.style.color = "red";
}
buttonId.onmouseout = function(){
    buttonId.style.color = "maroon";
}

document.getElementById('changebg').onclick = function(){
    document.body.style.backgroundColor = "blue";
}
function toggleText(){
    const text = document.getElementById('text');
    text.innerHTML = text.innerHTML === 'This is the first HTML, CSS and JavaScript fusion' 
        ? 'I am testing inline in Java' 
        : 'This is the first HTML, CSS and JavaScript fusion';
}

function bg() {
    const color = document.getElementById('colorInput').value;
    document.body.style.backgroundColor = color || 'green';
}