window.onload = (function() {
  if (!browserSupportsAllFeatures()) {
    loadScript(`/polyfill.bundle.js`);
  }

  // forEach
  [1, 2, 3].forEach(item => console.log(item));
})(window.onload);

function browserSupportsAllFeatures() {
  return 'fetch' in window && 'assign' in Object;
}

function loadScript(src) {
  const srcElement = document.createElement('script');
  srcElement.src = src;
  document.head.appendChild(srcElement);
}
