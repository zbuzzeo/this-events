//Secret Menu Challenge
//Add event listeners to the following:

/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/

var navElem = document.getElementsByClassName('navi');
// console.log(navElem)
for(var i = 0; i<navElem.length; i++){
//   console.log(navElem[i])
  navElem[i].addEventListener('click', showMenu)
}

function showMenu(){
    //console.log(this.innerHTML)
    var childElem = this.querySelectorAll('.inner')[0];
    // console.log(childElem);
    if(childElem.style.display === 'block'){
        childElem.style.display = 'none';
    }else{
        childElem.style.display = 'block';
    }
}


/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var showItem = document.getElementsByClassName('name');
// console.log(showItem);

for(var i = 0; i<showItem.length; i++){
    // console.log(showItem[i])
    showItem[i].addEventListener('click', secretItem)
}

function secretItem(){
    // console.log(this.innerHTML)
    var paraElem = this.querySelectorAll('.menu')[0];
    if(paraElem.style.display === 'block'){
        paraElem.style.display = 'none';
    }else{
        paraElem.style.display = 'block'
    }
}


/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/

var thumbIcon = document.getElementsByClassName('thumb');
// console.log(thumbIcon)

for(var i = 0; i<thumbIcon.length; i++){
    // console.log(thumbIcon[i])
    thumbIcon[i].addEventListener('click', dislikes);

    var counter = document.createElement('div');
    counter.className = 'hater';
    thumbIcon[i].appendChild(counter);
}

function dislikes(){
    //console.log('hi')
    var haterCount = this.querySelectorAll('.hater')[0];
    //console.log(haterCount);
    haterCount.innerHTML++;
}

