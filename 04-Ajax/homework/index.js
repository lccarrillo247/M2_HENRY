let friendsHandler = function(){
    let lista = $('#lista');
    lista.empty();
    
    $.get('http://localhost:5000/amigos', (response) => {
        response.map(amigo =>{
    
    let elementoHTML = document.createElement('li')
    elementoHTML.innerText = amigo.name + ' es tu amigo número: ' + amigo.id;

    lista.append(elementoHTML);

        });
    });
}

$('#boton').on('click',(e)=>{
    let lista = $('#lista');
    lista.empty();
    
    $.get('http://localhost:5000/amigos', (response) => {
        response.map(amigo =>{
    
    let elementoHTML = document.createElement('li')
    elementoHTML.innerText = amigo.name + ' es tu amigo número: ' + amigo.id;

    lista.append(elementoHTML);

        });
    });
});

$('#search').on('click', () => {
    let id = $('#input').val(); // let id = document.querySelector('#input').value
    
    if (id) {
    $.get('http://localhost:5000/amigos/' + id, (response) => {
        $('#amigo').html('Nombre: ' + response.name);
        id = '';
    });
} else {
    $('#amigo').html('Inserte un id');
}
});

$('#delete').on('click', ()=>{

    let id = document.querySelector('#inputDelete').value;

    if(id){
    $.ajax({
        type: "DELETE",
        url: 'http://localhost:5000/amigos/' + id,
        success: ()=>{
    $('#success').html('Tu amigo fue eliminado con éxito');
    friendsHandler();
    id = '';
        }

    });
    } else {
        $('#success').html('Inserta un ID');
    }

})