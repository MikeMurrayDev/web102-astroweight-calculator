// Write your JavaScript code here!
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];
  
  // We're going to solve this by breaking the problem into three parts.
  // Programmers like automating things, we'll populate the HTML drop down options using code,
  // instead of having to type out all the values.
  // Create a function that does the some math and gives us the new weight.
  // Then create a function that responds when the user clicks on the button.
  
  // 1. Populate the dropdown element with the data found in the planets array.
  // The value of each option should be the planet's name.
  // Use the following built-in methods:
  // `.forEach` `document.createElement` `document.getElementById` `.appendChild`
  
    var select = document.getElementById("planets");
    var theInput = document.getElementById("user-weight");

    // Load the planets into the select element
    planets.forEach(function(element){
        var newSelect = document.createElement("option");
        var planetNameOption = document.createTextNode(element[0]);
        newSelect.appendChild(planetNameOption);
        select.appendChild(newSelect);
    })
  
    var newWeight;

    function calculateWeight(userWeight) {
        // 2. Write the code to return the correct weight

        var newWeight = userWeight * 100;
        console.log('New Weight: ' + newWeight);

    }  

    // var thing = planets.filter(planet => planet.keys())

    function handleClickEvent(e) {

        // 4. Create a variable called planetName and assign the name of the selected planet from the drop down.
        var planetName = select.options[select.selectedIndex].text;
        console.log('Planet Name: ' + planetName);

        // 3. Create a variable called userWeight and assign the value of the user's weight.
        var userWeight = theInput.value;
        console.log('User Weight: ' + userWeight);


        var planetWeight;

        for (var i = 0; i < planets.length; i++){
          for (var k = 0; k < planets[i].length; k++){
            if (planets[i][0] === planetName) {
              var planetMultiplier = planets[i][1];
              console.log('Planet Multiplier: ' + planetMultiplier);
              break;
            }
          }
        }
        


        // 5. Create a variable called result and assign the value of the new calculated weight.
        var result = calculateWeight(userWeight);

        // 6. Write code to display the message shown in the screenshot.


        var output = document.getElementById("output");
        output.innerHTML = result;

        console.log('Output Message: ' + output.innerHTML);


        // var output = document.createElement("p");
        // var newOutput = document.createTextNode('Your weight on ' + newWeight);
        // output.appendChild(newOutput);



        // var newSelect = document.createElement("option");
        // var planetNameOption = document.createTextNode(element[0]);
        // newSelect.appendChild(planetNameOption);
        // select.appendChild(newSelect);

        }
  
  // 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.
  
  // Bonus Challenges
  // 8. Reverse the drop down order so that the sun is first.
  // 9. Make it look nice using bootstrap (http://getbootstrap.com/getting-started/)