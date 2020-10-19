
function createContactPage(){
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
  headline.innerHTML = "Contact";
  content.appendChild(headline);
}

function addDescription(content){
  const descript = document.createElement('p');
  descript.innerHTML = "You can't this isn't a real Restaurant";
  content.appendChild(descript);
}

export default createContactPage
