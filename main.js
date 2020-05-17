const people = [
    {firstName: "Giancarlo", lastName: "Cavalli", job: "Consultor Técnico", country: "Brasil"},
    {firstName: "Ray", lastName: "Dalio", job: "Hedge Fund Company", country: "USA"},
    {firstName: "Anthony", lastName: "Robbins", job: "The great life coach", country: "USA"},
    {firstName: "Gabriel", lastName: "Goffi", job: "Education Startup CEO", country: "Brasil"},
    {firstName: "Sérgio", lastName: "Moro", job: "Former justice minister of BR Gov.", country: "Brasil"},
    {firstName: "Gary", lastName: "Vaynerchuck", job: "Entrepeneur and social media influencer", country: "Russia->USA"},
    {firstName: "Fábio", lastName: "Akita", job: "Programmer and youtuber", country: "Brasil"}

]

function presentPerson(firstName) {
    for(let i in people) {
        if(people[i].firstName == firstName) {
            const person = people[i];
            display(person);
            toggleSelectedName(person.firstName);
            break;
        }
    }
}

function display(person) {
    const infoPanel = document.getElementById("infoPanel");
    infoPanel.innerHTML=`Name: ${person.firstName} ${person.lastName}<br>`;
    infoPanel.innerHTML+=`Job: ${person.job}<br>`;
    infoPanel.innerHTML+=`Country: ${person.country}<br>`;
}

function toggleSelectedName(aTagId){
    const aTags = document.getElementsByTagName("a");
    for(let i in aTags) {
        aTags.item(i).setAttribute("class","sidenavElement");
    }
    const aTag = document.getElementById(`${aTagId}`);
    aTag.setAttribute("class","sidenavSelected");
}