let sun=document.getElementById('sun');
let moon=document.getElementById('moon');
let text=document.getElementById('text-box');
let menu=document.getElementById('menu');
let nav=document.getElementById('nav');
let x=document.getElementById('x');
let wwd=document.getElementById('wwd');
let h4=document.getElementById('h4');



moon.onclick=function(){
   
document.body.style=`
 background-image: linear-gradient(rgb(9, 14, 33),rgb(4, 4, 42));
color:white;
`;

text.style.color='white';
wwd.classList.add('actvie')
h4.classList.add('active')

}
sun.onclick=function(){
    document.body.style=`color:none; `
    wwd.classList.remove('actvie')
  h4.classList.remove('active')
    }

    menu.onclick=function(){
 nav.style.right='50%'; 



    }
    x.onclick=function(){
          nav.style.right='100%'; 
     
   

            }