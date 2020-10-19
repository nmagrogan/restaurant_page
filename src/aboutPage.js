
function createAboutPage(){
  const container = document.getElementById('container');
  const content = document.createElement('div');
  content.setAttribute("id", "content");

  addImage(content);
  addHeadline(content);
  addDescription(content);
  container.appendChild(content);
}

function addImage(content){
  const img = document.createElement('img');
  img.src = 'package.png';
  img.setAttribute("style", "width:100px;height:100px;")
  content.appendChild(img);
}

function addHeadline(content){
  const headline = document.createElement('h1');
  headline.innerHTML = "About this Restaurant";
  content.appendChild(headline);
}

function addDescription(content){
  const descript = document.createElement('p');
  descript.innerHTML = "It is a new Restaurant";
  content.appendChild(descript);
}

export default createAboutPage
