console.log('Its working')

let theme = localStorage.getItem('theme')

if(theme == null){
    setTheme('light')
}else{
    setTheme(theme)
}

let Js_Dot = document.getElementsByClassName('Js-dot')

for (var i=0; Js_Dot.length > i; i++){
	Js_Dot[i].addEventListener('click' ,function(){
		let mode = this.dataset.mode
		console.log('Option clicked: ', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'default.css'
	}

	if(mode == 'red'){
		document.getElementById('theme-style').href = 'red.css'
	}

	if(mode == 'black'){
		document.getElementById('theme-style').href = 'black.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'blue.css'
	}

	localStorage.setItem('theme', mode)

}