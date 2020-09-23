// this is an example project used to show the functionality of the stack data structure
// this project operates similarly to that of a page navigator in your web browser

const Stack = require('./Stack.js');
const prompt = require('prompt-sync')();

// initialize stacks as pages
const backPages = new Stack();
const nextPages = new Stack();
let currentPage = 'Start Page';


// Helper Functions
//shows the current, back, and next pages
const showCurrentPage = (action) => {
  console.log(`\n${action}`);
  console.log(`Current page = ${currentPage}`);
  console.log('Back page = ', backPages.peek());
  console.log('Next page = ', nextPages.peek());
}

//navigate to a new page
const newPage = (page) => {
  backPages.push(currentPage);
  currentPage = page;

  // clear the nextPages stack
  while (!nextPages.isEmpty()) {
    nextPages.pop();
  }

  showCurrentPage("NEW: ");
}

// navigate to a back page
const backPage = () => {
  nextPages.push(currentPage);
  currentPage = backPages.pop();
  showCurrentPage("BACK: ");
}

//naviagte to the next page (one that was previously visited before going back a page)
const nextPage = () => {
  backPages.push(currentPage);
  currentPage = nextPages.pop();
  showCurrentPage("NEXT: ");
}


// The following strings are used to prompt the user
const baseInfo = '\nEnter a url';
const backInfo = 'B|b for back page';
const nextInfo = 'N|n for next page';
const quitInfo = 'Q|q for quit';
const question = 'Where would you like to go today? '


// user interface in console
let finish = false;
let showBack = false;
let showNext = false;
showCurrentPage('DEFAULT: ');
 while (!finish) {
   let instructions = baseInfo;
   if (backPages.peek() != null) {
     instructions = `${instructions}, ${backInfo}`;
     showBack = true;
   } else {
     showBack = false;
   }
   if (nextPages.peek() != null) {
     instructions = `${instructions}, ${nextInfo}`;
     showNext = true;
   } else {
     showNext = false;
   }
  instructions = `${instructions}, ${quitInfo}`;
  
  console.log(instructions);
  
  let response = prompt('Where would you like to go?');
  let lowerCaseAnswer = response.toLowerCase();

  //checks what the users response is to alter the different stacks
  if ((lowerCaseAnswer !== 'n') && (lowerCaseAnswer !== 'b') && (lowerCaseAnswer !== 'q')) {
    // we create a new page based on the url
    newPage(lowerCaseAnswer);
  } else if (lowerCaseAnswer === 'n' && showNext) {
    // we navigate forward a page
    nextPage();
  } else if (lowerCaseAnswer === 'b' && showBack) {
    // we navigate back a page
    backPage();
  } else if (lowerCaseAnswer === 'b') {
    // invalid input to a non-available option
    console.log('Cannot go back a page. Stack is empty.');
  } else if (lowerCaseAnswer === 'n') {
    // invalid input to a non-available option
    console.log('Cannot go to the next page. Stack is empty.');
  } else if (lowerCaseAnswer === 'q') {
    finish = true;
  } else {
    let response = prompt('Please enter a valid response: ');
    let lowerCaseAnswer = response.toLowerCase();
  }
 }
