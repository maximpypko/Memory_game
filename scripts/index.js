class Game {

    icons = [
        './images/1.png',
        './images/2.png',
        './images/3.png',
        './images/4.png',
        './images/5.png',
        './images/6.png',
        './images/7.png',
        './images/8.png',
        './images/9.png',
        './images/10.png',
    ]

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

            const $cardsItem = document.createElement('li')
            $cardsItem.classList.add('cards__item')
            $cards__list.append($cardsItem)
            $cardsItem.style.width = `${95 / a}%`;
            $cardsItem.style.height = `${90 / b}%`;
        }

        const $content = document.querySelector('.content')
        $content.style.display = 'block'
        $content.append($cards__list)

        this.disposeIcons();
        this.reverseCard();
    }

    disposeIcons() {
        
        const arrCard = document.querySelectorAll('.cards__item')
        const randomArray = this.getRandomArray(arrCard.length, 0, arrCard.length)

        function qwerty(icons, randomA , count = 0, count2 = 0) {

            arrCard[randomA[count2]].insertAdjacentHTML('afterbegin',
                `<div class = 'card__front'></div>
                <div class = 'card__back'>
                    <img src = '${icons[count]}' alt = 'card icon'>
                </div>`
            )
            arrCard[randomA[++count2]].insertAdjacentHTML('afterbegin',
                `<div class = 'card__front'></div>
                <div class = 'card__back'>
                    <img src = '${icons[count]}' alt = 'card icon'>
                </div>`
            )
            
            count++;
            count2++

            if (count === 10) {
                count = 0;
            }
            if (count2 === randomA.length) {
                return
            } else {
                qwerty(icons, randomA, count, count2)
            }
        }
        qwerty(this.icons, randomArray)

    }

    getRandomArray(count, min, max){
        if (count > (max - min)) return;
        let randomArray = [], num;
      
        while (count) {
            num = Math.floor(Math.random() * (max - min) + min);
            if (randomArray.indexOf(num) === -1) {
                randomArray.push(num);
                count--;
            } 
        }
        return randomArray;
    }

    reverseCard() {
        const $cardsContainer = document.querySelector('.cards__list');

        $cardsContainer.addEventListener('click', e => {
                
            if (e.target.closest('.card__front')) {
                e.target.style.transform = 'rotateY(180deg)'
                e.target.nextElementSibling.style.transform = 'rotateY(360deg)'

                setTimeout(this.hideIcon, 1000, e.target)
            }

        })
    }

    hideIcon(target) {
        target.style.transform = 'rotateY(0deg)';
        target.nextElementSibling.style.transform = 'rotateY(180deg)'
    }
}
new Game();