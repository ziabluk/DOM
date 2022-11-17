elem1 = document.getElementById("elem1");
function func1(){
    elem1.innerHTML = "Ку-ку! А <b>я жирный!</b>";
}
elem2 = document.getElementById("elem2");
function func2(){
    elem2.innerHTML = "<h3><b>Абзац превратился в h3!</b></h3>";
}
elem3 = document.getElementById("elem3");
function func3(){
    elem3.outerHTML = "<h3>" + elem3.innerHTML + "</h3>";
}

function func5(){
    let zzz = document.getElementsByClassName('zzz');
    for (var i = 0; i < zzz.length; i++){
        zzz[i].innerHTML = "Ку-Ку"
    }
}
function func6(){
    let www = document.getElementsByClassName('www');
    for (var i = 0; i < www.length; i++){
        www[i].innerHTML = i+1
    }
}
function func6(){
    let www = document.getElementsByClassName('www');
    for (var i = 0; i < www.length; i++){
        www[i].innerHTML = i+1
    }
}
function func7(){
    let www1 = document.getElementsByClassName('www1');
    for (var i = 1; i < www1.length; i++){
        www1[i].innerHTML = i
    }
}
function func8(){
    let elem8 = document.querySelector(".my-class");
    alert(elem8.className)
}
function func9(){
    let elem9 = document.querySelector("#elem9");
    alert(elem9.getAttribute("class"))  
}
function func9_1(){
    let elem9 = document.querySelector("#elem9");
    elem9.removeAttribute("class")
    alert("Класс удален")
}
function func10(){
    let elem10 = document.querySelector("#elem10");
    alert(elem10.getAttribute("class"))  
}
function func10_1(){
    let elem10 = document.querySelector("#elem10");
    elem10.setAttribute("class", "new-class");
    alert("Класс изменён");
}
function func11(){
    let elem11_1 = document.getElementById("elem11_1");
    let elem11 = document.getElementById("elem11")
    elem11_1.innerHTML = elem11.value;
}
function func12(){
    let elems = document.getElementsByClassName("elem12");
    for (var i = 0; i < elems.length; i++){
        elems[i].innerHTML = elems[i].innerHTML +" "+ elems[i].href;
    }
}
function funk13(){
    let elem13 = document.getElementById("elem13");
    let input13 = document.getElementById("input13");
    elem13.style.color = "red"
    input13.disabled = true
    input13.value = "О, на меня нельзя больше нажать!"
}
function func14(){
    let elem14 = document.getElementsByClassName('elem14');
    for (var i = 0; i < elem14.length; i++){
        elem14[i].innerHTML = i
    }
}
function func15(){
    let elem15 = document.getElementsByClassName('elem15');
    for (var i = 0; i < elem15.length; i++){
        elem15[i].innerHTML = i+". " + elem15[i].innerHTML
    }
}
