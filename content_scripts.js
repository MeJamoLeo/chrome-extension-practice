window.onload = function() {
  console.log('test')
}

const elements = document.querySelectorAll('.セレクタ');

elements.forEach(function(element){
  element.addEventListener('click', test);
});

function test(){
  console.log('test');
}
