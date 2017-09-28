     $(document).ready(function(){ 
      onloadstatecheck();

     }) 



function onloadstatecheck () {
      $.get("statecheck/callingactive.html")
        
          .done(function() { // Vzpostavljena Povezava
          var slideSource = document.getElementById('loader');
           loader.className ='display';
           setTimeout(onloadstatecheck, 1000);

          })   

        

          .fail(function() {  // Prekinjena povezava

            setTimeout(onloadstatecheck, 1000);
            console.log("Checking if active...");
            loader.className = 'fade';

           
        
          })

} 

function statecheck () {
      document.getElementById("dropped").classList.remove("appear"); 
      $.get("statecheck/callingactive.html")
        
          .done(function() { // Vzpostavljena Povezava
          
            active.className ='appear';  // Pokazemo da je vzpostavljena 
            establishing.className ='disapear';
            console.log("Established: Active");
            innerstatecheck();


          })   

        

          .fail(function() {  // Prekinjena povezava

            setTimeout(statecheck, 1000);
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
    var slideSource = document.getElementById('loader');
    loader.className ='display';
    setTimeout(function(){
      drop()
      "loader.className = 'fade';" 

      }, 50000);
   


}


function drop () {
 $.get("statecheck/dropped.php"); // cleanup}

 }