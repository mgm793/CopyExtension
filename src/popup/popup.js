(function popup(){

	function onClickText(evt){
		var data = [
			new ClipboardItem(
				{ 
					"text/plain": new Blob([evt.target.innerText], { type: "text/plain" }) 
				}
			)
		];
		navigator.clipboard.write(data);
		window.close();
	}

	function setNoItemsText(){
		const textContainer = document.getElementById('textContainer');
		const el = document.createElement('div');
		el.innerText = 'No copied items...';
		textContainer.appendChild(el);
	}

	function init(){
		const copiedTexts = JSON.parse(window.localStorage.getItem('CopyPasteExt'));
		const textContainer = document.getElementById('textContainer');
		const clearAllBtn = document.getElementById('clearAll');
		if(copiedTexts.length){
			copiedTexts.forEach(text => {
				const el = document.createElement('div');
				el.innerText = text;
				el.classList.add('popup__item');
				el.onclick = onClickText;
				textContainer.appendChild(el);
			});
		}
		else{
			setNoItemsText();
		}
		clearAllBtn.addEventListener('click', function onClick(){
			window.localStorage.setItem('CopyPasteExt', JSON.stringify([]));
			textContainer.innerHTML = '';
			setNoItemsText();
		})
	}

	init();
	
})();