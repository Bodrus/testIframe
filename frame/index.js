
const funcChange = () => {
   const body = document.querySelector('body');
   sendMessage();
   
   // Временное решение!!!!!
   document.location.reload(true);
   
   const { type } = screen.orientation;
   if (type === 'portrait-primary') {
      body.style.backgroundImage = 'url(portrait.png)';
   
   } else if (type === 'landscape-primary') {
      body.style.backgroundImage = 'url(landscape.png)';     
   }
};

const sendMessage = () => {
   var command = 'change screan orientation'; 
   top.postMessage(command, "*");
};


screen.orientation.addEventListener("change", funcChange);

window.addEventListener('load', () => {
   const body = document.querySelector('body');
   body.style.backgroundRepeat = 'no-repeat';
   body.style.backgroundSize = 'cover';
   body.style.backgroundPosition = 'center center';
   body.style.backgroundAttachment = 'fixet';

   const { type } = screen.orientation;
   const w = document.documentElement.clientWidth;
   const h = document.documentElement.clientHeight;
   body.style.width = `${w}px`;
   body.style.height = `${h}px`;
   
   if (type === 'portrait-primary') {
      body.style.backgroundImage = 'url(portrait.png)';
   
   } else if (type === 'landscape-primary') {
      body.style.backgroundImage = 'url(landscape.png)';
   }
});

