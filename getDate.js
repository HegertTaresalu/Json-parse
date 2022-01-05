exports.getDate = function(){
    let today = new Date();

    let options = {  
        day :"numeric",
        month: "numeric",
        year:"numeric",
        hour:"numeric",
        minute:"numeric"

    }

    let day = today.toLocaleDateString("en-US",options);
    return day;

}