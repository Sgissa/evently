import { changePageContent } from "../app/model.js";



function initListeners(){
    $("nav #links a").on("click", function(e){
        let btnID = e.currentTarget.id;
        changePageContent(btnID)

        // console.log("click" , btnID);
    })
}




$(document).ready(function(){
    initListeners();
    changePageContent("home");
})