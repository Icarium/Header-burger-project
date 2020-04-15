
/* Det här är i princip en lösning jag slet mig fram till för att få sidan att scrolla ner när man
trycker på knappar i menyn, eftersom "sidorna" i wordpress saknar enskilda id:n eller klasser */

const content = document.querySelectorAll('.content')
console.log(content)
const home = "http://localhost/wordpress/"
if(window.location != home){


    content[0].scrollIntoView({behavior: "smooth", block: "end", inline: "end"});

}


