
function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const ativoClass = 'ativo';

    if (accordionList.length) {
        function activeAccordion() {
            this.classList.toggle(ativoClass);
            this.nextElementSibling.classList.toggle(ativoClass);
            toggleIcon(this); 
        }

        function toggleIcon(element) {
            const img = element.querySelector('img'); // img in dt
            if (element.classList.contains(ativoClass)) {
                img.src = 'assets/images/icon-minus.svg'; // opened
                img.alt = 'minus icon';
            } else {
                img.src = 'assets/images/icon-plus.svg'; // closed
                img.alt = 'plus icon';
            }
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
}

initAccordion();
