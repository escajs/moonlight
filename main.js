window.addEventListener('scroll',function(){
    var nav=document.getElementById('navuri');
    var navItems=document.querySelector('#nav-items');
    nav.classList.toggle('sticky',window.scrollY >30);
    //navItems.classList.toggle('red-text',window.scrollY >30);
    
})