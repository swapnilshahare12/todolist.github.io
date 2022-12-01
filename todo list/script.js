let enterButton = document.getElementById('enter');
let userinput = document.getElementById('userInput');
let ul = document.querySelector('ul');

function inputLength() {
  return userinput.value.length;
}

function createListElement() {
  let li = document.createElement('li'); 
  li.appendChild(document.createTextNode('🚀 ' + userinput.value)); 
  ul.appendChild(li); 
  userinput.value = ''; 
  
  function listdone() {
    li.classList.toggle('done');
  }

  li.addEventListener('click', listdone);

  let dBtn = document.createElement('button');
  dBtn.appendChild(document.createTextNode('❌'));
  li.appendChild(dBtn);
  dBtn.addEventListener('click', deleteListItem);

  function deleteListItem() {
    li.classList.add('delete');
  }
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

enterButton.addEventListener('click', addListAfterClick);

