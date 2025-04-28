javascript:(function(){
  if (!document.getElementById('protanopia-filter')) {
    var svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    svg.setAttribute('xmlns','http://www.w3.org/2000/svg');
    svg.setAttribute('version','1.1');
    svg.setAttribute('height','0');
    svg.innerHTML = '<defs><filter id="protanopia"><feColorMatrix type="matrix" values="0.567 0.433 0 0 0 0.558 0.442 0 0 0 0 0.242 0.758 0 0 0 0 0 1 0"/></filter></defs>';
    svg.id        = 'protanopia-filter';
    document.body.appendChild(svg);
  }
  document.documentElement.style.filter='url(#protanopia)';
})();
