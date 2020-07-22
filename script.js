var data;
var currentID;
var selectedItem ="";
var inputdo1 = document.getElementById('inputdo1')
var width = ""


async function start() {
  data = await fetch("data.json")
    .then((response) => response.json())
    .catch((error) => document.write(error));

    
  var html = `<select name="" id="house" onchange="selectHouse()">
              <option value="0">Välj hus</option>`;


  for (var i = 0; i < data.length; i++) {
    html += `
            <option value=${data[i].id}>${data[i].name}</option>            
    `;
  }

  html += `</select>`;

  document.getElementById("select").innerHTML = html;

  console.log(data)
  console.log(document.getElementById("house").value)
  //document.getElementById("house").addEventListener("onchange", selectHouse());

  
}

start();

function selectHouse() {

  
  currentID = document.getElementById("house").value;
  if (currentID != "0") {
    selectedItem = data.find(item => item.id == currentID);
    //console.log(selectedItem.name);
  //   if (selectedItem !="0"){
  // document.getElementById("width").innerHTML=selectedItem.width
  // document.getElementById("length").innerHTML=selectedItem.length
  // document.getElementById("lines").innerHTML=selectedItem.lines
  //   }
}
  number = document.getElementById("inputdo1").value;
  if (number != "0") {
    let numberValue 
    numberValue = parseFloat(number)
    
  document.getElementById("Cm1").innerHTML=numberValue
  document.getElementById("inLine").innerHTML=(selectedItem.width) / numberValue
    document.getElementById("onTable").innerHTML=((selectedItem.width) / numberValue) * selectedItem.lines
    document.getElementById("metrKvadratnui").innerHTML=(((((selectedItem.width) / numberValue) * selectedItem.lines) / selectedItem.width)/selectedItem.length)*10000
    document.getElementById("box125").innerHTML=(((selectedItem.width) / numberValue)/12)*5
    document.getElementById("box124").innerHTML=(((selectedItem.width) / numberValue)/12)*4
    document.getElementById("box145").innerHTML=(((selectedItem.width) / numberValue)/14)*5
    document.getElementById("box144").innerHTML=(((selectedItem.width) / numberValue)/14)*4
    document.getElementById("totalBox12").innerHTML=((((selectedItem.width) / numberValue)/12)*4)+((((selectedItem.width) / numberValue)/12)*5)
    document.getElementById("totalBox14").innerHTML=((((selectedItem.width) / numberValue)/14)*4)+((((selectedItem.width) / numberValue)/14)*5)




  console.log(selectedItem.name);
  }

  
}

// async function Id () {
//   let getingId = await data
//   console.log(getingId)
// }

// Id()

// function Cm(valNum) {
  
// //   let width, length, lines, squareMeter
// // width = document.getElementById('width').value
// // width = parseFloat(width)
// // length = document.getElementById('length').value
// // length = parseFloat(length)
// // lines = document.getElementById('lines').value
// // lines = parseFloat(lines)

// // squareMeter= (width * length)/10000

//   document.getElementById("Cm").innerHTML=valNum
//   // document.getElementById("inLine").innerHTML=(width) / valNum
//   // document.getElementById("onTable").innerHTML=((width) / valNum)*lines
//   // document.getElementById("metrKvadratnui").innerHTML=(((width) / valNum) *lines) / squareMeter
//   // document.getElementById("box125").innerHTML=(((width) / valNum)/12)*5
//   // document.getElementById("box124").innerHTML=(((width) / valNum)/12)*4
//   // document.getElementById("box145").innerHTML=(((width) / valNum)/14)*5
//   // document.getElementById("box144").innerHTML=(((width) / valNum)/14)*4
//   // document.getElementById("totalBox12").innerHTML=((((width) / valNum)/12)*4)+((((width) / valNum)/12)*5)
//   // document.getElementById("totalBox14").innerHTML=((((width) / valNum)/14)*4)+((((width) / valNum)/14)*5)

// }