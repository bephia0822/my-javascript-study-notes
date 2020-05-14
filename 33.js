// Challenge:
// Here's a list of 5 most popular songs on Spotify.
// 1) Check if any song has won a Grammy
// 2) Check if all the songs were streamed for at least 1.5 million times
// Note: the timesStreamed value is already in million

const songs = [
    {song: "Shape of You", timesStreamed: 2.384, wonGrammy: true},
    {song: "One Dance", timesStreamed: 1.791, wonGrammy: false},
    {song: "Rockstar", timesStreamed: 1.781	, wonGrammy: false},
    {song: "Closer", timesStreamed: 1.688, wonGrammy: false},
    {song: "Thinking Out Loud", timesStreamed: 1.461, wonGrammy: true}
]

const result = songs.some(songs => songs.wonGrammy === true);
console.log(result);
//true

const result = songs.every(songs => songs.timesStreamed >= 1.5);
console.log(result);
//false

//好久沒有靠自己的力量答對兩題，感動><
//以下是老師的解答
const hasWonGrammy = songs.some(song => song.wonGrammy);
console.log(hasWonGrammy);
//true
const allMegaHits = songs.every(song => song.timesStreamed > 1.5);
console.log(allMegaHits);
//false