var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');
var li = document.querySelectorAll('li');
var del = document.getElementsByClassName('delete');

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    li.classList.add('list');
    ul.appendChild(li);
    input.value = '';
    var delbut = document.createElement('button');
    delbut.appendChild(document.createTextNode('Delete'));
    delbut.classList.add('delete');
    li.appendChild(delbut);
    
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeyPress (event) {
        if (inputLength() > 0 && event.key === 'Enter') {
            createListElement();
        }  
}

function done () {
    ul.addEventListener('click', function(e) {
        if(e.target.classList.contains('list')){
            e.target.classList.toggle('done');
        }
    })
}


function deleteLi() {
    for(var i=0;i < del.length; i++){
        del[i].addEventListener('click', function(){
            this.parentNode.remove();
        })
    }
    ul.addEventListener('click', function(e){
        this.children[i].remove();
    })
}

deleteLi()
done()

button.addEventListener('click', addListAfterClick)

input.addEventListener('keydown', addListAfterKeyPress)