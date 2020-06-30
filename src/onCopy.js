(function onCopy(){
	function addCopiedText(newCopiedText){
		chrome.runtime.sendMessage({
			newCopiedText
		});
	}

	function copyHandler(evt){
		const copiedText = document.getSelection();
		addCopiedText(copiedText.toString());
	}

	document.addEventListener('copy', copyHandler);
})();