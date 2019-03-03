  
const buildIframe = () => { 
   const iframe = document.createElement('iframe');
   iframe.src = 'frame/index.html';
   iframe.name = 'baner';
   iframe.frameborder = '0';
   iframe.scrolling = 'no';
   iframe.marginHeight = '0';
   iframe.marginWidth = '0'; 
   iframe.style.border = 'none';
   iframe.style.setProperty('width', '100%', 'important');
   iframe.style.setProperty('height', '100%', 'important');
   iframe.style.setProperty("opacity", "1", "important");
   iframe.style.allowtransparency = 'true';
   document.querySelector('.wrapper div:first-child').prepend(iframe);
};
    
const greatDivWrapper = () => {
   const mainDiv = document.createElement('div');
   mainDiv.classList.add('wrapper');
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

const funcChange = (path) => {
   path.postMessage('Ответ от генерала', "*");
};

const listener = (e) => {
   window.addEventListener("orientationchange", funcChange.bind(null, e.source));
   window.addEventListener("resize", funcChange.bind(null, e.source));
   e.source.postMessage('Ответ от генерала', "*"); 
};

window.addEventListener('load', () => {
   greatDivWrapper();
   buildIframe();
   window.addEventListener("message", listener, false );
});