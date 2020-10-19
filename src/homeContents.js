
function createHomePage(){

  addImage();
}

function addImage(){
  const container = document.getElementById('container');


  const img = document.createElement('img');
  img.src = 'package.png';
  img.setAttribute("style", "width:100px;height:100px;")
  container.appendChild(img);
}

export default createHomePage
