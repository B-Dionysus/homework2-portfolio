$("document").ready(init);
function launchModal(imgSrc, path, title, gitLink, liveLink){
    // var modal=document.querySelector('#modalImageDisplay > div > div > div.modal-body >span>img').src='./Assets/Images/'+imgSrc;
    $("#modal-image").attr("src",path+imgSrc);
    $("#modal-heading").html("<h3>"+title+"</h3>");
    $("#modal-git-link").attr("href", gitLink).text("GitHub Repo");
    $("#modal-live-link").attr("href", liveLink).text("Live URL");

    // Clicking the anchor didn't work because hte onclick bubbled up and overrode it
    // https://stackoverflow.com/questions/8335179/cancel-bubbling-on-an-html-anchor-tag
    $(".modal-link").click(function(e){
        e.stopPropagation();
      });
}

function init(){
   
    buildPage(getData());
}
function buildPage(assignmentArray){
    var currentCol=1;
    const MAX_COLS=2;
    // This is where the new assignments get displayed on the page
    var mainPage=$("#main-assignment-container");
    // We'll start with a fresh blean, Buddy-L row
    var currentRow=$("<div>").addClass("row mb-3");

    for(assignment of assignmentArray){
        // If we've already made as many columns as we can fit on this row
        // Then we'll ship it off to mainPage and create a brand new row
        if(currentCol>MAX_COLS){
            currentCol=1;
            mainPage.append(currentRow);
            currentRow=$("<div>").addClass("row mb-3");
        }
        // Then we construct a new assignment block and add it on to our currentRow
        currentRow.append(buildBlock(assignment));
        currentCol++;
    }
    mainPage.append(currentRow);
    currentRow=$("<div>").addClass("row mb-3");
}
function buildBlock(assignment){
    var newBlock=$("<div>").addClass("col-md-6 mb3");
    var newWrapper=$("<div>").addClass("m-auto galleryThumbnail-BD");
    newWrapper.attr("data-toggle","modal");
    newWrapper.attr("data-target","#modalImageDisplay");
    newWrapper.on("click",function(){launchModal(assignment.thumb, assignment.path, assignment.name, assignment.git, assignment.url);});
    var newThumb=$("<img>").attr("src",assignment.path+assignment.thumb);
    newThumb.attr("alt",assignment.name);

    newWrapper.append(newThumb);
    newBlock.append(newWrapper);
    return newBlock;
}

/*
                        <div class="row ">
                            <div class="col-md-6 mb-3">                                
                                <div class=" m-auto  galleryThumbnail-BD" data-toggle="modal" data-target="#modalImageDisplay" onClick="launchModal('wh7.jpg')">
                                     <!-- Wrapper to ensure that the images are 350x350 -->
                                     <img class="" src="./Assets/Images/wh7.jpg" alt="Wh on a pillow."> 
                                <!-- <img src="https://via.placeholder.com/350" alt=""> -->
                                </div>
                            </div>
                            <div class=" m-auto  galleryThumbnail-BD" data-toggle="modal" data-target="#modalImageDisplay" onClick="launchModal('wh5.jpg')">                            
                                    <img class="" src="./Assets/Images/wh5.jpg" alt="Wh Stretching."> 
                                </div>
                            </div>
                        </div>
                        <div class="row ">
                            <div class="col-md-6 mb-3">                                
                                <div class=" m-auto  galleryThumbnail-BD" data-toggle="modal" data-target="#modalImageDisplay" onClick="launchModal('wh4.jpg')">
                                     <!-- Wrapper to ensure that the images are 350x350 -->
                                <img class="" src="./Assets/Images/wh4.jpg" alt="A closeup of Wh's little face.">
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class=" m-auto  galleryThumbnail-BD" data-toggle="modal" data-target="#modalImageDisplay" onClick="launchModal('wh3.jpg')">
                                    <img class="landscape" src="./Assets/Images/wh3.jpg" alt="Wh sitting on my wife's lap on the back balcony."> 
                                </div>
                            </div>
                        </div>
                        <div class="row ">
                            <div class="col-md-6 mb-3">                                
                                <div class=" m-auto  galleryThumbnail-BD" data-toggle="modal" data-target="#modalImageDisplay" onClick="launchModal('wh2.jpg')">
                                    <img class="" src="./Assets/Images/wh2.jpg" alt="My cat, Wh, sprawled on a blue fabric background.">             
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class=" m-auto  galleryThumbnail-BD" data-toggle="modal" data-target="#modalImageDisplay" onClick="launchModal('wh6.jpg')">
                                    <img class="" src="./Assets/Images/wh6.jpg" alt="Wh sleeping."> 
                                </div>
                            </div>
                        </div>
*/