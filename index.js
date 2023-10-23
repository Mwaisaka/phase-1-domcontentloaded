// Your code goes here
document.addEventListener('DOMContentLoaded', function(){
    console.log("The DOM content has been loaded");
    const p=document.querySelector('p#text');
    p.textContent = "This is really cool!";
    p.appendChild(p.textContent);
});

