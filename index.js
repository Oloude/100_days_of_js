const color = ["#03045e", "#023e8a", "#0077b6", "#264653", "#0096c7", "#2a9d8f", "#00b4d8","#e9c46a", "#d62828", "#e76f51", "#f4a261", "#e56b6f","#84a98c" ]
const btn = document.querySelector(".btn")
const authorTitle= document.querySelector(".author")
const quote = document.querySelector('.quote')
const quoteIcon = document.querySelector(".fa-quote-left")

btn.addEventListener("click", function(){
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
        let quoteNum = data[randomNumber(data.length -1)]
   
        let authorName = quoteNum.author
        function checkAuthorName(name){
            if(name.includes(",")){
                 name = name.slice(0, name.indexOf(','))
                 return name
            }
            return name
        }
        authorTitle.textContent = checkAuthorName(authorName)
        quote.textContent = quoteNum.text
        let randomColor = color[randomNumber(color.length)]
        document.body.style.backgroundColor = randomColor
        btn.style.backgroundColor = randomColor
        quote.style.color = randomColor
        authorTitle.style.color = randomColor
        quoteIcon.style.color = randomColor   
    });
})

function randomNumber(num){
 return Math.floor(Math.random() * num)
}

