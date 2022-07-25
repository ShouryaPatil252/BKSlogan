             //get the blessing username
            var qsParm = new Array();
            function qs() {
                var query = window.location.search.substring(1);
                var parms = query.split('?');
                for (var i=0; i < parms.length; i++) {
                    var pos = parms[i].indexOf('=');
                    if (pos > 0) {
                        var key = parms[i].substring(0, pos);
                        var val = parms[i].substring(pos + 1);
                        qsParm[key] = val;
                         //set the blessing username
            	        $("#username").text ('Dear ' + qsParm[key]);

                    }
                }
								//Add slogan
				$("#sloganpara").text (slogans[0]); //need to change 

            }
            
			
			

			const slogans = [
				"You are always true to yourself and thereby enable others to have trust in you.",
				"slogan 2",
				"slogan 3",
			];

qs();                 

var quotes = [
	"You suceed in life because you play by the rules of peace,love and harmony.",
	"Your good wishes and pure feelings reach the minds of others.",
	"Having foung the inner joy you become independent of all external supports and enjoy free.",
	"Your response to call of the time is a life filled with dignity and truth.",
]

var randomNumber = Math.floor(Math.random()*4);
