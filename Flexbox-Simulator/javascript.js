let c = document.getElementById('count');
let counter = 0;

// function inc(){
//   counter++;
//   c.value = counter;
// }

// function dec(){
//   counter--;
//   c.value = counter;
// }

// function res(){
//   counter = 0;
//   c.value = counter;
// }


//justifyContent
function operate(x){
  if (x == 1){
    counter++;
  }
  else if (x == 2){
    counter--;
  }
  else if (x == 0){
    counter = 0;
  }
  c.value = counter;

  if(counter <= 9){
    c.style.backgroundColor = 'black';
    c.style.color = 'white';
  }
  else if (counter >= 10){
    c.style.backgroundColor = 'darkred';
    c.style.color = 'white';
  }
}