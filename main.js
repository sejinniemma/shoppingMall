'use strict';
 

 // main
  loadItems()
  .then(items => {
     displayItems(items);
     setEventListener(items);
  })
  .catch(console.log)


  // Fetch
function loadItems() {
    return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items);
}


function displayItems(items) {
  const container = document.querySelector('.items');
    container.innerHTML = items.map(item => creatHTMLString(item))
  }

  function creatHTMLString(item) {
  return  `<li class="item">
             <img class="item__thumbnail" src=${item.image} alt="" >
             <span class="item__description">${item.gender}, ${item.size}</span>
         </li>`;
  }



  function setEventListener(items){
    const logo = document.querySelector('.logo');
    logo.addEventListener('click',() => displayItems(items));
    const buttons = document.querySelector('.buttons');
    buttons.addEventListener('click', event => onItemClick(event,items));
  }


 
  function onItemClick(event,items){
  const target = event.target;
  const key = target.dataset.key;
  const value = target.dataset.value;

  if(key == null || value == null){
    return;
  }

  // displayItems(items.filter(item => item[key] === value))
  updateItems(items,key,value);
}

 function updateItems(items,key,value){
   items.forEach(item => {
     if(item[key] === value){
      item.classList.remove('invisible');
     }else{
      item.classList.add('invisible');
     }
   });
 }
