function aboutLoad() {
    let content = document.getElementById("content");
    content.innerHTML = "";

    // Create banner with id banner
    let banner = document.createElement("div");

    // Create p with text inside
    let webName = document.createElement("p");
    webName.textContent = "Pretty Pastries";

    // Append to banner
    banner.appendChild(webName);
    banner.setAttribute("id", "banner");

    // Create about div and put header and p in
    let aboutDiv = document.createElement("div");
    aboutDiv.setAttribute("id", "about");

    let h1 = document.createElement("h1");
    h1.textContent = "About Us";
    let p = document.createElement("p");
    p.textContent = "We provide a multitude of tasty, pretty pastries! Want to purchase a few?";

    aboutDiv.appendChild(h1);
    aboutDiv.appendChild(p);

    content.appendChild(banner);
    content.appendChild(aboutDiv);
}

export { aboutLoad };