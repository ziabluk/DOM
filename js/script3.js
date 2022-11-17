function func4(){
    let elem4 = [new Date().getSeconds(),new Date().getMinutes(),new Date().getHours()]
    let elem4_1 = [new Date().getDate(),new Date().getMonth(),new Date().getFullYear()]
    for (var i = 0; i < elem4.length; i++){
        if (elem4[i] < 10){
            elem4[i] = "0" + elem4[i]
        }
    }
    alert(elem4.join(":")+" "+elem4_1.join(":"))
}
function showDay(){
    if (new Date().getDay() == '1'){
        alert("Понедельник")
    }
    if (new Date().getDay() == '2'){
        alert("Вторник")
    }
    if (new Date().getDay() == '3'){
        alert("среда")
    }
    if (new Date().getDay() == '4'){
        alert("Четверг")
    }
    if (new Date().getDay() == '5'){
        alert("Пятница")
    }
    if (new Date().getDay() == '6'){
        alert("Суббота")
    }
    if (new Date().getDay() == '7'){
        alert("Воскресенье")
    }
}
function elem7(){
    let a = new Date(2015, 0, 7);
    day = a.getDay()
    days = ["pn","vt","cr","cht","pt","sb","vs"]
    alert(days[day])
}
function elem8(){
    let date = new Date();
    perem = date.getTime() / (60 * 1000);
    alert(Math.floor(perem))
}
function elem9(){
    let date = Date.parse('1988-08-01T00:00:00');
    let newdate = new Date();
    let now = newdate.getTime();
    let result = now - date;
    let resyltup = Math.floor(result / (1000 * 360));
    alert(resyltup)
}
function elem10(){
    let date = new Date();
    var now = new Date(date.getFullYear(), date.getMonth(), date.getDate())
    let result = Math.floor((date.getTime() - now.getTime()) / 1000);
    alert(result)
}
function elem11(){
    let date = new Date();
    var now = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    let result = Math.floor((date.getTime() - now.getTime()) / 1000);
    let otvet = 86400 - result
    alert(otvet)
}
function elem12(elem) {
	var inputValue = elem.value;
	var date = new Date();
	var fromNow = Date.parse(String(date.getFullYear()) + '-' + (date.getMonth() + 1) + '-' + date.getDate());
	var fromTarget = Date.parse(inputValue);
	var result = (fromTarget - fromNow) / (1000 * 60 *60 *24) ;

	document.getElementById("output").innerHTML = Math.round(result);
}