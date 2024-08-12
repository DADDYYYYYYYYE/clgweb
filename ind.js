let home = document.getElementById('home');
let display=0;
function hom()
{
  dishes.style.display="none";
  aboutus.style.display="none";
  order.style.display="none";
 if(display == 1)
  {
    home.style.display="none";
    display=0;
  }
  else{
    home.style.display="block";
    display=1;
  }
}

let aboutus = document.getElementById('aboutus');

function aboutu()
{
  order.style.display="none";
  dishes.style.display="none";
  home.style.display="none";
  

 if(display == 1)
  {
    aboutus.style.display="none";
    display=0;
  }
  else{
    aboutus.style.display="block";
    display=1;
  }
}

let order = document.getElementById('order');

function orde()
{
  home.style.display="none";
  dishes.style.display="none";
  aboutus.style.display="none";
  

 if(display == 1)
  {
    order.style.display="none";
    display=0;
  }
  else{
    order.style.display="block";
    display=1;
  }
}

let dishes = document.getElementById('dishes');

function dishe()
{
  home.style.display="none";
  aboutus.style.display="none";
  order.style.display="none";
  

 if(display == 1)
  {
    dishes.style.display="none";
    display=0;
  }
  else{
    dishes.style.display="block";
    display=1;
  }
}

