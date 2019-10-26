
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


// height middle

resizeMiddle = () =>{
   const summaryRightHeightFirst = $(".middle .col-md-12:nth-child(1) ").height();
   const summaryRightHeightSecond = $(".middle .col-md-12:nth-child(2) ").height();
  
   console.log("heigt right",summaryRightHeightFirst, summaryRightHeightSecond )
   $(".middle .col-md-5:nth-child(1) .card-body").css("height", summaryRightHeightFirst + summaryRightHeightSecond + "px");
   
}

resizeMiddle1 = () => {
   const summarySecondLeftHeight = $(".middle  .col-md-12:nth-child(3) .row .col-md-7 ").height();
   $(".middle  .col-md-12:nth-child(3) .row .col-md-5 .card-body").css("height", summarySecondLeftHeight + "px" );
   
}

$(window).on("load", function(){
   resizeMiddle()
   resizeMiddle1()
});
$(window).on("resize", function(){
   resizeMiddle()
   resizeMiddle1()
});