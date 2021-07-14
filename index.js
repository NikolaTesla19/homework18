//класс
const drinks = {};
class DRINKS_HASH_CLASS{

  addValue = (key, value) => drinks[key] = value;

  deleteValue = (key) => {
    for (let idt in drinks){
      if (idt == key) {
        delete drinks[key];
        return true;
      }else{
        return false;
      }
    }
  }

  getValue = (key) => drinks[key];

  getKeys = () => Object.keys(drinks)

}
let newObj = new DRINKS_HASH_CLASS()
//Вёрстка
function createBottoms(){
  document.body.appendChild(createDivElement('.allDrinks'));
  let buttonsDiv = createDivElement('.buttonsDiv');
  buttonsDiv.appendChild(createInputElement('button', 'Добавить напиток', '.buttons', '#button1'));
  buttonsDiv.appendChild(createInputElement('button', 'Удалить напиток', '.buttons', '#button2'));
  buttonsDiv.appendChild(createInputElement('button', 'Найти конкретный напиток', '.buttons', '#button3'));
  buttonsDiv.appendChild(createInputElement('button', 'Показать список напитков', '.buttons', '#button4'));
  document.body.appendChild(buttonsDiv);
  let addDiv = createDivElement('.addDiv', '#addDiv');
  addDiv.appendChild(createPElement('Название напитка', '.p'));
  addDiv.appendChild(createInputElement('text', '', '.textInput', '#nameOfDrink'));
  addDiv.appendChild(createPElement('Содержит алкоголь?', '.p'));
  let radioDiv = createDivElement('.radioDiv');
  radioDiv.appendChild(createInputElement('radio', 'true', '.radioInput', '@alco', '#true'));
  radioDiv.appendChild(createLabelElement('Да', 'true', '.classLabel'));
  radioDiv.appendChild(createInputElement('radio', 'false', '.radioInput', '@alco', '#false'));
  radioDiv.appendChild(createLabelElement('Нет', 'false', '.classLabel'));
  addDiv.appendChild(radioDiv);
  addDiv.appendChild(createPElement('Рецепт', '.p'));
  let textareaDiv = createDivElement('.textareaDiv');
  textareaDiv.appendChild(createTextareaElement('.recipe', '#recipe'));
  addDiv.appendChild(textareaDiv);
  addDiv.appendChild(createInputElement('button', 'Создать', '.buttons', '#addButton'));
  let delDiv = createDivElement('.delDiv', '#delDiv');
  delDiv.appendChild(createPElement('Название напитка', '.p'));
  delDiv.appendChild(createInputElement('text', '', '.textInput', '#delNameOfDrink'));
  delDiv.appendChild(createInputElement('button', 'Удалить', '.buttons', '#delButton'));
  let oneDiv = createDivElement('.oneDiv', '#oneDiv');
  oneDiv.appendChild(createPElement('Название напитка', '.p'));
  oneDiv.appendChild(createInputElement('text', '', '.textInput', '#oneNameOfDrink'));
  oneDiv.appendChild(createInputElement('button', 'Найти', '.buttons', '#oneButton'));
  document.body.appendChild(oneDiv);
  document.body.appendChild(delDiv);
  document.body.appendChild(addDiv);
}
function createTextareaElement(classId1, classId2){
  let elem = document.createElement('textarea');
  if (classId1 !== undefined) {
    elem = classId(elem, classId1);
  }
  if (classId2 !== undefined) {
    elem = classId(elem, classId2);
  }
  return elem;
}
function createLabelElement(text, labelFor, classId1, classId2){
  let elem = document.createElement('label');
  elem.innerText = text;
  elem.setAttribute('for', labelFor);
  if (classId1 !== undefined) {
    elem = classId(elem, classId1);
  }
  if (classId2 !== undefined) {
    elem = classId(elem, classId2);
  }
  return elem;
}
function createPElement(text, classId1, classId2){
  let elem = document.createElement('p');
  elem.innerText = text;
  if (classId1 !== undefined) {
    elem = classId(elem, classId1);
  }
  if (classId2 !== undefined) {
    elem = classId(elem, classId2);
  }
  return elem
}

function createInputElement(type, value, classId1, classId2, classId3){
  let elem = document.createElement('input');
  elem.type = type;
  elem.value = value;
  if (classId1 !== undefined) {
    elem = classId(elem, classId1);
  }
  if (classId2 !== undefined) {
    elem = classId(elem, classId2);
  }
  if (classId3 !== undefined) {
    elem = classId(elem, classId3);
  }
  return elem
}
function createDivElement(classId1, classId2){
  let elem = document.createElement('div');
  if (classId1 !== undefined) {
    elem = classId(elem, classId1);
  }
  if (classId2 !== undefined) {
    elem = classId(elem, classId2);
  }
  return elem;
}
function classId(element, type){
  if (type[0] === '#') {
    element.id = type.slice(1);
  }
  if (type[0] === '.') {
    element.className = type.slice(1);
  }
  if (type[0] === '@') {
    element.name = type.slice(1);
  }
  return element;
}
createBottoms();
//события
(function(){
  let addButtonDiv = document.getElementById('button1');
  addButtonDiv.addEventListener('click', function(){
    let addDiv = document.getElementById('addDiv');
    addDiv.classList.add('displayBlock');
  })

  let addButton = document.getElementById('addButton');
  addButton.addEventListener('click', () => {
    let nameOfDrink = document.getElementById('nameOfDrink');
    let drinkAlco;
    if (document.querySelector('input[name="alco"]:checked').value) {
      drinkAlco = 'Алкогольный';
    }else{
      drinkAlco = 'Безалкогольный';
    }
    let recipeOfDrink = document.getElementById('recipe');
    let value = createDrinkElement(nameOfDrink.value, drinkAlco, recipeOfDrink.value);
    newObj.addValue(nameOfDrink.value, value);
    addDiv.classList.remove('displayBlock');
    alert(`Напиток ${nameOfDrink.value} успешно добавлен`);
  })

  let delButtonDiv = document.getElementById('button2');
  delButtonDiv.addEventListener('click', () => {
    let delDiv = document.getElementById('delDiv');
    delDiv.classList.add('displayBlock');
  });

  let delButton = document.getElementById('delButton');
  delButton.addEventListener('click', () => {
    let nameOfDrink = document.getElementById('delNameOfDrink');
    if (newObj.deleteValue(nameOfDrink.value)) {
      alert(`Напиток ${nameOfDrink.value} успешно удалён`);
      delDiv.classList.remove('displayBlock');
    }else{
      alert('Мы не нашли такой напиток :(');
    }
  })

  let oneButtomDiv = document.getElementById('button3');
  oneButtomDiv.addEventListener('click', () => {
    let oneDiv = document.getElementById('oneDiv');
    oneDiv.classList.add('displayBlock');
  })

  let oneButton = document.getElementById('oneButton');
  oneButton.addEventListener('click', () => {
    let nameOfDrink = document.getElementById('oneNameOfDrink');
    let oneDrink = newObj.getValue(nameOfDrink.value);
    if (oneDrink) {
      oneDrink.classList.add('oneDrink');
      let closeButton = createInputElement('button', 'Закрыть', '.buttons', `#closeButton`);
      oneDrink.appendChild(closeButton)
      document.body.appendChild(oneDrink);
      oneDiv.classList.remove('displayBlock');
      let close = document.getElementById('closeButton');
      close.addEventListener('click', () => {
        closeButton.parentNode.removeChild(closeButton);
        oneDrink.parentNode.removeChild(oneDrink);
      })

    }else {
      alert('Мы не нашли такой напиток :(');
    }
  })

  let allButton = document.getElementById('button4');
  button4.addEventListener('click', () => {
    let allDiv = createDivElement('.allDiv', '#allDiv');
    let arrOfKeys = newObj.getKeys();
    document.body.appendChild(allDiv);
    if (arrOfKeys.length > 0) {
      allDiv.appendChild(createPElement('Список напитков', '.p'))
      for (var i = 0; i < arrOfKeys.length; i++) {
        let p = createPElement(arrOfKeys[i], '.p');
        allDiv.appendChild(p);
      }
    }else{
      allDiv.appendChild(createPElement('Ниодного напитка в списке :(', '.p'))
    }
  })

}())
function createDrinkElement(nameOfDrink, drinkAlco, recipeOfDrink){
  let div = createDivElement('.recipeDiv', `#${nameOfDrink}`);
  div.appendChild(createPElement(nameOfDrink))
  div.appendChild(createPElement(drinkAlco));
  div.appendChild(createPElement(`Рецепт: \n ${recipeOfDrink}`));
  return div;
}
