function elem1(){
    window.setInterval(func1, 1000);
}
function func1(){
    let elem1 = document.getElementById("elem1");
    elem1.innerHTML = parseInt(elem1.innerHTML)+1;
}
function elem2(){
    window.winelem = window.setInterval(func2, 1000);
    document.getElementById("elem2").disabled = true;
    document.getElementById("elem2out").disabled = false;
}
function elem2out(){
    window.winelem = window.clearInterval(window.winelem);
    document.getElementById("elem2").disabled = false;
    document.getElementById("elem2out").disabled = true;
}
function func2(){
    let elem2timer = document.getElementById("elem2timer");
    elem2timer.innerHTML = parseInt(elem2timer.innerHTML)+1;
}
function elem4(){
    window.func4s = window.setInterval(func4, 1000);
    document.getElementById("elem4").disabled = true;
}
function stopelem4(){
    window.clearInterval(window.func4s);
}
function func4(){
    var elem4timer = document.getElementById("elem4timer");
    var number = parseInt(elem4timer.innerHTML)-1;
    elem4timer.innerHTML = number
    if (number == 0){
        elem4timer.insertAdjacentHTML("beforeend","<p>Обратный отсчет завершен</p>");
        stopelem4()
    }
   
}
function elem3(){
    window.winelem = window.setInterval(func3, 1000);
}
function func3(){
    let elem3 = document.getElementById("elem3");
    let date = new Date;
    elem3.innerHTML = zero(date.getHours())+":"+zero(date.getMinutes())+":"+zero(date.getSeconds());
}
function zero(num){
    if (num <= 9){
        return "0" + num;
    } else {
        return num
    }

}
function elem5(){
    window.func5e = window.setInterval(func5, 1000);
}
let number = 1;
function func5(){
    if(number == 1 || number == 2) {
        number = number + 1;
    } else {
        number = 1
    };
    let elem5 = document.getElementById("elem5");
    elem5.src = "../img2/"+number+".png"
}
function elem6(){
    window.timerId = window.setInterval(func6, 500);
    let elem6 = document.getElementById("elem6").disabled = true
}
function func6(){
    let elemimg1 = document.getElementById("elemimg1");
    let elemimg2 = document.getElementById("elemimg2");
    let elemimg3 = document.getElementById("elemimg3");
    let tmp = elemimg1.src;
    elemimg1.src = elemimg2.src;
    elemimg2.src = elemimg3.src;
    elemimg3.src = tmp;
}
function func6(){
    let elemimg1 = document.getElementById("elemimg1");
    let elemimg2 = document.getElementById("elemimg2");
    let elemimg3 = document.getElementById("elemimg3");
    let tmp = elemimg1.src;
    elemimg1.src = elemimg2.src;
    elemimg2.src = elemimg3.src;
    elemimg3.src = tmp;
}
function elem7(){
    window.timerId = window.setInterval(func7, 500);
    let elem7 = document.getElementById("elem7").disabled = true
}
function func7(){
    let elemimg1 = document.getElementById("elemimg1f");
    let elemimg2 = document.getElementById("elemimg2f");
    let elemimg3 = document.getElementById("elemimg3f");
    let elemimg4 = document.getElementById("elemimg4f");
    let elemimg5 = document.getElementById("elemimg5f");
    let elemimg6 = document.getElementById("elemimg6f");
    let tmp = elemimg1.src;
    elemimg1.src = elemimg2.src;
    elemimg2.src = elemimg3.src;
    elemimg3.src = elemimg4.src;
    elemimg4.src = elemimg5.src;
    elemimg5.src = elemimg6.src;
    elemimg6.src = tmp;
}