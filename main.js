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
  
// 1. Populate the dropdown element with the data found in the planets array
var select = document.getElementById("planets");
var theInput = document.getElementById("user-weight");

// Load the planets into the select element
planets.forEach(function(element){
    var newSelect = document.createElement("option");
    var planetNameOption = document.createTextNode(element[0]);
    newSelect.appendChild(planetNameOption);
    select.appendChild(newSelect);
})


// 7. Set the #calculate-button element's onclick method to use the handleClickEvent function
function handleClickEvent(e) {

  // 4. Create a variable called planetName and assign the name of the selected planet from the drop down
  var planetName = select.options[select.selectedIndex].text;
  console.log('Planet Name: ' + planetName);

  // 3. Create a variable called userWeight and assign the value of the user's weight
  var userWeight = theInput.value;
  console.log('User Weight: ' + userWeight);        

  // Creating a for loop with a nested for loop in order to find the planet multiplier, 
  // which is an index of an array that belongs to a parent array
  for (var i = 0; i < planets.length; i++){
    for (var k = 0; k < planets[i].length; k++){
      if (planets[i][0] === planetName) {
        var planetMultiplier = planets[i][1];
        console.log('Planet Multiplier: ' + planetMultiplier);
        break;
      }
    }
  }    

  // 5. Create a variable called result and assign the value of the new calculated weight
  calculateWeight(userWeight, planetMultiplier);
}

// Taking the user's entered weight and multiplying it by the planet's mass multiplier
function calculateWeight(userWeight, planetMultiplier) {
  
  // 2. Write the code to return the correct weight 
  var newWeight = userWeight * planetMultiplier;
  console.log('New Weight: ' + newWeight);

// 6. Write code to display the message shown in the screenshot
  var output = document.getElementById("output");
  output.innerHTML = newWeight;
  console.log('Output Message: ' + output.innerHTML);
}  


// 8. Reverse the drop down order so that the sun is first
function reverseArray(e){

  // Removing options from our select so that we can populate the dropdown with our new reversed list
  function removeOptions(select) {
      var i;
      for(i = select.options.length - 1 ; i >= 0 ; i--)
      {
          select.remove(i);
      }
  }
  removeOptions(document.getElementById("planets"));

  planets.reverse().forEach(function(element){
    var newSelect = document.createElement("option");
    var planetNameOption = document.createTextNode(element[0]);
    newSelect.appendChild(planetNameOption);
    select.appendChild(newSelect);
  })
}