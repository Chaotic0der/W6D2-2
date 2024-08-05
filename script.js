
numBoxes = 16;



function CHcolor(thisObj){
    if(thisObj.style.backgroundColor === "rgb(153, 153, 153)"){
        thisObj.style.backgroundColor = "rgb(51, 51, 51)";
    } else {
        thisObj.style.backgroundColor = "rgb(153, 153, 153)";
    }
}

function popPage(){
    document.open();
    document.write("<div class=\"box\">");
    for(i = 0 ; i < numBoxes ; i++){
        document.write("<div class=\"abox\" onClick=\"CHcolor(this);\"></div>");
    }
    document.write("</div>");
    document.close();
}