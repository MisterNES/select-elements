console.log("This is my profile page!");

window.addEventListener("DOMContentLoaded", event => {
    let name = document.createElement("h1");
    name.innerText = "Nathan & Megan";
    document.body.appendChild(name);

    let listHeader = document.createElement("h2");
    listHeader.innerText = "Stuff about us!";
    document.body.appendChild(listHeader);


    let listItem1 = document.createElement("li");
    listItem1.innerText = "Megan likes to knit.";
    listHeader.appendChild(listItem1);

    let listItem2 = document.createElement("li");
    listItem2.innerText = "Nathan likes to play video games.";
    listHeader.appendChild(listItem2);

    let listItem3 = document.createElement("li");
    listItem3.innerText = "Megan's favorite color is green.";
    listHeader.appendChild(listItem3);

    let listItem4 = document.createElement("li");
    listItem4.innerText = "Nathan's favorite color is black.";
    listHeader.appendChild(listItem4);
})