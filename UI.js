
const container = document.querySelector('.container')




// SECOND PAGE
const openPage = () => {
  
  let HTML = `
    <img src='img/envelope.jpeg'
      class='envelope'
    />
    <h3>
      Do you want to open it? (⁠*⁠˘⁠︶⁠˘⁠*⁠)
    </h3>
    
    <div class='set_buttons'>
      <button class='button2'
        id='not_openbtn'
        onclick='notOpenPage()'
      >
        No ;(
      </button>
      <button class='button1'
        onclick='LetterPage()'
      >
        Open it ♡♡
      </button>
    </div>
  `
  
  
  container.innerHTML = HTML
  
}


// NOT OPEN PAGE
const notOpenPage = () => {
  
  let HTML = `
    <img src='img/cry.jpeg'
      class='cat_cry'
    />
    
    <h3>
     Awwhh... Can we try again pls?
     (⁠っ⁠˘̩⁠╭⁠╮⁠˘̩⁠)⁠っ
    </h3>
    
    <button
      onclick='openPage()'
      class='button1'
    >
      Try again
    </button>
  `
  
  container.innerHTML = HTML
}


const LetterPage = () => {
  let HTML = `
    <img
      src='img/girl.jpeg'
      class='girl'
    />
    
    <div class='text_letter' id='letterText'>
      <p>
        Happy Girlfriend’s, my palangga. I know we’ve been through a lot—the ups, the downs, the misunderstandings, and the moments when things felt heavy—but through it all, you’ve stayed, and so have I.
        <br/><br/>
        No matter how hard life gets, having you beside me makes everything feel possible. I may not always have the right words, but please know this: I love you more than anything, and I always will.
        <br/><br/><br/><br/>
        Your lover<br/>
        Allen♡
      </p>
    </div>
  `;

  container.innerHTML = HTML;

  // Hide the text first
  const letterDiv = document.getElementById('letterText');
  letterDiv.classList.add('hidden-text');

  // Reveal after 1 second
  setTimeout(() => {
    letterDiv.classList.remove('hidden-text');
    letterDiv.classList.add('fade-in');
  }, 500);
};





