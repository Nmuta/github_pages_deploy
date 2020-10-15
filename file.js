const btn = document.querySelector("#btn");
const output = document.querySelector("#output");
let counter = 0 ;

btn.addEventListener("click", ()=> {
    counter++;
    output.innerHTML = counter; 
})