window.onload = function() {
    var search = window.location.search;
    var items = search.substring(1).split("&");

    var object = {};
    for (let i in items) {
        var values = items[i].split("=");
        object[values[0]] = values[1];
    };

    console.log(object);

    document.getElementById('welcomeUser').innerHTML = "Hello, " + object.fname + " " + object.lname + "!";
    
    function getMembership(p) {
        if (p == "1") {
            return "Silver"
        } else if (p == "2") {
            return "Gold"
        } else if (p == "3") {
            return "Platinum"
        }
    }

    var status = object.premium;
    if (status) {
        document.getElementById('membershipStatus').innerHTML = "You are our premium member, with " + getMembership(object.membership) + " membership!";
    }
}