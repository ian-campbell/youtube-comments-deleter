// try 0, then try increasing values. this is delay between comment deletions
var DELAY = 0;

// if script ends but yt has more comments loading then increase this pause value.
// this provides 1 retry attempt between list updates. useful for slow cpu/network.
// (electronoob: 800 was the ideal value for my machine)
var PAUSE = 8000;

var myList = document.getElementsByClassName("dropdown-trigger style-scope ytd-menu-renderer");


// delete button for owner comments
document.getElementsByClassName("yt-simple-endpoint style-scope ytd-menu-navigation-item-renderer")[1].click();


// delete button for others' comments
document.getElementsByClassName("style-scope ytd-menu-popup-renderer")[1].click();
document.getElementsByClassName("yt-simple-endpoint style-scope yt-button-renderer")[1].click();