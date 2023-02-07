function calcular() {
  var form = document.getElementById("formulario");
  var numMaxLabel = document.getElementById('numMax-label')
  var numMax = form.numMax.value;
  var numMin = form.numMin.value;
  



    numMin = Math.ceil(numMin);
    numMax = Math.floor(numMax);
    var result = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
    
    
    numMaxLabel.innerHTML = `Número sorteado é: <br><br> ${result}`;
    form.numMin.style.display = "none"
    form.numMax.style.display = "none"
    form.sortear.style.display = "none"
    eLabel.innerHTML = ''
    form.refresh.style.display = 'inline-block'
  
    
  

}
function clean() {
    window.location.reload(false);
}
