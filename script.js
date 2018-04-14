"use strict"

//:::::::::::::::::::::::::| spanish-conjugator | :::::::::::::::::::::::
	//document ready
	document.addEventListener('DOMContentLoaded', function(){

		const listas = document.querySelectorAll('.lista');
		
		// add a Class	
		listas.forEach(function(lista) {
				lista.classList.add('mandraco')
		});

		//loop todas las litas
		listas.forEach(function (listados) {
			
			// delete button
			listados.addEventListener('click', function(e){
				if(e.target.className == 'button'){
					listados.removeChild(e.target.parentElement)
				}
				
				// Resaltado
				if (e.target.tagName == 'LI') {
					e.target.classList.toggle('clicked');
				}		
				
			})

		})


	})
//e

//:::::::::::::::::::::::::| spanish-conjugator | :::::::::::::::::::::::
//e
