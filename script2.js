let yourname = prompt("Кто ты такой?");
alert(yourname);
if(yourname == "Админ") {
    let password = prompt("Твой пароль?");
    if(password =="123")
        alert("Спасибо, входи")
    else 
        alert("Неверный пароль")
}

else if (youname == null) {
    alert("Отмена")
}
else {
    alert("Я вас не знаю")
}