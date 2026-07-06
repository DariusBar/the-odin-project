function homeLoad() {
    // Elements to add content to
    const content = document.getElementById("content");
    content.innerHTML = "";
    
    // add banner to content with p
    // containing pretty pastries

    // Create banner with id banner
    let banner = document.createElement("div");

    // Create p with text inside
    let webName = document.createElement("p");
    webName.textContent = "Pretty Pastries";

    // Append to banner
    banner.appendChild(webName);
    banner.setAttribute("id", "banner");
    let quote = document.createElement("p");
    quote.textContent = "Fresh goods for everyone~";

    content.appendChild(banner)
    content.appendChild(quote);
}

export { homeLoad }
