"use strict"

//:::::::::::::::::::::::::| spanish-conjugator | :::::::::::::::::::::::
//document ready
document.addEventListener('DOMContentLoaded', function(){

	const listas = document.querySelectorAll('.lista');
	// add a Class	
	listas.forEach(function(lista) {
			lista.classList.add('mandraco')
	});
	
	// delete button
	listas.forEach(function (listados) {
		
		listados.addEventListener('click', function(e){
			// delete
			if(e.target.className == 'button'){
				listados.removeChild(e.target.parentElement)
				console.log('borrete');				
			}
			// Resaltado
			if (e.target.tagName == 'LI') {
				e.target.classList.toggle('clicked');
			}					
		})
	});
	
	//Formulario de carga	
	const formulario = document.querySelector('#formulario');
	const valor = formulario.querySelector('input.campoDeTexto').value;	

	document.querySelector('#submitItem').addEventListener('click', function(e) {
		var valor1 = formulario.querySelector('input.campoDeTexto').value;
		
		//crear elemento
		const item = document.createElement('li');
		const button = document.createElement('span');
		
		//conenitod
		item.textContent = valor1;
		button.textContent = 'borrar';
		
		//Clases
		item.classList.add('item');
		button.classList.add('button');
		
		//atachar
		item.appendChild(button);
		document.getElementById('lista1').appendChild(item);
	})

	//Formulario Search
	const search = document.getElementById('search');
	search.addEventListener('keyup', function(e) {
		
	});


})
//e

//:::::::::::::::::::::::::| spanish-conjugator | :::::::::::::::::::::::
//e
