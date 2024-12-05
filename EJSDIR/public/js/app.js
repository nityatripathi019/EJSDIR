
let btns = document.querySelectorAll("button");
// console.log(btns);
for(let btn of btns ){
    btn.addEventListener("click",()=>{
        console.log("buttton was clicked");
    })
}