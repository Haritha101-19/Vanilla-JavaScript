const listItems=document.querySelector('.list-items');
const addItems=document.querySelector('.add-items');
const listofItems=JSON.parse(localStorage.getItem('listofItems')) || [];


function addtolist(e){
    e.preventDefault();
    
    const text=(document.querySelector('[name=item]')).value;
    //console.log(text);
    const list={
        text,
        done: false
    };
    listofItems.push(list);
    populateList(listofItems,listItems);
    localStorage.setItem('listofItems',JSON.stringify(listofItems));
    this.reset();
}

function populateList(plates=[],listItems){
    listItems.innerHTML=plates.map((plate,index)=>{
    return `
        <li>
            <input type="checkbox" data-index=${index} id="item${index}" ${plate.done ? 'checked' : ''}>
            <label for="item${index}">${plate.text}</label>
        </li>`;
    }).join('');
}

function toggleDone(e){
    if(!e.target.matches('input')) return;
    const element=e.target;
    const index=element.dataset.index;
    listofItems[index].done =!listofItems[index].done;
    localStorage.setItem('listofItems',JSON.stringify(listofItems));
    populateList(listofItems,listItems);
}



addItems.addEventListener("submit",addtolist);
listItems.addEventListener('click',toggleDone);
populateList(listofItems,listItems);