import { loadHtml, renderHtml } from "/pages/js4/js4utils.js"

import {initAllCars} from "/pages/js4/allCars/allCars.js"
import {initFindCar} from "/pages/js4/findCar/findCar.js"
import {initAddCar} from "/pages/js4/addCar/addCar.js"

window.addEventListener("load", async () => {
    const templateAbout = await loadHtml("/pages/js4/about.html")
    const templateAdd = await loadHtml("/pages/js4/addCar/addCar.html")
    const templateEdit = await loadHtml("/pages/js4/editCar/editCar.html")
    const templateFind = await loadHtml("/pages/js4/findCar/findCar.html")
    const templateAll = await loadHtml("/pages/js4/allCars/allCars.html")

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