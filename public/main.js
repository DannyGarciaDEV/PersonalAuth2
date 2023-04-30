var thumbUp = document.getElementsByClassName("fa-fire");
var trash = document.getElementsByClassName("fa-trash");
var thumbDown = document.getElementsByClassName("fa-thumbs-down");
Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'thumbUp':thumbUp
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});
Array.from(thumbDown).forEach(function(element) {
  element.addEventListener('click', function(){
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const msg = this.parentNode.parentNode.childNodes[3].innerText
    const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
    fetch('messages/thumbDown', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': name,
        'msg': msg,
        'thumbUp': thumbUp
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'msg': msg
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});


function changeBackgroundColor() {
  var body = document.querySelector('body');
  var span = document.querySelector('span');
  var text = document.querySelector('h1');
  var li = document.querySelector('li');
  body.style.backgroundColor = 'pink';
  span.style.color = 'black'
  text.style.color = 'black'
  li.style.color = 'black'

  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/save-color');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({ color: 'pink' }));
  xhr.onload = function() {
    if (xhr.status === 200) {
      console.log('Color saved to database');
      
    } else {
      console.log('Error saving color');
    }
  };
}
  


 function changeBackgroundColorTwo() {
   var body = document.querySelector('body');
   var span = document.querySelector('span');
   var text = document.querySelector('h1');
   body.style.backgroundColor = 'black';
    span.style.color = 'pink'
   text.style.color = 'pink'
 }

