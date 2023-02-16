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
    const pageTitle = document.getElementsByClassName("inner-page-title")[0];
    switch (page) {
        case "dest":{
            console.log("start dest!");
            pageTitle.innerHTML = "01 Pick your destination";
            pageNumber = 1;
            break;
        }
        case "crew":{
            console.log("start crew!");
            pageTitle.innerHTML = "02 Meet your crew";
            pageNumber = 2;
            break;
        }
        case "tech":{
            console.log("start tech!");
            pageTitle.innerHTML = "03 Space launch 101";
            pageNumber = 3;
            break;
        }
    }
    fetchInfoForDescription(pageNumber);
}

// function fetching info for description
function fetchInfoForDescription(pageNumber){
      
    // get data
    fetch('data.json')
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
    switch (pageNumber){
        case 1:
            console.log(pageInfoData[0].name);
            break;
        case 2:
            console.log(pageInfoData[0].name);
            break;
        case 3:
            console.log(pageInfoData[0].name);
            break;  
    }
    let pageig = pageInfoData[0].name;
    let cont = '<div class="wrapper">'+
    '<div class="tabs">'+
    '<div class="tab">'+
        '<input type="radio" name="css-tabs" id="tab-1" checked class="tab-switch">'+
        `<label for="tab-1" class="tab-label">${pageig}</label>`+
        '<div class="tab-content">'+
            '<div class="img-container">'+
        '<img src="" alt="" class="ill">'+
        '</div>'+
            '<div class="text-container"></div>'+
        '</div>'+
    '</div>'+
    '</div>'+
'</div>';
console.log(cont);
}


function paintDestPage(){
    let pageig = pageInfoData[0].name;
    let cont = '<div class="wrapper">'+
    '<div class="tabs">'+
    '<div class="tab">'+
        '<input type="radio" name="css-tabs" id="tab-1" checked class="tab-switch">'+
        `<label for="tab-1" class="tab-label">${pageig}</label>`+
        '<div class="tab-content">'+
            '<div class="img-container">'+
        '<img src="" alt="" class="ill">'+
        '</div>'+
            '<div class="text-container"></div>'+
        '</div>'+
    '</div>'+
    '</div>'+
'</div>';
console.log(cont);
}