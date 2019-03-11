
const createStyle = () => {
   const body = document.querySelector('body');
   body.style.backgroundRepeat = 'no-repeat';
   body.style.backgroundSize = 'auto';
   body.style.backgroundPosition = 'center center';
   body.style.backgroundAttachment = 'fichangeWindowet';
};

const choiсeStyle = {
   'portrait-primary': { colour: '#40bb63', image: 'url(portrait.png)' },
   'landscape-primary': { colour: '#3b68cc', image: 'url(landscape.png)' },
};

const changeWindow = () => {
   const body = document.querySelector('body');
   const type = screen.orientation.type;
   const w = window.innerWidth;
   const h = window.innerHeight;
   body.style.width = `${w}px`;
   body.style.height = `${h}px`;

   const newStyleObj = choiсeStyle[type];
   body.style.backgroundImage = newStyleObj.image;
   body.style.backgroundColor = newStyleObj.colour;
};

const listener = () => {
   changeWindow();
};

window.addEventListener('load', () => {
   top.postMessage('Фраим загружен', "*");
   window.addEventListener("message", listener, false);
   createStyle();
   changeWindow();  
});

