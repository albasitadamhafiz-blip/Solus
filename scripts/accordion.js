const accordionItems = document.querySelectorAll('.faq__item');

accordionItems.forEach((item) => {
    const accordion = item.querySelector('.faq__accordion');

    accordion.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});