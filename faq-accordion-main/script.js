function initAccordion() {
    const accordion = document.querySelector('.js-accordion');
    const ativoClass = 'ativo';

    if (accordion) {
        accordion.addEventListener('click', function(event) {
            const button = event.target.closest('.accordion-button');
            if (!button) return; // exit if click isn't on a button

            const dt = button.parentElement;
            const dd = dt.nextElementSibling;

            // toggle active class
            dt.classList.toggle(ativoClass);
            dd.classList.toggle(ativoClass);

            // update ARIA attribute
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', !isExpanded);

            // toggle icon
            const img = button.querySelector('img');
            img.src = dt.classList.contains(ativoClass) 
                ? 'assets/images/icon-minus.svg' 
                : 'assets/images/icon-plus.svg';
            img.alt = dt.classList.contains(ativoClass) 
                ? 'minus icon' 
                : 'plus icon';
        });
    }
}

initAccordion();