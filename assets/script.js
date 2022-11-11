var messageBox = document.querySelector('.js-message');

  var btn = document.querySelector('.js-message-btn');

  var card = document.querySelector('.js-profile-card');

  var closeBtn = document.querySelectorAll('.js-message-close');

  btn.addEventListener('click',function (e) {

      e.preventDefault();

      card.classList.add('active');

  });

  closeBtn.forEach(function (element, index) {

     console.log(element);

      element.addEventListener('click',function (e) {

          e.preventDefault();

          card.classList.remove('active');

      });

  });

var tit = document.title;
var c = 0;
function writetitle()
{
  document.title = tit.substring(0,c);
  if(c==tit.length)
  {
    c = 0;
    setTimeout("writetitle()", 2000)
  }
  else
  {
    c++;
    setTimeout("writetitle()", 200)
  }
}

writetitle();