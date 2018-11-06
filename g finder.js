// data-target= 'node'
// div data-target= 'expander'
// div data-tooltip= 'Mi unidad'



//CREAR BUSCADOR

    var sidebar = document.querySelector('DIV[data-target="sidebar"]')

    // chequear si existe
    if (sidebar.querySelector('#buscador') == null){
       //crear
        var buscador = document.createElement('DIV');
        // ---------------hacer un elemento style y atacharlo para poder darle estilos al :focus y placeholder
        buscador.innerHTML = `<input 
                                id='buscador' 
                                type="text" 
                                placeholder="Buscar" 
                                style =" width: 75%; padding: 15px 8%; border-radius: 8px; background: #ececec; margin: 12px 8px; border: 1px solid #fff;"
                              >`
        
       
       //atachar
        sidebar.insertBefore(buscador, sidebar.firstChild);
        //sidebar.appendChild(buscador)
    }

    // ABU
    var nav = document.querySelector('NAV.a-da-U')
//     document.querySelector("p").closest(".near.ancestor") 
//     nav.childNodes[1].childNodes[0].style.height = 'initial';
//     nav.childNodes[1].childNodes[0].style.width = '100%'
//     nav.childNodes[1].childNodes[0].childNodes[0].childNodes[1].parentNode[]
//     nav.childNodes[0]
    //EVENT LISTENER
    buscador.addEventListener('keyup', function(e){

//         console.log(e.target.value)
        var folders = Array.from(document.querySelectorAll('NAV .a-s-T'));
        var valor = e.target.value.toLowerCase();

        var folderUno = folders[0].querySelector('DIV').closest('.a-U-Ze-j a-U-ye-jm');

        console.log(folderUno)

        
        folders.forEach(function(folder, index, lista){
            
            var folderName = folder.dataset['tooltip'].toLowerCase();
//             console.log(folders)

             if(folderName == 'mi unidad'){
                 console.log('mi unidad encontrado')
//                  var expander = folder.querySelectorAll('DIV').closest('.a-U-Ze-j a-U-ye-jm');
                 console.log(expander)
             }       

             if (folderName.indexOf(valor) == -1){
                 folder.parentNode.parentNode.parentNode.style.display ='none';
             }
             else{
                 folder.parentNode.parentNode.parentNode.style.display ='block';
             }
        })

        

    })



// var letra = prompt('letra')

// var folders = Array.from(document.querySelectorAll('NAV .a-s-T'));

// var finded = folders.find(function(item, i){

//     return (item.dataset['tooltip'][0]).toLowerCase() == letra 
         
// });



// finded.style.color = 'red';
// finded.scrollIntoView({block: "start", behavior: "smooth"});


// folder.forEach(function(item){
 
//     console.log(item.dataset['tooltip'])
   
//     if (item.dataset['tooltip'] != finded.dataset['tooltip']){

//             item.parentNode.parentNode.parentNode.style.display ='none';
//             finded.style.color = 'red';
//             finded.scrollIntoView({block: "start", behavior: "smooth"});
//     }
// })



//BUSCAR
//element.getBoundingClientRect