const apiData = []

const getData = () => {

    const endPoint = "https://api.mediehuset.net/sdg/goals";

    fetch(endPoint)
    .then((response) => {

        return response.json();

    })
    .then((data) => {
        // console.log("data", data);
        apiData.push(...data.items);

        // console.log("apiData", apiData);
    })
    .catch((error) => { //Error catching

        console.error(error);

    })
    .finally(
        () => {
            document.getElementById("mother").innerHTML = "";
             apiData.map((card, i) => renderCards(card, i))
    });
};

const getDetail = (id) => {
    console.log(id);
let idData = "";
    
const apiendPoint = `https://api.mediehuset.net/sdg/goals/${id}`;
    fetch(apiendPoint)
    .then((response) => {
        return response.json();

    })
    .then((data) => {
        console.log("DetailData", data);
        idData = data.item;
    })
    .catch((error) => { //Error catching
        console.error(error);

    })
    .finally(() => {
        renderDetails(idData);
    });
};

const renderCards = (card, i) => {

const {id, title, byline, icon} = card
// console.log("card", card);

document.getElementById('mother').innerHTML += `
<article onclick='getDetail(${id})'>
<h2>${id + ' ' + title}</h2>
<div class="container">
<img src='data:image/svg+xml; utf8,${icon}' alt="icon">
</div>
</article>
`;
};

getData();

const renderDetails = (card, i) => {

const {id, title, byline, icon} = card
console.log("card", card);
    
document.getElementById('mother').innerHTML = `
<article>
<h2>${id + ' ' + title}</h2>
<div class="container">
<img src='data:image/svg+xml; utf8,${icon}' alt="icon">
</div>
</article>
`;
};