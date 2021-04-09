
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

//delete an item event
taskList.addEventListener('click', deleteItem);

//delete all event 
btnDeleteAll.addEventListener('click' ,deleteAll);

// input clear event
input.addEventListener(key)


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


    //clear input 
    input.value='';

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
// 2.yontem
/* taskList.childNodes.forEach(function(item){
    if(item.nodeType ===1){
        item.remove();
    }
});
 */
e.preventDefault();
};

