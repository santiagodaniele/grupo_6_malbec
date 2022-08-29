window.onload = function () {
    let menubar=document.getElementById("menu-bar");
    let links=document.getElementById("links-menu-bar");
    
    menubar.addEventListener('click', () =>{
if (links.style.display === 'none') {
    links.style.display = 'flex'
}
else {
    links.style.display = 'none'
}

    })

}