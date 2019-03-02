
window.addEventListener('load', () => {
   const div = document.querySelector('div');
   div.style.backgroundRepeat = 'no-repeat';
   div.style.backgroundSize = 'auto';
   
   div.style.backgroundPosition = 'center center';
   div.style.backgroundAttachment = 'fixet';
   
   const { type } = screen.orientation;
 
   const w = window.innerWidth;
   const h = window.innerHeight;
   div.style.width = `${w}px`;
   div.style.height = `${h}px`;
  
  
   if (type === 'portrait-primary') {
      div.style.backgroundImage = 'url(portrait.png)';
      div.style.backgroundColor = '#40bb63';
      
   } else if (type === 'landscape-primary') {
      div.style.backgroundImage = 'url(landscape.png)';
      div.style.backgroundColor = '#3b68cc'; 
   }
 
   window.addEventListener("message", listener, false );

});

