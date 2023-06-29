// Variables
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: "“Two things are infinite: the universe and human stupidity and I'm not sure about the universe.”",
        person: "― Albert Einstein"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        person: "― Nelson Mandela"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        person: "― Walt Disney"
    },
    {
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        person: "― James Cameron"
    },
    {
        quote: "The only impossible journey is the one you never begin.",
        person: "― Tony Robbins"
    },
    {
        quote: "Believe you can and you're halfway there.",
        person: "― Theodore Roosevelt"
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        person: "― Confucius"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        person: "― Winston Churchill"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        person: "― Steve Jobs"
    },
    {
        quote: "In the middle of every difficulty lies opportunity.",
        person: "― Albert Einstein"
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        person: "― Sam Levenson"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        person: "― Eleanor Roosevelt"
    },
    {
        quote: "I find that the harder I work, the more luck I seem to have.",
        person: "― Thomas Jefferson"
    },
    {
        quote: "You miss 100% of the shots you don't take.",
        person: "― Wayne Gretzky"
    },
    {
        quote: "It's not whether you get knocked down, it's whether you get up.",
        person: "― Vince Lombardi"
    },
    {
        quote: "Life is 10% what happens to us and 90% how we react to it.",
        person: "― Charles R. Swindoll"
    },
    {
        quote: "The best revenge is massive success.",
        person: "― Frank Sinatra"
    },
    {
        quote: "Success usually comes to those who are too busy to be looking for it.",
        person: "― Henry David Thoreau"
    },
    {
        quote: "The only person you are destined to become is the person you decide to be.",
        person: "― Ralph Waldo Emerson"
    },
    {
        quote: "The biggest risk is not taking any risk. In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks.",
        person: "― Mark Zuckerberg"
    },

];

btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});
