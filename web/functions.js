      $(document).ready(function(){ 
       getCookie();
       doSomething();

      }) 



function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    // because unescape has been deprecated, replaced with decodeURI
    //return unescape(dc.substring(begin + prefix.length, end));
    return decodeURI(dc.substring(begin + prefix.length, end));
} 

function doSomething() {
    var myCookie = getCookie("gatex");

    if (myCookie == null) {
        // do cookie doesn't exist stuff;
          console.log("no cookie") 
          document.location = "no.html";


    }
    else {
         console.log("cookie found") 
 // do cookie exists stuff
    }
}
// function onloadstatecheck () {
//       $.get("statecheck/callingactive.html")
        
//           .done(function() { // Vzpostavljena Povezava
//           var slideSource = document.getElementById('loader');
//            loader.className ='display';
//            setTimeout(onloadstatecheck, 1000);

//           })   

        

//           .fail(function() {  // Prekinjena povezava

//             setTimeout(onloadstatecheck, 1000);
//             console.log("Checking if active...");
//             loader.className = 'fade';

           
        
//           })

// } 

var killstatecheck = 0;
var activecall = 0;

function statecheck () {
      document.getElementById("dropped").classList.remove("appear"); 
      $.get("statecheck/callingactive.html")
        
          .done(function() { // Vzpostavljena Povezava
            activecall = 1;
            active.className ='appear';  // Pokazemo da je vzpostavljena 
            establishing.className ='disapear';
            console.log("Established: Active");
            innerstatecheck();


          })   

        

          .fail(function() {  // Prekinjena povezava

            if (killstatecheck==0) {
                setTimeout(statecheck, 1000);
                 console.log("killstatecheck not detected");
              }
            else {

                      console.log("killstatecheck  detected");

                  }
            



            console.log("Establishing...");
          

           
        
          })

} 


function innerstatecheck () { // < NEPRAVILNO SPISANA NESTED FUNKCIJA
$.get("statecheck/callingactive.html")
// Cekiramo skos ce je se vzpostavljena
    .done(function() { // Vzpostavljena Povezava
      setTimeout(innerstatecheck, 1000);
      console.log("Still Active");
       }) 



    .fail(function() {  // Prekinjena povezava
    console.log("Dropped");
    activecall = 0;
   // active.className ='disapear';
     document.getElementById("active").classList.remove("appear");  // Povemo da je konc klica, koncamo funkcijo
     document.getElementById("establishing").classList.remove("disapear"); 
     loader.className = 'fade';    
     dropped.className ='appear';

      } )
} 


// Redundant PHP->SMS calls

        function enter1 () {
            $.ajax( { type : 'POST',
                  data : { },
                  url  : 'enter1.php',              
                  success: function ( data ) {
                    //alert( data );               
                  },
                  error: function ( xhr ) {
                    alert( "error" );
                  }
                });


          
        }


        function exit1 () {
            $.ajax( { type : 'POST',
                  data : { },
                  url  : 'exit1.php',              
                  success: function ( data ) {
                    //alert( data );               
                  },
                  error: function ( xhr ) {
                    alert( "error" );
                  }
                }); 
        }




     
        function enter2 () {
            $.ajax( { type : 'POST',
                  data : { },
                  url  : 'enter2.php',              
                  success: function ( data ) {
                    //alert( data );               
                  },
                  error: function ( xhr ) {
                    alert( "error" );
                  }
                });     
        }


     
        function exit2 () {
            $.ajax( { type : 'POST',
                  data : { },
                  url  : 'exit2.php',              
                  success: function ( data ) {
                    //alert( data );               
                  },
                  error: function ( xhr ) {
                    alert( "error" );
                  }
                });   
        }

// Loader Bar

        function move() {
  var elem = document.getElementById("myBar");
  var width = 1;
  var id = setInterval(frame, 100);
  function frame() {
    if (width >= 100) {
      clearInterval(id);

    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}


// Loader Cat gif


    function loadertoggle() {
       console.log("active call: " + activecall);
   
     killstatecheck = 0;
     console.log("killstatecheck: " + killstatecheck);
    document.getElementById("strange").classList.remove("appear"); 
    var slideSource = document.getElementById('loader');
    loader.className ='display';
    setTimeout(checkstate, 20000);

}

function checkstate(){
              if (activecall==0) {
          // Assigning to window.numberScriptLoaded creates the global
                  drop();
                  strange.className = 'appear';
                  dropped.className ='disapear';
                  loader.className = 'fade';
                  console.log("active call: " + activecall);
                  console.log("killstatecheck: " + killstatecheck);
                  killstatecheck = 1;
                  }
                  else {

                  console.log("active call: " + activecall);
                  console.log("killstatecheck: " + killstatecheck);


                  }

}

function drop () {
 $.get("statecheck/dropped.php"); // cleanup}

 }