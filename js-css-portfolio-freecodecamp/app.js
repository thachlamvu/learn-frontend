const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions() {
    // BUTTON CLICK ACTIVE CLASS
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn');

            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');

            this.className += ' active-btn';
        }
        )

        // SECTIONS CLICK ACTIVE CLASS
        allSections.addEventListener('click', (e) => {
            const id = e.target.dataset.id;

            if (id) {
                sectBtns.forEach((btn) => {
                    btn.classList.remove('active');
                })
                e.target.classList.add('active');

                sections.forEach((section) => {('active');
                    section.classList.remove
                })

                const element = document.getElementById(id);
                element.classList.add('active');
            }
        });
    }

    //TOGGLE THEME
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode');
    });


}

PageTransitions();