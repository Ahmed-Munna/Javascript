const category = document.getElementById("category"),
      content = document.getElementById("content"),
      btn = document.getElementById("btn");

const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';

btn.onclick = () => {
    fetch(url)
    .then(data => data.json())
    .then(item => {
        category.innerText = item.category;
        content.innerText = item.joke;
    });
}
