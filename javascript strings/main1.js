let someText = "Hello I am a new Text, and I am happy to meet you";
console.log(someText.indexOf("am",9));

console.log(someText.substr(2,2));
console.log(someText.substring(2,4));

function Searcher(SearchText,keyChar){
    let storage=0;
    for(let i = 0 ; i < SearchText.length ; i++){
        let char = SearchText.substr(i,keyChar.length);
        //let char = SearchText[i];
        //console.log(char);
        if(char == keyChar)
        {
            storage++;
        }
    }
    console.log(storage);
}

Searcher(someText,"a");