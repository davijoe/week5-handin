import { loadHtml, renderHtml } from "./js4utils.js"

import {initAllCars} from "./allCars/allCars.js"
import {initFindCar} from "./findCar/findCar.js"
import {initAddCar} from "./addCar/initAddCar.js"

window.addEventListener("load", async () => {
    const templateAbout = await loadHtml("./about.html")
    const templateAdd = await loadHtml("./addCar/addCar.html")
    const templateEdit = await loadHtml("./editCar/editCar.html")
    const templateFind = await loadHtml("./findCar/findCar.html")
    const templateAll = await loadHtml("./allCars/allCars.html")

    document.getElementById("btns").onclick = handleButtonClicks
    renderHtml(templateAbout, "content")

    function handleButtonClicks(evt) {
        const target = evt.target
        const isMenuBtn = target.tagName === "BUTTON" && target.id.startsWith("menu-btn-")
        if (!isMenuBtn) {
            console.log("Not a menu button, Remove this line when you know what is going on here")
            return
        }
        if (target.id === "menu-btn-about") {
            renderHtml(templateAbout, "content")
        }
        if (target.id === "menu-btn-all") {
            renderHtml(templateAll, "content")
            initAllCars()
        }
        if (target.id === "menu-btn-find") {
            renderHtml(templateFind, "content")
            initFindCar()
        }
        if (target.id === "menu-btn-add") {
            renderHtml(templateAdd, "content")
            initAddCar()
        }
        if (target.id === "menu-btn-edit") {
            renderHtml(templateEdit, "content")
            //Run JS
        }
    }
})