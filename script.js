function getInfo() {
   const moreInfo = document.querySelector('.more-info');
    const button = document.querySelector('button');

    if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
        moreInfo.style.display = "block";
        button.textContent = "Show Less Info";
    } else {
        moreInfo.style.display = "none";
        button.textContent = "Show More Info";
    }
}