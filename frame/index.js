(function () {

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

   const listener = (body, e) => {
      const heightWindow = e.data.height;
      const widthWindow = e.data.width;
      const mesage =  widthWindow < heightWindow ? 'portrait' : 'landscape';
      changeStyle(mesage);
      body.style.width = widthWindow + 'px';
      body.style.height = Math.round(heightWindow / 4) + 'px';
   };

   window.addEventListener('load', () => {
      const body = document.querySelector('body');
      top.postMessage('frameLoaded', "*");
      window.addEventListener("message", listener.bind(null, body), false);
   });
   
})();
