let linkedInPosts = document.body.querySelectorAll("[data-urn]");
linkedInPosts.forEach(function(post){
    let optionsArea = post.querySelectorAll(".feed-shared-control-menu")[0];
    let openInNewTab = createElement("Open", "a");
    openInNewTab.href = "https://www.linkedin.com/feed/update/" + post.getAttribute("data-urn");
    openInNewTab.setAttribute("target", "_blank");
    optionsArea.insertBefore(openInNewTab, optionsArea.firstChild);
})
debugger;

function createElement(title,element) {
    let savePostDom = document.createElement(element);
    savePostDom.innerText = title;
    savePostDom.style.color = "white";
    savePostDom.style.fontSize = "12px";
    savePostDom.style.fontWeight = "bold";
    savePostDom.style.padding = "2px";
    savePostDom.style.textShadow = "1px";
    savePostDom.style.textAlign = "center";
    savePostDom.style.cursor = "pointer";
    return savePostDom;
}
