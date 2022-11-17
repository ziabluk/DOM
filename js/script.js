let abambus = document.getElementById('button');
abambus.onclick = function(){
    alert("Привет!");
}


let button6 = document.getElementById('button6');
button6.onclick = function() {
    var input = document.getElementById('inpute');
	input.value = 'Ой я поменял свой текст';
}


let button2 = document.getElementById("button2");
button2.onmouseover = function(){
    alert("Привет!");
}


let button3 = document.getElementById("button3");
button3.ondblclick = function(){
    alert("Привет!");
}


let button4 = document.getElementById("button4");
button4.onmouseout = function(){
    alert("Привет!");
}


let button5 = document.getElementById('button5');
button5.onclick = function(){
    alert("Ку-ку");
}


let img = document.getElementById("img");
let button7 = document.getElementById("button7");
button7.onclick = function(){
    img.src = "http://old.code.mu/exercises/javascript/dom/osnovy-raboty-s-dom-v-javascript/2/3/2.jpg";
}


function buttonClick(element) {
    alert(element.value);
}


function verrtego(elem){
    elem.value = "Ой, я поменял текст!"
}


function go(elem){
    elem.value = "Ой, я поменял текст!";
}


function stop(elem){
    elem.value = "Ой, а теперь еще раз поменял";
}


function kuku(elem) {
    elem.value = "Ку-Ку";
}


function obeziana(element){
    element.src = "../img/2.jpg";
}
function obeziana2(element){
    element.src = "../img/1.jpg";
}


function magainput(elem) {
    elem.value = "О, теперь на меня больше не нажать!";
    elem.disabled = true;
}


function mmm(){
    elem = document.getElementById("input3");
    elem.style.color = "red";
    elem.style.width = "300px";
}


function megainput2(){
    kk = document.getElementById("input4");
    kk.style.color = "red";
    kk.style.width = "300px";
    kk.style.height =  "50px";
    kk.style.borderRadius = '10px';
    kk.value = 'Ой, я поменял свой текст и css!';
}


function inputblock(){
    var inputblock = document.getElementById("inputblock");
    var inputunblock = document.getElementById("inputunblock");
    inputblock.value = "О, теперь на меня больше не нажать!";
    inputblock.disabled = true;
    inputunblock.style.display = "block";
}
function inputunblock(){
    var inputblock = document.getElementById("inputblock");
    var inputunblock = document.getElementById("inputunblock");
    inputblock.value = 'О, на меня снова можно нажимать!'
    inputblock.disabled = false;
    inputunblock.style.display = "none";
}


function counter(){
    var counterinput = document.getElementById("counterinput");
    counterinput.value = parseInt(counterinput.value) + 1;
 
}


function inputposition(elem){
    elem = document.getElementById("inputposition");
    elem.value = 'Теперь я плаваю справа!';
    elem.style.cssFloat = "right";
}


function kyinput(elem){
    var elem = document.getElementById("kyinput");
    elem.value = 'Мои css классы: '+elem.className;
}


function prinput(){
    var helloinput = document.getElementById("helloinput");
    var byeinput = document.getElementById("byeinput");
    var ttt = helloinput.value;
    helloinput.value = byeinput.value;
    byeinput.value = ttt;
}


function counterinput(){
    var linkinput = document.getElementById("linkinput");
    var resultinput = document.getElementById("resultinput");
    var yyy = linkinput.value
    resultinput.value = yyy*yyy
}


function counterinput2(){
    var linkinput = document.getElementById("linkinput2");
    var yyy = linkinput.value
    var resultinput = document.getElementById("resultinput2");
    if (!isNaN(yyy)){
        resultinput.value = yyy*yyy
    }else{
        alert("Введено не число!")
    }
        
}



function goiinput(elem){
    elem.disabled = true;
    elem.style.cursor = 'not-allowed';
}


function add(text){
    var input = document.getElementById('input');
    input.value = input.value + text;
}



function sym(text){
    var input = document.getElementById('input');
    input.value = input.value + text;
}