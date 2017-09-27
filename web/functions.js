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


        function move() {
  var elem = document.getElementById("myBar");
  var width = 1;
  var id = setInterval(frame, 170);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    active.className ='appear';
    establishing.className ='disapear';
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}


    function loadertoggle() {
    var slideSource = document.getElementById('loader');
    loader.className ='display';
    setTimeout("loader.className = 'fade';", 60000);
    active.className ='disapear';
    establishing.className ='appear';

}
