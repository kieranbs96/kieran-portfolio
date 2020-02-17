runConsole();
// backgroundAnim();
headerScroll();
navUpdate();


window.addEventListener('scroll', function() {
  navUpdate();
  headerScroll();
});


function runConsole() {
  const consoleCss = `text-shadow: #1a354a 1px 1px,#1a354a 0px 0px,#1a354a 1px 1px,#1a354a 2px 2px,#1a354a 3px 3px,#1a354a 4px 4px,#1a354a 5px 5px,#1a354a 6px 6px,#1a354a 7px 7px,#1a354a 8px 8px,#1a354a 9px 9px,#1a354a 10px 10px,#1a354a 11px 11px,#1a354a 12px 12px,#1a354a 13px 13px,#1a354a 14px 14px,#1a354a 15px 15px,#1a354a 16px 16px,#1a354a 17px 17px,#1a354a 18px 18px,#1a354a 19px 19px; font-size: 24px; font-family: Helvetica, sans-serif; color: #ffc601`;
  console.log('%c Welcome, %s', consoleCss, "I'm Kieran");
  console.log(
    `%c> Since you're here why not check out my LinkedIn
> https://www.linkedin.com/in/kieranbs96/`,
    'color: #BADA55; font-size: 13px;'
  );
}

function headerScroll() {
  if (window.pageYOffset > 95 && !document.querySelector('.scrolled')) {
    console.log('> Add Scrolled');
    document.querySelector('.header').classList.add('scrolled');

  } else if (window.pageYOffset <= 95 && document.querySelector('.scrolled')) {
    document.querySelector('.scrolled').classList.remove('scrolled');
    console.log('> Remove Scrolled');

  }
}

function checkPage() {
  var body = document.querySelector('main').clientHeight;
  var about = document.querySelector('.about');
  var portfolio = document.querySelector('.portfolio');
  var contact = document.querySelector('.contact');
  if (contact.getBoundingClientRect().top > contact.clientHeight) {
    if (contact.getBoundingClientRect().top < (contact.clientHeight * 2)) {
      return 'portfolio';
    } else {
      return 'about';
    }
  } else {
    return 'contact';
  }
}

function navUpdate() {
  console.log('update');
  document.querySelectorAll('header__nav-list-item').forEach((item) => {
    console.log('forEach');
    item.classList.remove('active');
  })
  document.querySelector(`#${checkPage()}_link`).parentElement.classList.add('active');
}

function backgroundAnim() {
  // Credit to nashvail on Codepen
  const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"],
  numBalls = 60,
  balls = [];

  for (let i = 0; i < numBalls; i++) {
    let ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.background = colors[Math.floor(Math.random() * colors.length)];
    ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
    ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
    ball.style.transform = `scale(${Math.random()})`;
    ball.style.width = `${Math.random()}em`;
    ball.style.height = ball.style.width;

    balls.push(ball);
    document.querySelector('#about').append(ball);
  }

  // Keyframes
  balls.forEach((el, i, ra) => {
    let to = {
      x: Math.random() * (i % 2 === 0 ? -11 : 11),
      y: Math.random() * 12
    };

    let anim = el.animate(
      [
        { transform: "translate(0, 0)" },
        { transform: `translate(${to.x}rem, ${to.y}rem)` }
      ],
      {
        duration: (Math.random() + 1) * 2000, // random duration
        direction: "alternate",
        fill: "both",
        iterations: Infinity,
        easing: "ease-in-out"
      }
    );
  });
}

