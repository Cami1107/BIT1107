document.addEventListener('DOMContentLoaded', function() {
  const toggleMenu = document.getElementById('toggleMenu');
  const menuItems = document.getElementById('menuItems');

  toggleMenu.addEventListener('click', function() {
    if (menuItems.style.display === 'block') {
      menuItems.style.display = 'none';
    } else {
      menuItems.style.display = 'block';
    }
  });

  console.log('script.js debug here');
});