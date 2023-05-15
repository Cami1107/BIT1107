document.getElementById('toggleMenu').addEventListener('click', function() {
  const menuItems = document.getElementById('menuItems');
  menuItems.style.display = (menuItems.style.display === 'block') ? 'none' : 'block';
});

console.log('functions.js debbug here');