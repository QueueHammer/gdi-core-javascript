function calculate(){
  //Variables we set
  var age = 26;
  var oldAge = 96;
  var perDay = 2;

  //Variables we calculated
  var days = (oldAge - age) * 356;
  var total = perDay * days;
  var resultDiv = document.getElementById('lifetime-supply');
  
  //Logic
  if(total > 40000){
    //Put long statements on multiple lines
    resultDiv.innerHTML =
      "You will need " + 
      total + 
      " to last you until the ripe old age of " + 
      oldAge + 
      ". Wow! That's a lot!";
  }
  else { //Else on new line
    resultDiv.innerHTML = 
      "You will need " + 
      total + 
      " to last you until the ripe old age of " + 
      oldAge + 
      ". You seem pretty reasonable";
  }
}

function favoriteThings(){
  //Variables
  var favoriteThings = ['Rabbits', 'Orange', 'Yogurt', 'Brussel Sprouts', 'Otters'];
  var resultDiv = document.getElementById('favorite-things');
  var resultParagraph = document.createElement('p');
  var result = 'My favorite things are: ';

  //Flow control
  for (var i = 0; i<favoriteThings.length; i++){
    if (i < favoriteThings.length - 1){
      result += favoriteThings[i] + ', ';
    }
    else{
      result += "and " + favoriteThings[i] + '.';
    }
  }
  
  //Final instructions
  var resultText = document.createTextNode(result);
  resultParagraph.appendChild(resultText);
  resultDiv.appendChild(resultParagraph);
}

function myFriends(){
  //Declare friends
  var friends = [ //Contents of the list on a new line
    { //Each object property on a new line
      name: 'Santa Claus',
      hair: 'red'
    }, //Clearly visible commas
    {
      name: 'Easter Bunny',
      hair: 'brown'
    },
    {
      name: 'Tooth Fairy',
      hair: 'blue'
    }
  ];
  
  var resultDiv = document.createElement('div');
  var introParagraph = document.createElement('p');
  var introText = document.createTextNode('My friends are:');
  introParagraph.appendChild(introText);
  resultDiv.appendChild(introParagraph);

  for(var i = 0; i < friends.length; i++){
  }
  
  friends.forEach(function (friend) {
    var resultParagraph = document.createElement('p');
    var resultText = document.createTextNode(describeFriend(friend));
    resultParagraph.appendChild(resultText);
    resultDiv.appendChild(resultParagraph);
  });
  
  document.body.appendChild(resultDiv);
}

function describeFriend(friend){
  return [
    "My friend",
    friend.name, 
    "has",
    friend.hair,
    " hair."].join(' ');
}