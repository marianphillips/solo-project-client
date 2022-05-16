const data = [ 
    {
        number: 1,
        type: "chooseOne",
        key: "type",
        question: "What is your preference of type today?",
        answers: ["RED", "WHITE", "ROSE", "SPARKLING", "DON'T MIND"]
    },
    {
        number: 2,
        type: "chooseOne",
        key: "flavour",
        question: "When is comes to flavours, strong and bold or delicate and subtle?",
        answers: ["BOLD", "SUBTLE", "IN THE MIDDLE", "DON'T MIND"]
    },
    {
        number: 3,
        type: "chooseOne",
        key: "body",
        question: "Do you have a preference to the wine's body?",
        answers: ["FULL BODIED", "MEDIUM BODIED", "LIGTHER BODIED", "DON'T MIND"]
    },
    {
        number: 4,
        type: "chooseMany",
        key: "traits",
        question: "Let know if any of these traits are important to you?",
        answers: ["NATURAL (NO SUPLHIDES)", "VEGAN", "VEGTARIAN", "ORGANIC", "DON'T MIND"]
    },
    {
        number: 5,
        type: "chooseMany",
        key: "varietalsRed",
        question: "Any varietals you particularly like (red)?",
        answers: ["PINOT NOIR", "MALBEC", "MERLOT", "CABERNET SAUVIGNON", "DON'T MIND"]
    },
    {
        number: 6,
        type: "chooseMany",
        key: "varietalsWhite",
        question: "Any varietals you particularly like(white, rose and sparkling)?",
        answers: ["CHARDONNAY", "SAUVIGNON BLANC", "PINOT GRIGIO", "MUSCADET", "DON'T MIND"]
    },
    {
        number: 7,
        type: "chooseMany",
        key: "charactersRed",
        question: "Any characteristics you look for (red)?",
        answers: ["FRUITY", "EARTHY", "CHERRY", "LEATHER"]
    },
    {
        number: 8,
        type: "chooseMany",
        key: "charactersWhite",
        question: "Any characteristics you look for (white, rose and sparkling)?",
        answers: ["OAK", "DRY", "FRUITY", "FLORAL", "CITRUS", "FLORAL"]
    },
]

module.exports = data