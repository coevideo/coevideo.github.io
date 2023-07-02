

function changeColor(color) {
  var top = document.querySelector('.top');
  var mark = document.querySelector('.mark');
  var footer = document.querySelector('footer');

  if (color === 'red') {
    top.style.backgroundColor = '#e71f19';
    mark.style.backgroundColor = '#e71f19';
    footer.style.backgroundColor = '#e71f19';
  } else if (color === 'green') {
    top.style.backgroundColor = '#69b82d';
    mark.style.backgroundColor = '#69b82d';
    footer.style.backgroundColor = '#69b82d';
  } else if (color === 'blue') {
    top.style.backgroundColor = '#16499d';
    mark.style.backgroundColor = '#16499d';
    footer.style.backgroundColor = '#16499d';
  } else {
    top.style.backgroundColor = '';
    mark.style.backgroundColor = '';
    footer.style.backgroundColor = '';
  }
}