class carousel {
constructor (element, options = {}) {
    this.element = element;
    this.options = object.assign({}, {
        slidesToScroll: 1,
        slidesVisibile: 1
        }, options)
       let root = document.createElement('div')
       let container = this.createDivWithClass('carousel__container')
       root.appendChild(container)
       this.element.appendChild(root)
    }
    
    createDivWithClass (className) {
        let div = document.createElement('div')
        div.setAttribute('class', className)
        return div
    }


}


document.addEventListener('DOMContentLoaded', function () {
    new carousel( document.querySelector('#Carousel1'), {
        slidesToScroll: 1,
        slidesVisibile: 3,
    }) 


})

