runConsole();
headerScroll();

window.addEventListener('scroll', function() {
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