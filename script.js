const btn = document.querySelector('.click-btn');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

const qtn = 
    [{
        quote: 'To live is the rarest thing in the world. Most people exist, that is all.',
        author: 'Oscar Wilde'
    },{
    
        quote: 'That it will never come again is what makes life so sweet.',
        author: 'Emily Dickinson'
    },{
    
        quote: 'It is never too late to be what you might have been.',
        author: 'George Eliot'
    },{
    
        quote: 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',
        author: 'Ralph Waldo Emerson'
    },{
    
        quote: 'Pain is inevitable. Suffering is optional.',
        author: 'Haruki Murakami'
    },{
        quote:'All the worlds a stage, and all the men and women merely players.',
        author:'William Shakespeare'
    },{
        quote:'Be kind, for everyone you meet is fighting a hard battle.',
        author:'Plato'
    },{
        quote:'I want to taste and glory in each day, and never be afraid to experience pain.',
        author:'Sylvia Plath'
    }];

btn.addEventListener('click', function () {
    const rand = Math.floor(Math.random() * qtn.length);
    quote.innerText = qtn[rand].quote;
    author.innerText = qtn[rand].author;
})
