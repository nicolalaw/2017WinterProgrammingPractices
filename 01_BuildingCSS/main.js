var cubeTurned = false;

function turn(right) {
  if (right) {
    document.querySelector('.j-cube').classList.add('j-turnRight');
  } else {
    document.querySelector('.j-cube').classList.remove('j-turnRight');
  }
  cubeTurned = !cubeTurned;
}

window.setInterval(function(){
  if (cubeTurned) {
    turn(false);
  } else {
    turn(true);
  }
}, 1500);
