//Secret Menu Challenge
//Add event listeners to the following:

/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/

// i want to use the onMouseEnter and onMouseLeave events to toggle content.

var classNavi = document.getElementsByClassName('navi');

for (var i = 0; i < classNavi.length; i++) {
      console.log(classNavi[i].innerHTML);
      classNavi[i].addEventListener('mouseenter', showContent);
      classNavi[i].addEventListener('mouseleave', hideContent);

}

function showContent() {
      // the current parent element (in this case: home, location, or blog);
      // console.log(this.innerHTML);
      var currentElement = this.querySelectorAll('.inner')[0];
      // console.log(cucurrentElementrrentChild);
      currentElement.style.color ='#dc143c';
      currentElement.style.display = 'block';

}

function hideContent() {
      var currentElement = this.querySelectorAll('.inner')[0];
      currentElement.style.color = '#dc143c';
      currentElement.style.display = 'none';

}

/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/    

var classRestaurants = document.getElementsByClassName('name');

for (var i = 0; i < classRestaurants.length; i++) {
      // console.log(classRestaurants[i].innerHTML);
      classRestaurants[i].addEventListener('click', showSecretMenu);

}

function showSecretMenu() {
      var currentElement = this.querySelectorAll('.menu')[0];
      // console.log(currentElement.innerHTML);
      if (currentElement.style.display !== 'block') {
            currentElement.style.display = 'block';

      } else if (currentElement.style.display === 'block') {
            currentElement.style.display = 'none';

      }

}


/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/

var classRank = document.getElementsByClassName('rank');
var classThumb = document.getElementsByClassName('thumb');

for (var i = 0; i < classRank.length; i++) {
      var newPElem = document.createElement('div');
      newPElem.className = 'counter';
      newPElem.innerHTML = 0;
      newPElem.style.color = 'cornflowerblue';
      newPElem.style.fontSize = '1em';
      newPElem.style.padding = '15px 15px 0px 15px';
      newPElem.style.marginLeft = '1em';
      newPElem.style.marginTop = '-1.6em';
      classThumb[i].appendChild(newPElem);

      // don't need to do a second for loop because there are an equal amount of elements "rank" and elements "thumb"
      classThumb[i].addEventListener('click', updateCount);

}

function updateCount() {
      var currentCounter = this.querySelectorAll('.counter')[0];
      console.log(this.innerHTML);
      currentCounter.innerHTML ++;

}
