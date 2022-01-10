var navbar = document.getElementById("nav");
var navmenu = document.getElementById("navmenu");
var navitems = document.getElementsByClassName("navitem");
var burgermenu = document.getElementById("burger-menu");

var white = document.getElementsByClassName("whiteout");
var aboutTitles = document.getElementsByClassName("about-title");
var popups = document.getElementsByClassName("popup-card");
var leftArrow = document.getElementsByClassName("arrow left")[0];
var rightArrow = document.getElementsByClassName("arrow right")[0];
var projContainer = document.getElementById("projects-container");
var projectItems = document.getElementsByClassName("projects-item");
var upDownArrows = document.getElementsByClassName("up-down-arrow");

var mobileScroll = document.getElementById("proj-section-mobile");

function showMenu(){
    if(!navmenu.classList.contains("show")){
        navmenu.classList.add("show");
    }
    else{
        navmenu.classList.remove("show");
    }
}

function myPopup(id){
    white[0].style.display = "block";
    if(id==="proj1"){
        document.getElementById("timeremind").classList.add("open");
    }
    if(id=="proj2"){
        document.getElementById("badger").classList.add("open");
    }
    if(id=="proj3"){
        document.getElementById("site").classList.add("open");
    }
}

function myClosePopups(){
    for(i=0; i<popups.length;i++){
        if(popups[i].style.display != "none"){
            popups[i].classList.remove("open");
            white[0].style.display = "none";
        }
    };
}

function isVisibleInScroll(element){
    var projRect = projContainer.getBoundingClientRect();
    var elemRect = element.getBoundingClientRect();

    return elemRect.left >= projRect.left && elemRect.right <= projRect.right;
}

function checkVisibility(){

    if(isVisibleInScroll(projectItems[0])){
        leftArrow.style.visibility = "hidden";
        rightArrow.style.visibility = "visible";
    }

    else if(isVisibleInScroll(projectItems[projectItems.length-1])){
        leftArrow.style.visibility = "visible";
        rightArrow.style.visibility = "hidden";
    }

    else{
        leftArrow.style.visibility = "visible";
        rightArrow.style.visibility = "visible"; 
    }
}

function myScroll(position){
    if(position === 0){
        for(let i=1; i<projectItems.length; i++){
            if(isVisibleInScroll(projectItems[i])){
                projectItems[i-1].scrollIntoView({behavior: "smooth", inline:"start", block:"center"});
                break;
            }
        }
    }
    if(position === 1){
        for(let i=0; i<projectItems.length-1; i++){
            if(isVisibleInScroll(projectItems[i])){
                projectItems[i+1].scrollIntoView({behavior: "smooth", inline:"start", block:"center"});
                break;
            }
        }
    }
    
}

//Mobile scrolling arrows

var mobileArrows = document.getElementsByClassName("mobile-arrow-button");
var mobileProjects = document.getElementsByClassName("mobile-project");

function isVisibleInMobileScroll(element){
    var elemRect = element.getBoundingClientRect();
    var mobileRect = mobileScroll.getBoundingClientRect();

    return elemRect.left >= mobileRect.left && elemRect.right <= mobileRect.right;
}

function mobileCheckVisibility(){
    if(isVisibleInMobileScroll(mobileProjects[0])){
        mobileArrows[0].style.visibility = "hidden";
        mobileArrows[1].style.visibility = "visible";
    }

    else if(isVisibleInMobileScroll(mobileProjects[mobileProjects.length-1])){
        mobileArrows[0].style.visibility = "visible";
        mobileArrows[1].style.visibility = "hidden";
    }

    else{
        mobileArrows[0].style.visibility = "visible";
        mobileArrows[1].style.visibility = "visible";
    }
}

mobileScroll.addEventListener("scroll", mobileCheckVisibility);

//CV section collapsibles

for(let i=0; i<aboutTitles.length; i++){
    aboutTitles[i].addEventListener("click", function(){
        var content = this.nextElementSibling;
        if(content.classList.contains("expanded")){
            this.classList.remove("clicked");
            content.classList.remove("expanded");
            upDownArrows[i].innerHTML = "&darr;";
        }
        else{
            this.classList.add("clicked");
            content.classList.add("expanded");
            upDownArrows[i].innerHTML = "&uarr;";
        }
    });

}

//Projects section

//Highlight the right arrow to show scroll function on first slide
if(isVisibleInScroll(projectItems[0])){
    projSection = document.getElementById("projects");
    projSection.addEventListener("mouseover", function(){
        document.getElementsByClassName("arrow-button")[1].style.background = "#F4B4A4";
        setTimeout(() => {  document.getElementsByClassName("arrow-button")[1].style.background = "var(--melon)"; }, 1000);
    })
};

// Check which arrow should display
projContainer.addEventListener("scroll", checkVisibility);


