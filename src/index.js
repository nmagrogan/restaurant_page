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
    tabs.appendChild(tabDiv);
  }
  container.appendChild(tabs);
}


createTabs();
