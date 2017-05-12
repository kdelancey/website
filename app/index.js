// Written by Kyle DeLancey
// 02/19/2017

// Asynchronous Programming is apparently super important in node.js!
// Lets see how these examples turn out...

// Example using error-first callbacks
//const fs = require('fs')
//
//console.log('start reading a file...')
//
//fs.readFile('README.md', 'utf-8', function (err, content) {  
//  if (err) {
//    console.log('error happened during reading the file')
//    return console.log(err)
//  }
//
//  console.log(content)
//})
//
//console.log('end of the file')

$(document).ready(function(){
    // Activate Carousel
    $("#carousel").carousel();
    
    // Enable Carousel Indicators
    $("create1").click(function(){
        $("#carousel").carousel(0);
    });
    $("create2").click(function(){
        $("#carousel").carousel(1);
    });
    
    // Enable Carousel Controls
    $(".left").click(function(){
        $("#carousel").carousel("prev");
    });
    $(".right").click(function(){
        $("#carousel").carousel("next");
    });
});