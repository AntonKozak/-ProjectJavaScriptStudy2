var data1 = "";

async function Cm(valNum) {
  var data = await fetch("data.json")
    .then((response) => response.json())
    .catch((error) => document.write(error));

  data1 = JSON.stringify(data);
  console.log(data1)
  console.log(JSON.parse(data1));

  var html = `<select name="" id="">`;

  for (var i = 0; i < data.length; i++) {
    html += `
            <option value=${data[i].id}>${data[i].name}</option>            
    `;
  }

  html += `</select>`;

  document.getElementById("select").innerHTML = html;

}

Cm();
console.log(data1);