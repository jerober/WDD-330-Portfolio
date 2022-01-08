var list = document.getElementById('tab-of-cont');
var linksList = [
    {
        label: "Week1 Notes",
        url: "week1/index.html"
    }
];

for (var i = 0; i < linksList.length; i++) {
    var li = document.createElement("li");
    var link = document.createElement("a");
    link.setAttribute('href', linksList[i].url);
    link.innerText = linksList[i].label;
    li.appendChild(link);
    list.appendChild(li);
}