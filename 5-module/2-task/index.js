function toggleText() {
  let elem = document.querySelector('.toggle-text-button');
  let text = document.getElementById('text');

  elem.addEventListener('click', function() {
    if (text.hasAttribute('hidden')) {
      text.removeAttribute('hidden');
    } else {
    text.setAttribute('hidden', 'hidden');
    }
  });
}
