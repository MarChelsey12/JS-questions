//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. 
The output should be: "Matched dog_name" if name is in the string, 
if no matches are present console.log "No Matches"
*/
let dogString = "Hello Max, my name is Dog, and I have purple eyes!"
let dogNames = ["Max","HAS","PuRple","dog"]

function findWords(){
    for (word of dogNames){
        if (dogString.includes(word)) {
            return "Matched dogName"
        } else {
            return "No matches"
        }
    } return dogString
}
console.log(findWords())
//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */
let arrList = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];

function replaceEvens(){
    for (let x = 0; x < arrList.length; x++){
        if (x % 2 == 0){
            arrList.splice(x, 1, 'even index');
        }
    }
    return arrList;
}
console.log(replaceEvens());
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
