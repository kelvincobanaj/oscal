// about
document.querySelector('#btn-about').addEventListener ('click', function () {
  document.querySelector('#about').className = 'current';
  document.querySelector('[data-position="current"]').className = 'left';
});
document.querySelector('#btn-about-back').addEventListener ('click', function () {
  document.querySelector('#about').className = 'right';
  document.querySelector('[data-position="current"]').className = 'current';
});

// venue
document.querySelector('#btn-venue').addEventListener ('click', function () {
  document.querySelector('#venue').className = 'current';
  document.querySelector('[data-position="current"]').className = 'left';
});
document.querySelector('#btn-venue-back').addEventListener ('click', function () {
  document.querySelector('#venue').className = 'right';
  document.querySelector('[data-position="current"]').className = 'current';
});

// tirana
document.querySelector('#btn-tirana').addEventListener ('click', function () {
  document.querySelector('#tirana').className = 'current';
  document.querySelector('[data-position="current"]').className = 'left';
});
document.querySelector('#btn-tirana-back').addEventListener ('click', function () {
  document.querySelector('#tirana').className = 'right';
  document.querySelector('[data-position="current"]').className = 'current';
});

// agenda
document.querySelector('#btn-agenda').addEventListener ('click', function () {
  document.querySelector('#agenda').className = 'current';
  document.querySelector('[data-position="current"]').className = 'left';
});
document.querySelector('#btn-agenda-back').addEventListener ('click', function () {
  document.querySelector('#agenda').className = 'right';
  document.querySelector('[data-position="current"]').className = 'current';
});

// speakers
document.querySelector('#btn-speakers').addEventListener ('click', function () {
  document.querySelector('#speakers').className = 'current';
  document.querySelector('[data-position="current"]').className = 'left';
});
document.querySelector('#btn-speakers-back').addEventListener ('click', function () {
  document.querySelector('#speakers').className = 'right';
  document.querySelector('[data-position="current"]').className = 'current';
});

// supporters
document.querySelector('#btn-supporters').addEventListener ('click', function () {
  document.querySelector('#supporters').className = 'current';
  document.querySelector('[data-position="current"]').className = 'left';
});
document.querySelector('#btn-supporters-back').addEventListener ('click', function () {
  document.querySelector('#supporters').className = 'right';
  document.querySelector('[data-position="current"]').className = 'current';
});
