        var keytermm = "asd";
        var answerd = "asd";
        function readMultipleFiles(evt) {
            //Retrieve all the files from the FileList object
            var files = evt.target.files; 
    		
            if (files) {
                for (var i=0, f; f=files[i]; i++) {
	                var r = new FileReader();
                    r.onload = (function(f) {
                        return function(e) {
                            var contentsd = e.target.result;
                            alert(contentsd);
                            var array = contentsd.split(',');
                            keytermm = array.slice(0,(array.length / 2));
                            answerd = array.slice((array.length / 2),array.length);
                            
                        };
                    })(f);
                r.readAsText(f);
                }   
        } else {
	          alert("Failed to load files"); 
        }
      }
  
      document.getElementById('fileinput').addEventListener('change', readMultipleFiles, false);
            var audio;
            var das = 0;
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            function startDictation() {
                if (window.hasOwnProperty('webkitSpeechRecognition')) {
                    var recognition = new webkitSpeechRecognition();
                    recognition.continuous = false;
                    recognition.interimResults = false;
                    recognition.lang = "en-US";
                    recognition.start();
                    recognition.onresult = function(e) {
                        document.getElementById('uq').value = e.results[0][0].transcript;
                        recognition.stop();
                        var u = document.getElementById('uq').value;
                        document.getElementById('uq').value = u;
                        question();
                    };
                    recognition.onerror = function(e) {
                        window.alert("err");
                        recognition.stop();
                    }
                }
            }
            function wow() {
                var sounds = document.getElementsByTagName('audio');
                for (i = 0; i < sounds.length; i++) sounds[i].pause();
            };
            var ng = 0;
            function question() {
                var aodio = das % 10;
                audio = new Audio("snd" + aodio + '.mp3');
                audio.load();
                var currentTime = new Date()
                var hours = currentTime.getHours()
                var minutes = currentTime.getMinutes()
                if (minutes < 10) {
                    minutes = "0" + minutes;
                }
                if (document.getElementById('uq').value == "/time") {
                    window.alert("its " + hours + ":" + minutes);
                }
                if (document.getElementById('uq').value.indexOf("/music") > -1) {
                    audio.pause();
                    audio.currentTime = 0;
                    window.alert("changing music..");
                    das = document.getElementById('uq').value.charAt(6);
                    window.alert("soundtrack is now soundtrack " + das % 10);
                    audio.pause();
                    return;
                }
                if (document.getElementById('uq').value == "/clear") {
                    localStorage.clear();
                    window.alert("loacal storage cleared");
                    return;
                }
                if (document.getElementById('uq').value == "open the sidebar") {
                    document.getElementById("mySidenav").style.width = "250px";
                }
                audio.pause();
                audio.currentTime = 0.0;
                if (document.getElementById('uq').value == "/game") {
                    /* Customisable map data */
                    var map = {
                        tile_size: 16,
                        /*
    
    Key vairables:
    
    id       [required] - an integer that corresponds with a tile in the data array.
    colour   [required] - any javascript compatible colour variable.
    solid    [optional] - whether the tile is solid or not, defaults to false.
    bounce   [optional] - how much velocity is preserved upon hitting the tile, 0.5 is half.
    jump     [optional] - whether the player can jump while over the tile, defaults to false.
    friction [optional] - friction of the tile, must have X and Y values (e.g {x:0.5, y:0.5}).
    gravity  [optional] - gravity of the tile, must have X and Y values (e.g {x:0.5, y:0.5}).
    fore     [optional] - whether the tile is drawn in front of the player, defaults to false.
    script   [optional] - refers to a script in the scripts section, executed if it is touched.
    
    */
                        keys: [{
                                id: 0,
                                colour: '#333',
                                solid: 0
                            }, {
                                id: 1,
                                colour: '#888',
                                solid: 0
                            }, {
                                id: 2,
                                colour: '#555',
                                solid: 1,
                                bounce: 0.35
                            }, {
                                id: 3,
                                colour: 'rgba(121, 220, 242, 0.4)',
                                friction: {
                                    x: 0.9,
                                    y: 0.9
                                },
                                gravity: {
                                    x: 0,
                                    y: 0.1
                                },
                                jump: 1,
                                fore: 1
                            }, {
                                id: 4,
                                colour: '#777',
                                jump: 1
                            }, {
                                id: 5,
                                colour: '#E373FA',
                                solid: 1,
                                bounce: 1.1
                            }, {
                                id: 6,
                                colour: '#666',
                                solid: 1,
                                bounce: 0
                            }, {
                                id: 7,
                                colour: '#73C6FA',
                                solid: 0,
                                script: 'change_colour'
                            }, {
                                id: 8,
                                colour: '#FADF73',
                                solid: 0,
                                script: 'next_level'
                            }, {
                                id: 9,
                                colour: '#C93232',
                                solid: 0,
                                script: 'death'
                            }, {
                                id: 10,
                                colour: '#555',
                                solid: 1
                            }, {
                                id: 11,
                                colour: '#0FF',
                                solid: 0,
                                script: 'unlock'
                            }
                        ],
                        /* An array representing the map tiles. Each number corresponds to a key */
                        data: [
                            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 6, 6, 6, 6, 6, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 7, 1, 1, 1, 1, 1, 1, 1, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 4, 2, 2, 2, 1, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 1, 1, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2, 2, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2],
                            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 1, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 2, 1, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                            [2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2],
                            [2, 1, 2, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2],
                            [2, 1, 2, 2, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2],
                            [2, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 8, 1, 1, 1, 2],
                            [2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2],
                            [2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 9, 9, 9, 2, 10, 10, 10, 10, 10, 10, 1, 1, 1, 1, 1, 1, 1, 11, 2, 2, 2, 2, 4, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 10, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2],
                            [2, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 1, 1, 1, 1, 1, 1, 2],
                            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 1, 1, 1, 1, 1, 1, 1, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2],
                            [2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 2, 2, 2, 2, 2, 2, 6, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
                            [2, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
                            [2, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                            [2, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
                            [2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 2, 5, 5, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2],
                            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2],
                            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
                        ],
                        /* Default gravity of the map */
                        gravity: {
                            x: 0,
                            y: 0.3
                        },
                        /* Velocity limits */
                        vel_limit: {
                            x: 2,
                            y: 16
                        },
                        /* Movement speed when the key is pressed */
                        movement_speed: {
                            jump: 6,
                            left: 0.3,
                            right: 0.3
                        },
                        /* The coordinates at which the player spawns and the colour of the player */
                        player: {
                            x: 2,
                            y: 2,
                            colour: '#FF9900'
                        },
                        /* scripts refered to by the "script" variable in the tile keys */
                        scripts: {
                            /* you can just use "this" instead of your engine variable ("game"), but Codepen doesn't like it */
                            change_colour: 'game.player.colour = "#"+(Math.random()*0xFFFFFF<<0).toString(16);',
                            /* you could load a new map variable here */
                            next_level: 'alert("Yay! You won! Reloading map.");game.load_map(map);',
                            death: 'alert("You died!");game.load_map(map);',
                            unlock: 'game.current_map.keys[10].solid = 0;game.current_map.keys[10].colour = "#888";'
                        }
                    };
                    /* Clarity engine */
                    var Clarity = function() {
                        this.alert_errors = false;
                        this.log_info = true;
                        this.tile_size = 16;
                        this.limit_viewport = false;
                        this.jump_switch = 0;
                        this.viewport = {
                            x: 200,
                            y: 200
                        };
                        this.camera = {
                            x: 0,
                            y: 0
                        };
                        this.key = {
                            left: false,
                            right: false,
                            up: false
                        };
                        this.player = {
                            loc: {
                                x: 0,
                                y: 0
                            },
                            vel: {
                                x: 0,
                                y: 0
                            },
                            can_jump: true
                        };
                        window.addEventListener("keydown", function(e) {
                            // space, page up, page down and arrow keys:
                            if ([38, 40].indexOf(e.keyCode) > -1) {
                                e.preventDefault();
                            }
                        }, false);
                        window.onkeydown = this.keydown.bind(this);
                        window.onkeyup = this.keyup.bind(this);
                    };
                    Clarity.prototype.error = function(message) {
                        if (this.alert_errors) alert(message);
                        if (this.log_info) console.log(message);
                    };
                    Clarity.prototype.log = function(message) {
                        if (this.log_info) console.log(message);
                    };
                    Clarity.prototype.set_viewport = function(x, y) {
                        this.viewport.x = x;
                        this.viewport.y = y;
                    };
                    Clarity.prototype.keydown = function(e) {
                        var _this = this;
                        switch (e.keyCode) {
                            case 37:
                                _this.key.left = true;
                                break;
                            case 38:
                                _this.key.up = true;
                                break;
                            case 39:
                                _this.key.right = true;
                                break;
                        }
                    };
                    Clarity.prototype.keyup = function(e) {
                        var _this = this;
                        switch (e.keyCode) {
                            case 37:
                                _this.key.left = false;
                                break;
                            case 38:
                                _this.key.up = false;
                                break;
                            case 39:
                                _this.key.right = false;
                                break;
                        }
                    };
                    Clarity.prototype.load_map = function(map) {
                        if (typeof map === 'undefined' || typeof map.data === 'undefined' || typeof map.keys === 'undefined') {
                            this.error('Error: Invalid map data!');
                            return false;
                        }
                        this.current_map = map;
                        this.current_map.background = map.background || '#333';
                        this.current_map.gravity = map.gravity || {
                            x: 0,
                            y: 0.3
                        };
                        this.tile_size = map.tile_size || 16;
                        var _this = this;
                        this.current_map.width = 0;
                        this.current_map.height = 0;
                        map.keys.forEach(function(key) {
                            map.data.forEach(function(row, y) {
                                _this.current_map.height = Math.max(_this.current_map.height, y);
                                row.forEach(function(tile, x) {
                                    _this.current_map.width = Math.max(_this.current_map.width, x);
                                    if (tile == key.id)
                                        _this.current_map.data[y][x] = key;
                                });
                            });
                        });
                        this.current_map.width_p = this.current_map.width * this.tile_size;
                        this.current_map.height_p = this.current_map.height * this.tile_size;
                        this.player.loc.x = map.player.x * this.tile_size || 0;
                        this.player.loc.y = map.player.y * this.tile_size || 0;
                        this.player.colour = map.player.colour || '#000';
                        this.key.left = false;
                        this.key.up = false;
                        this.key.right = false;
                        this.camera = {
                            x: 0,
                            y: 0
                        };
                        this.player.vel = {
                            x: 0,
                            y: 0
                        };
                        this.log('Successfully loaded map data.');
                        return true;
                    };
                    Clarity.prototype.get_tile = function(x, y) {
                        return (this.current_map.data[y] && this.current_map.data[y][x]) ? this.current_map.data[y][x] : 0;
                    };
                    Clarity.prototype.draw_tile = function(x, y, tile, context) {
                        if (!tile || !tile.colour) return;
                        context.fillStyle = tile.colour;
                        context.fillRect(
                            x,
                            y,
                            this.tile_size,
                            this.tile_size);
                    };
                    Clarity.prototype.draw_map = function(context, fore) {
                        for (var y = 0; y < this.current_map.data.length; y++) {
                            for (var x = 0; x < this.current_map.data[y].length; x++) {
                                if ((!fore && !this.current_map.data[y][x].fore) || (fore && this.current_map.data[y][x].fore)) {
                                    var t_x = (x * this.tile_size) - this.camera.x;
                                    var t_y = (y * this.tile_size) - this.camera.y;
                                    if (t_x < -this.tile_size || t_y < -this.tile_size || t_x > this.viewport.x || t_y > this.viewport.y) continue;
                                    this.draw_tile(
                                        t_x,
                                        t_y,
                                        this.current_map.data[y][x],
                                        context);
                                }
                            }
                        }
                        if (!fore) this.draw_map(context, true);
                    };
                    Clarity.prototype.move_player = function() {
                        var tX = this.player.loc.x + this.player.vel.x;
                        var tY = this.player.loc.y + this.player.vel.y;
                        var offset = Math.round((this.tile_size / 2) - 1);
                        var tile = this.get_tile(
                            Math.round(this.player.loc.x / this.tile_size),
                            Math.round(this.player.loc.y / this.tile_size));
                        if (tile.gravity) {
                            this.player.vel.x += tile.gravity.x;
                            this.player.vel.y += tile.gravity.y;
                        } else {
                            this.player.vel.x += this.current_map.gravity.x;
                            this.player.vel.y += this.current_map.gravity.y;
                        }
                        if (tile.friction) {
                            this.player.vel.x *= tile.friction.x;
                            this.player.vel.y *= tile.friction.y;
                        }
                        var t_y_up = Math.floor(tY / this.tile_size);
                        var t_y_down = Math.ceil(tY / this.tile_size);
                        var y_near1 = Math.round((this.player.loc.y - offset) / this.tile_size);
                        var y_near2 = Math.round((this.player.loc.y + offset) / this.tile_size);
                        var t_x_left = Math.floor(tX / this.tile_size);
                        var t_x_right = Math.ceil(tX / this.tile_size);
                        var x_near1 = Math.round((this.player.loc.x - offset) / this.tile_size);
                        var x_near2 = Math.round((this.player.loc.x + offset) / this.tile_size);
                        var top1 = this.get_tile(x_near1, t_y_up);
                        var top2 = this.get_tile(x_near2, t_y_up);
                        var bottom1 = this.get_tile(x_near1, t_y_down);
                        var bottom2 = this.get_tile(x_near2, t_y_down);
                        var left1 = this.get_tile(t_x_left, y_near1);
                        var left2 = this.get_tile(t_x_left, y_near2);
                        var right1 = this.get_tile(t_x_right, y_near1);
                        var right2 = this.get_tile(t_x_right, y_near2);
                        if (tile.jump && this.jump_switch > 15) {
                            this.player.can_jump = true;
                            this.jump_switch = 0;
                        } else this.jump_switch++;
                        this.player.vel.x = Math.min(Math.max(this.player.vel.x, -this.current_map.vel_limit.x), this.current_map.vel_limit.x);
                        this.player.vel.y = Math.min(Math.max(this.player.vel.y, -this.current_map.vel_limit.y), this.current_map.vel_limit.y);
                        this.player.loc.x += this.player.vel.x;
                        this.player.loc.y += this.player.vel.y;
                        this.player.vel.x *= .9;
                        if (left1.solid || left2.solid || right1.solid || right2.solid) {
                            /* fix overlap */
                            while (this.get_tile(Math.floor(this.player.loc.x / this.tile_size), y_near1).solid || this.get_tile(Math.floor(this.player.loc.x / this.tile_size), y_near2).solid)
                                this.player.loc.x += 0.1;
                            while (this.get_tile(Math.ceil(this.player.loc.x / this.tile_size), y_near1).solid || this.get_tile(Math.ceil(this.player.loc.x / this.tile_size), y_near2).solid)
                                this.player.loc.x -= 0.1;
                            /* tile bounce */
                            var bounce = 0;
                            if (left1.solid && left1.bounce > bounce) bounce = left1.bounce;
                            if (left2.solid && left2.bounce > bounce) bounce = left2.bounce;
                            if (right1.solid && right1.bounce > bounce) bounce = right1.bounce;
                            if (right2.solid && right2.bounce > bounce) bounce = right2.bounce;
                            this.player.vel.x *= -bounce || 0;
                        }
                        if (top1.solid || top2.solid || bottom1.solid || bottom2.solid) {
                            /* fix overlap */
                            while (this.get_tile(x_near1, Math.floor(this.player.loc.y / this.tile_size)).solid || this.get_tile(x_near2, Math.floor(this.player.loc.y / this.tile_size)).solid)
                                this.player.loc.y += 0.1;
                            while (this.get_tile(x_near1, Math.ceil(this.player.loc.y / this.tile_size)).solid || this.get_tile(x_near2, Math.ceil(this.player.loc.y / this.tile_size)).solid)
                                this.player.loc.y -= 0.1;
                            /* tile bounce */
                            var bounce = 0;
                            if (top1.solid && top1.bounce > bounce) bounce = top1.bounce;
                            if (top2.solid && top2.bounce > bounce) bounce = top2.bounce;
                            if (bottom1.solid && bottom1.bounce > bounce) bounce = bottom1.bounce;
                            if (bottom2.solid && bottom2.bounce > bounce) bounce = bottom2.bounce;
                            this.player.vel.y *= -bounce || 0;
                            if ((bottom1.solid || bottom2.solid) && !tile.jump) {
                                this.player.on_floor = true;
                                this.player.can_jump = true;
                            }
                        }
                        // adjust camera
                        var c_x = Math.round(this.player.loc.x - this.viewport.x / 2);
                        var c_y = Math.round(this.player.loc.y - this.viewport.y / 2);
                        var x_dif = Math.abs(c_x - this.camera.x);
                        var y_dif = Math.abs(c_y - this.camera.y);
                        if (x_dif > 5) {
                            var mag = Math.round(Math.max(1, x_dif * 0.1));
                            if (c_x != this.camera.x) {
                                this.camera.x += c_x > this.camera.x ? mag : -mag;
                                if (this.limit_viewport) {
                                    this.camera.x =
                                        Math.min(
                                        this.current_map.width_p - this.viewport.x + this.tile_size,
                                        this.camera.x);
                                    this.camera.x =
                                        Math.max(
                                        0,
                                        this.camera.x);
                                }
                            }
                        }
                        if (y_dif > 5) {
                            var mag = Math.round(Math.max(1, y_dif * 0.1));
                            if (c_y != this.camera.y) {
                                this.camera.y += c_y > this.camera.y ? mag : -mag;
                                if (this.limit_viewport) {
                                    this.camera.y =
                                        Math.min(
                                        this.current_map.height_p - this.viewport.y + this.tile_size,
                                        this.camera.y);
                                    this.camera.y =
                                        Math.max(
                                        0,
                                        this.camera.y);
                                }
                            }
                        }
                        if (this.last_tile != tile.id && tile.script) {
                            eval(this.current_map.scripts[tile.script]);
                        }
                        this.last_tile = tile.id;
                    };
                    Clarity.prototype.update_player = function() {
                        if (this.key.left) {
                            if (this.player.vel.x > -this.current_map.vel_limit.x)
                                this.player.vel.x -= this.current_map.movement_speed.left;
                        }
                        if (this.key.up) {
                            if (this.player.can_jump && this.player.vel.y > -this.current_map.vel_limit.y) {
                                this.player.vel.y -= this.current_map.movement_speed.jump;
                                this.player.can_jump = false;
                            }
                        }
                        if (this.key.right) {
                            if (this.player.vel.x < this.current_map.vel_limit.x)
                                this.player.vel.x += this.current_map.movement_speed.left;
                        }
                        this.move_player();
                    };
                    Clarity.prototype.draw_player = function(context) {
                        context.fillStyle = this.player.colour;
                        context.beginPath();
                        context.arc(
                            this.player.loc.x + this.tile_size / 2 - this.camera.x,
                            this.player.loc.y + this.tile_size / 2 - this.camera.y,
                            this.tile_size / 2 - 1,
                            0,
                            Math.PI * 2);
                        context.fill();
                    };
                    Clarity.prototype.update = function() {
                        this.update_player();
                    };
                    Clarity.prototype.draw = function(context) {
                        this.draw_map(context, false);
                        this.draw_player(context);
                    };
                    /* Setup of the engine */
                    window.requestAnimFrame =
                        window.requestAnimationFrame ||
                        window.webkitRequestAnimationFrame ||
                        window.mozRequestAnimationFrame ||
                        window.oRequestAnimationFrame ||
                        window.msRequestAnimationFrame || function(callback) {
                        return window.setTimeout(callback, 1000 / 60);
                    };
                    var canvas = document.getElementById('canvas'),
                        ctx = canvas.getContext('2d');
                    canvas.width = 400;
                    canvas.height = 400;
                    var game = new Clarity();
                    game.set_viewport(canvas.width, canvas.height);
                    game.load_map(map);
                    /* Limit the viewport to the confines of the map */
                    game.limit_viewport = true;
                    var Loop = function() {
                        ctx.fillStyle = '#333';
                        ctx.fillRect(0, 0, canvas.width, canvas.height);
                        game.update();
                        game.draw(ctx);
                        window.requestAnimFrame(Loop);
                    };
                    Loop();
                }
                var empty = [];
                var i = 0;
                var greeting_results = "";
                var found = false;
                var greetingWords = ["hello", "hi", "good morning", "good evening", "good night"];
                var fivequestions = [];
                var result = [];
                wow();
                function greeting(wordlist, main, resultlist, different) {
                    empty = [];
                    i = 0;
                    greeting_results = main.join(" ");
                    while (i <= greeting_results.length) {
                        if (greeting_results.indexOf(wordlist[i]) > -1) {
                            result = [wordlist[i] + " to you also!", "I'm good!", "I dont know how", "Im box, your personal assistant", "I don't know who they are", "I dont know your name, but I know your my friend :)", "I dont know who", "use /time to find the time", "Bored? do /game to play our game", "Did I hear the word game? I love games! do /game to play our featured game", "I don't know when"]
                             if ((greeting_results[greeting_results.indexOf(wordlist[i])-1] == " "  ||greeting_results.indexOf(wordlist[i])-1 < 0) && (greeting_results[greeting_results.indexOf(wordlist[i])+wordlist[i].length] == " " || greeting_results.indexOf((wordlist[i])+wordlist[i].length) < 0)){
                            
                                if (different == 1) {
                                    window.alert(result[resultlist + i]);
                                    document.getElementById('response').innerHTML = "";
                                    document.getElementById('response').innerHTML = result[resultlist + i];
                                    responsiveVoice.speak(result[resultlist + i]);
                                } else {
                                    window.alert(result[resultlist]);
                                    document.getElementById('response').innerHTML = "";
                                    document.getElementById('response').innerHTML = result[resultlist];
                                    responsiveVoice.speak(result[resultlist]);
                                }
                                empty.push(main[i]);
                                found = true;
                                break;
                            }
                        }
                        i = i + 1;
                    }
                }
                var v = "";
                var str = document.getElementById('uq').value;
                str = str.toLowerCase();
                var charactder = "";
                var j = 0;
                var calc = "";
                var userQ = [];
                var countwords = 0;
                var n = str.length;
                var z = "";
                var character = "";
                while (j <= n) {
                    if (str.charAt(j) == " " || n == j || str.charAt(j) == "/" || str.charAt(j) == "*" || str.charAt(j) == "-" || str.charAt(j) == "+") {
                        if (countwords === "") {
                            z = z + "First word/ " + charactder;
                            userQ.push(charactder);
                            charactder = '';
                            countwords++;
                        } else {
                            z = z + " // " + charactder;
                            if (str.charAt(j) == "/" || str.charAt(j) == "*" || str.charAt(j) == "-" || str.charAt(j) == "+") {
                                userQ.push(charactder);
                                charactder = str.charAt(j);
                                userQ.push(charactder);
                                countwords++;
                            } else {
                                userQ.push(charactder);
                            }
                            charactder = '';
                            countwords++;
                        }
                    } else {
                        charactder = charactder + str.charAt(j);
                    }
                    j++;
                }
                if (userQ.indexOf("/") != -1 || userQ.indexOf("*") != -1 || userQ.indexOf("-") != -1 || userQ.indexOf("+") != -1) {
                    calc = eval(str);
                    window.alert(calc);
                }
                // listto check, UserQ, item for response, 1 = move, 0 = individual/same.
                var listdata = [];
                var ansdata = [];
                if (document.getElementById('uq').value == "open the sidebar") {
                  document.getElementById("mySidenav").style.width = "250px";
                } 
                else if (localStorage.ansdata) {
                    window.alert("answer AI loaded!");
                    var test2 = localStorage.getItem("listdata");
                    listdata = JSON.parse(test2);
                    test2 = localStorage.getItem("ansdata");
                    ansdata = JSON.parse(test2);
                } else {
                    window.alert("No answer AI in local storage. creating one..");
                    localStorage.setItem("listdata", JSON.stringify(listdata));
                    localStorage.setItem("ansdata", JSON.stringify(ansdata));
                    var test2 = localStorage.getItem("listdata");
                    listdata = JSON.parse(test2);
                    test2 = localStorage.getItem("ansdata");
                    ansdata = JSON.parse(test2); //var test is now re-loaded!
                }
                var zeta = userQ.join(" ");
                var reedy;
                if (zeta == ".clr") {
                    if (listdata.length != 0) {
                        reedy = prompt("are you sure? the things you going to delete are : " + listdata[listdata.length - 1] + " as the keyterm and " + ansdata[ansdata.length - 1] + " as the answer. Say yes or no ")
                        if (reedy = "yes") {
                            ansdata.pop();
                            listdata.pop();
                            localStorage.setItem("listdata", JSON.stringify(listdata));
                            localStorage.setItem("ansdata", JSON.stringify(ansdata));
                            return;
                        } else {
                            window.alert("deletion canceled");
                            return;
                        }
                    } else {
                        window.alert("error: empty");
                        localStorage.clear();
                        return;
                    }
                }
                if (zeta == ".download") {
                    var textToSave = listdata.concat(ansdata);
                    var hiddenElement = document.createElement('a');
                    hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
                    hiddenElement.target = '_blank';
                    hiddenElement.download = 'localStorage.txt';
                    hiddenElement.click();
                    return;
                }
                
                if (zeta == ".replace" && keytermm !== "asd"){
                    var replaceLocal = prompt("are you sure you want to replace localstorage?");
                    if (replaceLocal == "yes"){
                        localStorage.clear();
                        ansdata = answerd;
                        listdata = keytermm;
                        localStorage.setItem("listdata", JSON.stringify(listdata));
                        localStorage.setItem("ansdata", JSON.stringify(ansdata));
                        return;
                    }else{
                        window.alert("canceled");
                        return;
                    }
                }
                
                if (zeta == ".add" && keytermm !== "asd"){
                    var replaceLocal = prompt("are you sure you want to add localstorage?");
                    if (replaceLocal == "yes"){
                        localStorage.clear();
                        ansdata = ansdata.concat(answerd);
                        listdata = listdata.concat(keytermm);
                        localStorage.setItem("listdata", JSON.stringify(listdata));
                        localStorage.setItem("ansdata", JSON.stringify(ansdata));
                        return;
                    }else{
                        window.alert("canceled");
                        return;
                    }
                }
                
                
                
                greeting(greetingWords, userQ, 0, 0);
                if (found == false) {
                    i = 0;
                    while (i < listdata.length) {
                        if (zeta.indexOf(listdata[i]) !== -1) {
                            window.alert(ansdata[i]);
                            responsiveVoice.speak(ansdata[i]);
                            found = true;
                            break;
                        }
                        i++;
                    }
                }
                if (found == false) {
                    var ask = prompt("Please enter what i was supposed to say, or you can leave it blank");
                    if (ask !== null && ask != "") {
                        var keywerd = prompt("Please key words");
                        keywerd = keywerd.toLowerCase();
                        ask = ask.toLowerCase();
                        ansdata.push(ask);
                        listdata.push(keywerd);
                        localStorage.setItem("listdata", JSON.stringify(listdata));
                        localStorage.setItem("ansdata", JSON.stringify(ansdata));
                    } else {
                        window.alert("its ok if youre shy :)");
                    }
                }
                audio.pause();
                audio.play();
                //beta-test
                //  not needed anymore :D  window.alert(userQ[0] + " is the first word and " + userQ[userQ.length - 1] + " is the last word");
                if (uq.value === "Hello") {
                    window.alert('Hello, nice to meet you');
                }
                if (str === "Bye" || uq.value === "bye") {
                    window.alert('Bye, have a good day.');
                }
            }
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
