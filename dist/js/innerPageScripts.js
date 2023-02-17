let menu=document.querySelector('.menu__list');
let burger = document.getElementsByClassName('menu__burger-icon')[0];
window.addEventListener('click', function(e){
    let target2 = e.target;
    if ((target2 != document.getElementsByClassName('page')[0])&&(target2.closest('div').classList.contains('menu__burger-icon')) || (target2.classList.contains('menu__burger-icon')))
    {
        menu.classList.toggle('active');

    }});
;
function getQueryPageParam(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const page = urlParams.get('page')
    return page;
};

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
    switch (pageNumber){
        case 1:
            tabs = getDestTabs();
            break;
        case 2:
            tabs = getDestTabs();
            break;
        case 3:
            tabs = getDestTabs();
            break;  
    }
    let cont = '<div class="wrapper">'+
    '<div class="tabs">'+tabs
    '</div>'+
'</div>';
    infoContainer.innerHTML=cont;
}


function getDestTabs(){
    let tabs='';
    let tabCounter=1;
    for (let page of pageInfoData){
        tabs+= '<div class="tab">'+
        `<input type="radio" name="css-tabs" id="tab-${tabCounter}" checked class="tab-switch">`+
        `<label for="tab-${tabCounter}" class="tab-label">${page.name}</label>`+
        '<div class="tab-content">'+
            '<div class="img-container">'+
            `<img src="${page.images.png}" alt="" class="ill">`+
        '</div>'+
            `<div class="text-container">${page.description}</div>`+
        '</div>'+
    '</div>';
    tabCounter++;
    }
return tabs;
}

function getCrewTabs(){
    let tabs='';
    let tabCounter=1;
    for (let page of pageInfoData){
        tabs+= '<div class="tab">'+
        `<input type="radio" name="css-tabs" id="tab-${tabCounter}" checked class="tab-switch">`+
        `<label for="tab-${tabCounter}" class="tab-label">${page.name}</label>`+
        '<div class="tab-content">'+
            '<div class="img-container">'+
            `<img src="${page.images.png}" alt="" class="ill">`+
        '</div>'+
            `<div class="text-container">${page.description}</div>`+
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
        `<input type="radio" name="css-tabs" id="tab-${tabCounter}" checked class="tab-switch">`+
        `<label for="tab-${tabCounter}" class="tab-label">${page.name}</label>`+
        '<div class="tab-content">'+
            '<div class="img-container">'+
            `<img src="${page.images.png}" alt="" class="ill">`+
        '</div>'+
            `<div class="text-container">${page.description}</div>`+
        '</div>'+
    '</div>';
    tabCounter++;
    }
return tabs;
}