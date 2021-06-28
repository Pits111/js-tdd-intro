const capitalizeFirstLetters = (input) => {
    if( input.length < 0 ) {
      return "";
    }
  
    return input.split(" ").map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  
  }
  
  module.exports = capitalizeFirstLetters;