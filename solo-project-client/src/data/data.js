const dataBoth = [
  {
    number: 1,
    type: "chooseOne",
    key: "type",
    question: "What's your main wine preference today?",
    answers: [
      { button: "RED", value: "red" },
      { button: "WHITE", value: "white" },
      { button: "ROSE", value: "rose" },
      { button: "SPARKLING", value: "sparkling" },
      { button: "I'M UP FOR ANYTHING!", value: "na" },
    ],
  },
  {
    number: 2,
    type: "chooseOne",
    key: "sweet",
    question: "How do you like your wine - bone dry or sweet like sugar?",
    answers: [
      { button: "AS DRY AS IT COMES", value: "dry" },
      { button: "MOSTLY DRY", value: "off dry" },
      { button: "SOMEWHAT SWEET", value: "off dry also" },
      { button: "DESSERT LEVEL SWEET", value: "sweet" },
      { button: "I DON'T MIND", value: "na" },
    ],
  },
  {
    number: 3,
    type: "chooseOne",
    key: "body",
    question: "Do you have a preference for the wine's body?",
    answers: [
      { button: "PACKS A PUNCH!", value: "full bodied" },
      { button: "FULL BUT RESTRAINED", value: "medium full" },
      { button: "MEDIUM", value: "medium" },
      { button: "LIGHT AND AIRY", value: "light" },
      { button: "I DON'T MIND", value: "na" },
    ],
  },
  {
    number: 4,
    type: "chooseMany",
    key: "traits",
    question: "Are any of these traits important to you?",
    answers: [
      { button: "NATURAL/ORGANIC (NO ADDED SULPHIDES)", value: "natural" },
      { button: "VEGAN", value: "vegan" },
      { button: "VEGETARIAN", value: "veg" },
      { button: "SUSTAINABLE", value: "sustainable" },
      { button: "NO PREFERENCE", value: "" },
    ],
  },
  {
    number: 5,
    type: "chooseMany",
    key: "varietals",
    question:
      "When drinking red wine, are there any varieties you particularly like?",
    answers: [
      { button: "PINOT NOIR", value: "Pinot Noir" },
      { button: "SYRAH", value: "Syrah" },
      { button: "MERLOT", value: "Merlot" },
      { button: "CABERNET SAUVIGNON", value: "Cabernet Sauvignon" },
      { button: "I DON'T MIND", value: "" },
    ],
  },
  {
    number: 6,
    type: "chooseMany",
    key: "varietals",
    question:
      "When drinking white wine, are there any varieties you particularly like?",
    answers: [
      { button: "CHARDONNAY", value: "Chardonnay" },
      { button: "SAUVIGNON BLANC", value: "Sauvignon Blanc" },
      { button: "CHENIN BLANC", value: "Chenin Blanc" },
      { button: "PINOT GRIGIO", value: "Pinot Grigio" },
      { button: "NONE OF THESE", value: "none" },
      { button: "I DON'T MIND", value: "na" },
    ],
  },
  {
    number: 7,
    type: "chooseMany",
    key: "characteristics",
    question: "When drinking your red wine, what characteristics do you love?",
    answers: [
      { button: "RED FRUITS", value: "red fruit" },
      { button: "BLACK FRUITS", value: "black fruit" },
      { button: "FLORAL (EG. VIOLET/ROSE)", value: "floral" },
      { button: "JAMMY FRUIT", value: "jam" },
      { button: "EARTHY", value: "earthy" },
      { button: "PEPPER", value: "pepper" },
      { button: "OAK SPICE (EG.CLOVES/CINNAMON)", value: "spice" },
      { button: "CHOCOLATE", value: "chocolate" },
      { button: "COFFEE", value: "coffee" },
      { button: "LEATHER", value: "leather" },
      { button: "FOREST", value: "forest" },
      { button: "TOBACCO", value: "tobacco" },
      { button: "I'M NOT SURE", value: "" },
    ],
  },
  {
    number: 8,
    type: "chooseMany",
    key: "characteristics",
    question:
      "When drinking your white or sparkling wine, what characteristics do you love??",
    answers: [
      { button: "APPLE/PEAR", value: "apple pear" },
      { button: "TROPICAL FRUITS", value: "tropical" },
      { button: "STONE FRUITS", value: "stone" },
      { button: "CITRUS FRUITS", value: "citrus" },
      { button: "FLORAL (EG. BLOSSOM/ELDERFLOWER)", value: "floral" },
      { button: "MINERALITY", value: "minerality" },
      { button: "HONEY", value: "honey" },
      { button: "NUTMEG/CLOVE", value: "nutmeg" },
      { button: "VANILLA", value: "vanilla" },
      { button: "SMOKE", value: "smoke" },
      { button: "BUTTER/CREAM", value: "cream" },
      { button: "NUTTY", value: "nutty" },
      { button: "TOAST", value: "toast" },
      { button: "OAK", value: "oak" },
      { button: "I'M NOT SURE", value: "na" },
    ],
  },
];

const dataRed = [
  {
    number: 1,
    type: "chooseOne",
    key: "type",
    question: "What's your main wine preference today?",
    answers: [
      { button: "RED", value: "red" },
      { button: "WHITE", value: "white" },
      { button: "ROSE", value: "rose" },
      { button: "SPARKLING", value: "sparkling" },
      { button: "I'M UP FOR ANYTHING!", value: "na" },
    ],
  },
  {
    number: 2,
    type: "chooseOne",
    key: "sweet",
    question: "How do you like your wine - bone dry or sweet like sugar?",
    answers: [
      { button: "AS DRY AS IT COMES", value: "dry" },
      { button: "MOSTLY DRY", value: "off dry" },
      { button: "SOMEWHAT SWEET", value: "off dry also" },
      { button: "DESSERT LEVEL SWEET", value: "sweet" },
      { button: "I DON'T MIND", value: "na" },
    ],
  },
  {
    number: 3,
    type: "chooseOne",
    key: "body",
    question: "Do you have a preference for the wine's body?",
    answers: [
      { button: "PACKS A PUNCH!", value: "full bodied" },
      { button: "FULL BUT RESTRAINED", value: "medium full" },
      { button: "MEDIUM", value: "medium" },
      { button: "LIGHT AND AIRY", value: "light" },
      { button: "I DON'T MIND", value: "na" },
    ],
  },
  {
    number: 4,
    type: "chooseMany",
    key: "traits",
    question: "Are any of these traits important to you?",
    answers: [
      { button: "NATURAL/ORGANIC (NO ADDED SULPHIDES)", value: "natural" },
      { button: "VEGAN", value: "vegan" },
      { button: "VEGETARIAN", value: "veg" },
      { button: "SUSTAINABLE", value: "sustainable" },
      { button: "NO PREFERENCE", value: "" },
    ],
  },
  {
    number: 5,
    type: "chooseMany",
    key: "varietals",
    question:
      "When drinking red wine, are there any varieties you particularly like?",
    answers: [
      { button: "PINOT NOIR", value: "Pinot Noir" },
      { button: "SYRAH", value: "Syrah" },
      { button: "MERLOT", value: "Merlot" },
      { button: "CABERNET SAUVIGNON", value: "Cabernet Sauvignon" },
      { button: "I DON'T MIND", value: "" },
    ],
  },
  {
    number: 6,
    type: "chooseMany",
    key: "characteristics",
    question: "When drinking your red wine, what characteristics do you love?",
    answers: [
      { button: "RED FRUITS", value: "red fruit" },
      { button: "BLACK FRUITS", value: "black fruit" },
      { button: "FLORAL (EG. VIOLET/ROSE)", value: "floral" },
      { button: "JAMMY FRUIT", value: "jammy" },
      { button: "EARTHY", value: "earthy" },
      { button: "PEPPER", value: "pepper" },
      { button: "OAK SPICE (EG.CLOVES/CINNAMON)", value: "spice" },
      { button: "CHOCOLATE", value: "chocolate" },
      { button: "COFFEE", value: "coffee" },
      { button: "LEATHER", value: "leather" },
      { button: "FOREST", value: "forest" },
      { button: "TOBACCO", value: "tobacco" },
      { button: "I'M NOT SURE", value: "" },
    ],
  },
];

const dataWhite = [
  {
    number: 1,
    type: "chooseOne",
    key: "type",
    question: "What's your main wine preference today?",
    answers: [
      { button: "RED", value: "red" },
      { button: "WHITE", value: "white" },
      { button: "ROSE", value: "rose" },
      { button: "SPARKLING", value: "sparkling" },
      { button: "I'M UP FOR ANYTHING!", value: "na" },
    ],
  },
  {
    number: 2,
    type: "chooseOne",
    key: "sweet",
    question: "How do you like your wine - bone dry or sweet like sugar?",
    answers: [
      { button: "AS DRY AS IT COMES", value: "dry" },
      { button: "MOSTLY DRY", value: "off dry" },
      { button: "SOMEWHAT SWEET", value: "off dry also" },
      { button: "DESSERT LEVEL SWEET", value: "sweet" },
      { button: "I DON'T MIND", value: "na" },
    ],
  },
  {
    number: 3,
    type: "chooseOne",
    key: "body",
    question: "Do you have a preference for the wine's body?",
    answers: [
      { button: "PACKS A PUNCH!", value: "full bodied" },
      { button: "FULL BUT RESTRAINED", value: "medium full" },
      { button: "MEDIUM", value: "medium" },
      { button: "LIGHT AND AIRY", value: "light" },
      { button: "I DON'T MIND", value: "na" },
    ],
  },
  {
    number: 4,
    type: "chooseMany",
    key: "traits",
    question: "Are any of these traits important to you?",
    answers: [
      { button: "NATURAL/ORGANIC (NO ADDED SULPHIDES)", value: "natural" },
      { button: "VEGAN", value: "vegan" },
      { button: "VEGETARIAN", value: "veg" },
      { button: "SUSTAINABLE", value: "sustainable" },
      { button: "NO PREFERENCE", value: "" },
    ],
  },
  {
    number: 5,
    type: "chooseMany",
    key: "varietals",
    question:
      "When drinking white wine, are there any varieties you particularly like?",
    answers: [
      { button: "CHARDONNAY", value: "Chardonnay" },
      { button: "SAUVIGNON BLANC", value: "Sauvignon Blanc" },
      { button: "CHENIN BLANC", value: "Chenin Blanc" },
      { button: "PINOT GRIGIO", value: "Pinot Grigio" },
      { button: "NONE OF THESE", value: "none" },
      { button: "I DON'T MIND", value: "" },
    ],
  },
  {
    number: 6,
    type: "chooseMany",
    key: "characteristics",
    question:
      "When drinking your white or sparkling wine, what characteristics do you love??",
    answers: [
      { button: "APPLE/PEAR", value: "apple" },
      { button: "TROPICAL FRUITS", value: "tropical" },
      { button: "STONE FRUITS", value: "stone" },
      { button: "CITRUS FRUITS", value: "citrus" },
      { button: "FLORAL (EG. BLOSSOM/ELDERFLOWER)", value: "floral" },
      { button: "MINERALITY", value: "minerality" },
      { button: "HONEY", value: "honey" },
      { button: "NUTMEG/CLOVE", value: "nutmeg" },
      { button: "VANILLA", value: "vanilla" },
      { button: "SMOKE", value: "smoke" },
      { button: "BUTTER/CREAM", value: "cream" },
      { button: "NUTTY", value: "nutty" },
      { button: "TOAST", value: "toast" },
      { button: "OAK", value: "oak" },
      { button: "I'M NOT SURE", value: "" },
    ],
  },
];

module.exports = {
  dataBoth: dataBoth,
  dataRed: dataRed,
  dataWhite: dataWhite,
};
