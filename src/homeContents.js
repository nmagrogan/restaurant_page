
function createHomePage(){
  const container = document.getElementById('container');
  addImage();
  addHeadline();
  addDescription();
}

function addImage(){
  const img = document.createElement('img');
  img.src = 'package.png';
  img.setAttribute("style", "width:100px;height:100px;")
  container.appendChild(img);
}

function addHeadline(){
  const headline = document.createElement('h1');
  headline.innerHTML = "A brand new Restaurant";
  container.appendChild(headline);
}

function addDescription(){
  const descript = document.createElement('p');
  descript.innerHTML = "This Restaurant is sooooo good, wow, what a place";
  container.appendChild(descript);
}

export default createHomePage
