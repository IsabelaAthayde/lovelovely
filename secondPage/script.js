const heart = document.querySelector("#heart");
const body = document.querySelector("body");
const info = document.querySelector("main p:nth-child(1)");

let count = 0;

heart.addEventListener('click', function() {
    console.log(count);
    info.innerHTML = "&raquo Clique aqui caso queira tirar os coraçõeszinhos de fundo &laquo"
    info.addEventListener('click', () => {
        removeClasses() 
        info.innerHTML = "Clique no coração &quot eu te amo &quot para aparecer mais coraçõeszinhos"})
    if (count > 3) {
        
        count = 0;
        removeClasses()
    } 
    if(count == 0) {
        body.classList.add("bgRedHeart")
    } else if (count == 1) {
        body.classList.add("bgBlueHeart")
    } else if (count == 2) {
        body.classList.add("bgPurpleHeart")
    } else if (count == 3) {
        body.classList.add("bgYellowHeart")
    } 
    if (count <= 3) {
     count++;   
    } 
})

function removeClasses() {
    body.classList.remove("bgRedHeart")
    body.classList.remove("bgBlueHeart")
    body.classList.remove("bgPurpleHeart")
    body.classList.remove("bgYellowHeart")
}