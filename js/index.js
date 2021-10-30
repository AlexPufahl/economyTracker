/* -- ! -- This script file needs "global.js" and jQuery to work -- ! -- */

//User buttons creation
for (const user of userStorage) {
    $("#userGeneration").prepend(`<buttonn href="pages/home.html" id="${user.id}" class="btn btn-lg btn-dark btn-block mt-4 btnUser"><i class="bi bi-person mr-1"></i>${user.name}</button>`)
}
//Get id of user clicked
$('.btnUser').click(
    function registerUserIdAndRedirect(event){
        userSelectionId.push(event.target.id);
        localStorage.setItem('userIdSelection',JSON.stringify(userSelectionId));
        location.href="pages/home.html"}
);