
window.onload = () => {
   //console.log(screen.orientation.type)
   const build = (iframe) => {
      const func = greateIframe[screen.orientation.type];
      return func(iframe);
   }

   const buildIframe = () => {
      const iframe = document.createElement('iframe');
      iframe.src = 'frame/index.html';
      iframe.style.backgroundRepeat = 'no-repeat';
      iframe.style.backgroundSize = 'cover';
      iframe.style.backgroundPosition = 'center';
      iframe.frameborder = 0;
      iframe.style.setProperty('width', '100%', 'important');
      iframe.style.setProperty('height', '100%', 'important');
      document.querySelector('.wrapper div:first-child').prepend(build(iframe));
   };

   const greateIframe = {
      'portrait-primary' : (iframe) => {    
         iframe.style.setProperty("opacity", "1", "important");
         iframe.style.backgroundImage = 'url(frame/portrait.png)';
         return iframe;
      },
      'landscape-primary' : (iframe) => {       
         iframe.style.setProperty("opacity", "1", "important");
         iframe.style.backgroundImage = 'url(frame/landscape.png)';
         return iframe;
      },
   };

   const greatDivWrapper = () => {
      const mainDiv = document.createElement('div');
      mainDiv.classList.add('wrapper');
      mainDiv.style.border = '1px solid black';
      mainDiv.style.padding = '0';
      mainDiv.style.margin = '0';
      mainDiv.style.zIndex = '10';
     
      mainDiv.style.position = 'fixed';
      mainDiv.style.bottom = '0';
      mainDiv.style.right = '0';
      mainDiv.style.left = '0';
      mainDiv.style.height = '25%';
      mainDiv.style.maxWidth = '100%';
    
      const div = document.createElement('div');
      div.classList.add('wrapper');
      div.style.height = '100%';
      div.style.maxWidth = '100%';
      div.style.margin = '0';
      mainDiv.prepend(div);
      document.querySelector('body').prepend(mainDiv);
   };

   greatDivWrapper();
   buildIframe();

 };