  
 
const buildIframe = () => {
   const iframe = document.createElement('iframe');
   iframe.src = 'frame/index.html';
   iframe.frameborder = 0;
   iframe.style.border = 'none';
   iframe.style.setProperty('width', '100%', 'important');
   iframe.style.setProperty('height', '100%', 'important');
   iframe.style.setProperty("opacity", "1", "important");
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



const listener = (iframeDoc, event) => {
   const command = event.data;
   
   const w = document.documentElement.clientWidth;
   const h = document.documentElement.clientHeight / 4;
   //console.log(w, h);  
   
   // По идее тут должен меняться размер экранна фрейма, но он не меняется
   iframeDoc.body.style.width = `${w}px`;
   iframeDoc.body.style.height = `${h}px`;
   
   // console.log('ширтна', iframeDoc.body.style.width);
   // console.log('высота', iframeDoc.body.style.height);

};



window.addEventListener('load', () => {
   greatDivWrapper();
   buildIframe();
   const iframe = document.querySelector('iframe');
   const iframeDoc = iframe.contentDocument;
   
   window.addEventListener("message", listener.bind(null, iframeDoc), false );
});