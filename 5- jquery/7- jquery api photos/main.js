var appkey="12000491-41fc68d8c365df909e022ceb6";
var categories=["fashion", "nature", "backgrounds", "science", "education", "people", "feelings", "religion", "health", "places", "animals", "industry", "food", "computer", "sports", "transportation", "travel", "buildings", "business", "music"];
var colors=["grayscale", "transparent", "red", "orange", "yellow", "green", "turquoise", "blue", "lilac", "pink", "white", "gray", "black", "brown"];
var pageNum=1;
window.onload=function(){



//fill categories select
let categorySelect=document.getElementById("categorySelect");
selectsFiller(categorySelect,categories,false);

//fill colors select
let colorsSelect=document.getElementById("colorsSelect");
selectsFiller(colorsSelect,colors,true,"color");
}

//this function will fill the select element that is passed as parameter with a data as an array 
//which also should be passed as parameter
function selectsFiller(selectElm,data,withDeafault,afterchooseWord){
if(withDeafault){
    let defselectOpt=document.createElement("option");
    defselectOpt.value="";
    defselectOpt.innerText="Choose "+afterchooseWord;
    selectElm.appendChild(defselectOpt);
}
//fetching the data array and add options to select
    for (let i = 0; i < data.length; i++) {
        let selectOpt=document.createElement("option");
        selectOpt.value=data[i];
        selectOpt.innerText=data[i];
        selectElm.appendChild(selectOpt);
        
    }
}


function getData(key,keyWord,category,language,orientation,minHeight,minWidth,color,safe,orderType,page,perPage){
let url="https://pixabay.com/api/?key="+key+"&q="+keyWord+"&image_type=photo&category="+category+"&pretty=true"+(language!=""?"&lang="+language:"")+(orientation!=""?"&orientation="+orientation:"")+(language!=""?"&lang="+language:"")+(minHeight!=""?"&min_height="+minHeight:"")+(minWidth!=""?"&min_width="+minWidth:"")+(color!=""?"&colors="+color:"")+(safe!=""?"&safesearch="+safe:"")+(orderType!=""?"&order="+orderType:"")+(page!=""?"&page="+page:"")+(perPage!=""?"&per_page="+perPage:"");
let loader=document.getElementById("loader");
loader.style.display="block";
$.ajax({
    type: "GET",
    url: url,
    //data: "data",
    dataType: "json",
    success: function (response) {
        galleryBuilder(response.hits);
        pagingBuilder(response.totalHits);
        carousalBuilder(response.hits);
    },
    error:function(){
alert("error in getting the data ");
    },
    complete:function () {  
      //  setTimeout(()=>{
            loader.style.display="none";
       // },3000) 
    }
});
}


function searchClick(){
    pageClick(1)
}

function galleryBuilder(data){
let container=document.getElementById("imagescontainer");
for (let i = 0; i < data.length; i++) {
    let imgBox=document.createElement("div");
    imgBox.className="imgBox";
    container.appendChild(imgBox);
    let imgThumb=document.createElement("img");
    imgThumb.src=data[i].previewURL;
    imgBox.appendChild(imgThumb);
    let overal=document.createElement("div");
    overal.className="overal";
    imgBox.appendChild(overal);
    let linksDiv=document.createElement("div");
    overal.appendChild(linksDiv);
    let zoomSpan=document.createElement("i");
    let linkSpan=document.createElement("i");
    zoomSpan.className="fa fa-search-plus";
    linkSpan.className="fa fa-link";
    linksDiv.appendChild(zoomSpan);
    linksDiv.appendChild(linkSpan);
    zoomSpan.onclick=function(){
        zoomer(data[i].largeImageURL)
    }
    linkSpan.onclick=function(){
        window.open(data[i].pageURL,"_blank");
    }

}

}

function zoomer(imgURL){
let img=document.getElementById("overalImg");
img.src=imgURL;
document.getElementById("hoverDiv").style.display="block";

}

function closeOveral(){
    let img=document.getElementById("overalImg");
img.src="";
document.getElementById("hoverDiv").style.display="none";
}

function pagingBuilder(num){

    let itemsperPage=parseInt(document.getElementById("itemNumSelect").value);
    let buttonsCont=document.getElementById("pagesButs");
    buttonsCont.innerText="";
    if(num>itemsperPage){
    let buttonsNum=Math.ceil( num/itemsperPage);
    
    for (let i = 1; i <= buttonsNum; i++) {
        let button=document.createElement("button");
        button.id="button"+i;
        button.innerText=i;
        button.onclick=function(){
            pageClick(i);
            pageNum=i;
        };
        if(i==pageNum){
            button.disabled=true;
        }
        buttonsCont.appendChild(button);

    }
    document.getElementById("pagingDiv").style.display="block";
}

}
function pageClick(pageNumber){
    let itemsperPage=parseInt(document.getElementById("itemNumSelect").value);

pageNum=pageNumber;
    document.getElementById("imagescontainer").innerText="";
    let searchKey=document.getElementById("searchInput").value;
    let category=document.getElementById("categorySelect").value;
    let language=document.getElementById("langSelect").value;
    let orientation="";
    if(document.getElementById("rad1").checked){
        orientation="all";
    }
    else{
        if(document.getElementById("rad2").checked){
            orientation="horizontal";
        }
        else{
            orientation="vertical";
        }
    }
    let minH=document.getElementById("minHInput").value;
    let minW=document.getElementById("minWInput").value;
    let color=document.getElementById("colorsSelect").value;
    let safe="false";
    if(document.getElementById("safeSearchcheck").checked){
        safe="true";
    }
    let orderType="";
    if(document.getElementById("rad4").checked){
        orderType="popular";
    }
    else{
        if(document.getElementById("rad5").checked){
            orderType="latest";
        }
    }
    getData(appkey,searchKey,category,language,orientation,minH,minW,color,safe,orderType,pageNumber,itemsperPage);

}

function carousalBuilder(hits){
    $("#card-carousel").empty();
     for (let i = 0; i < hits.length; i++) {
         let card=document.createElement("div");
         $(card).addClass("my-card");
         let img=document.createElement("img");
         img.src=hits[i].previewURL;
         $(card).append(img);
         $("#card-carousel").append(card);
         
     }
     runCarousal();
}

