const projects = [
  {
    title: 'News-Grid',
    description: 'A Simple News website that has multiple pages and can also help produce a desired news story on the web',
    image: 'images/Screenshot24.png',
    lang1: 'html',
    lang2: 'css',
    lang3: 'JavaScript',
    lang4: 'Bootstrap',
    lang5: 'gpages',
    lang6: 'Terminal',
    lang7: 'Webpack',
    lang8: 'Github',
    liveVersion: 'https://bereketretta.github.io/newsgrid',
    source: 'https://github.com/BereketRetta/newsgrid',
  },
  {
    title: 'News-Grid',
    description: 'A Simple News website that has multiple pages and can also help produce a desired news story on the web',
    image: 'images/Screenshot24.png',
    lang1: 'html',
    lang2: 'css',
    lang3: 'JavaScript',
    lang4: 'Bootstrap',
    lang5: 'gpages',
    lang6: 'Terminal',
    lang7: 'Webpack',
    lang8: 'Github',
    liveVersion: 'https://bereketretta.github.io/newsgrid',
    source: 'https://github.com/BereketRetta/newsgrid',
  },
  {
    title: 'News-Grid',
    description: 'A Simple News website that has multiple pages and can also help produce a desired news story on the web',
    image: 'images/Screenshot24.png',
    lang1: 'html',
    lang2: 'css',
    lang3: 'JavaScript',
    lang4: 'Bootstrap',
    lang5: 'gpages',
    lang6: 'Terminal',
    lang7: 'Webpack',
    lang8: 'Github',
    liveVersion: 'https://bereketretta.github.io/newsgrid',
    source: 'https://github.com/BereketRetta/newsgrid',
  },
  {
    title: 'News-Grid',
    description: 'A Simple News website that has multiple pages and can also help produce a desired news story on the web',
    image: 'images/Screenshot24.png',
    lang1: 'html',
    lang2: 'css',
    lang3: 'JavaScript',
    lang4: 'Bootstrap',
    lang5: 'gpages',
    lang6: 'Terminal',
    lang7: 'Webpack',
    lang8: 'Github',
    liveVersion: 'https://bereketretta.github.io/newsgrid',
    source: 'https://github.com/BereketRetta/newsgrid',
  },
  {
    title: 'News-Grid',
    description: 'A Simple News website that has multiple pages and can also help produce a desired news story on the web',
    image: 'images/Screenshot24.png',
    lang1: 'html',
    lang2: 'css',
    lang3: 'JavaScript',
    lang4: 'Bootstrap',
    lang5: 'gpages',
    lang6: 'Terminal',
    lang7: 'Webpack',
    lang8: 'Github',
    liveVersion: 'https://bereketretta.github.io/newsgrid',
    source: 'https://github.com/BereketRetta/newsgrid',
  },
  {
    title: 'News-Grid',
    description: 'A Simple News website that has multiple pages and can also help produce a desired news story on the web',
    image: 'images/Screenshot24.png',
    lang1: 'html',
    lang2: 'css',
    lang3: 'JavaScript',
    lang4: 'Bootstrap',
    lang5: 'gpages',
    lang6: 'Terminal',
    lang7: 'Webpack',
    lang8: 'Github',
    liveVersion: 'https://bereketretta.github.io/newsgrid',
    source: 'https://github.com/BereketRetta/newsgrid',
  },
];

const [project] = projects;
const button = document.querySelectorAll('.popup');
const popup = document.querySelector('.popup-window');

popup.innerHTML = `<div class='container'>
<button class='close-button'><i class='fa fa-times'></i></button>
<img src='${project.image}' alt='project-img' class='popup-img'>
<div class='header-container'>
    <h2 class='container-title'>${project.title}</h2>
    <div class='desktop butt'>
<button><a href='#' target='_blank'>See Live</a><span><img src='./images/Icon-Export.png' alt='github'></span></button>
<button><a href='#' target='_blank'>See Source</a><span><img src='./images/Git.png' alt='github'></span></button>
</div>
</div>
<ul class="skillsbar modal-ul">
<li class="mobile">${project.lang1}</li>
<li class="mobile">${project.lang2}</li>
<li class="mobile">${project.lang3}</li>
<li class="desktop">${project.lang4}</li>
<li class="desktop">${project.lang5}</li>
<li class="desktop">${project.lang6}</li>
<li class="desktop">${project.lang7}</li>
<li class="desktop">${project.lang8}</li>
</ul>
<p class="description">${project.description}</p>
<div class="buttons mobile">
<button><a href="${project.liveVersion}" target="_blank">See Live</a><span><img src="./images/Icon-Export.png" alt="github"></span></button>
<button><a href="${project.source}" target="_blank">See Source</a><span><img src="./images/Git.png" alt="github"></span></button>
</div>
</div>`;

const close = document.querySelector('.close-button');
close.addEventListener('click', () => {
  popup.classList.replace('window', 'invisible');
  document.body.classList.remove('isfixed');
});

button.forEach((but) => {
  but.addEventListener('click', () => {
    document.body.classList.add('isfixed');
    popup.classList.replace('invisible', 'window');
  });
});

const hamburger = document.querySelector('.fa-bars');
const menu = document.querySelector('#menu');
const menuLis = menu.querySelectorAll('li');

hamburger.addEventListener('click', () => {
  menu.classList.replace('invisible', 'menu');
});

for (let i = 0; i < menuLis.length; i += 1) {
  menuLis[i].addEventListener('click', () => {
    menu.classList.replace('menu', 'invisible');
  });
}
