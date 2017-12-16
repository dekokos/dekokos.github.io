
window.onload = function() {
  
  
    var addCollection = document.querySelectorAll('.add');
    var clearCounter = document.querySelector('.count-clear');
  
    for (var i = 0; i < addCollection.length; i++) {
      var addCol = addCollection[i];
      
  
      addCol.addEventListener('click', function(e) {
        e.preventDefault();
        // var numAddCol = +this.previousElementSibling.innerHTML.replace('₴', '').replace(/\s+/g, '');
        var numAddCol = +this.previousElementSibling.innerHTML.match(/[0-9]/g).join('');
        // console.log(parseInt(numAddCol));
        // console.log(typeof(numAddCol));
        // console.log(numAddCol);
        var counter = document.querySelector('.counter');
        var counterInn = counter.innerHTML;
        // console.log(+counterInn);
        counter.innerHTML = +counterInn + numAddCol;
        // console.log(counter);
      });
    }
  
    clearCounter.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('.counter').innerHTML = '0';
    });
  	// $('nav a').click(function(event) {
    //   event.preventDefault();
    //   var href=$(this).attr('href');
    //   var target=$(href);
    //   var top=target.offset().top;
    //   $('html,body').animate({
    //     scrollTop: top
    //   }, 1000);
    // });
  }
// $(function () {



// });

