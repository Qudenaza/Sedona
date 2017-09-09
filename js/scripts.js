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
