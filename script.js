
// UI Değişkenler 
const form = document.querySelector('form'); 
const input = document.querySelector('#txtTaskName');
const btnDeleteAll =document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');

eventListeners();
//submit evet
function eventListeners (){
    form.addEventListener('submit', addNewItem);
};

//delete an item 
taskList.addEventListener('click', deleteItem);

//delete all event 
btnDeleteAll.addEventListener('click' ,deleteAll);



// add new item
function addNewItem (e){

    if( input.value === ''){
        alert('Lütfen Değer giriniz.');
    }
    // Create li
    const li = document.createElement ('li');
    li.className='listGruopİtem';
    li.appendChild(document.createTextNode(input.value));

    //Create a
    const a = document.createElement('a');
    a.classList= 'deleteİtem float-right';
    a.setAttribute ='href, #';
    a.innerHTML='<i class="fas fa-times"></i>';
    a.style.color='#0d6efd';

    // add a to li 
    li.appendChild(a);

    // add li to ul
    taskList.appendChild(li);


    console.log(li);

e.preventDefault();
};
// dalete item
function deleteItem(e){

  if (confirm('Silmek İstediğinizden emin misiniz ?')){
   
    if (e.target.className ==='fas fa-times'){

        e.target.parentElement.parentElement.remove();
    };
    
  } ; 
e.preventDefault();

};

// delete all items
function deleteAll (e){



if(confirm('Hepsini silmek istediğinizden emin misiniz?')){
   
    taskList.innerHTML='';
};


e.preventDefault();
};

