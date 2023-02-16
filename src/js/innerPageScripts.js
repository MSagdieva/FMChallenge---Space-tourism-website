@@include('burgerShow.js');
@@include('getUrlParams.js');

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