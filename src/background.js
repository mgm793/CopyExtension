(function background(){
	function getPrevCopied(){
		return JSON.parse(window.localStorage.getItem('CopyPasteExt')) || [];
	}

	function addCopiedText(newCopiedText){
		const prevData = getPrevCopied();
		if(prevData.includes(newCopiedText)){
			return;
		}
		const newData = [...prevData, newCopiedText];
		window.localStorage.setItem('CopyPasteExt', JSON.stringify(newData));
	}

	chrome.runtime.onMessage.addListener(
		function onMessage(request, sender , sendResponse){
			addCopiedText(request.newCopiedText);
		}
	);

})();
