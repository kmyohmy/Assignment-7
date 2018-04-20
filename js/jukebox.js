/*eslint-env browser*/


var btnaddtheAlbum = window.document.getElementById('addtheAlbum');
var artist = window.document.getElementById('inputArtistName').value;
var title = window.document.getElementById('inputAlbumName').value;

var Album = function (artist, title) {
    "use strict";
    var self = {
        played: 0,
        play: function () {
            self.played += 1;
        },
        display: function () {
            return artist + " : " + title + ". The album has been played " + this.played + " times.";
        },
        add: function () {
          return new Album(artist, title);
        },
        load: function () {
            var jbox = new Jukebox();
            Jbox.addAlbum(album);
        }
    };
    return self;
};





var Jukebox = function () {
    "use strict";
    var albums = [], self;
    
    self = {
        
        addAlbum: function (album) {
            //Take the input for the input boxes
            //Create option and set id
            var newOption = window.document.createElement("option");
            newOption.setAttribute("id", (inputAlbumName));

            //add the next option to the selectbox
            newSelect.appendchild(newOption);
            
            //store the album info
                // var temparray = [album.Name,album.Albumname];
            var temparray = [artist,title];

            //push it to the albums array
            albums.push(temparray);
            
        },
        favoriteAlbum: function () {
            var max = -1, fav, i;
            //Go through the albums
            for (i = 0; i < albums.length; i += 1) {
               //If the current index(album position) is larger than -1 or the previous ones make it the fave and set it to the next max
                if (albums[i].played > max) {
                    max = albums[i].played;
                    fav = albums[i];
                }
            }
            return fav.display();
        }
    };
    return self;
};



//Albums 
var jbox = new Jukebox();
var album1 = new Album("Drake", "More Life");
var album2 = new Album("Daniel Caesar", "Freudian");
var album3 = new Album("Big K.R.I.T.", "4eva is a mighty long time");




jbox.addAlbum(album1);
jbox.addAlbum(album2);
jbox.addAlbum(album3);



window.console.log("You favorite album is: " + jbox.favoriteAlbum());


//Unfinished
var albumNumber = window.document.getElementBy

function getSelection (albumNumber) {
    // If the currentalbumnumber is not equal to anything in the albums array then add it
    //     if (albumNumber !== Jukebox.albums[i]) {

    //         jukebox.addAlbum(albumNumber)
    //     } 
    switch (albumNumber){
        case "1":
            var album1 = new Album("Drake", "More Life");
            album1.play();
            break;
        case "2":
            var album2 = new Album("Daniel Caesar", "Freudian");
            album2.play();
            break;
        case "3":  
            var album3 = new Album("Big K.R.I.T.", "4eva is a mighty long time");
            album3.play();
            break;


    }

}


function init () {
    "use strict";
    var newSelect = window.document.createElement("select");
    newSelect.setAttribute("id", ("albumSelection"));


}



btnaddtheAlbum.addEventListener("click", album.self.add());


