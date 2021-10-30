/* ----- Global type variables declaration ----- */

//User storage
const users = []
//Click counter
    //Visa
    let clicksVisa = 0;
    //Mastercard
    let clicksMastercard = 0;
//User storage in localStorage
let userStorage = JSON.parse(localStorage.getItem('users'));
//User selection ID
const userSelectionId = [];
//User idSelection in localStorage
let userIdSelection = JSON.parse(localStorage.getItem('userIdSelection'));
//User card quantity
let visaCardQuantity = 0;
let mastercardCardQuantity = 0;
//Credit Cards
const visaCards = [];
const mastercardCard = [];
//Visa card storage
let visaCardStorage = JSON.parse(localStorage.getItem('visaCards'));
//Visa card storage
let mastercardCardStorage = JSON.parse(localStorage.getItem('mastercardCards'));
//Function to repeat a function a determinate amount of times
function repeat(fn, times){
    let loop = function(times){
    if (times){
        fn(times);
        loop(--times);
    }
    }
    loop(times);
};
//Last user created
let lastUserCreated =  0;
//CreditCard selected
let creditCardSelected = 0;
//New input added
let newTotalInputValue = 0;
//New due date added
let newDueDateInputValue = 0;
//Remaining cards
let remainingCardsVisa = 0;
let remainingCardsMastercard = 0;
//Updated credit card information
const updatedVisaCardInfo = [];
const updatedMastercardCardInfo = [];