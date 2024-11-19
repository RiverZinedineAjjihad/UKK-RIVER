document.querySelectorAll('a[href^="#"]').forEach(anchor => {
 anchor.AddEventListener('click',function(e) {
  e.preventDefault();

   document.querySelectorAll(this.getAttribute('href')).scrollIntoView( {
    behavior:'smooth'
   });
 });   
});