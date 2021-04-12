function showsForm() {
    const $header = document.querySelector('.header')
    $header.style.opacity = 1;
    $header.style.transition = '1s ease-in-out'
}
setTimeout(function(){showsForm();},4000);

(function chooseSizeField() {
    const $containerSizesField = document.querySelector('.header');

    $containerSizesField.addEventListener('click', (e) => {

        if (e.target.tagName === 'LI') {
            const arrSizesFields = document.querySelectorAll('.list__item')
            const $startButton = document.querySelector('.header__button')

            arrSizesFields.forEach(el => {
                if (el.closest('.list__item--active')) {
                    el.classList.remove('list__item--active');
                }
            })

            e.target.classList.add('list__item--active');
            $startButton.classList.add('header__button--active')
        }
    })
})()