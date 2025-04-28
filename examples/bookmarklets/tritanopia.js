// Blue/yellow blindness
javascript:(function(){
  if (!document.getElementById('tritanopia')) {
    var svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    svg.setAttribute('xmlns','http://www.w3.org/2000/svg');
    svg.setAttribute('version','1.1');
    svg.setAttribute('height','0');
    svg.innerHTML = '<defs><filter id="tritanopia"><feColorMatrix type="matrix" values="0.95 0.05 0 0 0 0 0.433 0.567 0 0 0 0.475 0.525 0 0 0 0 0 1 0"/></filter></defs>';
    document.body.appendChild(svg);
  }
  document.body.style.filter='url(#tritanopia)';
})();
