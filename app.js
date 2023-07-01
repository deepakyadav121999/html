let li1 = document.getElementById("li1")
let li2 = document.getElementById("li2")
let li3 = document.getElementById("li3")
let li4 = document.getElementById("li4");
let homeinfo = document.getElementById("homeinfo");
let contactinfo = document.getElementById("contactinfo");
let infoinfo = document.getElementById("infoinfo");
let guideinfo = document.getElementById("guideinfo");
li1.addEventListener('click',()=>{
    if(homeinfo.style.display=="block"){
    homeinfo.style.display="none";
    }
    else{
        homeinfo.style.display="block";
        contactinfo.style.display="none";
        infoinfo.style.display="none";
        guideinfo.style.display="none";
    }
})
li2.addEventListener('click',()=>{
    if(contactinfo.style.display=="block"){
        contactinfo.style.display="none";
    }
    else{
        homeinfo.style.display="none";
        contactinfo.style.display="block";
        infoinfo.style.display="none";
        guideinfo.style.display="none";
    }
})
li3.addEventListener('click',()=>{
    if(infoinfo.style.display=="block"){
        infoinfo.style.display="none";
    }
    else{
        homeinfo.style.display="none";
        contactinfo.style.display="none";
        infoinfo.style.display="block";
        guideinfo.style.display="none";
    }
})
li4.addEventListener('click',()=>{
    if(guideinfo.style.display=="block"){
        guideinfo.style.display="none";
    }
    else{
        homeinfo.style.display="none";
        contactinfo.style.display="none";
        infoinfo.style.display="none";
        guideinfo.style.display="block";
    }
})
