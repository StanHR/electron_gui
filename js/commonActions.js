var initHome = document.getElementById('home')
initHome.style.backgroundColor = "white"
initHome.style.color = "black"
initHome.style.fontWeight = "bold"
document.getElementById("home-icon-black").style.display = "inline-block"



function activateTab(tabName){
    console.log(tabName)
    var i, allTabs
    allTabs = document.getElementsByClassName("menu-item")
    allContents = document.getElementsByClassName("content-card")
    allBlackIcons = document.getElementsByClassName("menu-icon-black")
    for (i=0; i<allTabs.length; i++){
        allTabs[i].style.backgroundColor = "black"
        allTabs[i].style.color = "white"
        allContents[i].style.display = "none"
        allBlackIcons[i].style.display = "none"
    }

    var tab = document.getElementById(tabName)
    tab.style.backgroundColor = "white"
    tab.style.color = "black"
    tab.style.fontWeight = "bold"
    document.getElementById(tabName+"-content").style.display = "inline-block"
    document.getElementById(tabName+"-icon-black").style.display = "inline-block"
}

function videoCheck(){
    var isChecked = document.getElementById("video-scan-checkbox");
    var precisionSlider = document.getElementById("slider-container");
    precisionSlider.style.display = isChecked.checked ? "inline-block" : "none"; 
}

function scan_trigger(scan_type){
    var img_scan = document.getElementById("image-scan-checkbox")
    var vid_scan = document.getElementById("video-scan-checkbox")
    var scan_opt = document.getElementById("scan-options")
    var progress_bar = document.getElementById("progress-bar")
    var precisionSlider = document.getElementById("precisionSlider");
    let ld_bar = new ldBar(".ldBar")
    if(img_scan.checked | vid_scan.checked){
        if ((scan_type === "quick") | (scan_type === "deep")){
            scan_opt.style.display = "none"
            progress_bar.style.display = "inline-block"
            // Disable Checkboxes
            img_scan.setAttribute('disabled','')
            vid_scan.setAttribute('disabled','')
            precisionSlider.setAttribute('disabled','')
            // Begin Scanning
            ld_bar.set(30)
            timer = setTimeout(()=>{
                ld_bar.set(50)
            },3000)
        }
    }
    else{
        myFunction()
    }
    if (scan_type === "stop"){
        scan_opt.style.display = "inline-block"
        img_scan.removeAttribute('disabled')
        vid_scan.removeAttribute('disabled')
        progress_bar.removeAttribute('disabled')
        precisionSlider.removeAttribute('disabled','')
        clearTimeout(timer)
        progress_bar.style.display = "none"
        ld_bar.set(0)
    }   
}

function myFunction() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  } 