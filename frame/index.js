
const changeStyle = (mesage) => {
   const body = document.querySelector('body');
   switch(mesage) {
      case 'portrait':  
         body.classList.add('portrait');
         body.classList.remove('landscape');
         break;
      case 'landscape': 
         body.classList.remove('portrait');
         body.classList.add('landscape');
         break;        
    }
};

const listener = (e) => {
   const body = document.querySelector('body');
   const { height, width } = e.data; 
   const mesage =  width < height ? 'portrait' : 'landscape';
   changeStyle(mesage);
   const w = window.innerWidth;
   const h = window.innerHeight;
   body.style.width = `${w}px`;
   body.style.height = `${h}px`;
};

window.addEventListener('load', () => {
   top.postMessage('Фраим загружен', "*");
   window.addEventListener("message", listener, false);
});

