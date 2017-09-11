
//funkcja dodawania tekstu z wartosci po wpisaniu przez użytkownika
const add = document.getElementById('add');



add.addEventListener('click', function () {
const value = document.getElementById('item').value

    if (value) {
    addElem()

    console.log(value)

    } else {alert('Wpisz zadanie!')}
})
//funkcje dodawania/usuwania elementów li
const addElem = function () {


    const value = document.getElementById('item').value
    const li  = document.createElement('li')
    li.innerText = value
    const items = document.querySelector('.items');
    items.appendChild(li);
    //dodanie przycisku remove do utworzonych elementów li
    const removeTask = items.appendChild(li);

    const removebtn = document.createElement('button')
    removebtn.innerHTML = 'Remove';
    removebtn.classList.add('remove')
    const spanremove = document.createElement('span')
    spanremove.appendChild(removebtn);
      //dodanie przycisku zaznacz element
    const targetelem = document.createElement('button')
    targetelem.innerHTML = 'Select'
    targetelem.classList.add('select')
    spanremove.appendChild(targetelem)
    li.appendChild(spanremove)
    //usuwanie elementów
    removebtn.addEventListener('click',function(){
        li.style.display = 'none' ;
    })
  //przycisk select
    targetelem.addEventListener('click',function(){
    li.style.backgroundColor = 'green'
    const newli = li;        
     
    const deleteall = document.querySelector('#delete-selected')
    deleteall.addEventListener ('click',function(){
        
        
    //okienko potwierdzające
    
        var  removeall = prompt ('Do you want to delete all selected? (yes/no)')
        if(removeall == 'yes') {
        newli.style.display='none';
        } else if (removeall=='no') {
        false
        } else {
            alert('Please instert yes or no')
        }
        
        
        
        });   
        
        
    
    });
    
    


  
    
        
        

    
   
};












