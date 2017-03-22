function Slider(selector, options) {
	var __self = this;
	var sliderNode = document.querySelector(selector), //слайдер
			sliderImagesNode = sliderNode.querySelector('.slider__images-wrap'), //картинки
			prevSliderNode = sliderNode.querySelector('.slider__pager_previous'),	//кнопка предыдущая
			nextSliderNode = sliderNode.querySelector('.slider__pager_next');	//кнопка следующая
			paginationNode = sliderNode.querySelector('.slider__pagination'); //кнопки-точки

	var currentSliderIndex = options.currentSlider || 0, //текущая картинка слайдера
			imagesCount = sliderImagesNode.children.length, //кол-во картинок
			sliderSize = sliderImagesNode[(options.direction === 'vertical') ? 'offsetHeight' : 'offsetWidth'] //в зависимости от скрола верт или горизонт берем высоту или ширину

	this.prevSlide = function() { //чтобы предыдущая картинка после нулевой была последняя
		if(currentSliderIndex === 0) {
			currentSliderIndex = imagesCount - 1;
			return;
		}
		currentSliderIndex--;
	}
	this.nextSlide = function() {
		if(currentSliderIndex === imagesCount - 1) {
			currentSliderIndex = 0;
			return;
		}
		currentSliderIndex++;
	}

	this.__render = function() {
		var directionStyle = (options.direction === 'vertical') ? 'marginTop' : 'marginLeft';
		sliderImagesNode.style[directionStyle] = -(currentSliderIndex * sliderSize) + 'px';
		paginationNode.querySelector('.active').classList.remove('active'); //у точек берем класс active и удаляем его
		paginationNode.children[currentSliderIndex].querySelector('a').classList.add('active');// текущей точке(через currentSlideIndex - какая картинка, такая и точка) добавляем класс act
	}

	prevSliderNode.onclick = function(e) {
		e.preventDefault();
		__self.prevSlide();
		__self.__render();
	}
	nextSliderNode.onclick = function(e) {
		e.preventDefault();
		__self.nextSlide();
		__self.__render();
	}

	this.createPagination = function() {
		for(var i = 0; i < imagesCount; i++) {
			var myNode = document.querySelector('.slider__pagination-item_tmpl').cloneNode(true);
			document.querySelector('ul').appendChild(myNode);
			myNode.innerHTML = '<a href="#" data-slider__item="' + i + '">' + i + '</a>';
			myNode.classList.remove('slider__pagination-item_tmpl');
		}
		document.querySelectorAll('.slider__pagination-item>a')[1].classList.add('active');
		document.querySelector('.slider__pagination-item_tmpl').remove();

	}
	paginationNode.onclick = function(e) {
			e.preventDefault();//не скролить
			var link = e.target;//ссылка на которую мы кликнули, target - встроенная для onclick
			if(link.tagName !== 'A') {return;} //если мы кликнули не на ссылку <а>, то просто выходим из ф-ции
			currentSliderIndex = +link.dataset['slider__item']; //+ чтобы возвращались не строчки '1'/'2', а цифры;берем цифру(для нашего currentSlideIndex) из dataset
			__self.__render();
		}

	this.__init = function() {
		if(options.direction === "vertical") {
			sliderImagesNode.style.whiteSpace = 'normal';
		}
		this.createPagination();
		this.__render;
	}
	this.__init();
}

function paginationCreate() {

}