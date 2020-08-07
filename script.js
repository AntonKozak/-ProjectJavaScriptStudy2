var data;
var currentID;
var selectedItem;


async function start() {
  data = await fetch("data.json")
    .then((response) => response.json())
    .catch((error) => document.write(error));

    
  var html = `<select name="" id="house" >
              <option value="0">Select House</option>`;

  for (var i = 0; i < data.length; i++) {
    html += `
            <option value=${data[i].id}>${data[i].name}</option>            
    `;
  }

  html += `</select>`;

  document.getElementById("select").innerHTML = html;
}

start();

function betweenPlants() {

  document.getElementById('AmountPlantsOnTable').value = '0'
  document.getElementById('PlantsPerMetr').value = '0'

  currentID = document.getElementById("house").value;
  selectedItem = data.find(item => item.id == currentID);
  
  boxID = document.getElementById("boxes").value;
  selectedBox = box.find(items => items.id == boxID);

  number = document.getElementById("UsersBetweenPlantsInLine").value;

  if (number != "0") {
    let numberValue 
    numberValue = parseFloat(number)
    
    document.getElementById("Cm").innerHTML=numberValue
    document.getElementById("inLine").innerHTML=(selectedItem.width) / numberValue
    document.getElementById("onTable").innerHTML=((selectedItem.width) / numberValue) * selectedItem.lines
    document.getElementById("metrKvadratnui").innerHTML=(((((selectedItem.width) / numberValue) * selectedItem.lines) / selectedItem.width)/selectedItem.length)*10000
    
  }
tableAmount()
calcBoxes ()
}


function amountPlantsOnTable() {
  document.getElementById('UsersBetweenPlantsInLine').value = '0'
  document.getElementById('PlantsPerMetr').value = '0'

  currentID = document.getElementById("house").value;
  selectedItem = data.find(item => item.id == currentID);

  boxID = document.getElementById("boxes").value;
  selectedBox = box.find(items => items.id == boxID);

  userNumber = document.getElementById("AmountPlantsOnTable").value;

  if (userNumber != "0") {

    let numberValue 
    numberValue = parseFloat(userNumber)
    
    // calc plants
    document.getElementById("Cm").innerHTML= selectedItem.width / (numberValue/selectedItem.lines)
    document.getElementById("inLine").innerHTML=numberValue / selectedItem.lines  
    document.getElementById("onTable").innerHTML=numberValue 
    document.getElementById("metrKvadratnui").innerHTML=((numberValue/ selectedItem.width)/selectedItem.length)*10000

    // calc boxes
    document.getElementById("box125").innerHTML=((numberValue/selectedItem.lines)/selectedBox.capacity)*5
    document.getElementById("box124").innerHTML=((numberValue/selectedItem.lines)/selectedBox.capacity)*4
    document.getElementById("totalBox12").innerHTML=(((numberValue/selectedItem.lines)/selectedBox.capacity)*5)+(((numberValue/selectedItem.lines)/selectedBox.capacity)*4)
  }
  tableAmount()
}

function plantsPerMetr() {
  document.getElementById('UsersBetweenPlantsInLine').value = '0'
  document.getElementById('AmountPlantsOnTable').value = '0'

  currentID = document.getElementById("house").value;
  selectedItem = data.find(item => item.id == currentID);

  boxID = document.getElementById("boxes").value;
  selectedBox = box.find(items => items.id == boxID);
  
  inputNumber = document.getElementById("PlantsPerMetr").value;

  if (inputNumber != "0") {
    let numberValue 
    numberValue = parseFloat(inputNumber)
    
    //calc plants
    document.getElementById("Cm").innerHTML= selectedItem.width / ((numberValue * ((selectedItem.width*selectedItem.length)/10000))/selectedItem.lines)
    document.getElementById("inLine").innerHTML=(numberValue * ((selectedItem.width*selectedItem.length)/10000)) / selectedItem.lines  
    document.getElementById("onTable").innerHTML=numberValue * ((selectedItem.width*selectedItem.length)/10000) 
    document.getElementById("metrKvadratnui").innerHTML=numberValue

    //calc boxes
    document.getElementById("box125").innerHTML=(((numberValue * ((selectedItem.width*selectedItem.length)/10000)) / selectedItem.lines )/selectedBox.capacity)*5
    document.getElementById("box124").innerHTML=(((numberValue * ((selectedItem.width*selectedItem.length)/10000)) / selectedItem.lines )/selectedBox.capacity)*4
    document.getElementById("totalBox12").innerHTML=((((numberValue * ((selectedItem.width*selectedItem.length)/10000)) / selectedItem.lines )/selectedBox.capacity)*5)+((((numberValue * ((selectedItem.width*selectedItem.length)/10000)) / selectedItem.lines )/selectedBox.capacity)*4)
  }
  tableAmount()
}

function tableAmount() {

 table = document.getElementById("TableAmount").value;
 number = document.getElementById("UsersBetweenPlantsInLine").value;
 userNumber = document.getElementById("AmountPlantsOnTable").value;
 inputNumber = document.getElementById("PlantsPerMetr").value;
 

  if (number != "0") {
    let tableValue 
    tableValue = parseFloat(table)

      currentID = document.getElementById("house").value;

    selectedItem = data.find(item => item.id == currentID);

    number = document.getElementById("UsersBetweenPlantsInLine").value;

    let numberValue 
    numberValue = parseFloat(number)

    document.getElementById("PlantAmount").innerHTML= tableValue * ((selectedItem.width) / numberValue) * selectedItem.lines
    
  }else 
  if (userNumber != "0") {
    let tableValue 
    tableValue = parseFloat(table)

    currentID = document.getElementById("house").value;

    selectedItem = data.find(item => item.id == currentID)

    userNumber = document.getElementById("AmountPlantsOnTable").value;

    let numberValue 

    numberValue = parseFloat(userNumber)

    document.getElementById("PlantAmount").innerHTML= numberValue * tableValue

  }else 
  if (inputNumber != "0") {
    let tableValue 
    tableValue = parseFloat(table)

    currentID = document.getElementById("house").value;

    selectedItem = data.find(item => item.id == currentID)

    inputNumber = document.getElementById("PlantsPerMetr").value;
    
    let numberValue 
    numberValue = parseFloat(inputNumber)
  
    document.getElementById("PlantAmount").innerHTML= numberValue * ((selectedItem.width*selectedItem.length)/10000) * tableValue
  }
  }
//////////////////////////////////////////////////
var boxID
var selectedBox
var box

async function startBoxes() {
  box = await fetch("box.json")
    .then((resp) => resp.json())
    .catch((error) => document.write(error));

    
  var html = `<select name="" id="boxes" onchange="calcBoxes()">
              <option value="0">Select Box</option>`;

  for (var k = 0; k < box.length; k++) {
    html += `
            <option value=${box[k].id}>${box[k].name}</option>            
    `;
  }

  html += `</select>`;

  document.getElementById("selectBox").innerHTML = html;
  
}

startBoxes();

function calcBoxes () {

  currentID = document.getElementById("house").value;
  selectedItem = data.find(item => item.id == currentID);

boxID = document.getElementById("boxes").value;
selectedBox = box.find(items => items.id == boxID);

number = document.getElementById("UsersBetweenPlantsInLine").value;
let numberValue 
numberValue = parseFloat(number)

if(selectedItem.lines != "7" && selectedItem.lines != "9" && selectedItem.lines != "11" && selectedItem.lines != "13" && selectedItem.lines != "15" && selectedItem.lines != "5" ){

  var label = `<span>${selectedBox.name}</span>`
  document.getElementById('res').innerHTML = label
  
  var totalBoxes = `<span>Total Boxes: ${((((selectedItem.width) / numberValue)/selectedBox.capacity)*(selectedItem.lines/2))+((((selectedItem.width) / numberValue)/selectedBox.capacity)*(selectedItem.lines/2))} </span>`
  var oneHalf = `<span> Per ${selectedItem.lines/2} lines: ${(((selectedItem.width) / numberValue)/selectedBox.capacity) * (selectedItem.lines/2)} </span>`
  var anotherHalf = `<span> Per ${selectedItem.lines/2} lines: ${(((selectedItem.width) / numberValue)/selectedBox.capacity) * (selectedItem.lines/2)} </span>`

  document.getElementById('res1').innerHTML = totalBoxes
  document.getElementById('res2').innerHTML = oneHalf
  document.getElementById('res3').innerHTML = anotherHalf
    // document.getElementById("box125").innerHTML
    // document.getElementById("box124").innerHTML=
    // document.getElementById("totalBox12").innerHTML=
}else {
  var label = `<span>${selectedBox.name}</span>`
  document.getElementById('res').innerHTML = label

  var totalBoxes = `<span>Total Boxes: ${((((selectedItem.width) / numberValue)/selectedBox.capacity)*((selectedItem.lines + 1)/2))+((((selectedItem.width) / numberValue)/selectedBox.capacity)*((selectedItem.lines - 1)/2))} </span>`
  var oneHalf = `<span> Per ${(selectedItem.lines + 1)/2} lines: ${(((selectedItem.width) / numberValue)/selectedBox.capacity) * ((selectedItem.lines + 1)/2)} </span>`
  var anotherHalf = `<span> Per ${(selectedItem.lines - 1)/2} lines: ${(((selectedItem.width) / numberValue)/selectedBox.capacity) * ((selectedItem.lines - 1)/2)} </span>`

  document.getElementById('res1').innerHTML = totalBoxes
  document.getElementById('res2').innerHTML = oneHalf
  document.getElementById('res3').innerHTML = anotherHalf
}
}