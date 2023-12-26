let element = document.querySelector("h2");
console.log(element);
if (element) {
    element.innerText = "I love JavaScript";
} else {
    console.error("No <h2> tag element found on the page.");
}

let element2 = document.querySelector("div");

element2.innerText="modified innertext";