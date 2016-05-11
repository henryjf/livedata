import $ from 'jquery';

const url = 'https://secret-forest-21470.herokuapp.com/collections/485748dgfjdfdda4';

let form = $('.addForm');
let peopleArea = $('.people');


form.on('submit', function(event) {
  event.preventDefault();

  let name      = form.find('.name').val();
  let age       = form.find('.age').val();
  let location  = form.find('.location').val();

  let person = {
    name: name,
    age: age,
    location: location
  };

// send the data to our server
$.post(url, person).then(function(res) {
  console.log(res);

let personHTML = personTemplate(res);
    peopleArea.prepend(personHTML);

});

});

function getAllMyPeeps() {
  // Get all my people and add to the page
  $.getJSON(url).then( function (res) {
    res.forEach(function (person) {
      let personHTML = personTemplate(person);
      peopleArea.append(personHTML);
    });
  });
}

getAllMyPeeps();

function personTemplate(person) {
  return `
    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img src="http://placehold.it/128x128" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>${person.name}</strong>
              <small>${person.age}</small>
             </p>
          </div>
        </div>
      </article>
    </div>
  `;
}

getAllMyPeeps(); //Get all people 1 time.
