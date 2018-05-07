//Anagram Application
//To display True when the two given words contain the same letters
//and  displays false otherwise

function isAnagram(word1, word2){
    //Checks if the given word is a string or not
    if((typeof(word1) == "string" && typeof(word2) == "string")){
        //Checks if the words are of the same length
        if(word1.length == word2.length){
            //The next two lines converts the string to arrays and 
            //then compares the letters contained in the two arrays
            var string1 = word1.toLowerCase().split('').sort().join('');
            var string2 = word2.toLowerCase().split('').sort().join('');

            if(string1 == string2){
                console.log("True");
            }else{
                console.log("False");
            }
        }
        //Displays when the words are not of same length
        else{
            console.log("The words must be of the same length");
        }
    }
    //Displays when any of the words is not a string
    else{
        console.log("The words has to be a string");
    }
}   
  isAnagram("Angel", "Glean");  
isAnagram("car", "arc");
isAnagram("at", "are");
isAnagram(2, "cat");
isAnagram("water", "wafer");


/*Tax Application to display the tax amount in kobo
*when given the amount in naira and the tax percentage
*/

function taxes(amount, percentage){
    //To check if the given parameters are integers
    if(typeof(amount) == "number" && typeof(percentage) == "number"){
        amount *= 100;//To convert the amount from naira to kobo
        output = amount *(percentage/100);//To calculate the tax amount
        output =[output];
        console.log(output + " kobo");
    }
    else{
        console.log("The two values has to be integers");
    }
}
taxes(160, 25);  //displays 4000 kobo
taxes("are", 10); //displays The two values has to be integers


//Correcting the bugs
function fixSpelling(name){
	if(name = 'twittr'){
		name = 'twitter';
	}
	else{
        fixSpelling(name);
	}
    console.log(name);
    return name;
}