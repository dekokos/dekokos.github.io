var link = document.querySelector(".login");
var loginBlock = document.querySelector('.modal_content');
var btnClose = loginBlock.querySelector('.modal_content_close');
var login = loginBlock.querySelector("[name=login]");
var password = loginBlock.querySelector("[name=password]");
var form = loginBlock.querySelector("form");
var storage = localStorage.getItem("login");

var mapOpen = document.querySelector(".js_open_map");
var mapPopup = document.querySelector(".modal_content_map");
var mapClose = mapPopup.querySelector(".modal_content_close");

link.addEventListener("click", function(event) {
	event.preventDefault();
	loginBlock.classList.add('modal_content_show')
	if(storage) {
		login.value = storage;
		password.focus();
	}else{
		login.focus();
	}
});
btnClose.addEventListener('click', function(event) {
	event.preventDefault();
	loginBlock.classList.remove('modal_content_show');
	loginBlock.classList.remove('modal_error');
});
form.addEventListener("submit", function(event) {
	if(!login.value || !login.password) {
		event.preventDefault();
		loginBlock.classList.add("modal_error");
	}else{
		 localStorage.setItem("login", login.value);
	}
});
window.addEventListener("keydown", function(event) {
	if(event.keyCode === 27) {
		if(loginBlock.classList.contains("modal_content_show")) {
			loginBlock.classList.remove("modal_content_show"); 
		}
	}
});

/*Map*/
mapOpen.addEventListener("click", function(event) {
	event.preventDefault();
	mapPopup.classList.add("modal_content_show");
});
mapClose.addEventListener("click", function(event) {
	event.preventDefault();
	mapPopup.classList.remove("modal_content_show");
});
window.addEventListener("keydown", function(event) {
	if(event.keyCode === 27) {
		if(mapPopup.classList.contains("modal_content_show")) {
			mapPopup.classList.remove("modal_content_show");
		}
	}
});