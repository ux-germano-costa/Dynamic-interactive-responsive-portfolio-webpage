const sections = document.querySelectorAll('.section'); // ".section" in style.scss.
const sectBtns = document.querySelectorAll('.controls'); // ".controls" in style.scss.
const sectBtn = document.querySelectorAll('.control'); // ".control" in style.scss.
const allSections = document.querySelector('.main-content'); //"body class main-content" in html.
const themeBtn = document.querySelector('.theme-btn');

// Function for page transition
function PageTransitions(){
    // Clicking the button active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
            this.className += ' active-btn';
        }) 
    }

    // Sections active class
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if(id){
            // Change selection of bottons.
            sectBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            // Hide the other sections when 1 of them is selected.
            sections.forEach((section) => {
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    // Toggle theme - Dark and Ligh Modes
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}

PageTransitions();