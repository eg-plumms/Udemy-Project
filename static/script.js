let baseUrl = '/static/'; 
let select = document.getElementById("Themes");

colourPref = getCookie("style_pref");
colourNav = getCookie("style_second")

if (colourPref == null){
    document.getElementById('sheet').setAttribute("href", `${baseUrl}Nether.css`);
    document.getElementById('sheet2').setAttribute("href", `${baseUrl}Nether2.css`);    
} else {
    document.getElementById('sheet').setAttribute("href", `${baseUrl}${colourPref}.css`);
    document.getElementById('sheet2').setAttribute("href", `${baseUrl}${colourPref}2.css`);
    select.value = colourPref
}







function themeChange() {
    let link = document.getElementById('sheet');
    let sheet = link.getAttribute('href');
    let select = document.getElementById("Themes");
    let colour = select.options[select.selectedIndex].value;

    if (sheet !== `${colour}.css`) {
        link.setAttribute("href", `${baseUrl}${colour}.css`);
        document.cookie = `style_pref=${colour}; path=/`;

        let linkNav = document.getElementById('sheet2');
        linkNav.setAttribute("href", `${baseUrl}${colour}2.css`);
        document.cookie = `style_second=${colour}2; path=/ `
    }
    

}





function getCookie(cookieName){
    let cookies = document.cookie.split(";");
    let cookieDict = {};
    cookies.forEach(cookie => { //makes the dict 
        let cookieKV = cookie.trim().split("=");
        cookieDict[cookieKV[0]] = cookieKV[1];
    });

    if (cookieName in cookieDict){
        return cookieDict[cookieName];
    }else{
        return null;
    }
}