// noinspection HtmlRequiredAltAttribute

console.log("Navigator platform is", navigator.platform)
console.log("User agent is", navigator.userAgent)

function determineAndLogBrowser() {
    // NOTE (mristin):
    // See https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browsers

    const browser = (function () {
        const test = function (regexp) {
            return regexp.test(window.navigator.userAgent)
        }
        switch (true) {
            case test(/edg/i):
                return "Microsoft Edge";
            case test(/trident/i):
                return "Microsoft Internet Explorer";
            case test(/firefox|fxios/i):
                return "Mozilla Firefox";
            case test(/opr\//i):
                return "Opera";
            case test(/ucbrowser/i):
                return "UC Browser";
            case test(/samsungbrowser/i):
                return "Samsung Browser";
            case test(/chrome|chromium|crios/i):
                return "Google Chrome";
            case test(/safari/i):
                return "Apple Safari";
            default:
                return "Other";
        }
    })();

    console.log("Detected browser is", browser);
}

determineAndLogBrowser()

/**
 * @typedef {Object} Card
 * @property {string} question to be asked
 * @property {Array<string>} answers to be expected
 */

/**
 * @typedef {Object} Level
 * @property {string} name of the level
 * @property {Array<Card>} vocabulary to be learnt
 */

/**
 * @type {Array<Level>}
 */
const levels = [
    {
        name: "Animals 1",
        vocabulary: [
            {question: "🐇", answers: ["rabbit"]},
            {question: "🦊", answers: ["fox"]},
            {question: "🐺", answers: ["wolf"]},
            {question: "🐍", answers: ["snake"]},
            {question: "🐘", answers: ["elephant"]},
            {question: "🐲", answers: ["dragon"]},
            {question: "🐻", answers: ["bear"]},
            {question: "🐈", answers: ["cat"]},
            {question: "🐕", answers: ["dog"]},
            {question: "🐅", answers: ["tiger"]},
            {question: "🐄", answers: ["cow"]},
            {question: "🦁", answers: ["lion"]},
            {question: "🐖", answers: ["pig"]},
            {question: "🐑", answers: ["sheep"]},
            {question: "🐐", answers: ["goat"]},
            {question: "🦭", answers: ["seal"]},
            {question: "🐋", answers: ["whale"]},
            {question: "🐬", answers: ["dolphin"]},
            {question: "🕷️", answers: ["spider"]},
            {question: "🐜", answers: ["ant"]},
            {question: "🐝", answers: ["bee", "be", "b"]},
            {question: "🐌", answers: ["snail"]},
            {question: "🦒", answers: ["giraffe"]},
            {question: "🐒", answers: ["monkey"]},
            {question: "🐦", answers: ["bird"]},
            {question: "🦅", answers: ["eagle"]},
            {question: "🐟", answers: ["fish"]}
        ]
    },
    {
        name: "Animals 2",
        vocabulary: [
            {question: "🦈", answers: ["shark"]},
            {question: "🐿️", answers: ["squirrel"]},
            {question: "🦌", answers: ["deer"]},
            {question: "🐢", answers: ["turtle"]},
            {question: "🦔", answers: ["hedgehog"]},
            {question: "🐆", answers: ["leopard"]},
            {question: "🦕", answers: ["dinosaur"]},
            {question: "🦖", answers: ["t rex", "t-rex"]},
            {question: "🦓", answers: ["zebra"]},
            {question: "🐎", answers: ["horse"]},
            {question: "🦛", answers: ["hippopotamus"]},
            {question: "🦏", answers: ["rhinoceros"]},
            {question: "🦬", answers: ["bison"]},
            {question: "🐂", answers: ["bull"]},
            {question: "🦘", answers: ["kangaroo"]},
            {question: "🐸", answers: ["frog"]},
            {question: "🦡", answers: ["badger"]},
            {question: "🦆", answers: ["duck"]},
            {question: "🪿", answers: ["goose"]},
            {question: "🐓", answers: ["cock"]},
            {question: "🐔", answers: ["chicken"]},
            {question: "🦢", answers: ["swan"]},
            {question: "🐁", answers: ["mouse"]},
            {question: "🦀", answers: ["crab"]},
            {question: "🐙", answers: ["octopus"]},
            {question: "🦇", answers: ["bat"]},
            {question: "🦎", answers: ["lizard"]}
        ]
    },
    {
        name: "Animals 3",
        vocabulary: [
            {question: "🐨", answers: ["koala"]},
            {question: "🦍", answers: ["gorilla"]},
            {question: "🦥", answers: ["sloth"]},
            {question: "🐼", answers: ["panda"]},
            {question: "🐪", answers: ["camel"]},
            {question: "🦙", answers: ["llama"]},
            {question: "🦫", answers: ["beaver"]},
            {question: "🦚", answers: ["peacock"]},
            {question: "🦉", answers: ["owl"]},
            {question: "🐊", answers: ["crocodile"]},
            {question: "🦂", answers: ["scorpion"]},
            {question: "🦋", answers: ["butterfly"]},
            {question: "🐛", answers: ["caterpillar"]},
            {question: "🐞", answers: ["ladybug"]},
            {question: "🐧", answers: ["penguin"]},
            {question: "🐹", answers: ["hamster"]},
            {question: "🦦", answers: ["otter"]},
            {question: "🦜", answers: ["parrot"]},
            {question: "🦩", answers: ["flamingo"]},
            {question: "🦣", answers: ["mammoth"]},
            {question: "🕊️", answers: ["pigeon"]},
            {question: "🐗", answers: ["wild boar"]},
            {question: "🦄", answers: ["unicorn"]},
            {question: "🫏", answers: ["donkey"]},
            {question: "🫎", answers: ["moose"]},
            {question: "🐤", answers: ["chick", "check", "cheek"]},
            {question: "🪼", answers: ["jellyfish"]},
            {question: "🐚", answers: ["shell"]},
            {question: "🪱", answers: ["worm"]},
            {
                question: "<img src='additional-emojis/orca.png'>",
                answers: ["orca killer whale"],
            },
            {question: "🥚", answers: ["egg"]}
        ]
    },
    {
        name: "City",
        vocabulary: [
            {
                question: "<img src='additional-emojis/city.png'>",
                answers: ["city"]
            },
            {question: "🏢", answers: ["building"]},
            {question: "🏠", answers: ["house"]},
            {
                question: "🌳<img src='additional-emojis/bench.png'>🛝🌳",
                answers: ["park"]
            },
            {
                question: "<img src='additional-emojis/bench.png'>",
                answers: ["bench"]
            },
            {
                question: (
                    "🛝" +
                    "<img src='additional-emojis/swing.png'>" +
                    "<img src='additional-emojis/sandbox.png'"
                ),
                answers: ["playground"]
            },
            {question: "🛝", answers: ["slide"]},
            {
                question: "<img src='additional-emojis/swing.png'>",
                answers: ["swing"]
            },
            {
                question: "<img src='additional-emojis/sandbox.png'>",
                answers: ["sandbox"]
            },
            {question: "🚗", answers: ["car"]},
            {question: "🚌", answers: ["bus"]},
            {question: "🚆", answers: ["train"]},
            {question: "🚉", answers: ["train station"]},
            {
                question: "<img src='additional-emojis/bench.png'>",
                answers: ["bench"]
            },
            {
                question: "<img src='additional-emojis/road.png'>",
                answers: ["road"]
            },
            {
                question: "<img src='additional-emojis/street.png'>",
                answers: ["street"]
            },
            {
                question: "<img src='additional-emojis/sidewalk.png'>",
                answers: ["sidewalk"]
            },
            {question: "🚦", answers: ["traffic light"]},
            {question: "🛬", answers: ["airplane"]},
            {
                question: "<img src='additional-emojis/airport.png'>",
                answers: ["airport"]
            },
            {
                question: "<img src='additional-emojis/restaurant.png'>",
                answers: ["restaurant"]
            },
            {
                question: "<img src='additional-emojis/shop.png'>",
                answers: ["shop"]
            },
            {
                question: "<img src='additional-emojis/supermarket.png'>",
                answers: ["supermarket"]
            },
            {question: "🏥", answers: ["hospital"]},
            {question: "🚑", answers: ["ambulance"]},
            {question: "🚒", answers: ["fire truck"]},
            {question: "👮", answers: ["policeman"]},
            {question: "🚓", answers: ["police car"]},
            {
                question: "<img src='additional-emojis/police-station.png'>",
                answers: ["police station"]
            },
            {
                question: "<img src='additional-emojis/harbor.png'>",
                answers: ["harbor"]
            },
            {question: "🚢", answers: ["ship"]},
            {question: "🛥️", answers: ["boat"]},
            {question: "🚋", answers: ["tram car"]},
            {
                question: "<img src='additional-emojis/theater.png'>",
                answers: ["theater"]
            },
            {
                question: "<img src='additional-emojis/cinema.png'>",
                answers: ["cinema"]
            },
        ]
    },
    {
        name: "Emotions",
        vocabulary: [
            {question: "😀", answers: ["happy"]},
            {question: "🥱", answers: ["tired"]},
            {question: "😟", answers: ["worried"]},
            {question: "😠", answers: ["angry"]},
            {question: "😊", answers: ["proud"]},
            {question: "🫤", answers: ["bored"]},
            {question: "😃", answers: ["excited"]},
            {question: "😭", answers: ["upset"]},
            {question: "🫣", answers: ["embarrassed"]},
            {question: "😢", answers: ["sad"]},
            {question: "😞", answers: ["insulted"]},
            {question: "🤒", answers: ["sick"]},
            {question: "😋", answers: ["hungry"]},
            {
                question: "<img src='additional-emojis/thirsty.png'>",
                answers: ["thirsty"]
            },
            {
                question: "<img src='additional-emojis/lonely.png'>",
                answers: ["lonely"]
            },
            {question: "😲", answers: ["surprised"]},
            {question: "😌", answers: ["relaxed"]},
            {question: "😨", answers: ["scared"]},
            {question: "🤔", answers: ["pensive"]},
            {question: "😤", answers: ["furious"]},
            {question: "🤕", answers: ["hurt"]},
            {question: "🥶", answers: ["cold"]},
            {question: "🥵", answers: ["hot"]},
            {question: "🤯", answers: ["nervous"]},
            {question: "😍", answers: ["in love"]},
            {question: "🤪", answers: ["silly"]},
            {question: "😒", answers: ["disappointed"]},
        ]
    },
    {
        name: "Vehicles",
        vocabulary: [
            {question: "🚗", answers: ["car"]},
            {question: "🏎️", answers: ["racing car"]},
            {question: "🚲", answers: ["bicycle"]},
            {question: "🏍️", answers: ["motor bike"]},
            {question: "🚋", answers: ["tram car"]},
            {question: "🚂", answers: ["locomotive"]},
            {question: "🚃", answers: ["train carriage"]},
            {
                question: "<img src='additional-emojis/carriage.png'>",
                answers: ["carriage"]
            },
            {question: "🚢", answers: ["ship"]},
            {question: "🛥️", answers: ["boat"]},
            {question: "🚀", answers: ["rocket"]},
            {
                question: "<img src='additional-emojis/space-ship.png'>",
                answers: ["space ship"]
            },
            {
                question: "<img src='additional-emojis/airship.png'>",
                answers: ["airship"]
            },
            {question: "🛹", answers: ["skateboard"]},
            {question: "🛼", answers: ["roller skate"]},
            {question: "⛸", answers: ["ice skate"]},
            {
                question: "<img src='additional-emojis/inline-skate.png'>",
                answers: ["inline skate"]
            },
            {question: "🛴", answers: ["kick scooter"]},
            {question: "🪂", answers: ["parachute"]},
            {question: "🛬", answers: ["airplane"]},
            {question: "🚁", answers: ["helicopter"]},
            {question: "🚚", answers: ["truck"]},
            {
                question: "<img src='additional-emojis/submarine.png'>",
                answers: ["submarine"]
            },
            {question: "🚆", answers: ["train"]},
            {question: "🚌", answers: ["bus"]},
            {
                question: "<img src='additional-emojis/van.png'>",
                answers: ["van"]
            },
            {question: "🎿", answers: ["ski"]},
            {question: "🏂", answers: ["snowboard"]},
            {question: "🛷", answers: ["sledge"]},
        ]
    },
    {
        name: "Colors",
        vocabulary: [
            "black",
            "brown",
            "grey",
            "white",
            "yellow",
            "orange",
            "red",
            "pink",
            "purple",
            "blue",
            "green",
            "dark blue",
            "light blue",
            "turquoise",
            "light green",
            "dark green",
            "dark red",
            "lime",
            "olive",
        ].map(text => {
            const noSpace = text.replace(" ", "");
            return {
                question: `<span  style='color: ${noSpace}; background-color: white;'>⬤</span>`,
                answers: [text]
            }
        })
    },
    {
        name: "Plants",
        vocabulary: [
            {question: "🌳", answers: ["tree"]},
            {question: "🌲", answers: ["fir tree"]},
            {question: "🌴", answers: ["palm tree"]},
            {question: "🌵", answers: ["cactus"]},
            {
                question: "<img src='additional-emojis/grass.png'>",
                answers: ["grass"]
            },
            {
                question: "<img src='additional-emojis/bush.png'>",
                answers: ["bush"]
            },
            {question: "🍁", answers: ["leaf"]},
            {
                question: "<img src='additional-emojis/branch.png'>",
                answers: ["branch"]
            },
            {
                question: "<img src='additional-emojis/stump.png'>",
                answers: ["stump"]
            },
            {
                question: "<img src='additional-emojis/trunk.png'>",
                answers: ["trunk"]
            },
            {
                question: "<img src='additional-emojis/flower.png'>",
                answers: ["flower"]
            },
            {question: "🍄", answers: ["mushroom"]},
            {
                question: "<img src='additional-emojis/root.png'>",
                answers: ["root"]
            },
            {
                question: "<img src='additional-emojis/fruit-on-tree.png'>",
                answers: ["fruit"]
            },
            {question: "🌱", answers: ["seedling"]},
            {
                question: "<img src='additional-emojis/seed.png'>",
                answers: ["seed"]
            },
            {
                question: "<img src='additional-emojis/sprout.png'>",
                answers: ["sprout"]
            },
            {
                question: "<img src='additional-emojis/soil.png'>",
                answers: ["soil"]
            },
            {
                question: "<img src='additional-emojis/fertile-soil.png'>",
                answers: ["fertile"]
            },
            {
                question: "<img src='additional-emojis/rain.png'>",
                answers: ["rain"]
            },
            {question: "☀", answers: ["sun"]},
            {
                question: "<img src='additional-emojis/pinecone.png'>",
                answers: ["pinecone", "pine cone"]
            },
            {
                question: "<img src='additional-emojis/forest.png'>",
                answers: ["forest"]
            },
            {
                question: "<img src='additional-emojis/meadow.png'>",
                answers: ["meadow"]
            },
        ]
    },
    {
        name: "Actions 1",
        vocabulary: [
            {
                question: "<img src='additional-emojis/to-go.png'>",
                answers: ["to go", "go"]
            },
            {
                question: "<img src='additional-emojis/to-eat.png'>",
                answers: ["to eat", "eat"]
            },
            {
                question: "<img src='additional-emojis/to-drink.png'>",
                answers: ["to drink", "drink"]
            },
            {
                question: "<img src='additional-emojis/to-sleep.png'>",
                answers: ["to sleep", "sleep"]
            },
            {
                question: "<img src='additional-emojis/to-run.png'>",
                answers: ["to run", "run"]
            },
            {
                question: "<img src='additional-emojis/to-bring.png'>",
                answers: ["to bring", "bring"]
            },
            {
                question: "<img src='additional-emojis/to-cook.png'>",
                answers: ["to cook", "cook"]
            },
            {
                question: "<img src='additional-emojis/to-clean.png'>",
                answers: ["to clean", "clean"]
            },
            {
                question: "<img src='additional-emojis/to-wash.png'>",
                answers: ["to wash", "wash"]
            },
            {
                question: "<img src='additional-emojis/to-climb.png'>",
                answers: ["to climb", "climb"]
            },
            {
                question: "<img src='additional-emojis/to-draw.png'>",
                answers: ["to draw", "draw"]
            },
            {
                question: "<img src='additional-emojis/to-write.png'>",
                answers: ["to write", "write"]
            },
            {
                question: "<img src='additional-emojis/to-read.png'>",
                answers: ["to read", "read"]
            },
            {
                question: "<img src='additional-emojis/to-play.png'>",
                answers: ["to play", "play"]
            },
            {
                question: "<img src='additional-emojis/to-listen.png'>",
                answers: ["to listen", "listen"]
            },
            {
                question: "<img src='additional-emojis/to-hide.png'>",
                answers: ["to hide", "hide"]
            },
            {
                question: "<img src='additional-emojis/to-see.png'>",
                answers: ["to see", "see"]
            },
            {
                question: "<img src='additional-emojis/to-watch.png'>",
                answers: ["to watch", "watch"]
            },
            {
                question: "<img src='additional-emojis/to-build.png'>",
                answers: ["to build", "build"]
            },
            {
                question: "<img src='additional-emojis/to-think.png'>",
                answers: ["to think", "think"]
            },
            {
                question: "<img src='additional-emojis/to-dream.png'>",
                answers: ["to dream", "dream"]
            },
            {
                question: "<img src='additional-emojis/to-work.png'>",
                answers: ["to work", "work"]
            },
            {
                question: "<img src='additional-emojis/to-yell.png'>",
                answers: ["to yell", "yell"]
            },
        ]
    },
    {
        name: "Actions 2",
        vocabulary: [
            {
                question: "<img src='additional-emojis/to-ride.png'>",
                answers: ["to ride", "ride"]
            },
            {
                question: "<img src='additional-emojis/to-ask.png'>",
                answers: ["to ask", "ask"]
            },
            {
                question: "<img src='additional-emojis/to-answer.png'>",
                answers: ["to answer", "answer"]
            },
            {
                question: "<img src='additional-emojis/to-say.png'>",
                answers: ["to say", "say"]
            },
            {
                question: "<img src='additional-emojis/to-tell.png'>",
                answers: ["to tell", "tell"]
            },
            {
                question: "<img src='additional-emojis/to-search.png'>",
                answers: ["to search", "search"]
            },
            {
                question: "<img src='additional-emojis/to-count.png'>",
                answers: ["to count", "count"]
            },
            {
                question: "<img src='additional-emojis/to-open.png'>",
                answers: ["to open", "open"]
            },
            {
                question: "<img src='additional-emojis/to-close.png'>",
                answers: ["to close", "close"]
            },
            {
                question: "<img src='additional-emojis/to-sit.png'>",
                answers: ["to sit", "sit"]
            },
            {
                question: "<img src='additional-emojis/to-stand.png'>",
                answers: ["to stand", "stand"]
            },
            {
                question: "<img src='additional-emojis/to-lie.png'>",
                answers: ["to lie", "lie"]
            },
            {
                question: "<img src='additional-emojis/to-squat.png'>",
                answers: ["to squat", "squat"]
            },
            {
                question: "<img src='additional-emojis/to-hit.png'>",
                answers: ["to hit", "hit"]
            },
            {
                question: "<img src='additional-emojis/to-throw.png'>",
                answers: ["to throw", "throw"]
            },
            {
                question: "<img src='additional-emojis/to-steal.png'>",
                answers: ["to steal", "steal"]
            },
            {
                question: "<img src='additional-emojis/to-hold.png'>",
                answers: ["to hold", "hold"]
            },
            {
                question: "<img src='additional-emojis/to-pay.png'>",
                answers: ["to pay", "pay"]
            },
            {
                question: "<img src='additional-emojis/to-buy.png'>",
                answers: ["to buy", "buy"]
            },
            {
                question: "<img src='additional-emojis/to-brush.png'>",
                answers: ["to brush", "brush"]
            },
            {
                question: "<img src='additional-emojis/to-remember.png'>",
                answers: ["to remember", "remember"]
            },
            {
                question: "<img src='additional-emojis/to-lead.png'>",
                answers: ["to lead", "lead"]
            },
            {
                question: "<img src='additional-emojis/to-feel.png'>",
                answers: ["to feel", "feel"]
            },
        ]
    },
    {
        name: "Actions 3",
        vocabulary: [
            {
                question: "<img src='additional-emojis/to-help.png'>",
                answers: ["to help", "help"]
            },
            {
                question: "<img src='additional-emojis/to-push.png'>",
                answers: ["to push", "push"]
            },
            {
                question: "<img src='additional-emojis/to-pull.png'>",
                answers: ["to pull", "pull"]
            },
            {
                question: "<img src='additional-emojis/to-teach.png'>",
                answers: ["to teach", "teach"]
            },
            {
                question: "<img src='additional-emojis/to-learn.png'>",
                answers: ["to learn", "learn"]
            },
            {
                question: "<img src='additional-emojis/to-study.png'>",
                answers: ["to study", "study"]
            },
            {
                question: "<img src='additional-emojis/to-live.png'>",
                answers: ["to live", "live"]
            },
            {
                question: "<img src='additional-emojis/to-fly.jpeg'>",
                answers: ["to fly", "fly"]
            },
            {
                question: "<img src='additional-emojis/to-swim.png'>",
                answers: ["to swim", "swim"]
            },
            {
                question: "<img src='additional-emojis/to-fight.png'>",
                answers: ["to fight", "fight"]
            },
            {
                question: "<img src='additional-emojis/to-follow.png'>",
                answers: ["to follow", "follow"]
            },
            {
                question: "<img src='additional-emojis/to-give.png'>",
                answers: ["to give", "give"]
            },
            {
                question: "<img src='additional-emojis/to-stop.png'>",
                answers: ["to stop", "stop"]
            },
            {
                question: "<img src='additional-emojis/to-walk.png'>",
                answers: ["to walk", "walk"]
            },
            {
                question: "<img src='additional-emojis/to-win.png'>",
                answers: ["to win", "win"]
            },
            {
                question: "<img src='additional-emojis/to-love.png'>",
                answers: ["to love", "love"]
            },
            {
                question: "<img src='additional-emojis/to-wait.png'>",
                answers: ["to wait", "wait"]
            },
            {
                question: "<img src='additional-emojis/to-scream.png'>",
                answers: ["to scream", "scream"]
            },
            {
                question: "<img src='additional-emojis/to-cry.png'>",
                answers: ["to cry", "cry"]
            },
            {
                question: "<img src='additional-emojis/to-pee.png'>",
                answers: ["to pee", "pee"]
            },
            {
                question: "<img src='additional-emojis/to-poo.png'>",
                answers: ["to poo", "poo"]
            },
            {
                question: "<img src='additional-emojis/to-fart.png'>",
                answers: ["to fart", "fart"]
            },
            {
                question: "<img src='additional-emojis/to-drive.png'>",
                answers: ["to drive", "drive"]
            },
        ]
    },
    {
        name: "Foods and Drinks 1",
        vocabulary: [
            {
                question: "<img src='additional-emojis/to-eat.png'>",
                answers: ["to eat", "eat"]
            },
            {
                question: "<img src='additional-emojis/to-drink.png'>",
                answers: ["to drink", "drink"]
            },
            {
                question: "<img src='additional-emojis/to-smell.png'>",
                answers: ["to smell", "smell"]
            },
            {
                question: "<img src='additional-emojis/to-taste.png'>",
                answers: ["to taste", "taste"]
            },
            {
                question: "<img src='additional-emojis/chicken-meat.png'>",
                answers: ["chicken"]
            },
            {
                question: "<img src='additional-emojis/cheese.png'>",
                answers: ["cheese"]
            },
            {
                question: "<img src='additional-emojis/meat.png'>",
                answers: ["meat"]
            },
            {question: "🐟", answers: ["fish"]},
            {question: "🍅", answers: ["tomato", "tomatoe"]},
            {question: "🥕", answers: ["carrot"]},
            {question: "🍆", answers: ["eggplant"]},
            {question: "🫛", answers: ["peas"]},
            {
                question: "<img src='additional-emojis/zucchini.png'>",
                answers: ["zucchini"]
            },
            {question: "🫘", answers: ["beans"]},
            {question: "🍇", answers: ["grapes"]},
            {question: "🫐", answers: ["blueberries"]},
            {question: "🍍", answers: ["pineapple"]},
            {question: "🥭", answers: ["mango"]},
            {question: "🌽", answers: ["corn"]},
            {question: "🍿", answers: ["popcorn"]},
            {question: "🥔", answers: ["potato", "potatoe"]},
            {question: "🥦", answers: ["broccoli"]},
            {question: "🍏", answers: ["apple"]},
            {question: "🍋", answers: ["lemon"]},
            {question: "🍊", answers: ["orange"]},
            {question: "🍌", answers: ["banana"]},
            {question: "🍐", answers: ["pear"]},
            {question: "🍉", answers: ["watermelon"]},
            {question: "🍒", answers: ["cherries"]},
            {question: "🍓", answers: ["strawberry"]},
            {
                question: "<img src='additional-emojis/raspberry.png'>",
                answers: ["raspberry"]
            },
            {
                question: "<img src='additional-emojis/blackberry.png'>",
                answers: ["blackberry"]
            }
        ]
    },
    {
        name: "Foods and Drinks 2",
        vocabulary: [
            {question: "🍑", answers: ["peach"]},
            {question: "🥝", answers: ["kiwi fruit"]},
            {question: "🥒", answers: ["cucumber"]},
            {question: "🍈", answers: ["melon"]},
            {question: "🥥", answers: ["coconut"]},
            {question: "🌰", answers: ["chestnut"]},
            {question: "🧅", answers: ["onion"]},
            {question: "🧄", answers: ["garlic"]},
            {question: "🫒", answers: ["olive"]},
            {question: "🫑", answers: ["bell pepper"]},
            {question: "🌶", answers: ["hot pepper"]},
            {question: "🍕", answers: ["pizza"]},
            {question: "🍝", answers: ["spaghetti"]},
            {question: "🍚", answers: ["rice"]},
            {question: "🍨", answers: ["ice cream"]},
            {question: "🍩", answers: ["doughnut", "donut"]},
            {question: "🍪", answers: ["cookie"]},
            {question: "🎂", answers: ["cake"]},
            {question: "🧁", answers: ["cupcake"]},
            {question: "🥧", answers: ["pie"]},
            {question: "🍞", answers: ["bread"]},
            {question: "🥐", answers: ["croissant"]},
            {question: "🥓", answers: ["bacon"]},
            {question: "🥞", answers: ["pancakes"]},
            {question: "🥚", answers: ["egg"]},
            {question: "🍟", answers: ["french fries"]},
            {question: "🍔", answers: ["hamburger"]},
            {question: "🥪", answers: ["sandwich"]},
            {question: "🍲", answers: ["soup"]},
            {question: "🥄", answers: ["spoon"]}
        ]
    },
    {
        name: "Foods and Drinks 3",
        vocabulary: [
            {
                question: "<img src='additional-emojis/fork.png'>",
                answers: ["fork"]
            },
            {
                question: "<img src='additional-emojis/knife-for-eating.png'>",
                answers: ["knife"]
            },
            {
                question: "<img src='additional-emojis/plate.png'>",
                answers: ["plate"]
            },
            {
                question: "<img src='additional-emojis/bowl.png'>",
                answers: ["bowl"]
            },
            {
                question: "<img src='additional-emojis/pot.png'>",
                // We need to accept alternatives as "pot" is often not
                // recognized.
                answers: ["pot", "top", "pop"]
            },
            {
                question: "<img src='additional-emojis/pan.png'>",
                answers: ["pan"]
            },
            {question: "🚰", answers: ["water"]},
            {question: "🧂", answers: ["salt"]},
            {
                question: "<img src='additional-emojis/pepper.png'>",
                answers: ["pepper"]
            },
            {
                question: "<img src='additional-emojis/straw-for-drinking.png'>",
                answers: ["straw"]
            },
            {question: "🥨", answers: ["pretzel"]},
            {question: "🥜", answers: ["peanut"]},
            {
                question: "<img src='additional-emojis/walnut.png'>",
                answers: ["walnut"]
            },
            {
                question: "<img src='additional-emojis/hazelnut.png'>",
                answers: ["hazelnut"]
            },
            {
                question: "<img src='additional-emojis/juice.png'>",
                answers: ["juice"]
            },
            {question: "🍭", answers: ["lollipop"]},
            {question: "👅", answers: ["tongue"]},
            {question: "👃", answers: ["nose"]},
            {
                question: "<img src='additional-emojis/jam.png'>",
                answers: ["jam"]
            },
            {question: "🧈", answers: ["butter"]},
            {
                question: "<img src='additional-emojis/oil-for-eating.png'>",
                answers: ["oil"]
            },
            {
                question: "<img src='additional-emojis/sour.png'>",
                answers: ["sour"]
            },
            {
                question: "<img src='additional-emojis/sweet.png'>",
                answers: ["sweets"]
            },
            {
                question: "<img src='additional-emojis/breakfast.png'>",
                answers: ["breakfast"]
            },
            {
                question: "<img src='additional-emojis/lunch.png'>",
                answers: ["lunch"]
            },
            {
                question: "<img src='additional-emojis/dinner.png'>",
                answers: ["dinner"]
            },
            {
                question: "<img src='additional-emojis/milk.png'>",
                answers: ["milk"]
            },
            {
                question: "<img src='additional-emojis/pumpkin.png'>",
                answers: ["pumpkin"]
            },
            {
                question: "<img src='additional-emojis/mushroom-for-eating.png'>",
                answers: ["mushroom"]
            },
            {
                question: "<img src='additional-emojis/plum.png'>",
                answers: ["plum"]
            },
            {
                question: "<img src='additional-emojis/fig.png'>",
                answers: ["fig"]
            },
            {
                question: "<img src='additional-emojis/vegetables.png'>",
                answers: ["vegetables"]
            },
            {
                question: "<img src='additional-emojis/fruits.png'>",
                answers: ["fruits"]
            },
            {
                question: "<img src='additional-emojis/berries.png'>",
                answers: ["berries"]
            },
            {
                question: "<img src='additional-emojis/napkin.png'>",
                answers: ["napkin"]
            },
            {
                question: "<img src='additional-emojis/table.png'>",
                answers: ["table"]
            },
            {
                question: "<img src='additional-emojis/chair.png'>",
                answers: ["chair"]
            },
            {
                question: "<img src='additional-emojis/water-bottle.png'>",
                answers: ["water bottle"]
            },
            {
                question: "<img src='additional-emojis/bottle.png'>",
                answers: ["bottle"]
            },
        ]
    },
    {
        name: "Middle ages 1",
        vocabulary: [
            {
                question: "<img src='additional-emojis/castle.png'>",
                answers: ["castle"]
            },
            {
                question: "<img src='additional-emojis/fortress.png'>",
                answers: ["fortress"]
            },
            {
                question: "<img src='additional-emojis/palace.png'>",
                answers: ["palace"]
            },
            {
                question: "<img src='additional-emojis/knight.png'>",
                answers: ["knight"]
            },
            {
                question: "<img src='additional-emojis/knights-horse.png'>",
                answers: ["horse"]
            },
            {
                question: "<img src='additional-emojis/king.png'>",
                answers: ["king"]
            },
            {
                question: "<img src='additional-emojis/queen.png'>",
                answers: ["queen"]
            },
            {
                question: "<img src='additional-emojis/princess.png'>",
                answers: ["princess"]
            },
            {
                question: "<img src='additional-emojis/prince.png'>",
                answers: ["prince"]
            },
            {
                question: "<img src='additional-emojis/sword.png'>",
                answers: ["sword"]
            },
            {
                question: "<img src='additional-emojis/shield.png'>",
                answers: ["shield"]
            },
            {
                question: "<img src='additional-emojis/shield.png'>",
                answers: ["shield"]
            },
            {
                question: "<img src='additional-emojis/knights-armor.png'>",
                answers: ["armor"]
            },
            {
                question: "<img src='additional-emojis/knights-helmet.png'>",
                answers: ["helmet"]
            },
            {
                question: "<img src='additional-emojis/mace.png'>",
                answers: ["mace"]
            },
            {
                question: "<img src='additional-emojis/stirrup.png'>",
                answers: ["stirrup"]
            },
            {
                question: "<img src='additional-emojis/reins.jpg'>",
                answers: ["reins"]
            },
            {
                question: "<img src='additional-emojis/horse-halter.jpg'>",
                answers: ["halter"]
            },
            {
                question: "<img src='additional-emojis/horse-saddle.png'>",
                answers: ["saddle"]
            },
            {
                question: "<img src='additional-emojis/catapult.png'>",
                answers: ["catapult"]
            },
            {
                question: "<img src='additional-emojis/archers-bow.png'>",
                answers: ["bow"]
            },
            {
                question: "<img src='additional-emojis/archers-arrow.png'>",
                answers: ["arrow"]
            },
            {
                question: "<img src='additional-emojis/crossbow.png'>",
                answers: ["crossbow"]
            },
            {
                question: "<img src='additional-emojis/spear.png'>",
                answers: ["spear"]
            },
            {
                question: "<img src='additional-emojis/sabre.png'>",
                answers: ["sabre", "saber", "sable"]
            }
        ]
    },
    {
        name: "Middle ages 2",
        vocabulary: [
            {
                question: "<img src='additional-emojis/katana.png'>",
                answers: ["katana"]
            },
            {
                question: "<img src='additional-emojis/boots.png'>",
                answers: ["boots"]
            },
            {
                question: "<img src='additional-emojis/cannon.png'>",
                answers: ["cannon"]
            },
            {
                question: "<img src='additional-emojis/cannonball.png'>",
                answers: ["cannonball"]
            },
            {
                question: "<img src='additional-emojis/medieval-pistol.png'>",
                answers: ["pistol"]
            },
            {
                question: "<img src='additional-emojis/medieval-gun.png'>",
                answers: ["gun"]
            },
            {
                question: "<img src='additional-emojis/galley.png'>",
                answers: ["galley", "helly", "golly"]
            },
            {
                question: "<img src='additional-emojis/fleet.png'>",
                answers: ["fleet"]
            },
            {
                question: "<img src='additional-emojis/torch.png'>",
                answers: ["torch"]
            },
            {
                question: "<img src='additional-emojis/throne.png'>",
                answers: ["throne"]
            },
            {
                question: "<img src='additional-emojis/moat.png'>",
                answers: ["moat", "mote"]
            },
            {
                question: "<img src='additional-emojis/castle-bridge.png'>",
                answers: ["bridge"]
            },
            {
                question: "<img src='additional-emojis/castle-gate.png'>",
                answers: ["gate"]
            },
            {
                question: "<img src='additional-emojis/castle-guard.png'>",
                answers: ["guard"]
            },
            {
                question: "<img src='additional-emojis/castle-tower.png'>",
                answers: ["tower"]
            },
            {
                question: "<img src='additional-emojis/medieval-kingdom.png'>",
                answers: ["kingdom"]
            },
            {
                question: "<img src='additional-emojis/medieval-kingdom.png'>",
                answers: ["kingdom"]
            },
            {
                question: "<img src='additional-emojis/medieval-nobleman.png'>",
                answers: ["nobleman"]
            },
            {
                question: "<img src='additional-emojis/emperor.png'>",
                answers: ["emperor"]
            },
            {
                question: "<img src='additional-emojis/empress.png'>",
                answers: ["empress"]
            },
            {
                question: "<img src='additional-emojis/empire.png'>",
                answers: ["empire"]
            },
            {
                question: "<img src='additional-emojis/servant.png'>",
                answers: ["servant"]
            },
            {
                question: "<img src='additional-emojis/peasant.png'>",
                answers: ["peasant"]
            },
            {
                question: "<img src='additional-emojis/robber.png'>",
                answers: ["robber"]
            },
            {
                question: "<img src='additional-emojis/thief.png'>",
                answers: ["thief"]
            },
        ]
    },
    {
        name: "Body parts",
        vocabulary: [
            {
                question: "<img src='additional-emojis/leg.png'>",
                answers: ["leg"]
            },
            {
                question: "<img src='additional-emojis/arm.png'>",
                answers: ["arm"]
            },
            {
                question: "<img src='additional-emojis/hand.png'>",
                answers: ["hand"]
            },
            {
                question: "<img src='additional-emojis/hand-palm.png'>",
                answers: ["palm"]
            },
            {
                question: "<img src='additional-emojis/head.png'>",
                answers: ["head"]
            },
            {
                question: "<img src='additional-emojis/brain.png'>",
                answers: ["brain"]
            },
            {
                question: "<img src='additional-emojis/nose.png'>",
                answers: ["nose"]
            },
            {
                question: "<img src='additional-emojis/mouth.png'>",
                answers: ["mouth"]
            },
            {
                question: "<img src='additional-emojis/lips.png'>",
                answers: ["lips"]
            },
            {
                question: "<img src='additional-emojis/foot.png'>",
                answers: ["foot"]
            },
            {
                question: "<img src='additional-emojis/foot-sole.png'>",
                answers: ["sole", "soul"]
            },
            {
                question: "<img src='additional-emojis/heel-pain.png'>",
                answers: ["heel"]
            },
            {
                question: "<img src='additional-emojis/elbow.png'>",
                answers: ["elbow"]
            },
            {
                question: "<img src='additional-emojis/knee.png'>",
                answers: ["knee"]
            },
            {
                question: "<img src='additional-emojis/penis.png'>",
                answers: ["penis"]
            },
            {
                question: "<img src='additional-emojis/testicles.png'>",
                answers: ["testicles"]
            },
            {
                question: "<img src='additional-emojis/vulva.png'>",
                answers: ["vulva", "volva", "volvo"]
            },
            {
                question: "<img src='additional-emojis/butt.png'>",
                answers: ["bottom"]
            },
            {
                question: "<img src='additional-emojis/stomach.png'>",
                answers: ["stomach"]
            },
            {
                question: "<img src='additional-emojis/belly.png'>",
                answers: ["belly"]
            },
            {
                question: "<img src='additional-emojis/shoulder.png'>",
                answers: ["shoulder"]
            },
            {
                question: "<img src='additional-emojis/tongue.png'>",
                answers: ["tongue"]
            },
            {
                question: "<img src='additional-emojis/tooth.png'>",
                answers: ["tooth"]
            },
            {
                question: "<img src='additional-emojis/teeth.png'>",
                answers: ["teeth"]
            },
            {
                question: "<img src='additional-emojis/body-chest.png'>",
                answers: ["chest"]
            },
            {
                question: "<img src='additional-emojis/eye.png'>",
                answers: ["eye"]
            },
            {
                question: "<img src='additional-emojis/hair.png'>",
                answers: ["hair"]
            },
            {
                question: "<img src='additional-emojis/body-back.png'>",
                answers: ["back"]
            },
            {
                question: "<img src='additional-emojis/ankle.png'>",
                answers: ["ankle"]
            },
            {
                question: "<img src='additional-emojis/wrist.png'>",
                answers: ["wrist"]
            },
            {
                question: "<img src='additional-emojis/breast.png'>",
                answers: ["breast"]
            },
            {
                question: "<img src='additional-emojis/finger.png'>",
                answers: ["finger"]
            },
            {
                question: "<img src='additional-emojis/toe.png'>",
                answers: ["toe", "two"]
            },
            {
                question: "<img src='additional-emojis/paw.png'>",
                answers: ["paw", "Paul", "pole"]
            },
            {
                question: "<img src='additional-emojis/tail.png'>",
                answers: ["tail"]
            },
            {
                question: "<img src='additional-emojis/claw.png'>",
                answers: ["claw"]
            },
            {
                question: "<img src='additional-emojis/torso.png'>",
                answers: ["torso"]
            },
            {
                question: "<img src='additional-emojis/beak.png'>",
                answers: ["beak"]
            },
            {
                question: "<img src='additional-emojis/mane.png'>",
                answers: ["mane", "main", "Maine"]
            },
            {
                question: "<img src='additional-emojis/cheek.png'>",
                answers: ["cheek"]
            },
            {
                question: "<img src='additional-emojis/eyebrow.png'>",
                answers: ["eyebrow"]
            },
            {
                question: "<img src='additional-emojis/eyelashes.png'>",
                answers: ["eyelashes"]
            },
            {
                question: "<img src='additional-emojis/neck.png'>",
                answers: ["neck"]
            },
            {
                question: "<img src='additional-emojis/throat.png'>",
                answers: ["throat"]
            },
            {
                question: "<img src='additional-emojis/lungs.png'>",
                answers: ["lungs"]
            },
            {
                question: "<img src='additional-emojis/heart.png'>",
                answers: ["heart", "hot"]
            },
            {
                question: "<img src='additional-emojis/blood.png'>",
                answers: ["blood"]
            },
            {
                question: "<img src='additional-emojis/mucus.png'>",
                answers: ["mucus"]
            },
            {
                question: "<img src='additional-emojis/tear.png'>",
                answers: ["tear"]
            },
            {
                question: "<img src='additional-emojis/sweat.png'>",
                answers: ["sweat"]
            },
        ]
    },
    {
        name: "School",
        vocabulary: [
            {
                question: "🏫",
                answers: ["school"]
            },
            {
                question: "<img src='additional-emojis/teacher.png'>",
                answers: ["teacher"]
            },
            {
                question: "<img src='additional-emojis/blackboard.png'>",
                answers: ["blackboard"]
            },
            {
                question: "<img src='additional-emojis/desk.png'>",
                answers: ["desk"]
            },
            {
                question: "<img src='additional-emojis/office-chair.png'>",
                answers: ["chair"]
            },
            {
                question: "<img src='additional-emojis/student.png'>",
                answers: ["student"]
            },
            {
                question: "<img src='additional-emojis/school-bag.png'>",
                answers: ["school bag"]
            },
            {
                question: "✏",
                answers: ["pencil"]
            },
            {
                question: "<img src='additional-emojis/eraser.png'>",
                answers: ["eraser"]
            },
            {
                question: "<img src='additional-emojis/pen.png'>",
                answers: ["pen"]
            },
            {
                question: "<img src='additional-emojis/sheet-of-paper.png'>",
                answers: ["sheet of paper"]
            },
            {
                question: "📔",
                answers: ["notebook"]
            },
            {
                question: "📏",
                answers: ["ruler"]
            },
            {
                question: "📖",
                answers: ["book"]
            },
            {
                question: "🧮",
                answers: ["abacus"]
            },
            {
                question: "<img src='additional-emojis/mathematics.png'>",
                answers: ["mathematics"]
            },
            {
                question: "<img src='additional-emojis/music-lesson.png'>",
                answers: ["music"]
            },
            {
                question: "<img src='additional-emojis/sports-lesson.png'>",
                answers: ["sports"]
            },
            {
                question: "<img src='additional-emojis/school-peer.png'>",
                answers: ["peer"]
            },
            {
                question: "<img src='additional-emojis/drawing-compass.png'>",
                answers: ["drawing compass"]
            },
            {
                question: "<img src='additional-emojis/marker.png'>",
                answers: ["marker"]
            },
            {
                question: "<img src='additional-emojis/school-yard.png'>",
                answers: ["school yard"]
            },
            {
                question: "<img src='additional-emojis/school-gym.jpg'>",
                answers: ["school gym"]
            },
            {
                question: "<img src='additional-emojis/class-room.png'>",
                answers: ["class room"]
            },
            {
                question: "✂",
                answers: ["scissors"]
            },
            {
                question: "<img src='additional-emojis/pencil-case.png'>",
                answers: ["pencil case"]
            },
            {
                question: "👓",
                answers: ["glasses"]
            }
        ]
    }
];

if (levels.length === 0) {
    throw new Error("DialogueSelectLevel expects at least one level.")
}

function assertEachLevelAtLeastOneCard() {
    for (let i = 0; i < levels.length; i++) {
        const level = levels[i];

        if (level.vocabulary.length === 0) {
            throw new Error(
                "Expected at least one vocabulary card, " +
                ` but got: ${level.vocabulary.length} cards` +
                ` at level ${i}`
            );
        }
    }
}

assertEachLevelAtLeastOneCard();

// NOTE (mristin):
// We distinguish between three types of states.
//
// The one state is the state of the overall system such as voice selection and
// initialization of the speech recognition. When the game restarts, the system
// state should not be affected.
//
// On the other hand, the other state, the dialogue state, concerns only the
// immediate dialogue logic and is devoid of any system concerns such as
// voice changes *etc.*
//
// The third state, the game state, concerns the over-arching game state which
// persists between the dialogues.

/**
 * Define a general dialogue, where the game goes from one dialogue to another,
 * akin to a state machine.
 *
 * @interface IDialogue
 */

/**
 * Generate the HTML code to be put into the game container.
 * @function
 * @name IDialogue#initialHTML
 * @returns {string}
 */

/**
 * Update the dialogue state based on the timestamp.
 * @function
 * @name IDialogue#tick
 * @param {number} timestamp of the frame
 * @returns {void}
 */

/**
 * Refresh the game container based on the dialogue's state.
 * @function
 * @name IDialogue#refresh
 * @returns {void}
 */

/**
 * Execute the mount after the initial HTML code has been inserted.
 * @function
 * @name IDialogue#mount
 * @returns {void}
 */

/**
 * Execute the unmount just before the next dialogue is going to be mounted.
 * @function
 * @name IDialogue#unmount
 * @returns {void}
 */

/**
 * Ask the user to press a button so that we can activate the speech synthesis
 * and the speech recognition.
 * @implements IDialogue
 */
class DialoguePressHere {
    initialHTML() {
        return `<button class="announcement" id="press-start">
Click here when you are ready to start.
</button>`;
    }

    mount() {
        const pressStart = document.getElementById("press-start");
        pressStart.onclick = () => {
            dialoguer.put(new DialogueWaitingForSpeechSynthesis())
        };
    }

    refresh() {
        // Intentionally empty.
    }

    tick(timestamp) {
        // Intentionally empty.
    }

    unmount() {
        // Intentionally empty.
    }
}

/**
 * Show that we are waiting for the speech synthesis to be initialized.
 * @implements IDialogue
 */
class DialogueWaitingForSpeechSynthesis {
    constructor() {
        this.retries = 4;
        this.lastTick = null;
    }

    initialHTML() {
        return `<div id="message" class="announcement">
Waiting for the speech synthesis to initialize...
</div>`;
    }

    mount() {
        // Intentionally empty.
    }

    refresh() {
        const messageDiv = document.getElementById("message");
        const dots = [];
        for (let i = 0; i < this.retries; i++) {
            dots.push(".")
        }

        updateInnerTextIfNeeded(
            messageDiv,
            "Waiting for the speech synthesis to initialize"
            + dots.join("")
        )
    }

    tick(timestamp) {
        if (this.lastTick === null || timestamp - this.lastTick > 1000) {
            if (window.speechSynthesis.getVoices().length > 0) {
                setupSpeechSynthesis();
                dialoguer.put(new DialogueWaitingForSpeechRecognition());
            } else {
                this.retries--;

                if (this.retries === 0) {
                    dialoguer.put(new DialogueNoSpeechSynthesisAvailable());
                }
            }

            this.lastTick = timestamp;
        }
    }

    unmount() {
        // Intentionally empty.
    }
}

/**
 * Inform the user that the game can not be played as there is no speech
 * synthesis.
 * @implements IDialogue
 */
class DialogueNoSpeechSynthesisAvailable {
    initialHTML() {
        return `<div class='announcement'>
No speech synthesis is available in your browser. Perhaps you have no 
internet connection and your browser needs one for speech synthesis?
</div>`;
    }

    mount() {
        // Intentionally empty.
    }

    refresh() {
        // Intentionally empty.
    }

    tick(timestamp) {
        // Intentionally empty.
    }

    unmount() {
        // Intentionally empty.
    }
}

/**
 * Show that we are waiting for the speech recognition to be initialized.
 * @implements IDialogue
 */
class DialogueWaitingForSpeechRecognition {
    constructor() {
        this.retries = 10;
        this.lastTick = null;
        this.oldOnStart = null;
        this.started = false;
    }

    initialHTML() {
        return `<div id="message" class="announcement">
Waiting for the speech synthesis to initialize...
</div>`;
    }

    mount() {
        setupSpeechRecognition();
        this.oldOnStart = systemState.speechRecognition.onstart;

        const that = this;

        systemState.speechRecognition.onstart = function (event) {
            that.started = true;
            that.oldOnStart(event);
        }
    }

    refresh() {
        const messageDiv = document.getElementById("message");
        const dots = [];
        for (let i = 0; i < this.retries; i++) {
            dots.push(".")
        }

        updateInnerTextIfNeeded(
            messageDiv,
            "Waiting for the speech recognition to initialize"
            + dots.join("")
        )
    }

    tick(timestamp) {
        if (this.lastTick === null || timestamp - this.lastTick > 1000) {
            if (this.started) {
                dialoguer.put(new DialogueSelectLevel());
            } else {
                this.retries--;

                if (this.retries === 0) {
                    dialoguer.put(new DialogueNoSpeechRecognitionAvailable());
                }
            }

            this.lastTick = timestamp;
        }
    }

    unmount() {
        systemState.speechRecognition.onstart = this.oldOnStart;
    }
}

/**
 * Inform the user that the game can not be played as there is no speech
 * recognition.
 * @implements IDialogue
 */
class DialogueNoSpeechRecognitionAvailable {
    initialHTML() {
        return `<div class='announcement'>
No speech recognition is available in your browser. Perhaps you have no 
internet connection and your browser needs one for speech recognition?
</div>`;
    }

    mount() {
        // Intentionally empty.
    }

    refresh() {
        // Intentionally empty.
    }

    tick(timestamp) {
        // Intentionally empty.
    }

    unmount() {
        // Intentionally empty.
    }
}

/**
 * Decorate the speech `onend` so that the speech recognition is automatically
 * restarted.
 *
 * Chrome turns off sometimes the speech recognition for arbitrary reasons,
 * so we have to turn it on again.
 *
 * The undecorator function is returned. Make sure you call it on destruction.
 *
 * @returns {(function(): void)}
 */
function decorateSpeechRecognitionToContinuouslyRestart() {
    const oldSpeechRecognitionOnEnd = (
        systemState.speechRecognition.onend
    );

    systemState.speechRecognition.onend = function (event) {
        if (oldSpeechRecognitionOnEnd) {
            oldSpeechRecognitionOnEnd(event);
        }

        systemState.speechRecognition.start();
    }

    return function () {
        systemState.speechRecognition.onend = oldSpeechRecognitionOnEnd;
    }
}

/**
 * Let the user select the level.
 * @implements IDialogue
 */
class DialogueSelectLevel {
    constructor() {
        this.levelIndex = gameState.levelIndex;

        this.oldSpeechRecognitionOnResult = null;
        this.undecorateSpeechRecognitionOnEnd = null;
    }

    initialHTML() {
        const parts = [
            `<div class="announcement">
Select the level:
</div>`
        ];
        for (let i = 0; i < levels.length; i++) {
            const level = levels[i];
            parts.push(
                `<button 
    id="level-${i}" 
    class="level-choice"
>${level.name}</button>`
            )
        }
        return parts.join("\n");
    }

    mount() {
        for (let i = 0; i < levels.length; i++) {
            /**
             * @type {HTMLButtonElement}
             */
            const button = document.getElementById(`level-${i}`);
            button.onclick = ((anI) => {
                return () => {
                    this.levelIndex = anI;
                    this.startTheGame();
                }
            })(i);

            addClassIfNeeded(button, "level-choice");
            if (i < levels.length - 1) {
                button.style.paddingRight = "1em";
            }
        }

        this.undecorateSpeechRecognitionOnEnd = (
            decorateSpeechRecognitionToContinuouslyRestart()
        );

        const that = this;

        this.oldSpeechRecognitionOnResult = (
            systemState.speechRecognition.onresult
        );

        const choice = [];
        const levelIndexByName = new Map();
        for (let i = 0; i < levels.length; i++) {
            const level = levels[i];
            levelIndexByName.set(level.name, i);
            choice.push(level.name);
        }

        systemState.speechRecognition.onresult = function (event) {
            that.oldSpeechRecognitionOnResult(event);

            const option = whichTextRecognized(
                event.results,
                choice
            );

            if (option !== null) {
                that.levelIndex = levelIndexByName.get(option);
                that.startTheGame();
            }
        };
    }

    startTheGame() {
        gameState.levelIndex = this.levelIndex;
        dialoguer.put(new DialogueHello());
    }

    refresh() {
        // Intentionally empty.
    }

    tick(timestamp) {
        // Intentionally empty.
    }

    unmount() {
        systemState.speechRecognition.onresult = (
            this.oldSpeechRecognitionOnResult
        );

        this.undecorateSpeechRecognitionOnEnd();
    }
}

const hiMessages = [
    "Hello! Let's start!",
    "Hi! Let's get ready!",
    "Ready. Steady. Go!"
]

/**
 * Say hello to the user to announce that the game is about to start.
 * @implements IDialogue
 */
class DialogueHello {
    initialHTML() {
        return `<div id="hello-container">
    <div id="hello">👋 Hello! 👋</div>
</div>`;
    }

    mount() {
        systemState.speechRecognition.stop();

        const messageIndex = Math.floor(Math.random() * hiMessages.length);
        announce(
            hiMessages[messageIndex]
            + " " + levels[gameState.levelIndex].name
        )
            .catch(
                (err) => console.log(
                    "Failed to announce the start of the game", err
                )
            )
            .then(
                () => {
                    dialoguer.put(new DialoguePlay())
                }
            );
    }

    refresh() {
        // Intentionally empty.
    }

    tick(timestamp) {
        // Intentionally empty.
    }

    unmount() {
        // Intentionally empty.
    }
}

/**
 * Track the state of a card in the game.
 */
class StatefulCard {
    /**
     * @param theQuestion {string} on the card
     * @param theAnswers {Array<string>} acceptable answers on the card
     */
    constructor(theQuestion, theAnswers) {
        this.question = theQuestion;
        this.answers = theAnswers;

        this.answerSet = new Set(theAnswers);

        /**
         * The number of points won on hitting the right answer
         *
         * @type {number}
         */
        this.score = 3;
    }
}

/**
 * Reveal the correct answer to the user.
 *
 * @param answer {string} the expected correct answer
 * @returns {Promise<void>} announcement
 */
function promiseToRevealCorrectAnswer(answer) {
    return announce(answer)
        .then(
            () => {
                return new Promise(
                    resolve => setTimeout(resolve, 1000)
                );
            }
        );
}


/**
 * Play the game.
 * @implements IDialogue
 */
class DialoguePlay {
    constructor() {
        if (gameState.levelIndex < 0 || gameState.levelIndex >= levels.length) {
            throw new Error(
                "The level index is invalid; " +
                `there are ${levels.length} level(s), ` +
                `but we got level index ${gameState.levelIndex}`
            );
        }

        const level = levels[gameState.levelIndex];

        let cards = [];
        for (const vocabularyCard of level.vocabulary) {
            cards.push(
                new StatefulCard(
                    vocabularyCard.question,
                    vocabularyCard.answers
                )
            );
        }
        cards = shuffle(cards);

        this.remainingCards = cards;

        /**
         * Cards which were answered correctly and should not re-appear
         * @type {Array<StatefulCard>}
         */
        this.solvedCards = [];

        /**
         * Number of trials left for the current card
         * @type {number}
         */
        this.trials = 3;

        /**
         * Total score in the game so far
         * @type {number}
         */
        this.score = 0;

        /**
         * Timestamp when the ghost moved the last time
         * @type {null|number}
         */
        this.lastGhostStep = null;
        this.ghostSteps = 10;

        /**
         * If set, react to the answers
         * @type {boolean}
         */
        this.playable = true;

        this.oldSpeechRecognitionOnResult = null;
        this.oldSpeechRecognitionOnEnd = null;
    }

    playMistake() {
        const audio = new Audio("negative.mp3");
        audio.volume = 0.1;

        this.playable = false;
        systemState.speechRecognition.stop();
        audio.play()
            .then(
                () => {
                    try {
                        systemState.speechRecognition.start();
                    } catch (error) {
                        console.log(
                            "Speech recognition failed to restart after " +
                            "playing a mistake: ", error,
                            "; but we simply ignore this error as speech " +
                            "recognition often continues working."
                        )
                    }

                    this.playable = true;
                }
            )
            .catch(
                reason => console.log("Failed to play negative sound", reason)
            );
    }

    playSuccess() {
        const audio = new Audio("positive.mp3");
        audio.volume = 0.1;
        audio.play().catch(
            reason => console.log("Failed to play positive sound", reason)
        );
    }

    initialHTML() {
        return `<div id="question"></div>

<div id="terrain">
    <span id="score"
    ></span><span id="potential"
    ></span><span id="ghost"
    ></span>
</div>`;
    }

    logCard() {
        if (this.remainingCards.length > 0) {
            const card = this.remainingCards[this.remainingCards.length - 1];
            console.log(
                "The question is: "
                + card.question
                + ", and the expected possible answers are: "
                + card.answers.join(", ")
            );
        } else {
            console.log("No remaining cards.")
        }
        return null;
    }

    resetGhost() {
        this.lastGhostStep = null;
        this.ghostSteps = 10;
    }

    resetTrials() {
        this.trials = 3;
        console.log("Trials: ", this.trials);
    }

    /**
     * Change the state and perform side effects on hitting the right answer.
     */
    handleCorrectAnswer() {
        console.log("Handling correct answer...")

        this.playSuccess();

        const card = this.remainingCards[this.remainingCards.length - 1];
        this.score += card.score;

        this.solvedCards.push(card);

        this.remainingCards.pop();

        if (this.remainingCards.length === 0) {
            dialoguer.put(new DialogueBravo(this.score));
        } else {
            this.logCard();
            this.resetTrials();
            this.resetGhost();
        }
    }

    /**
     * Change the state and perform side effects on missing the correct answer.
     */
    handleMistake() {
        console.log("Handling mistake...")
        this.playMistake();

        this.trials--;
        console.log("Trials: ", this.trials);
        if (this.trials === 0) {
            this.handleFail();
        }
    }

    /**
     * Change the state and perform side effects when we fail at a card.
     *
     * This happens when either too many wrong answers are given, or
     * the time ran out.
     */
    handleFail() {
        console.log("Handling fail...");

        this.playable = false;
        systemState.speechRecognition.stop();

        const that = this;

        const card = this.remainingCards[this.remainingCards.length - 1];

        function unshiftCardAndResume() {
            const oldOnStart = systemState.speechRecognition.onstart;

            systemState.speechRecognition.onstart = function (event) {
                card.score = Math.max(1, card.score - 1);
                that.remainingCards.pop();
                that.remainingCards.unshift(card);

                that.resetTrials();
                that.resetGhost();

                that.logCard();
                that.playable = true;

                oldOnStart(event);
                systemState.speechRecognition.onstart = oldOnStart;
            }

            try {
                systemState.speechRecognition.start();
            } catch (error) {
                console.log(
                    "The speech recognition failed to start: ",
                    error,
                    "We are going to silently continue as if it started."
                );
            }

        }

        promiseToRevealCorrectAnswer(card.answers[0])
            .then(unshiftCardAndResume)
            .catch(
                (error) => {
                    console.log(
                        "Failed to announce the right answer:",
                        error
                    );
                    unshiftCardAndResume();
                }
            );
    }

    mount() {
        this.logCard();

        const that = this;

        // NOTE (mristin):
        // We do not use `decorateSpeechRecognitionToContinuouslyRestart`
        // here as we need to accommodate to `this.playable`.
        this.oldSpeechRecognitionOnEnd = (
            systemState.speechRecognition.onend
        );
        systemState.speechRecognition.onend = function (event) {
            if (that.oldSpeechRecognitionOnEnd) {
                that.oldSpeechRecognitionOnEnd(event);
            }

            // NOTE (mristin):
            // Chrome sometimes turns off the speech recognition for no
            // particular reason, so we have to switch it back on only if
            // in the playable mode.
            if (that.playable) {
                systemState.speechRecognition.start();
            }
        }

        this.oldSpeechRecognitionOnResult = (
            systemState.speechRecognition.onresult
        );

        systemState.speechRecognition.onresult = function (event) {
            that.oldSpeechRecognitionOnResult(event);

            if (!that.playable) {
                return;
            }

            if (that.remainingCards.length === 0) {
                return;
            }

            const card = (
                that.remainingCards[that.remainingCards.length - 1]
            );

            const option = whichTextRecognized(
                event.results,
                card.answers.concat(["restart"])
            );

            if (card.answerSet.has(option)) {
                that.handleCorrectAnswer();
            } else if (option === "restart") {
                dialoguer.put(new DialogueSelectLevel());
            } else {
                that.handleMistake();
            }
        };

        // NOTE (mristin):
        // We stopped at the hello dialogue, so we have to start recognizing
        // now.
        systemState.speechRecognition.start();
    }

    refreshCard() {
        if (this.remainingCards.length === 0) {
            throw new Error(
                "Unexpected no remaining cards during the play dialogue."
            )
        }

        const card = this.remainingCards[this.remainingCards.length - 1];

        updateInnerHTMLIfNeeded(
            document.getElementById("question"),
            card.question
        );
    }

    refreshScore() {
        /**
         * @type {Array<string>}
         */
        const diamonds = [];
        for (let i = 0; i < this.score; i++) {
            diamonds.push("💎");
        }

        const text = diamonds.join("");
        updateInnerTextIfNeeded(
            document.getElementById("score"),
            text
        );
    }

    refreshPotential() {
        const card = (
            this.remainingCards[this.remainingCards.length - 1]
        );

        /**
         * @type {Array<string>}
         */
        const diamonds = [];
        for (let i = 0; i < card.score; i++) {
            diamonds.push("💎");
        }

        const text = diamonds.join("");
        updateInnerTextIfNeeded(
            document.getElementById("potential"),
            text
        );
    }

    refreshGhost() {
        const ghost = [];
        for (let i = 0; i < this.ghostSteps; i++) {
            ghost.push("&nbsp;");
        }
        ghost.push("👻");

        const text = ghost.join("");
        updateInnerHTMLIfNeeded(
            document.getElementById("ghost"),
            text
        );
    }

    refresh() {
        this.refreshCard();
        this.refreshScore();
        this.refreshPotential();
        this.refreshGhost();
    }

    tick(timestamp) {
        if (!this.playable) {
            return;
        }

        if (this.lastGhostStep === null) {
            this.lastGhostStep = timestamp;
        } else {
            const duration = timestamp - this.lastGhostStep;
            if (duration > 1000) {
                this.ghostSteps--;
                this.lastGhostStep = timestamp;

                if (this.ghostSteps === 0) {
                    this.handleFail();
                }
            }
        }
    }

    unmount() {
        systemState.speechRecognition.onresult = (
            this.oldSpeechRecognitionOnResult
        );
        systemState.speechRecognition.onend = (
            this.oldSpeechRecognitionOnEnd
        );
    }
}

const
    bravoMessages = [
        "Bravo!",
        "Well done!",
        "Good job!",
        "Great job!",
        "Congratulations!"
    ]

/**
 * Congratulate the player and finish the game.
 * @implements IDialogue
 */
class DialogueBravo {
    constructor(score) {
        this.undecorateSpeechRecognitionOnEnd = null;
        this.oldSpeechRecognitionOnResult = null;

        this.score = score;
        this.totalScore = levels[gameState.levelIndex].vocabulary.length * 3;
    }

    initialHTML() {
        return `<div id="bravo-container">
    <div id="bravo">👏 Bravo! 👏</div>
    <div id="bravo-score">${this.score} 💎 out of ${this.totalScore} 💎</div>
    <button id="restart">Restart</button>
</div>`;
    }

    restart() {
        dialoguer.put(new DialogueSelectLevel())
    }

    // noinspection DuplicatedCode
    mount() {
        document.getElementById("restart").onclick = () => {
            this.restart()
        }

        const messageIndex = Math.floor(Math.random() * bravoMessages.length);
        announce(
            bravoMessages[messageIndex]
            + `${this.score} out of ${this.totalScore}`
        )
            .catch(err => {
                console.log("Failed to say bravo", err)
            })

        this.undecorateSpeechRecognitionOnEnd = (
            decorateSpeechRecognitionToContinuouslyRestart()
        );

        const that = this;

        this.oldSpeechRecognitionOnResult = (
            systemState.speechRecognition.onresult
        );
        systemState.speechRecognition.onresult = function (event) {
            that.oldSpeechRecognitionOnResult(event);

            const option = whichTextRecognized(
                event.results,
                ["restart"]
            );

            if (option === "restart") {
                dialoguer.put(new DialogueSelectLevel());
            }
        }
    }

    refresh() {
        // Intentionally empty.
    }

    tick(timestamp) {
        // Intentionally empty.
    }

    unmount() {
        systemState.speechRecognition.onresult = (
            this.oldSpeechRecognitionOnResult
        );

        this.undecorateSpeechRecognitionOnEnd();
    }
}

/**
 * Handle dialogue changes.
 */
class Dialoguer {
    constructor() {
        /**
         * Current dialogue
         * @type {IDialogue | null}
         */
        this.dialogue = null;
    }

    /**
     * Change the dialogue.
     * @param {IDialogue} dialogue
     */
    put(dialogue) {
        if (this.dialogue !== null) {
            this.dialogue.unmount();
        }

        this.dialogue = dialogue;

        const gameContainer = document.getElementById("game-container");
        gameContainer.innerHTML = this.dialogue.initialHTML();
        this.dialogue.mount();
    }
}

const dialoguer = new Dialoguer();

const systemState = {
    speechSynthesisVoice: null,
    speechRecognition: null,

    /**
     * Current time of the system
     * @type {number}
     */
    timestamp: 0
}

const gameState = {
    levelIndex: 0
}


/**
 * Make a copy of the array and shuffle it.
 * @param {Array<T>} array to be shuffled
 * @returns {Array<T>} shuffled items
 * @template T
 */
function shuffle(array) {
    const shuffled = [...array];
    shuffled.sort(() => Math.random() - 0.5);
    return shuffled;
}

function setupSpeechSynthesis() {
    systemState.speechSynthesisVoice = null;

    if (window.speechSynthesis === undefined) {
        return;
    }

    const voices = window.speechSynthesis.getVoices();
    if (voices === null || voices === undefined || voices.length === 0) {
        return;
    }

    for (let i = 0; i < voices.length; i++) {
        const lang = voices[i].lang.toLowerCase();
        if (lang === "en" || lang.startsWith("en-")) {
            const voice = voices[i];

            if (systemState.speechSynthesisVoice !== voice) {
                systemState.speechSynthesisVoice = voice;
            }
        }
    }
}

/**
 * Extract the possible transcripts as recognized by speech recognition.
 * @param resultList {SpeechRecognitionResultList}
 * @return {Array<string>}
 */
function possibleTranscriptsFromLastResult(
    resultList
) {
    if (resultList.length === 0) {
        return [];
    }

    const lastResult = resultList[resultList.length - 1];

    const transcripts = [];
    for (const alternative of lastResult) {
        transcripts.push(alternative.transcript);
    }

    return transcripts;
}

/**
 * Check if we recognized any of the choices in the last result of the speech
 * recognition.
 *
 * @param resultList {SpeechRecognitionResultList}
 * @param choice {Array<string>}
 * @return string|null
 */
function whichTextRecognized(
    resultList,
    choice
) {
    const resultSet = new Set();
    const transcripts = possibleTranscriptsFromLastResult(resultList);
    for (const transcript of transcripts) {
        resultSet.add(transcript.toLowerCase().trim());
    }

    for (const option of choice) {
        if (resultSet.has(option.toLowerCase().trim())) {
            return option;
        }
    }

    return null;
}

function setupSpeechRecognition() {
    systemState.speechRecognition = null;

    // noinspection JSUnresolvedVariable
    const SpeechRecognition =
        window.SpeechRecognition
        || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 4;
    recognition.start();

    const microphone = document.getElementById(
        "speech-recognition-microphone"
    );

    recognition.onstart = function () {
        console.log("Speech recognition started.")
        microphone.className = "microphone-recording";
    }

    recognition.onspeechstart = function () {
        console.log("Speech recognition started to record speech...")
        microphone.className = "microphone-recording";
    }

    recognition.onspeechend = function () {
        console.log("Speech recognition stopped to record speech...")
        microphone.className = "microphone-idle";
    }

    recognition.onend = function () {
        console.log("Speech recognition ended.");
        microphone.className = "microphone-idle";
    }

    recognition.onresult = function (event) {
        const result = document.getElementById(
            "speech-recognition-result"
        );

        const transcripts = possibleTranscriptsFromLastResult(
            event.results
        );

        if (transcripts.length > 0) {
            const text = transcripts.join("; ");
            console.log("Speech recognition recognized: " + text);
            result.innerText = text;
        } else {
            console.log("Speech recognition did not recognize anything.")
            result.innerHTML = "<i>No text recognized.</i>"
        }
    }

    systemState.speechRecognition = recognition;
}


/**
 * Announce the text to the user.
 * @param text to be announced
 * @returns {Promise<void>}
 */
function announce(text) {
    console.log(`Announcing: ${text}`)
    if (systemState.speechSynthesisVoice === null) {
        return new Promise((resolve, _) => {
            console.log("No speech synthesis voice.")
            resolve()
        });
    }

    let utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    utterance.voice = systemState.speechSynthesisVoice;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance)

    return new Promise((resolve, reject) => {
        utterance.onend = resolve;
        utterance.onerror = (errorEvent) => {
            if (errorEvent.error === 'interrupted') {
                resolve();
            } else {
                reject(errorEvent)
            }
        }
    })
}


const dummyElementForHTMLCanonicalization = document.createElement(
    "div"
);

/**
 * Update the inner HTML of the element if it differs from the given text.
 * @param {HTMLElement} element
 * @param {string} code HTML code
 */
function updateInnerHTMLIfNeeded(element, code) {
    dummyElementForHTMLCanonicalization.innerHTML = code;
    const canonicalized = dummyElementForHTMLCanonicalization.innerHTML;

    if (canonicalized !== element.innerHTML) {
        element.innerHTML = canonicalized;
    }
}

/**
 * Update the inner text of the element if it differs from the given text.
 * @param {HTMLElement} element
 * @param {string} text
 */
function updateInnerTextIfNeeded(element, text) {
    if (element.innerText !== text) {
        element.innerText = text;
    }
}

/**
 * Add the style class if it is not already present in the element.
 * @param {HTMLElement} element
 * @param {string} cls
 */
function addClassIfNeeded(element, cls) {
    if (!element.classList.contains(cls)) {
        element.classList.add(cls)
    }
}

/**
 * Handle every frame redrawing.
 * @param {number} timestamp
 */
function handleFrame(timestamp) {
    if (dialoguer.dialogue !== null) {
        dialoguer.dialogue.tick(timestamp);
        dialoguer.dialogue.refresh();
    }

    systemState.timestamp = timestamp;

    requestAnimationFrame(handleFrame);
}

function main() {
    dialoguer.put(new DialoguePressHere());
    requestAnimationFrame(handleFrame);
}

window.onload = main;
