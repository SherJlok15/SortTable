//функція для сортування таблиці function sortTable(table){}
// відслідкувати слік по th
//дізнатись cellIndex th
// створити масив із рядків tbody
// створити функцію для сортування рядків
//  за дпомогою textContent зрівняти вміст клітинок
// appendChield вивести row


const table = document.querySelector('table');

function sortTable() {
  const tHead = document.querySelector('thead');
  const tBody = document.querySelector('tbody');
  
  tHead.addEventListener('click', (e) => {
    target = e.target;
    if (target.tagName != 'TH') return;

    const rows =  tBody.children
    const rowsArr = [...rows];

    const thIndex = target.cellIndex;
    const dataType = target.dataset.type;

    rowsArr.sort((rowA, rowB) => {

      const valueA = rowA.cells[thIndex].textContent;
      const valueB = rowB.cells[thIndex].textContent;

          if (dataType === 'number') {
             if (+valueA > +valueB){
               return 1;
             } else if (+valueA < +valueB) {
               return -1;
             } else {
               return 0;
             }
           }
           if (dataType === 'string') {
             if (valueA > valueB){
               return 1;
             } else {
               return -1;
             }
           }

         });

    for (let row of rowsArr) {
      tBody.appendChild(row);
    }
  })
}

sortTable(table);
