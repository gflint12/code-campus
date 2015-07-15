var lyrics = ["This", "hit", "that", "ice", "cold", "Michelle", "Pfeiffer", "that", "white", "gold", "This", "one", "for", "them", "hood", "girls", "Them", "good", "girls", "straight", "masterpieces", "Stylin", "whilen", "livin", "it", "up", "in", "the", "city", "Got", "Chucks", "on", "with", "Saint", "Laurent", "Got", "kiss", "myself", "Im", "so", "pretty"];



var printArray = function (musicLyrics) {

    for (var i = 0; i <= lyrics.length; i++) {

        return musicLyrics;
    }
};
console.log(printArray(lyrics));




var printArrayBackwards = function (musicLyrics) {
    for (var i = 0; i <= lyrics.length; i++) {
        return musicLyrics;
    }
};
console.log(printArrayBackwards(lyrics.reverse()));



var printEveryOther = function(musicLyrics) {
    for (var i = 0; i <= lyrics.length; i=i+2) {
        console.log(musicLyrics[i]);
    }
};
console.log(printEveryOther(lyrics));