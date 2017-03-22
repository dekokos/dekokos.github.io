// этот код помечает картинки цифрами, для удобства разработки
    // его можно убрать, если не нужен
    // var lis = document.getElementsByTagName('li');
    // for (var i = 0; i < lis.length; i++) {
    //   lis[i].style.position = 'relative';
    //   var span = document.createElement('span');
    //   span.style.cssText = 'position:absolute;left:0;top:0';
    //   span.innerHTML = i + 1;
    //   lis[i].appendChild(span);
    // }

    var width = 130;	//ширина картинки
    var count = 3; //кол-во картинок
    var carousel = document.querySelector('.carousel');
    var list = carousel.querySelector('ul');
    var listElems = carousel.querySelectorAll('li');
    var position = 0; //текущий сдвиг влево

    carousel.querySelector('.prev').onclick = function () {
    	if(position === 0) {position = -910; list.style.marginLeft = position + 'px'; return;}
        // сдвиг влево
        // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    	position = Math.min(position + width*count, 0);
    	list.style.marginLeft = position + 'px';
    };
    carousel.querySelector('.next').onclick = function () {
    	if(position === -910) {position = 0; list.style.marginLeft = position + 'px'; return;}
    	position = Math.max(position - width*count, -width * (listElems.length - count));
    	list.style.marginLeft = position + 'px';
    };
