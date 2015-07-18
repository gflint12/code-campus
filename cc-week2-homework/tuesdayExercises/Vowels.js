//var vowelFunction = function(vowelString) {
//    return
//};
//if (vowelString === 'a'|| 'e' || 'i' || 'o' || 'u') {
//    console.log(vowelString.length);
//}
//
//vowelFunction('favorite');


var vow = function(str) {
    var matches = str.match(/[aeiou]/gi);
    var count = matches ? matches.length : 0;
   
    return false;
}
vow("This is a string");

