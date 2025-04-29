// Red/green blindness
javascript:(function(){
  if (!document.getElementById('protanopia')) {
    var svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    svg.setAttribute('xmlns','http://www.w3.org/2000/svg');
    svg.setAttribute('version','1.1');
    svg.setAttribute('height','0');
    svg.innerHTML = '<defs><filter id="protanopia"><feColorMatrix type="matrix" values="0.367 0.861 -0.228 0 0 0.28 0.673 0.047 0 0 -0.012 0.043 0.969 0 0 0 0 0 1 0"/></filter></defs>';
    document.body.appendChild(svg);
  }
  document.body.style.filter='url(#protanopia)';
})();
