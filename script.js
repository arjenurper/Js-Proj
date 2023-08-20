let addToDoButton = document.getElementById('addToDo');
let inputText = document.getElementsById('inputText');
let toDoContainer = document. getElementById('inputText')
let clearToDo = document.getElementById('clearToDo')
addToDoButton.addEventListener('click',function(){
}
addToDoButton.addEventListener('click',function(){
    let paragraph = Document.createElement ('p');
    paragraph.classList.add('paragraph-styling');
    ToDoContainer.appendChild(paragraph);
    paragraph.innerHTML = İnputText.value;
    inputText.value = "";
}
 paragraph.addEventListener('click,'function(){
        paragraph.style.textDecoration = 'line- thourgh';
    });

    paragraph.addEventListener('dblclick', function(){
        ToDoContainer.removeChild(paragraph); 
    });
 
    clearToDo.addEventListener('click' function(){
         paragraph.remove();
    });




