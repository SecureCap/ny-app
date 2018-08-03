    $(document).ready(function() {

      // Make our variables global to the runtime of our application
      
      var wins = 0;
      var losses = 0;



      // Use a function to initialize our calculator.
      // This way when the user hits clear, we can guarantee a reset of the app.
      function initializeCalculator() {
        firstNumber = Math.floor((Math.random() * 100) + 1);
        secondNumber = Math.floor((Math.random() * 100) + 1);
        thirdNumber = Math.floor((Math.random() * 100) + 1);
        // fourthNumber = Math.floor((Math.random() * 100) + 1);
        fourthNumber = 1;
        result = 0;


        $("#first-number, #second-number, #total").empty();
      }

      function checkWin(result)
      {
        if (result >= 501)
        {
          alert("You lose!");
          losses++;
          $("#losses").text(losses);
          initializeCalculator();
        }
        else if (result === 500)
        {
          alert("You win!");
          wins++;
          $("#wins").text(wins);
          initializeCalculator();
        }
      }

      $(".auth-image1").on("click", function() {

        // Check if we've already run a calculation, if so... we'll just.


        // If operator is chosen, we should be writing the secondNumber, otherwise, the firstNumber
          // var firstNumber = Math.floor((Math.random() * 10) + 1);
          result += firstNumber;
          $("#first-number").text(firstNumber);
          $("#total").text(result);
          checkWin(result);


      });
      $(".auth-image2").on("click", function() {

        // Check if we've already run a calculation, if so... we'll just.
        

        // If operator is chosen, we should be writing the secondNumber, otherwise, the firstNumber
          result += secondNumber;
          $("#first-number").text(secondNumber);
          $("#total").text(result);
          checkWin(result);


      });
      $(".auth-image3").on("click", function() {

        // Check if we've already run a calculation, if so... we'll just.
       

        // If operator is chosen, we should be writing the secondNumber, otherwise, the firstNumber
          result += thirdNumber;
          $("#first-number").text(thirdNumber);
          $("#total").text(result);
          checkWin(result);


      });
      $(".auth-image4").on("click", function() {

        // Check if we've already run a calculation, if so... we'll just.
  

        // If operator is chosen, we should be writing the secondNumber, otherwise, the firstNumber
          result += fourthNumber;
          $("#first-number").text(fourthNumber);
          $("#total").text(result);
          checkWin(result);


      });
  
      $(".equal").on("click", function() {

        // If we already clicked equal, don't do the calculation again
        if (isCalculated) {
          return false;
        }

        // Set isCalculated to true so that we don't get in a weird UI state by clicking buttons again
        isCalculated = true;

        // Use parseInt to convert our string representation of numbers into actual integers
        firstNumber = parseInt(firstNumber);
        secondNumber = parseInt(secondNumber);

        // Based on the operator that was chosen.
        // Then run the operation and set the HTML of the result of that operation

        result = firstNumber + secondNumber;
      
        $("#result").text(result);

      });
      $(".clear").on("click", function() {

        // Call initializeCalculater so we can reset the state of our app
        initializeCalculator();

      });

      // Call initializeCalculater so we can set the state of our app
      initializeCalculator();
    });
