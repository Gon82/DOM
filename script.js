"use strict"

//:::::::::::::::::::::::::| spanish-conjugator | :::::::::::::::::::::::
//document ready
document.addEventListener('DOMContentLoaded', function(){

	const listas = document.querySelectorAll('.lista');
	
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
	
	document.querySelector('#submitItem').addEventListener('click', function(e) {
		var valor = formulario.querySelector('input.campoDeTexto').value;
		if (valor != '') {
		//crear elemento
		const item = document.createElement('li');
		const button = document.createElement('span');
		
		//contenido
		item.textContent = valor;
		button.textContent = 'borrar';
		
		//Clases
		item.classList.add('item');
		button.classList.add('button');
		
		//atachar
		item.appendChild(button);
		document.getElementById('lista1').appendChild(item);

		//reset form
		formulario.querySelector('input.campoDeTexto').value = null;
		
		}
		
	})

	//Formulario Search
	// const search = document.getElementById('search');
	// search.addEventListener('keyup', function(e) {
		
	// });


	const search = document.querySelector('#search input')
	search.addEventListener('keyup', function(e) {

		const valor = e.target.value.toLowerCase();
		//primero transformo en array // si lo hubiera hecho con querySelector no hacía falta.
		Array.from(document.getElementsByClassName("item")).forEach(function (li) {		
			
			const nombre = li.textContent.toLocaleLowerCase();
			
			if (nombre.indexOf(valor) == -1)
			{
				li.style.display = 'none';							
			}
			else 
			{
				li.style.display = 'block';
			}

		})	
	})

})
//e

//:::::::::::::::::::::::::| spanish-conjugator | :::::::::::::::::::::::
//e
