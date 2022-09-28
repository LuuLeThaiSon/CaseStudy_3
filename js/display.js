let movie1 = new MovieList("Exit","img/exit.jpeg")
let movie2 = new MovieList("Fast and furious","img/fast-and-furious-hobbs-and-shaw.jpeg")
let movie3 = new MovieList("GeoStorm","img/geostorm.jpeg")
let movie4 = new MovieList("Godzila: King of monster","img/godzilla-king-of-monster.jpeg")
let movie5 = new MovieList("Hai Phượng","img/haiphuongposter.jpeg")
let movie6 = new MovieList("Home tale","img/homme-tale.jpeg")
let movie7 = new MovieList("It Chapter 2","img/it-chapter-2.jpeg")
let movie8 = new MovieList("John wick 2","img/john-wick-2.jpeg")
let movie9 = new MovieList("John wick 3","img/johnwick-3.jpeg")
let movie10 = new MovieList("urrassic world 2","img/jurrassic-world-2.jpeg")
let movie11 = new MovieList("Kungfu league","img/kung-fu-league.jpeg")
let movie13 = new MovieList("Men in black international","img/men-in-black-international.jpeg")
let movie14 = new MovieList("My first client","img/my-first-client.jpeg")
let movie15 = new MovieList("Rampage","img/rampage.jpeg")
let movie16 = new MovieList("Sanju","img/sanju.jpeg")
let movie17 = new MovieList("Show dog","img/show-dog.jpeg")
let movie18 = new MovieList("Spiderman: Far from home","img/spider-man-far-from-home.jpeg")
let movie19 = new MovieList("Steal my heart","img/steal-my-heart.jpeg")
let movie20 = new MovieList("Stuber","img/stuber.jpeg")
let movie21 = new MovieList("The secret life of pets","img/the-secret-life-of-pets.jpeg")
let movie22 = new MovieList("Upgrade","img/upgrade.jpeg")
let movie23 = new MovieList("War for the planet of the aqes","img/war-for-the-planet-of-the-apes.jpeg")
let movie24 = new MovieList("X-Men 8: Dark Phoenix","img/x-men-8-dark-phoenix.jpeg")

let arrMovie = [movie1,movie2,movie3,movie4,movie5,movie6,movie7,movie8,movie9,movie10,movie11,movie21,movie13,movie14,movie15,movie16,movie17,movie18,movie19,movie20,movie21,movie22,movie23,movie24] 


function display() {
     let content = ""
     for (let i = 0; i<arrMovie.length; i++) {
          content += "<div class='col-md-2 text-center'>"
          content += "<a href='#'><img src=./"+ arrMovie[i].image + " width='100%'></a>" 
          content += '<p>' + arrMovie[i].name + '</p>' 
          content += '</a><button onclick="deleteMovie('+ i +')">Xóa</button><button onclick="editMovie()">Sửa</button></div>'
     }
     document.getElementById("display").innerHTML = content;
}

function deleteMovie(i) {
     // let warring = prompt("Bạn có muốn xóa phim " +arrMovie[i].name+ " không? YES/NO")
     // if (warring=="YES") {
          arrMovie.splice(i,1)
     // }
     display()
}

display()