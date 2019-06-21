import dragula from "dragula";
document.onkeyup = (e) => {
    if(e.code == "KeyF") {
        let element = document.getElementsByClassName("custom-tag")[0]
        element.classList.toggle("centered")
        element.classList.toggle("fullscreen")
    }
}

dragula([document.getElementById("ticket-tile-1"),document.getElementById("ticket-tile-2"),document.getElementById("ticket-tile-3")]);