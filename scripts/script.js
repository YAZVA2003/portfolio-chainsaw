const myFirstvar = 1;
const myFunc = () => {
    console.log(myFirstvar);
}
input.oncut = input.oncopy = input.onpaste = function(event) {
    alert(event.type + ' - ' + event.clipboardData.getData('text/plain'));
    return false;
};
elem.onclick = function() {
if (confirm("Перейти на Wikipedia?")) {
  location.href = "https://wikipedia.org"; // перенаправляет браузер на другой URL
}else{
alert(location.href);// показывает текущий URL
 }
};
par = function() {
    let form = document.createElement('form');
    form.action = 'https://google.com/search';
    form.method = 'GET';
    form.innerHTML = '<input name="q" value="test">';       
    document.body.append(form);// перед отправкой формы, её нужно вставить в документ
    form.addEventListener("focusin", () => form.classList.add('focused'));
    form.addEventListener("focusout", () => form.classList.remove('focused'));
    form.submit();
};
myFunc()
console.log('Спасибо');