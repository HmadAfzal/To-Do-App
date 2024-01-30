let input = document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector("ul");



button.addEventListener("click", function () {
    console.log(input.value);

    let li = document.createElement("li");
    li.innerText = input.value;
    let delbtn = document.createElement("button");
delbtn.classList.add("delbtn")
    delbtn.innerText = "Delete";
    li.appendChild(delbtn);
    ul.appendChild(li);

    input.value = "";
});


ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        let del = event.target.parentElement;
        del.remove();
    }

})