/* -- ! -- This script file needs "global.js" and jQuery to work -- ! -- */

//User creation Class
class Users {
    constructor(id, name, salary, entertainmentExpenses, groceriesExpenses, servicesExpenses, visaCard, mastercardCard, entertainmentExpended, groceriesExpended, servicesExpended) {
      this.id = id
      this.name = name;
      this.salary = salary;
      this.entertainmentExpenses = entertainmentExpenses;
      this.groceriesExpenses = groceriesExpenses;
      this.servicesExpenses = servicesExpenses;
      this.visaCard = visaCard;
      this.mastercardCard = mastercardCard;
      this.entertainmentExpended = entertainmentExpended;
      this.groceriesExpended = groceriesExpended;
      this.servicesExpended = servicesExpended;
    }
}
//Credit Card adition
    //Visa Card
    $("#visaCard").click(function addVisaCard(event) {
        event.preventDefault();
        //Add
        clicksVisa = 1;
        $("#visaCardText").html(`<span class="badge badge-light mr-2">${clicksVisa}</span>Add VISA card`);
        $(".deleteVisa").html(`<a id="deleteCardVisa" class="text-danger text-center mt-2 mb-5">Delete card</a>`);
        //Delet card
        $("#deleteCardVisa").click(function deleteVisaCard() {
            clicksVisa = 0;
            $("#visaCardText").html(`Add VISA card`);
            $("#deleteCardVisa").remove()
        })
        return clicksVisa;
    })
    //Mastercard
    $("#mastercardCard").click(function addMastercardCard(event) {
        event.preventDefault();
        //Add
        clicksMastercard = 1;
        $("#mastercardCardText").html(`<span class="badge badge-light mr-2">${clicksMastercard}</span>Add MasterCard card`);
        $(".deleteMastercard").html(`<a id="deleteCardMastercard" class="text-danger text-center mt-2 mb-5">Delete card</a>`);
        //Delete
        $("#deleteCardMastercard").click(function deleteMastercardCard() {
            clicksMastercard = 0;
            $("#mastercardCardText").html(`Add MasterCard card`)
            $("#deleteCardMastercard").remove()
        })
        return clicksMastercard;
    })

    //Visa creation Class
    class VisaCard {
        constructor(idUser, idCard , totalExpended , dueDate, cardType) {
          this.idUser = idUser;
          this.idCard = idCard;
          this.totalExpended = totalExpended;
          this.dueDate = dueDate;
          this.cardType = cardType;
        }
    }
    //Generate new VISA Card object with class "VisaGenerator"
    function generateNewVisaCard () {
        let createNewVisaCard = new VisaCard(lastUserCreated.id, Math.floor((Math.random() * 10000) + 1), `XXXX`, `XX/XXXX`, `visa`)
        visaCards.push(createNewVisaCard)
        return createNewVisaCard
    }
    //Mastercard creation Class
    class MastercardCard {
        constructor(idUser, idCard , totalExpended , dueDate, cardType) {
          this.idUser = idUser;
          this.idCard = idCard;
          this.totalExpended = totalExpended;
          this.dueDate = dueDate;
          this.cardType = cardType;
        }
    }    //Generate new MasterCard Card object with class "MastercardGenerator"
    function generateNewMastercardCard () {
        let createNewMastercardCard = new MastercardCard(lastUserCreated.id, Math.floor((Math.random() * 10000) + 1), `XXXX`, `XX/XXXX`, `mastercard`)
        mastercardCard.push(createNewMastercardCard)
        return createNewMastercardCard
    }



// User activate "btnCreateUser", triggers "newUserDataCollection" and create new User
$("#btnCreateUser").click(
    function newUserDataCollection(event){
        event.preventDefault();
        users.push(new Users(Math.floor((Math.random() * 15000) + 1), $("#userNameInput").val(), $("#userSalaryInput").val(), $("#userEntertainmentExpensesInput").val(), $("#userGroceriesExpensesInput").val(), $("#userServicesExpensesInput").val(), clicksVisa, clicksMastercard, 0, 0, 0));
        lastUserCreated = users[users.length - 1];
        localStorage.setItem('users',JSON.stringify(users));
        repeat(generateNewVisaCard, lastUserCreated.visaCard )
        repeat(generateNewMastercardCard, lastUserCreated.mastercardCard )
        localStorage.setItem(`visaCards`, JSON.stringify(visaCards))
        localStorage.setItem(`mastercardCards`, JSON.stringify(mastercardCard))
        location.href="../index.html"
    }
);