const dataBoth = [
    {
        number: 1,
        type: "chooseOne",
        key: "type",
        question: "What's your main wine preference today?",
        answers: [{ button: "RED", value: "red"}, {button: "WHITE", value: "white"},{button:  "ROSE", value: "rose"}, {button: "SPARKLING", value: "sparkling"}, {button: "I'M UP FOR ANYTHING!", value: "na"} ]
    },
    {
        number: 2,
        type: "chooseOne",
        key: "sweet",
        question: "How do you like your wine - bone dry or sweet like sugar?",
        answers: [ { button: "AS DRY AS IT COMES", value: "1"} , { button: "MOSTLY DRY", value: "2"}, { button: "SOMEWHAT SWEET", value: "3"}, { button: "DESSERT LEVEL SWEET", value: "4"}, { button: "I DON'T MIND", value: "na"}]
    },
    {
        number: 3,
        type: "chooseOne",
        key: "body",
        question: "Do you have a preference for the wine's body?",
        answers: [ { button:"PACKS A PUNCH!", value: "full"}, { button:"FULL BUT RESTRAINED", value: "mf"}, { button:"MEDIUM" , value: "medium"}, { button:"LIGHT AND AIRY", value: "light"}, { button:"I DON'T MIND", value: "na"} ]
    },
    {
        number: 4,
        type: "chooseMany",
        key: "traits",
        question: "Are any of these traits important to you?",
        answers: [ { button:"NATURAL/ORGANIC (NO ADDED SULPHIDES)", value: "natural"}, { button:"VEGAN", value: "vegan"}, { button:"VEGETARIAN", value: "vegan"}, { button: "SUSTAINABLE", value: "sustainable"}, { button: "NO PREFERENCE", value: ""}]
    },
    {
        number: 5,
        type: "chooseMany",
        key: "varietalsRed",
        question: "When drinking red wine, are there any varieties you particularly like?",
        answers: [{ button:"PINOT NOIR", value: "pinot noir"} , { button:"SYRAH", value: "syrah"} , { button:"MERLOT", value: "merlot"} , { button:"CABERNET SAUVIGNON", value: "cabernet sauvignon"}, { button:"I DON'T MIND", value: ""} ]
    },
    {
        number: 6,
        type: "chooseMany",
        key: "varietalsWhite",
        question: "When drinking white wine, are there any varieties you particularly like?",
        answers: [{ button:"CHARDONNAY", value: "chardonnay"}, { button:"SAUVIGNON BLANC", value: "sauvignon blanc"}, { button:"CHENIN BLANC", value: "chenin blanc"}, { button:"PINOT GRIGIO", value: "pinot grigio"} , { button:"NONE OF THESE", value: "na"} , { button:"I DON'T MIND", value: ""} ]
    },
    {
        number: 7,
        type: "chooseMany",
        key: "charactersRed",
        question: "When drinking your red wine, what characteristics do you love?",
        answers: [ { button:"RED FRUITS", value: "red fruits"} ,{ button:"BLACK FRUITS", value: "black fruits"}, { button:"EARTHY", value: "earthy"}, { button:"SPICY", value: "spicy"}, { button:"CHOCOLATE", value: "chocolate"}, { button:"LEATHER", value: "leather"} , { button:"I'M NOT SURE", value: ""} ]
    },
    {
        number: 8,
        type: "chooseMany",
        key: "charactersWhite",
        question: "When drinking your white or sparkling wine, what characteristics do you love??",
        answers: [ { button:"APPLE/PEAR", value: "apple pear"} , { button:"TROPICAL FRUITS", value: "tropical"}, { button:"FLORAL", value: "floral"} , { button:"HONEY", value: "honey"} , { button:"VANILLA", value: "vanilla"} , { button: "CREAM", value: "cream"}, { button:"NUTTY", value: "nutty"}, { button:"TOAST", value: "toast"}, { button:"CITRUS FRUITS", value: "citrus"}, { button:"I'M NOT SURE", value: ""} ]
    },
]

const dataRed = [
    {
        number: 1,
        type: "chooseOne",
        key: "type",
        question: "What's your main wine preference today?",
        answers: [{ button: "RED", value: "red"}, {button: "WHITE", value: "white"},{button:  "ROSE", value: "rose"}, {button: "SPARKLING", value: "sparkling"}, {button: "I'M UP FOR ANYTHING!", value: "na"} ]
    },
    {
        number: 2,
        type: "chooseOne",
        key: "sweet",
        question: "How do you like your wine - bone dry or sweet like sugar?",
        answers: [ { button: "AS DRY AS IT COMES", value: "1"} , { button: "MOSTLY DRY", value: "2"}, { button: "SOMEWHAT SWEET", value: "3"}, { button: "DESSERT LEVEL SWEET", value: "4"}, { button: "I DON'T MIND", value: "na"}]
    },
    {
        number: 3,
        type: "chooseOne",
        key: "body",
        question: "Do you have a preference for the wine's body?",
        answers: [ { button:"PACKS A PUNCH!", value: "full"}, { button:"FULL BUT RESTRAINED", value: "mf"}, { button:"MEDIUM" , value: "medium"}, { button:"LIGHT AND AIRY", value: "light"}, { button:"I DON'T MIND", value: "na"} ]
    },
    {
        number: 4,
        type: "chooseMany",
        key: "traits",
        question: "Are any of these traits important to you?",
        answers: [ { button:"NATURAL/ORGANIC (NO ADDED SULPHIDES)", value: "natural"}, { button:"VEGAN", value: "vegan"}, { button:"VEGETARIAN", value: "vegan"}, { button: "SUSTAINABLE", value: "sustainable"}, { button: "NO PREFERENCE", value: ""}]
    },
    {
        number: 5,
        type: "chooseMany",
        key: "varietalsRed",
        question: "When drinking red wine, are there any varieties you particularly like?",
        answers: [{ button:"PINOT NOIR", value: "pinot noir"} , { button:"SYRAH", value: "syrah"} , { button:"MERLOT", value: "merlot"} , { button:"CABERNET SAUVIGNON", value: "cabernet sauvignon"}, { button:"I DON'T MIND", value: ""} ]
    },
    {
        number: 6,
        type: "chooseMany",
        key: "charactersRed",
        question: "When drinking your red wine, what characteristics do you love?",
        answers: [ { button:"RED FRUITS", value: "red fruits"} ,{ button:"BLACK FRUITS", value: "black fruits"}, { button:"EARTHY", value: "earthy"}, { button:"SPICY", value: "spicy"}, { button:"CHOCOLATE", value: "chocolate"}, { button:"LEATHER", value: "leather"} , { button:"I'M NOT SURE", value: ""} ]
    }
]

const dataWhite = [
    {
        number: 1,
        type: "chooseOne",
        key: "type",
        question: "What's your main wine preference today?",
        answers: [{ button: "RED", value: "red"}, {button: "WHITE", value: "white"},{button:  "ROSE", value: "rose"}, {button: "SPARKLING", value: "sparkling"}, {button: "I'M UP FOR ANYTHING!", value: "na"} ]
    },
    {
        number: 2,
        type: "chooseOne",
        key: "sweet",
        question: "How do you like your wine - bone dry or sweet like sugar?",
        answers: [ { button: "AS DRY AS IT COMES", value: "1"} , { button: "MOSTLY DRY", value: "2"}, { button: "SOMEWHAT SWEET", value: "3"}, { button: "DESSERT LEVEL SWEET", value: "4"}, { button: "I DON'T MIND", value: "na"}]
    },
    {
        number: 3,
        type: "chooseOne",
        key: "body",
        question: "Do you have a preference for the wine's body?",
        answers: [ { button:"PACKS A PUNCH!", value: "full"}, { button:"FULL BUT RESTRAINED", value: "mf"}, { button:"MEDIUM" , value: "medium"}, { button:"LIGHT AND AIRY", value: "light"}, { button:"I DON'T MIND", value: "na"} ]
    },
    {
        number: 4,
        type: "chooseMany",
        key: "traits",
        question: "Are any of these traits important to you?",
        answers: [ { button:"NATURAL/ORGANIC (NO ADDED SULPHIDES)", value: "natural"}, { button:"VEGAN", value: "vegan"}, { button:"VEGETARIAN", value: "vegan"}, { button: "SUSTAINABLE", value: "sustainable"}, { button: "NO PREFERENCE", value: ""}]
    },
    {
        number: 5,
        type: "chooseMany",
        key: "varietalsWhite",
        question: "When drinking white wine, are there any varieties you particularly like?",
        answers: [{ button:"CHARDONNAY", value: "chardonnay"}, { button:"SAUVIGNON BLANC", value: "sauvignon blanc"}, { button:"CHENIN BLANC", value: "chenin blanc"}, { button:"PINOT GRIGIO", value: "pinot grigio"} , { button:"NONE OF THESE", value: "na"} , { button:"I DON'T MIND", value: ""} ]
    },
    {
        number: 6,
        type: "chooseMany",
        key: "charactersWhite",
        question: "When drinking your white or sparkling wine, what characteristics do you love??",
        answers: [ { button:"APPLE/PEAR", value: "apple pear"} , { button:"TROPICAL FRUITS", value: "tropical"}, { button:"FLORAL", value: "floral"} , { button:"HONEY", value: "honey"} , { button:"VANILLA", value: "vanilla"} , { button: "CREAM", value: "cream"}, { button:"NUTTY", value: "nutty"}, { button:"TOAST", value: "toast"}, { button:"CITRUS FRUITS", value: "citrus"}, { button:"I'M NOT SURE", value: ""} ]
    },
]

module.exports = { 
    dataBoth: dataBoth,
    dataRed: dataRed,
    dataWhite: dataWhite, }

