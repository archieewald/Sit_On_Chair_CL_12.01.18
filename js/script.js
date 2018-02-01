//Slider script - section.page-slider

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var slides = document.querySelectorAll(".slider-content");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "flex";
}

//Form application - section.application

//show/hide UL LIST after click on triangle

var dropListButton = document.querySelectorAll(".drop_down_list");


for (var i = 0; i < dropListButton.length; i++){
    dropListButton[i].addEventListener("click", function (event) {
        var choiceShow = this.querySelector("ul");
        if (choiceShow.style.display === "block"){
            choiceShow.style.display = "none";
        } else {
            choiceShow.style.display = "block";
        }
    })
}


//adding information to summary panel

var dropLists = document.querySelectorAll("ul.list_panel");

var modelList = dropLists[0];
var colorList = dropLists[1];
var materialList = dropLists[2];

var labelModel = modelList.parentElement.firstElementChild;
var labelColor = colorList.parentElement.firstElementChild;
var labelMaterial = materialList.parentElement.firstElementChild;

var summaryModel = document.querySelector("h4.title");
var summaryMaterial = document.querySelector("span.pattern");
var summaryColor = document.querySelector("span.color");
var summaryTransport = document.querySelector("span.transport");

var modelValue = document.querySelector("h4.title.value");
var materialValue = document.querySelector("span.pattern.value");
var colorValue = document.querySelector("span.color.value");
var transportValue = document.querySelector("span.transport.value");

var optionsModel = modelList.querySelectorAll("li");
var optionsColor = colorList.querySelectorAll("li");
var optionsMaterial = materialList.querySelectorAll("li");

//Model choice
for (var i = 0; i < optionsModel.length; i++){
    optionsModel[i].addEventListener("click", function (event) {
        var name = this.innerText;
        var value = this.getAttribute("data-model-price");
        summaryModel.innerText = name;
        modelValue.innerText = value;
        labelModel.innerText = name;
    })
}

//Color choice
for (var i = 0; i < optionsColor.length; i++){
    optionsColor[i].addEventListener("click", function (event) {
        var name = this.innerText;
        var value = this.getAttribute("data-color-price");
        summaryColor.innerText = name;
        colorValue.innerText = value;
        labelColor.innerText = name;
    })
}

//Material choice
for (var i = 0; i < optionsMaterial.length; i++){
    optionsMaterial[i].addEventListener("click", function (event) {
        var name = this.innerText;
        var value = this.getAttribute("data-material-price");
        summaryMaterial.innerText = name;
        materialValue.innerText = value;
        labelMaterial.innerText = name;
    })
}

//Select transport
var checkTransport = document.querySelector("#transport");

checkTransport.addEventListener("change", function (event) {
    if (this.checked !== false) {
        var name = this.nextElementSibling.innerText;
        var value = this.getAttribute("data-transport-price");
        summaryTransport.innerText = name;
        transportValue.innerText = value;
    } else {
        summaryTransport.innerText = "";
        transportValue.innerText = "";
    }
});

//Summary sum

var sumValue = document.querySelector(".sum strong");

var summaryPanel = document.querySelector(".panel_right");
var sumsToCount = summaryPanel.children;



window.addEventListener("mouseover", function (event) {
    var sumsCounter = 0;
    for (var i = 0; i < sumsToCount.length; i++){
        var numbValue = Number(sumsToCount[i].innerText);
        sumsCounter += numbValue;
        sumValue.innerText = sumsCounter;
    }
});


