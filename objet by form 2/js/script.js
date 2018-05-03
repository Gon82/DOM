'use strict'
document.addEventListener('DOMContentLoaded', function(){
	
	//status
	console.log("ready");
	
	
	//Obj turno
	function Turno(nombre, hora) {
		this.nombre = nombre;
		this.hora = hora;
		this.get = function () {
			return this
		}

		function suspender() {
			this.classList.add('suspendido')
		}
	}

	// Form

	const form = document.getElementById('form_turnos');
	form.addEventListener('submit', submit);

	let lista = [];

	function submit(e) {
		e.preventDefault();
		const nombre = document.getElementById('nombre').value;
		const hora = document.getElementById('hora').value;

		const reserva = new Turno(nombre, hora);
		lista.push(reserva);
		render(nombre, hora);
		console.log(lista);

		form.reset()
	}

	var sargentoGutieeres = 123;
	// render
	function render(nombre, hora) {
		const ficha = document.querySelector('#ficha')
		
		//apend
		const turno = document.createElement('div');
		turno.innerHTML = `<p>${nombre}</p>`;
		turno.classList.add('turno');
		ficha.appendChild(turno);
	}




});