var link = document.querySelector(".hotels__form");
var popup = document.querySelector(".hotels__search-form")

	link.addEventListener("click", function() {
		if(popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
		} else {
			popup.classList.add("modal-show");
		}
	});

	window.addEventListener("keydown", function(event){
		if (event.keyCode === 27) {
	 		if (popup.classList.contains("modal-show")) {
	 		 popup.classList.remove("modal-show");
	 		 popup.classList.remove("modal-error");
	 			}
	 		}
	 });

// link.addEventListener("click", function (event) {
// 	event.preventDefault();
// 	popup.classList.add("modal-content-show");
// 	shadow.classList.add("modal-overlay-show");
// 	if (storage) {
// 		userName.value = storage;
// 		mail.focus();
// 	} else {
// 		userName.focus();
// 	}
// });
//
// close.addEventListener("click", function (event) {
// 	event.preventDefault();
// 	popup.classList.remove("modal-content-show");
// 	popup.classList.remove("modal-error");
// 	shadow.classList.remove("modal-overlay-show");
// });
//
// form.addEventListener("submit", function(event) {
// 	if (!userName.value || !mail.value) {
// 		event.preventDefault();
// 		popup.classList.add("modal-error");
// 	} else {
// 		localStorage.setItem("userName", userName.value);
// 	}
// });


// window.addEventListener("keydown", function(event){
// 	if (event.keyCode === 27) {
// 		if (popup.classList.contains("modal-content-show")) {
// 		 popup.classList.remove("modal-content-show");
// 		 popup.classList.remove("modal-error");
// 		 shadow.classList.remove("modal-overlay-show");
// 			}
// 		}
// });
//
//
// var map;
//
// function initMap() {
// 	map = new google.maps.Map(document.getElementById('map'), {
// 		center: {
// 			lat: 59.9392265,
// 			lng: 30.32917000
// 		},
// 		zoom: 16
// 	});
// 	var marker = new google.maps.Marker({
// 		position: {
// 			lat: 59.9385365,
// 			lng: 30.32291472
// 		},
// 		map: map,
// 		title: 'Наш маркер: Большой театр',
// 		icon: 'img/pin.svg'
// 	});
// }
