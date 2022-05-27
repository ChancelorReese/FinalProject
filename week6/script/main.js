// An arrray of quotes
let quotes = [
    '"Oh be wise, what more can I say."',
    '"Do or do not, there is no try."',
    '"May the Force be with you."',
    '"Im the king of the world!"',
    '"Its working, its working!"',
    '"Its alive! Its alive!"',
    '“My mama always said life was like a box of chocolates. You never know what youre gonna get.”',
    '"If you build it, he will come."',
    '"Luke, I am your Father"',

]


// This fuction is to address when use clicks on the button.
let Click = document.getElementById('Click');


// This function is to allocate the different quotes. 
let output = document.getElementById('output');


// This function randomizes the quote that will appear. 
Click.addEventListener('click', function(){
    var get_new_quote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = get_new_quote;
})