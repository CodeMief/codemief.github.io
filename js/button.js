export default class Button {
    constructor(btnElementID){
        this.button = document.getElementById(btnElementID);
        this.addClickEvent();
    } 
    addClickEvent(){
        if(this.button != null){
            const funcName =  `${this.button.id}Event`;
            this.button.addEventListener('click', () => {
                this[funcName]();
            });
        }
    }
    btnPortfolioEvent(){
        const currentPage = document.getElementById("portfolio-page");
        const navHighlight = this.button;
        showPage(currentPage, navHighlight);

    }
    btnAboutmeEvent(){
        const currentPage = document.getElementById("aboutme-page");
        const navHighlight = this.button;
        showPage(currentPage, navHighlight);
    }
    btnContactEvent(){
        const currentPage = document.getElementById("contact-page");
        const navHighlight = this.button;
        showPage(currentPage, navHighlight);

    }
}

function showPage(currentPage, navHighlight){
    const otherPages = document.querySelector("main").children;
    // Get all the buttons. 
    // If using a new nav element you have to update this code.
    const otherNavs = document.querySelectorAll("button");

    // Add styles to multiple elements.
    Array.from(otherPages).forEach((page, index) => {
        page.style.display = 'none';
        // Unhighlight the nav item of the hidden pages.          
        otherNavs[index].classList.remove("highlightedItem")
    });	
    // Display current page.
    currentPage.style.display = 'block';
    // Highlight the nav item of the current page.
    navHighlight.classList.add("highlightedItem");

}

