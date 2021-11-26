function getData() {
    document.getElementById("feeling").innerHTML += localStorage.getItem("selectedFeeling");
    let selectedTopic = localStorage.getItem("selectedTopic")
    let selectedOption = localStorage.getItem("selectedOption")
    if (selectedTopic === "friends") {
        create_friendship_statement();
    } else if (selectedTopic === "boss") {
        create_boss_statement();
    } else if (selectedTopic === "mailman") {
        create_mailman_statement();
    } else if (selectedTopic === "partner") {
        create_partner_statement();
    } else if (selectedTopic === "family") {
        create_family_statement();
    } else if (selectedTopic === "teacher") {
        create_teacher_statement();
    }
    function create_boss_statement(){
        if (selectedOption === "overtime") {
            document.getElementById("explanation").innerHTML += "Sie mir zu viele Überstunden geben."
            document.getElementById("question").innerHTML += "Können Sie zukünftig auf meine Zeiten achten?"
        } else if (selectedOption === "appreciation") {
            document.getElementById("explanation").innerHTML += "meine Arbeit nicht wertgeschätzt wird."
            document.getElementById("question").innerHTML += "Können Sie mir öfters Feedback geben?"
        } else if (selectedOption === "privacy") {
            document.getElementById("explanation").innerHTML += "Sie mein Privatleben nicht respektieren."
            document.getElementById("question").innerHTML += "Können Sie zukünftig auf mein Privatleben achten?"
        }
    }
    function create_mailman_statement() {
        if (selectedOption === "ringing") {
            document.getElementById("explanation").innerHTML += "Sie nicht bei mir geklingelt haben."
            document.getElementById("question").innerHTML += "Können Sie bitte das nächste Mal bei mir klingeln?"
        }
        if (selectedOption === "yelling") {
            document.getElementById("explanation").innerHTML += "Sie mich angeschrien haben."
            document.getElementById("question").innerHTML += "Können Sie bitte freundlicher sein?"
        }
        if (selectedOption === "neighbour") {
            document.getElementById("explanation").innerHTML += "Sie mein Paket nicht bei meinem Nachbarn abgegeben haben."
            document.getElementById("question").innerHTML += "Können Sie mein Paket bitte das nächste Mal bei meinem Nachbarn abgeben?"
        }
    }
    function create_partner_statement() {
        if (selectedOption === "jealousy") {
            document.getElementById("explanation").innerHTML += "du versucht hast mich eifersüchtig zu machen."
            document.getElementById("question").innerHTML += "Kannst du das bitte nicht mehr tun?"
        }
        if (selectedOption === "lied") {
            document.getElementById("explanation").innerHTML += "du mich angelogen hast."
            document.getElementById("question").innerHTML += "Kannst du das nächste Mal bitte ehrlich sein?"
        }
        if (selectedOption === "birthday") {
            document.getElementById("explanation").innerHTML += "du meinen Geburtstag vergessen hast."
            document.getElementById("question").innerHTML += "Kannst du dir meinen Geburtstag in deinen Kalender schreiben?"
        }
    }
    function create_family_statement() {
        if (selectedOption === "clothes") {
            document.getElementById("explanation").innerHTML += "du mein Oberteil geklaut hast."
            document.getElementById("question").innerHTML += "Kannst du mich bitte das nächste Mal vorher fragen?"
        }
        if (selectedOption === "nagging") {
            document.getElementById("explanation").innerHTML += "du mich angemeckert/angeschrien hast."
            document.getElementById("question").innerHTML += "Kannst du bitte netter zu mir sein?"
        }
        if (selectedOption === "picture") {
            document.getElementById("explanation").innerHTML += "du ein peinliches Bild von mir gezeigt hast."
            document.getElementById("question").innerHTML += "Kannst du bitte keine Bilder mehr von mir zeigen?"
        }
    }
    function create_teacher_statement() {
        if (selectedOption === "grades") {
            document.getElementById("explanation").innerHTML += "Sie mir eine schlechte Note gegeben haben."
            document.getElementById("question").innerHTML += "Können wir nochmal über meine Note sprechen?"
        }
        if (selectedOption === "questioning") {
            document.getElementById("explanation").innerHTML += "Sie mich drangenommen haben."
            document.getElementById("question").innerHTML += "Können Sie die Frage noch einmal genauer erklären?"
        }
        if (selectedOption === "time") {
            document.getElementById("explanation").innerHTML += "Sie die Zeit überzogen haben."
            document.getElementById("question").innerHTML += "Können Sie sich bitte nächstes Mal an die Zeiten halten?"
        }
    }
    function create_friendship_statement() {
        if (selectedOption === "gossip") {
            document.getElementById("explanation").innerHTML += "du über mich gelästert hast."
            document.getElementById("question").innerHTML += "Kannst du das bitte nicht mehr tun?"
        }
        if (selectedOption === "contact") {
            document.getElementById("explanation").innerHTML += "du dich nicht bei mir gemeldet hast."
            document.getElementById("question").innerHTML += "Kannst du dich bitte öfters bei mir melden?"
        }
        if (selectedOption === "time") {
            document.getElementById("explanation").innerHTML += "du mehr Zeit mit anderen verbringst als mit mir."
            document.getElementById("question").innerHTML += "Wie können wir mehr Zeit miteinander verbringen?"
        }
    }
}

const imagesArray = ["cat.jpg", "Cookie.jpg", "Dinosauriern.jpg", "Faultier.jpg", "Giraffe.jpg"];

function displayImage() {
    let number = Math.floor(Math.random() * imagesArray.length);
    document.getElementById("picture").src = "images/happy_images/" + imagesArray[number];
}

function generateFeeling(elementId) {
    let feeling = document.getElementById(elementId).innerText;
    localStorage.setItem('selectedFeeling', feeling)
}

function loadTopic() {
    let topic = localStorage.getItem("selectedTopic");
    window.location.href = 'topics/' + topic + '.html';
}

function storeTopic(topic) {
    localStorage.setItem('selectedTopic', topic)
}

function storeOption(option) {
    localStorage.setItem('selectedOption', option)
}
