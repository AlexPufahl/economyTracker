/* -- ! -- This script file needs "global.js" and jQuery to work -- ! -- */

//Function that gets the user based on the id of the button pressed
function getUserWithId(user) {
    return user.id === parseInt(userIdSelection);
};
//Storage of selected user
let selectedUser = userStorage.find(getUserWithId);

//Applies the username to the welcome text
$("#welcomeUser").html(`Welcome, ${selectedUser.name}`);

//Modifies the text of user expended amount
$("#userExpendedEntertainmentHome").html(selectedUser.entertainmentExpended)
if (selectedUser.entertainmentExpended < `${selectedUser.entertainmentExpenses}` && selectedUser.entertainmentExpended != 0) {
    $("#userExpendedEntertainmentHome").addClass("text-success")
} else if (selectedUser.entertainmentExpended > `${selectedUser.entertainmentExpenses}`) {
    $("#userExpendedEntertainmentHome").addClass("text-danger")
} else {
    $("#userExpendedEntertainmentHome").addClass("")
}

$("#userExpendedGroceriesHome").html(selectedUser.groceriesExpended)
if (selectedUser.groceriesExpended < `${selectedUser.groceriesExpenses}` && selectedUser.groceriesExpended != 0) {
    $("#userExpendedGroceriesHome").addClass("text-success")
} else if (selectedUser.groceriesExpended > `${selectedUser.groceriesExpenses}` && selectedUser.groceriesExpended != 0) {
    $("#userExpendedGroceriesHome").addClass("text-danger")
} else {
    $("#userExpendedGroceriesHome").addClass("")
}

$("#userExpendedServicesHome").html(selectedUser.servicesExpended)
if (selectedUser.servicesExpended < `${selectedUser.servicesExpenses}` && selectedUser.servicesExpended != 0) {
    $("#userExpendedServicesHome").addClass("text-success")
} else if (selectedUser.servicesExpended > `${selectedUser.servicesExpenses}` && selectedUser.servicesExpended != 0) {
    $("#userExpendedServicesHome").addClass("text-danger")
} else {
    $("#userExpendedServicesHome").addClass("")
}


//Modifies the text of the user targeted expenses
$("#userTargetEntertainment").html(`${selectedUser.entertainmentExpenses}`);
$("#userTargetGroceries").html(`${selectedUser.groceriesExpenses}`);
$("#userTargetServices").html(`${selectedUser.servicesExpenses}`);

//Credit card generator
    //Function to generate VISA card
    function generateVisaCard() {   
        $("#visaCard").append(`<button class="btn p-0 m-0" data-toggle="pill" href="#v-pills-creditCards" role="tab" aria-controls="v-pills-creditCards" aria-selected="false"><img src="../assets/visa__card.svg" class="img-fluid" alt="Mastercard Card"></img></button>`)
        $("#creditCardsTitle").addClass("d-block")
    };
    //Repeated the user declared amount of times needed
    repeat(generateVisaCard, selectedUser.visaCard);
    //Function to generate MasterCard card
    function generateMastercardCard() {   
        $("#mastercardCard").append(`<button class="btn p-0 m-0" data-toggle="pill" href="#v-pills-creditCards" role="tab" aria-controls="v-pills-creditCards" aria-selected="false"><img src="../assets/mastercard__card.svg" class="img-fluid" alt="Mastercard Card"></img></button>`)
        $("#creditCardsTitle").addClass("d-block")
    };
    //Repeated the user declared amount of times needed
    repeat(generateMastercardCard, selectedUser.mastercardCard);
//Input generation for expense calculator section
    //Entertainment
        //Add new expense input
        $("#entertainmentAddExpense").click(function addNewInput() {
            $("#newExpenseEntertainment").append(`<div id="addNewExpenseEntertainmentUI" class="input-group mb-3">
                                                    <form class="d-flex">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text" id="basic-addon1">$</span>
                                                        </div>
                                                        <input id="newExpenseEntertainmentInput" type="number" class="form-control" placeholder="Enter your new expense" aria-label="Enter your new expense" aria-describedby="basic-addon2">
                                                        <div class="input-group-append">
                                                            <button id="addNewExpenseEntertainment" class="btn btn-outline-secondary" type="submit">Enter</button>
                                                        </div>
                                                    </form>
                                                </div>`)
                                                //Control information of new expense input
                                                $("#addNewExpenseEntertainment").click(function sendNewExpenseEntertainment(event) {
                                                    event.preventDefault()
                                                    $("#totalEntertainmentExpended").addClass("d-block")
                                                    let valueOfInput = $("#newExpenseEntertainmentInput").val();
                                                    selectedUser.entertainmentExpended += parseFloat(valueOfInput);                                                    
                                                    $("#expendedEntertainment").append(`<h3 class="text-muted ml-3">$${valueOfInput}</h3>`);
                                                    $("#addNewExpenseEntertainmentUI").remove();
                                                    let totalExpendedEntertainment = selectedUser.entertainmentExpended;
                                                    $("#showTotalEntertainmentExpended").html(totalExpendedEntertainment)
                                                    function updateValues(user) {
                                                        localStorage.setItem(`users`, JSON.stringify(user));
                                                    }
                                                    updateValues([selectedUser]);
                                                    //Modifies the text of user expended amount
                                                    $("#userExpendedEntertainmentHome").html(selectedUser.entertainmentExpended)
                                                })
        })
        //Groceries
        //Add new expense input
            $("#groceriesAddExpense").click(function addNewInput() {
            $("#newExpenseGroceries").append(`<div id="addNewExpenseGroceriesUI" class="input-group mb-3">
                                                    <form class="d-flex">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text" id="basic-addon1">$</span>
                                                        </div>
                                                        <input id="newExpenseGroceriesInput" type="number" class="form-control" placeholder="Enter your new expense" aria-label="Enter your new expense" aria-describedby="basic-addon2">
                                                        <div class="input-group-append">
                                                            <button id="addNewExpenseGroceries" class="btn btn-outline-secondary" type="submit">Enter</button>
                                                        </div>
                                                    </form>
                                                </div>`)
                                                //Control information of new expense input
                                                $("#addNewExpenseGroceries").click(function sendNewExpenseGroceries(event) {
                                                    event.preventDefault()
                                                    $("#totalGroceriesExpended").addClass("d-block")
                                                    let valueOfInput = $("#newExpenseGroceriesInput").val();
                                                    selectedUser.groceriesExpended += parseFloat(valueOfInput);                                                    
                                                    $("#expendedGroceries").append(`<h3 class="text-muted ml-3">$${valueOfInput}</h3>`);
                                                    $("#addNewExpenseGroceriesUI").remove();
                                                    let totalExpendedGroceries = selectedUser.groceriesExpended;
                                                    $("#showTotalGroceriesExpended").html(totalExpendedGroceries)
                                                    function updateValues(user) {
                                                        localStorage.setItem(`users`, JSON.stringify(user));
                                                    }
                                                    updateValues([selectedUser]);
                                                    $("#userExpendedGroceriesHome").html(selectedUser.groceriesExpended)
                                                })
        })
        //Services
        //Add new expense input
        $("#servicesAddExpense").click(function addNewInput() {
            $("#newExpenseServices").append(`<div id="addNewExpenseServicesUI" class="input-group mb-3">
                                                    <form class="d-flex">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text" id="basic-addon1">$</span>
                                                        </div>
                                                        <input id="newExpenseServicesInput" type="number" class="form-control" placeholder="Enter your new expense" aria-label="Enter your new expense" aria-describedby="basic-addon2">
                                                        <div class="input-group-append">
                                                            <button id="addNewExpenseServices" class="btn btn-outline-secondary" type="submit">Enter</button>
                                                        </div>
                                                    </form>
                                                </div>`)
                                                //Control information of new expense input
                                                $("#addNewExpenseServices").click(function sendNewExpenseServices(event) {
                                                    event.preventDefault()
                                                    $("#totalServicesExpended").addClass("d-block")
                                                    let valueOfInput = $("#newExpenseServicesInput").val();
                                                    selectedUser.servicesExpended += parseFloat(valueOfInput);                                                    
                                                    $("#expendedServices").append(`<h3 class="text-muted ml-3">$${valueOfInput}</h3>`);
                                                    $("#addNewExpenseServicesUI").remove();
                                                    let totalExpendedServices = selectedUser.servicesExpended;
                                                    $("#showTotalServicesExpended").html(totalExpendedServices);
                                                    function updateValues(user) {
                                                        localStorage.setItem(`users`, JSON.stringify(user));
                                                    }
                                                    updateValues([selectedUser]);
                                                    $("#userExpendedServicesHome").html(selectedUser.servicesExpended)                              
                                                })
        })
//Credit card section card generation
    //Get user card with ID
    function getUserCardsWithId(user) {
        return user.idUser === parseInt(userIdSelection);
    };
    //Visa card generation
    $(function() {
        for (const visaCard of visaCardStorage) {
            $(".visa").append(`<div class="btn col-12 col-md-5 card bg-dark m-2 align-items-center">
                                    <button id="${visaCard.idCard}" class="creditCardButton ${visaCard.idCard} bg-transparent btn">
                                        <img class="img-fluid" src="../assets/visa__card.svg" alt="Visa Card"></img>
                                        <div class="textCard d-flex justify-content-around mb-5">
                                        <div class="totalCard text-white"><h2><span>$${visaCard.totalExpended}</span><p class="small">Total Expended</p></h2></div>
                                        <div class="dueCard text-white"><h2><span>${visaCard.dueDate}</span><p class="small">Payment due</p></h2></div>
                                    </button>
                                    <div class="row d-flex flex-column flex-md-row justify-content-center">
                                        <div id="totalExpendedCard${visaCard.idCard}"></div>
                                        <div id="dueDateCard${visaCard.idCard}"></div>
                                    </div>                                    
                                </div>`)};
    });
    //Mastercard card generation
    $(function() {
        for (const mastercardCard of mastercardCardStorage) {
            $(".mastercard").append(`<div class="btn col-12 col-md-5 card bg-dark m-2 align-items-center">
                                        <button id="${mastercardCard.idCard}" class="creditCardButton ${mastercardCard.idCard} bg-transparent btn">
                                            <img class="img-fluid" src="../assets/mastercard__card.svg" alt="Visa Card"></img>
                                            <div class="textCard d-flex justify-content-around mb-5">
                                            <div class="totalCard text-white"><h2><span>$${mastercardCard.totalExpended}</span><p id="totalExpendedCard" class="small">Total Expended</p></h2></div>
                                            <div class="dueCard text-white"><h2><span>${mastercardCard.dueDate}</span><p class="small">Payment due</p></h2></div>
                                        </button>
                                        <div class="d-flex flex-column flex-md-row justify-content-center">
                                        <div id="totalExpendedCard${mastercardCard.idCard}"></div>
                                        <div id="dueDateCard${mastercardCard.idCard}"></div>
                                    </div>  
                                    </div>`)};
    });
//Add UI to modify due date and total expended
$(function() {
    $('.creditCardButton').click(
        function registerCardId(event){
            event.preventDefault()
            //Store selected card
            creditCardSelected = parseInt((event.currentTarget.id));
            //Render UI

            //Total expended
            $("#" + "totalExpendedCard" + `${creditCardSelected}`).html(`<form class="d-flex m-2 ">
                                                                            <div class="input-group-prepend">
                                                                                <span class="input-group-text" id="basic-addon1">$</span>
                                                                            </div>
                                                                            <input id="InputNewTotalCard${creditCardSelected}" type="number" class="form-control" placeholder="Enter your new total expended" aria-label="Enter your new total expended" aria-describedby="basic-addon2">
                                                                            <div class="input-group-append">
                                                                                <button id="btnAddNewTotalCard${creditCardSelected}" class="btn btn-outline-secondary" type="submit">Enter</button>
                                                                            </div>
                                                                        </form>`);
            //Due date
            $("#" + "dueDateCard" + `${creditCardSelected}`).html(`<form class="d-flex m-2">
                                                                            <input id="inputAddNewDueDate${creditCardSelected}" type="date" class="form-control" placeholder="Enter your new due date" aria-label="Enter your new due date" aria-describedby="basic-addon2">
                                                                            <div class="input-group-append">
                                                                                <button id="btnAddNewDueDate${creditCardSelected}" class="btn btn-outline-secondary" type="submit">Enter</button>
                                                                            </div>
                                                                        </form>`);
            //Add new total expended
            $("#" + "btnAddNewTotalCard" + `${creditCardSelected}`).click(function updateCreditCard(event) {
                event.preventDefault();
                let newTotalCardValue = $("#" + "InputNewTotalCard" + `${creditCardSelected}`).val();
                newTotalInputValue = newTotalCardValue;
                //Get cards with id function
                function getCardsWithId(card) {
                    return card.idCard === parseInt(creditCardSelected);
                };
                //VISA
                visaCardSelectedToUpdate = visaCardStorage.find(getCardsWithId);
                if (visaCardSelectedToUpdate != undefined) {
                    visaCardSelectedToUpdate.totalExpended = newTotalInputValue;                                                 
                    localStorage.setItem(`visaCards`, JSON.stringify([visaCardSelectedToUpdate]))
                    location.reload();
                }
                //MASTERCARD
                mastercardCardSelectedToUpdate = mastercardCardStorage.find(getCardsWithId);
                if (mastercardCardSelectedToUpdate != undefined) {
                    mastercardCardSelectedToUpdate.totalExpended = newTotalInputValue;
                    localStorage.setItem(`mastercardCards`, JSON.stringify([mastercardCardSelectedToUpdate]))
                    location.reload();
                }
            })
            //Add new due date
            $("#" + "btnAddNewDueDate" + `${creditCardSelected}`).click(function updateCreditCard(event) {
                event.preventDefault();
                let newDueDateCardValue = $("#" + "inputAddNewDueDate" + `${creditCardSelected}`).val();
                newDueDateInputValue = newDueDateCardValue;
                //Get cards with id function
                function getCardsWithId(card) {
                    return card.idCard === parseInt(creditCardSelected);
                };
                //VISA
                visaCardSelectedToUpdate = visaCardStorage.find(getCardsWithId);
                if (visaCardSelectedToUpdate != undefined) {
                    visaCardSelectedToUpdate.dueDate = newDueDateInputValue;                                                 
                    localStorage.setItem(`visaCards`, JSON.stringify([visaCardSelectedToUpdate]))
                    location.reload();
                }
                //MASTERCARD
                mastercardCardSelectedToUpdate = mastercardCardStorage.find(getCardsWithId);
                if (mastercardCardSelectedToUpdate != undefined) {
                    mastercardCardSelectedToUpdate.dueDate = newDueDateInputValue;                                                 
                    localStorage.setItem(`mastercardCards`, JSON.stringify([mastercardCardSelectedToUpdate]))
                    location.reload();
                }

            })                                                                            
        }
    );        
})
//Delete all localStorageData
$("#deleteAllData").click(function(){
    localStorage.clear();
})
//Close session
$("#closeSession").click(function() {
    location.href="../index.html"
})