let popupShow = () => {
	let popupMaster = document.getElementById('popup');
	popupMaster.style.display = 'flex';
	
	let popup = document.getElementById('popup-sorry');
	
	let start = Date.now();

	let draw = (timePassed) => {
		popup.style.top = -300+(timePassed*2) + 'px';
		if(timePassed<=1000){
			popupMaster.style.backgroundColor = "rgba(0,0,0,0."+Math.round(timePassed*2/100)+")"
		}
	}

	let timer = setInterval(()=>{
		let timePassed = Date.now() - start;
		if(timePassed >= 250) {
			clearInterval(timer);
			return;
		}
		draw(timePassed);
	}, 20);
	
}
let popupHide = () => {
	let popupMaster = document.getElementById('popup');
	
	popupMaster.style.backgroundColor = "rgba(0,0,0,0.0)"
	
	let popup = document.getElementById('popup-sorry');
	
	let start = Date.now();

	let draw = (timePassed) => {
		popup.style.top = 200-(timePassed*2) + 'px';
		if(timePassed>=0){
			popupMaster.style.backgroundColor = "rgba(0,0,0,0."+(500-timePassed)+")"
		}
	}

	let timer = setInterval(()=>{
		let timePassed = Date.now() - start;
		if(timePassed >= 250) {
			
			popupMaster.style.display = 'none';
			popupMaster.style.backgroundColor = "rgba(0,0,0,0.5)"
			
			clearInterval(timer);
			return;
		}
		draw(timePassed);
	}, 20);
	
	
	
	
	
}