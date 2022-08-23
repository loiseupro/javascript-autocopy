document.addEventListener("DOMContentLoaded", function(event) {

	function showCopyMsg(element){

		element.insertAdjacentHTML(
			'afterend',
			'<span class="mb-3 mt-1 copy-msg">Copied to clipboard</span>'
			);

		setTimeout(function(event) {
			document.querySelectorAll(".copy-msg").forEach(el => el.remove());
		}, 1000);

	}

	/* Auto-copy */
	var elementsCanCopy = document.getElementsByClassName("autoCopy");
	for (var i = 0; i < elementsCanCopy.length; i++) {
		elementsCanCopy[i].onclick = function() {
			document.execCommand("copy");
		}
		elementsCanCopy[i].addEventListener("copy", function(event) {
			event.preventDefault();
			if (event.clipboardData) {
				event.clipboardData.setData("text/plain", this.textContent);
				showCopyMsg(this)
			}
		});
	}

});