const spoilerItems = document.querySelectorAll('.spoilers-faq__item');
for (let index = 0; index < spoilerItems.length; index++) {
    spoilerItems[index].addEventListener('click', (e) => {
        const self = e.currentTarget;
        const selfText = self.querySelector('.spoilers-faq__text');
        const open = self.classList.contains('spoiler-open');


        spoilerItems.forEach(el => {
            el.classList.remove('spoiler-open');
            el.lastElementChild.style.height = null;
        });

        if (!open) {
            self.classList.add('spoiler-open');
            selfText.style.height = selfText.scrollHeight + 'px';
        }
    });
}