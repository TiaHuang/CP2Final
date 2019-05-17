   $(document).ready(function () {

    var socket = new WebSocket(`ws://${window.location.host}/comm`);
    
    // when the socket closes, issue an alert.
    socket.addEventListener('close', () => {
      alert("Socket connection to server closed.");
    });
    
    // when there's a message from the server, use the handleMessage function
    // to handle it.
    socket.addEventListener('message', message => {
      handleMessage(message);
    })

    var data = 1;

    function handleMessage(message) {
      console.log(message);
      // alert(message.data.substr(0, 8) == "backward");
      if(data>=1 && data<=8){
      if (message.data.substr(0, 7) == "forward") {
        data++;
      } else if (message.data.substr(0, 8) === "backward") {
        data--;
      }
    }else if(data>8){
      data=1;
    }else if(data<2){
      data=8;
    }
    console.log(data);



         $('.memes').removeClass('show');
         $('.sound').removeClass('show');
         $('.text').removeClass('show');
         //$('#circle-01').removeClass('red');

         // var data = $(this).data('num');
         $('.memes-'+data+'').addClass("show");
         $('.sound-'+data+'').addClass("show");
         $('.text-'+data+'').addClass("show");
        //$('#circle-01').addClass('red');

        $('.circles').removeClass('clicked');
        $(this).addClass('clicked');        

        $('body').removeClass();
        $('body').addClass('bg-'+data+'');     

    }

       $('.circles').click(function () {
       });    
   });

