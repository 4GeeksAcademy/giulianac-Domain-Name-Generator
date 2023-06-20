let pronoun = ['the','our', 'his', 'her','their'];
let adj = ['great', 'big', 'awesome', 'crazy','pretty','incredible' ];
let noun = ['jogger','racoon','rocket','moon','tree'];
let extension = ['.com', '.net', '.org', '.io', '.cr', '.xyz'];
let domainName = '';

//Loops every array defined above.
for (let a = 0; a < pronoun.length; a++) {
  for (let b = 0; b < adj.length; b++) {
    for (let c = 0; c < noun.length; c++) {
      for (let d = 0; d < extension.length; d++) {
        randomPronoun = pronoun[Math.floor(Math.random() * pronoun.length)];
        randomAdj = adj[Math.floor(Math.random() * adj.length)];
        randomNoun = noun[Math.floor(Math.random() * noun.length)];
        randomExtension = extension[Math.floor(Math.random() * extension.length)];
       
        //Redefines the domain name so it includes all the random variables.
        domainName = randomPronoun + randomAdj + randomNoun + randomExtension;
        
      } 
    }
  }
}
//Prints the random domain name to the console.
console.log(domainName);