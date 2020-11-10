var pageID;
var page01, page02, page03;

// Initializes the page-controller script on load
function init() {
    pageID = 1;
    page01 = document.getElementById("page01");
    page02 = document.getElementById("page02");
    page03 = document.getElementById("page03");
    pageTracker();
}

// Takes a pageID and changes the page to the next page
function pageChanger(id) {
    pageID++;
    console.log("PageID:", pageID);
    console.log("ID:", id);
    switch (id) {
        case 1: toggleShow(page01, page02); break;
        case 2: toggleShow(page02, page03); break;
        
        default: console.log("Error! ID is not valid or out of range");
    }
}

// Toggles the page content
function toggleShow(hide, show) {

    console.log(hide);

    if (hide.style.display === "none") {
        hide.style.display = "block";
    } else {
        hide.style.display = "none";
    }

    console.log(show);

    if (show.style.display === "block") {
        show.style.display = "none";
    } else {
        show.style.display = "block";
    }

    pageTracker();
}

// Draws the page tracker at the bottom of the page
function pageTracker() {
    var content = document.getElementById('page-tracker');
    var html = '';

    for (var page = 1; page <= 3; page++) {
        if (pageID === page) {
            html += '<i style="color: #ff0053" class="fas fa-circle"></i>';
        } else {
            html += '<i class="far fa-circle"></i>';
        }
    }
    content.innerHTML = html;
}
