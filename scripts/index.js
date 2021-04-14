class Game {
    constructor(size) {
        this.size = size;
        this.showsForm();
        this.chooseSizeField();
    }
    
    showsForm() {
        setTimeout(function () {
            const $header = document.querySelector('.header')
            $header.style.opacity = 1;
            $header.style.transition = '1.5s ease-in-out'
        },3000);
    }
    
    chooseSizeField() {
        const $containerSizesField = document.querySelector('.header');

        $containerSizesField.addEventListener('click', (e) => {
            const $startButton = document.querySelector('.header__button')
    
            if (e.target.tagName === 'LI') {
                const arrSizesFields = document.querySelectorAll('.list__item')
                
                arrSizesFields.forEach(el => {
                    if (el.closest('.list__item--active')) {
                        el.classList.remove('list__item--active');
                    }
                })
    
                e.target.classList.add('list__item--active');
                $startButton.classList.add('header__button--active')
    
            } else if (e.target.closest('.header__button--active')) {
                $startButton.classList.remove('header__button--active');
    
                const activeSizeItem = document.querySelector('.list__item--active');
                const size = activeSizeItem.textContent;
                this.convertsToNumbers(size)

                const $header = document.querySelector('.header')
                $header.style.opacity = 0;
            }
        })
    }

    convertsToNumbers(size) {
        const [a, b] = size.split('*');
        this.showCards(+a, +b);
    }

    showCards(a, b) {
        const $cards__list = document.createElement('ul')
        $cards__list.classList.add('cards__list')
        const quantityCards = a * b;

        for (let index = 0; index < quantityCards; index++) {
            const $li = document.createElement('li')
            $li.classList.add('cards__item')
            $li.innerHTML = `<img src = '' alt = 'card image' class = 'card__image'`
            $cards__list.append($li)

            $li.style.width = `${95 / a}%`;
            $li.style.height = `${90 / b}%`;
        }

        const $content = document.querySelector('.content')
        $content.style.display = 'block'
        $content.append($cards__list)
    }
}

new Game();