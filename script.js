function criarListaAlunos() {
 
  var num = document.getElementById("quantosAlunos").value;
  var cont = document.getElementById("listaAlunosCont");
  var html = "";


  for (var i = 1; i <= num; i++) {
    html += '<label class="form-label text-white" for="aluno' + i + '">Aluno ' + i + ":</label><br>" +
            '<input class="form-control mb-1" type="text" id="aluno' + i + '"><br>';
    html += '<label class="form-label text-white" for="nota1-' + i + '">Nota 1:</label><br>' +
            '<input class="form-control mb-1" type="number" id="nota1' + i + '"><br>';
    html += '<label class="form-label text-white" for="nota2-' + i + '">Nota 2:</label><br>' +
            '<input class="form-control mb-1" type="number" id="nota2' + i + '"><br>';
  }
 
  cont.innerHTML = html;

}
function gerarMatriz() {
  var n = document.getElementById("quantosAlunos").value;
  var matriz = [];
  for (var i = 1; i <= n; i++) {
    var aluno = document.getElementById("aluno" + i).value;
    var n1 = document.getElementById("nota1" + i).value;
    var n2 = document.getElementById("nota2" + i).value;
    var media = (Number(n1) + Number(n2)) / 2;
    

  
    matriz.push([aluno, n1, n2, media]);
  }
  console.log(matriz);
  mostrarMatriz(matriz);
}

function mostrarMatriz(matriz) {
  var container = document.getElementById("matrizContainer");
  var html = `
  <table class="table table-bordered table-dark text-white text-center">
    <tr>
      <th>Aluno</th>
      <th>1ª Nota</th>
      <th>2ª Nota</th>
      <th>Média</th>
    </tr>`;
  for (var i = 0; i < matriz.length; i++) {
    html += "<tr>";
    for (var j = 0; j < matriz[i].length; j++) {
      html += "<td>" + matriz[i][j] + "</td>";
    }
    html += "</tr>";
  }
  html += "</table>";
  container.innerHTML = html;
}