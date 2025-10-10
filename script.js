
        const run = () => {
            document.getElementById("outpoot").innerHTML = `<header style="background-color: gray; user-select: none;"><strong style="color: gray;">H</strong><strong onclick="mini()"> - </strong><strong onclick="oweride()">o </strong><strong onclick="close_app()">x</strong></header>`
            document.getElementById("outpoot").style.backgroundColor = "white";
            eval(document.getElementById("inf").value)
        }

        const close_app = () => {
            document.getElementById("outpoot").innerHTML = ``
            document.getElementById("outpoot").style.backgroundColor = "white"
        }


        const mini = () => {
            document.exitFullscreen();
            document.body.innerHTML = localStorage.getItem("HTML")
            document.getElementById("inf").value = localStorage.getItem("inf")
            document.body.style.backgroundColor = "white"
        }

        function warn(text){
            document.getElementById("popupText").textContent = text
            document.getElementById("popup").style.display = "block"
            document.getElementById("overlay").style.display = "block"
        }

        function closePopup() {
            document.getElementById("overlay").style.display = "none"
            document.getElementById("popup").style.display = "none"

        }

        const color = (color) => {
            document.getElementById("outpoot").style.backgroundColor = color
        }

        const show = (text, widht) => {
            if(widht === 1) {
                document.getElementById("outpoot").innerHTML += `<h6>${text}</h6>`
            } else if(widht === 2) {
                document.getElementById("outpoot").innerHTML += `<h5>${text}</h5>`
            } else if(widht === 3) {
                document.getElementById("outpoot").innerHTML += `<h4>${text}</h4>`
            } else if(widht === 4) {
                document.getElementById("outpoot").innerHTML += `<h3>${text}</h3>`
            } else if(widht === 5) {
                document.getElementById("outpoot").innerHTML += `<h2>${text}</h2>`
            } else if(widht === 6) {
                document.getElementById("outpoot").innerHTML += `<h1>${text}</h1>`
            } else {
                alert("the width is not suportet")
            }
        }

        const btn = (innerText, onclick) => {
            document.getElementById("outpoot").innerHTML += `<button class="btn" onclick="${onclick}">${innerText}</button>`
        }

        const input = (prompt) => {
            document.getElementById("outpoot").innerHTML += `<input type="text" placeholder="${prompt}">`
        }

        const oweride = () => {
            localStorage.setItem("HTML", document.body.innerHTML);
            localStorage.setItem("inf", document.getElementById("inf").value)
            const out_from = document.getElementById("outpoot").innerHTML
            document.documentElement.requestFullscreen();
            document.body.style.backgroundColor = outpoot.style.backgroundColor;
            document.body.innerHTML = out_from;
        };
