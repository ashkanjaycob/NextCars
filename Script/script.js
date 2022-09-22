

        const ball = document.querySelector("div.ball");
        let mouseX = 0;
        let mouseY = 0;
        let ballX = 0;
        let ballY = 0;
        let speed = 0.06;
        function animate(){
          let distX = mouseX - ballX;
          let distY = mouseY - ballY;
          ballX = ballX + (distX * speed);
          ballY = ballY + (distY * speed); 
          ball.style.left = ballX + "px";
          ball.style.top = ballY + "px"; 
          requestAnimationFrame(animate);
        }
        animate();
        document.addEventListener("mousemove", function(event){
          mouseX = event.pageX;
          mouseY = event.pageY;
        })




        function myFunction() {
          var x = document.getElementById("myLinks");
          if (x.style.display === "block") {
            x.style.display = "none";
          } else {
            x.style.display = "block";
          } 
        }



        function myTransition() {
          document.getElementById("myLinks").style.transition = "all 2s";
        }




        