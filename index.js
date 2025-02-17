const loveBTN = document.getElementById("LoveBTN")
const loveBox = document.getElementById("loveBox")
const p = document.getElementById("p")
const p1 = document.getElementById("P1")
const text1 = document.getElementById("text1")
const text2 = document.getElementById("text2")

const TextF = {

    x: function(txt, i, ob) {
        if (i < txt.length) {
            setTimeout(() => {
                ob.innerHTML += txt[i]
                i = i + 1
                TextF.x(txt, i, ob)
            }, 20)
        }
        return ""
    },

    displayText: function(txt, ob) {
        var i = 0
        TextF.x(txt, i, ob)
    }
}

const steps = {
    step1: function() {
        loveBTN.style.width = "400px"
        loveBTN.style.height = "550px"
        loveBTN.classList.remove("hoverClass")
        p.style.display = "none"
        loveBox.style.display = "flex"
    },

    step2: function() {
        p1.style.fontSize = "20px"
    },

    step3: function() {
        //tuttaj
        p1.style.fontSize = "27px"
        text1.style.width = "80%"
        text1.style.height = "85%"
    },

    step4: function() {
        TextF.displayText(txt, text1)
    },
    
    step5: function() {
        text1.style.width = "80%"
        text1.style.height = "35%"
        text2.style.width = "80%"
        text2.style.height = "40%"
    },

    step6: function() {
        TextF.displayText(txt2, text2)
    }
}

var txt = "Kociaczku mój 🩷🥹😽 Kooochhaaaam Cieee 🤍🩷🎿 Kolejny dzień mam nadzieję, że udanego w skali czasu wyjazdy 🚐🥇 Życzę Ci poprostu ślicznego dnia 🌷"
var txt2 = "Dzisiaj masz jechać na narty wiec w takim razie pragnę Ci powiedzieć, żebyś zjadła mega śniadanko i miała siłę jeździć tam i mega fajnego i przyjemnego wyjadu 🎿🥇🚐🩷 Kocham Cie i powodzenia 🤍🤍🤍"
let clicked = false 

loveBTN.addEventListener("click", () => {
    if (!clicked) {
        clicked = true
        setTimeout(steps.step1, 200)

        setTimeout(steps.step2, 701)

        setTimeout(steps.step3, 1401)

        setTimeout(steps.step4, 1901)
        setTimeout(steps.step5, 1901 + (txt.length * 20))
        setTimeout(steps.step6, 2801 + (txt.length * 20))
    }
})