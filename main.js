'use strict';



// Fetch
function loadItems(){
    return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items);
}
function displayItems(items){
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => creatHTMLString(item))
  }

  function creatHTMLString(item){
  return  `
    <li class="item">
             <img class="item__thumbnail" src=${item.image} alt="" >
             <span class="item__description">${item.gender}, ${item.size}</span>
         </li>
        `;
  }

  // main
loadItems()
 .then(items => {
    displayItems(items);
    // setEventListener(items);
 })
 .catch(console.log('error'))


