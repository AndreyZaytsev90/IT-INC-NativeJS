// Изменение, которое браузер может отследить - > событие
// При наступлении события мы можем что-то сделать (вызвать функцию)
// Обработчик , handler, слушатель, listener, подписчик, subcriber => function
// При наступлении события браузер генерирует объект типа Event (new Event())
// {...} => event, e, ev
// При наступлении события, генерируется объект е => fn(e) и он передается в функцию в качестве параметра.

const small = document.getElementById("small");

function handler() {
  alert("you click small");
}
function handler2() {
  alert("you click small2");
}

small.onclick = handler;
small.onclick = handler2; // handler перезатерся на handler2
small.onclick = null;

/*small.onclick = () => {
  handler();
  handler2();
};
*/

small.addEventListener("click", handler);
small.addEventListener("click", handler2); // функции вызываются по очереди. Они не затераются
