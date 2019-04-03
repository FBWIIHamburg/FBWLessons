function creatbubble(e){
    let bubble = document.createElement("div");
    bubble.className="bubble";
    bubble.style.left=e.clientX-5+"px";
    bubble.style.top=e.clientY-5+"px";

    let body = document.getElementsByTagName("body")[0];
    body.appendChild(bubble);
}