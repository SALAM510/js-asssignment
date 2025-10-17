let submitbtn = document.getElementById('submitbtn');

submitbtn.addEventListener("click", function (event) {
  event.preventDefault();

  let color = document.getElementById('entercolor').value;

  if(color === 'Red'){
    document.getElementById('demo').innerHTML = 'Stop';
  } else if(color === 'Yellow'){
    document.getElementById('demo').innerHTML = 'Ready';
  } else if(color === 'Green'){
    document.getElementById('demo').innerHTML = 'Go';
  } else { 
    document.getElementById("demo").innerHTML = 'Please Enter a color between Red,Yellow and Green.';
  }
})