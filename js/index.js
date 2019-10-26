
const buttonCoffee = document.getElementsByClassName("coffeebutton1");

mouseOver = (i) => {
    console.log("Mouse over", i, this);
    switch(i){
       case 2: $( ".coffeebutton1:nth-child(2)" ).css({"margin-left": "-7%"});
       break;
       case 3:
         $( ".coffeebutton1:nth-child(2)" ).css({"margin-left": "-7%"});
         $( ".coffeebutton1:nth-child(3)" ).css({"margin-left": "-7%"});
       break;
       case 4:
         $( ".coffeebutton1:nth-child(2)" ).css({"margin-left": "-7%"});
         $( ".coffeebutton1:nth-child(3)" ).css({"margin-left": "-7%"});
         $( ".coffeebutton1:nth-child(4)" ).css({"margin-left": "-7%"});
         break;
      default: break;
    }
};
mouseOut = (i) => {
   console.log("Mouse over", i, this);
   $( ".coffeebutton1" ).css({"margin-left": ""});
}


for (let i = 0; i < buttonCoffee.length; i++) {
   buttonCoffee[i].addEventListener('mouseover',() => mouseOver(i), false);
   buttonCoffee[i].addEventListener('mouseout',() => mouseOut(i), false);
}
