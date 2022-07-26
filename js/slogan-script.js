//Array to get the blessing username
var qsParm = new Array();
            
//Slogans Array
const slogans = [
    "You are always true to yourself and thereby enable others to have trust in you.",
    "You succeed in life because you play by the rules of peace, love and harmony.",
    "Your good wishes and pure feelings reach the minds of others.",
    "Having found the inner joy you become independent of all external supports and enjoy free.",
    "Your response to the  call of the time is a life filled with dignity and truth.",
    "You float on the wings of God's peace and purity, sprinkling serenity and bliss as blessings to the world.",
    "You are an enthusiastic soul. This flow of positive energy creates warmth, which opens a door to God for many souls.",
    "You are always filled with pure feeling for all. In your company, everyone realizes their true potential.",
    "Your high sense of self-respect enables you to remain positive in all situations.",
    "You will travel far in life, because you travel light, free of the baggage of the past.",
    "You change your world beautiful and serene with positive and pure.",
    "You experience the depth of God, the Ocean of Love, by having love for solitude.",
    "As you remain in God's company, you sparkle with the beauty of purity and your loving nature touches hearts.",
    "As a world server with a pure vision of brotherhood, you hold all souls in your heart with a true spirit of respect.",
    "With contentment and happiness you live a life which inspires others.",
    "You have made a conscious change to be more positive and appreciative of the treasures of life.",
    "Your simplicity and royalty make it easy for you to harmonise with all souls. You show many others the way to God's love.",
    "In the light of God's love, you develop deep contentment. In this love, friendships flourish and pure thoughts as natural.",
    "You move through life with lightness, touching the hearts of others.",
    "Everything is very easy for you because you have the power of purity in your heart and deep love for every being.",
    "You are powerful and healthy because you know you are a spiritual being of energy.",
    "You stay cheerful and forgive others for their weaknesses by seeing them as uniquely talented individuals.",
    "By walking in the company of God, you become a friend to humanity.",
    "By letting go of all heaviness, you experience the freedom and lightness of an angel.",
    "In the mids of uncertainty, the determination in your thoughts becomes a guiding light of success in front of you and others.",
    "You succeed in life because you play by the rules of peace, love and harmony.",
    "Your good wishes and pure feelings reach the minds of others.",
    "You are a soul who takes great delight in discovering the wonder of every moment.",
    "With an attitude of humility, you stay open to seeing beyond all limits.",
    "Your life is simple yet you are clear about the things you value.",
    "Your inner state of happiness enables you to enjoy the beauty of everything.",
    "You are courageous. You stay light and cheerful by passing through everything as a game.",
    "You have a true connection with the divine that inspires others.",
    "You always keep self-respect in your awareness and hold others in high honour.",
    "By being quiet and serene inside, you enjoy the clarity in situations.",
    "Your every thought is a treasure from which you draw power.",
    "Your happiness and smile light up the divine spark in others.",
    "You are always stable in your self-esteem. Your actions reflect the beauty of your virtues.",
    "You speak from the heart the language of trust, faith, love and respect.",
    "With vibrations of peace and happiness, you spread serenity and comfort around.",
    "Each day is new and precious. You realize this and welcome each moment with wondrous joy.",
    "You recognize that each human being is unique and appreciate the beauty they add to life like flowers in a garden.",
    "You radiate with the realization that peaceful thoughts create a peaceful world.",
    "You let your quiet inner noice of intuition guide you in the right direction.",
    "You realize there's benifit in every moment. You always reflect your virtues in each situation and remain carefree.",
    "You experience happiness through your own progress in each situation.",
    "You shine the light of courage. You have the courage to be honest with yourself and keep your intetions pure.",
    "You know that every moment of this life is valuable. You continue to grow worthy in each second.",
    "You are aware of where your attention goes and energies to grow virtues and strengths.",
    "You are a selfless sever who always remains content and shares happiness with others.",
    "Sparkle on your face reflects your orignal virtues of purity, peace and happiness.",
    "You shine the light of faith. You have unshakeable faith in yourself, the power of goodness and in life. Your faith makes the impossible possible.",
    "You create happiness by offering something to everyone you meet- a smile, a nice compliment, co-operation with you time and energy."



]
		
i = 0;
var speed = 100;
//Add slogan using random index of slogans array
var randomNumber = Math.floor(Math.random() * (slogans.length));
var txt = slogans[randomNumber];

$("#download").hide(); //don't show download button at the start

//function to update user name
function qs() {
    var query = window.location.search.substring(1);
    var parms = query.split('?');
    for (var i=0; i < parms.length; i++) {
        var pos = parms[i].indexOf('=');
        if (pos > 0) {
            var key = parms[i].substring(0, pos);
            var val = parms[i].substring(pos + 1);
            qsParm[key] = val;
            val = val.replace(/[+]/g," "); //replace + sign with spaces
            //set the blessing username
            $("#username").text ('Dear ' + val);//qsParm[key]

            }
    }
                
}

//function to slogan type animation
function typeslogan() {
            	
    //$("#sloganpara").val("Pradip"); //need to change 
                
    if (i < txt.length) {
        $("#sloganpara").text($("#sloganpara").text() + txt.charAt(i));
        i++;
        setTimeout(typeslogan, speed);
    }
         
}   


qs();  //update username
typeslogan(); //type slogan


//$("#download").show(); //show the download button

        
 
        
   


