(function($) {
    "use strict"; // Start of use strict

    var links = document.querySelectorAll(".links");
    var conOne = document.querySelector("#conOne");
    var conTwo = document.querySelector("#conTwo");
    var conThree = document.querySelector("#conThree");

    function changeContent(e) {
      var selectCon = e.currentTarget.id;
      console.log(selectCon);

    if(selectCon == "linkOne") {
      //console.log("conOne fired");
      conOne.style.display="block";
      conTwo.style.display="none";
      conThree.style.display="none";
    }else if(selectCon == "linkTwo") {
      //console.log("conTwo fired");
      conOne.style.display="none";
      conTwo.style.display="block";
      conThree.style.display="none";
    }else{
      //console.log("conThree fired")
      conOne.style.display="none";
      conTwo.style.display="none";
      conThree.style.display="block";
    }
  }

    for(var i=0; i<links.length; i++){
      links[i].addEventListener("click", changeContent, false);
    }

})();
