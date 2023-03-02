let menu=document.querySelector('.menu__list');
let burger = document.getElementsByClassName('menu__burger-icon')[0];
window.addEventListener('click', function(e){
    let target2 = e.target;
    if ((target2 != document.getElementsByClassName('page')[0])&&(target2.closest('div').classList.contains('menu__burger-icon')) || (target2.classList.contains('menu__burger-icon')))
    {
        menu.classList.toggle('active');
        burger.classList.toggle('active');

    }});
;
function getQueryPageParam(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const page = urlParams.get('page')
    return page;
};

window.addEventListener("load",()=>{
const firstTabtext = document.querySelector(".tab .text-container");
const lastTabLabel = document.querySelector(".dest .tab:last-child .tab-label");
if (lastTabLabel != null) {lastTabLabel.style.marginRight = 170 + "px";
console.log(document.body.clientWidth, Math.ceil(firstTabtext.getBoundingClientRect().right) )}});

let page = getQueryPageParam();
let pageNumber = 0;
let pageInfoData=[];
startPageRender(page);

function startPageRender(page){
    const pageTitle = document.getElementsByClassName("inner-page-content__title")[0];
    const menuLinks = document.getElementsByClassName("menu__link");
    const content = document.getElementsByClassName("inner-page-content")[0];
    switch (page) {
        case "dest":{
            console.log("start dest!");
            pageTitle.innerHTML = "<span class='number'>01</span> Pick your destination";
            pageNumber = 1;
            content.classList.add('dest');
            break;
        }
        case "crew":{
            console.log("start crew!");
            pageTitle.innerHTML = "<span class='number'>02</span> Meet your crew";
            pageNumber = 2;
            content.classList.add('crew');
            break;
        }
        case "tech":{
            console.log("start tech!");
            pageTitle.innerHTML = "<span class='number'>03</span> Space launch 101";
            pageNumber = 3;
            content.classList.add('tech');
            break;
        }
    }
    fetchInfoForDescription(pageNumber);
    menuLinks[pageNumber].classList.add('active');
}

// function fetching info for description
function fetchInfoForDescription(pageNumber){
      
    // get data
    fetch('data/data.json')
        // return json data
        .then(response => {return response.json()})
        // get paintings data
        .then((pages)=>{
            // assignment painting in arrays
            let pagesInfo = (Object.values(pages))[pageNumber-1];
            pagesInfo.map((info)=>{
                pageInfoData.push(info);
            });
            paintPage(pageNumber);
    })  
        // fetching errors catch
        .catch(error=>{console.log(error)});
    }

function paintPage(pageNumber){
    const infoContainer = document.getElementsByClassName("inner-page-content__info-container")[0];
    let tabs;
    let cont;
    switch (pageNumber){
        case 1:
            tabs = getDestTabs();
            cont = '<div class="wrapper dest-wrapper">'+
                    '<div class="tabs dest-tabs">'+tabs
                    '</div>'+
                '</div>';
            break;
        case 2:
            tabs = getCrewTabs();
            cont = '<div class="wrapper crew-wrapper">'+
                '<div class="tabs crew-tabs">'+tabs
                '</div>'+
            '</div>';
            break;
        case 3:
            tabs = getTechTabs();
            cont = '<div class="wrapper tech-wrapper">'+
                '<div class="tabs tech-tabs">'+tabs
                '</div>'+
            '</div>';
            break;  
    }

    infoContainer.innerHTML=cont;
    const firstTab = document.querySelector("#tab-1");
    firstTab.checked = true;
}


function getDestTabs(){
    let tabs='';
    let tabCounter=1;
    for (let page of pageInfoData){
        tabs+= '<div class="tab">'+
        `<input type="radio" name="css-tabs" id="tab-${tabCounter}" class="tab-switch">`+
        `<label for="tab-${tabCounter}" class="tab-label">${page.name}</label>`+
        '<div class="tab-content">'+
            '<div class="img-container">'+
                `<img src="${page.images.png}" alt="" class="ill">`+
            '</div>'+
            `<div class="text-container">`+ `<h2 class="title tab-content__title">${page.name}</h2>`
            +`<div class="text">${page.description}</div>`+
            `<hr class="line">`+
            `<div class="features"><div class="feature-label"><p class="feature-name">Avg. distance</p>
            <p class="feature-value">${page.distance}</p></div>`+
            `<div class="feature-label"><p class="feature-name">Est. travel time</p>
            <p class="feature-value">${page.travel}</p></div></div>`+
        '</div>'+`</div>`+
    '</div>';
    tabCounter++;
    }
return tabs;
}

function getCrewTabs(){
    let tabs='';
    let tabCounter=1;
    console.log(pageInfoData);
    for (let page of pageInfoData){
        tabs+= '<div class="tab">'+
        `<input type="radio" name="css-tabs" id="tab-${tabCounter}" class="tab-switch">`+
        `<label for="tab-${tabCounter}" class="tab-label"></label>`+
        '<div class="tab-content">'+
            '<div class="img-container">'+
            `<img src="${page.images.png}" alt="" class="ill">`+
        '</div>'+
            `<div class="text-container">
            `+
            `<h2 class="crew__role">${page.role}</h2> <h3 class="crew__name"> ${page.name}</h3>`+`${page.bio}`+
            `</div>`+
        '</div>'+
    '</div>';
    tabCounter++;
    }
return tabs;
}

function getTechTabs(){
    let tabs='';
    let tabCounter=1;
    for (let page of pageInfoData){
        tabs+= '<div class="tab">'+
        `<input type="radio" name="css-tabs" id="tab-${tabCounter}" class="tab-switch">`+
        `<label for="tab-${tabCounter}" class="tab-label"></label>`+
        '<div class="tab-content">'+
            '<div class="img-container">'+
            `<picture>
            <source media="(max-width: 992px)" srcset="${page.images.landscape}" />
            <img src="${page.images.portrait}" alt="" />
          </picture>`+
        '</div>'+
            `<div class="text-container">`+
            `<h3 class="text-container__label">The terminology…</h3> <h2 class="title tab-content__title">${page.name}</h2>`+`${page.description}</div>`+
        '</div>'+
    '</div>';
    tabCounter++;
    }
return tabs;
}