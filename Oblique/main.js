document.addEventListener("DOMContentLoaded", function(){
    phrases = ["Who is affected?", "Who thinks otherwise?"];
    idx = Math.floor(phrases.length * Math.random());
    const phrase = phrases[idx]
    if (document.getElementById('main')){
        document.getElementById('main').innerHTML = phrase;
    }
  });
