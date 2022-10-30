
  var config = {
    apiKey: "AIzaSyBABBSetYvDWzxH8lreQypAf3REwTby2jc",
    databaseURL: "https://ctn-gc.firebaseio.com/",
  };
  firebase.initializeApp(config);

var database = firebase.database();

var firebaseRef = database.ref("card").orderByChild("date");
firebaseRef.once('value').then(function (datasnapshot) {
  datasnapshot.forEach(function (childSnapshot) {
    var childData = childSnapshot.val();
    var card = document.createElement('div');
    var cardImgOverlay = document.createElement('div');
    var cardImg = document.createElement('img');
    var cardTitle = document.createElement('a');
    var cardDesc = document.createElement('a');
    var cardLink = document.createElement('a');
    card.setAttribute('class', 'card');
    cardImg.setAttribute('class', 'card-img');
    cardTitle.setAttribute('class', 'card-title');
    cardDesc.setAttribute('class', 'card-desc');
    cardLink.setAttribute('class', 'card-link');
    cardImg.src = checkNoneImage(childData['image']);
    cardTitle.textContent = childData['title'];
    cardDesc.innerHTML = childData['text'];
    cardLink.href = childData['url'];
    cardLink.innerHTML = 'เข้าชม';
    card.appendChild(cardImg);
    card.appendChild(cardTitle);
    cardTitle.appendChild(cardDesc);
    if (childData['url'] !== "") card.appendChild(cardLink);
    document.getElementsByClassName("card-warpper")[0].insertBefore(card, document.getElementsByClassName("card-warpper")[0].firstChild);
  });
});

function checkNoneImage(text) {
  if (text === "") {
    return '/assets/ctn.png';
  }else{
    return text
  }
}