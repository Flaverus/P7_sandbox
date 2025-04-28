// Red blindness
javascript:(function(){
  if (!document.getElementById('deuteranopia')) {
    var svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    svg.setAttribute('xmlns','http://www.w3.org/2000/svg');
    svg.setAttribute('version','1.1');
    svg.setAttribute('height','0');
    svg.innerHTML = '<defs><filter id="deuteranopia"><feColorMatrix type="matrix" values="0.625 0.375 0 0 0 0.7 0.3 0 0 0 0 0.3 0.7 0 0 0 0 0 1 0"/></filter></defs>';
    document.body.appendChild(svg);
  }
  document.body.style.filter='url(#deuteranopia)';
})();
