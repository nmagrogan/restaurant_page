import createHomePage from './homeContents.js';
import createAboutPage from './aboutPage.js';
import createContactPage from './contactPage.js';



function createTabs(){
  const tabNames = ["Home", "About", "Contact"]
  const container = document.getElementById('container');
  const tabs = document.createElement('div');


  for(const tab of tabNames){
    const tabDiv = document.createElement('div');
    tabDiv.innerHTML = tab;
    tabDiv.classList.add("tab");

    tabDiv.addEventListener('click',  function render(e){
      renderPage(tab);
    }, false);

    tabs.appendChild(tabDiv);
  }
  container.appendChild(tabs);
}

function renderPage(tab) {
  const content = document.getElementById("content");
  content.remove();

  if(tab == "Home"){
    createHomePage();
  }
  if(tab == "About"){
    createAboutPage();
  }
  if(tab == "Contact"){
    createContactPage();
  }
}


createTabs();
createHomePage();
