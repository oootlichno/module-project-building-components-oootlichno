function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav



  function buildNav(links) {
    const nav = document.createElement('nav');

    links.forEach(img => {
    const image = document.createElement('a');
    image.href = img.href;
    image.textContent = img.textContent;
    image.title = img.title;
    nav.appendChild(image);
    });

    document.body.appendChild(nav);
    
    
        return nav;
      }


  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

 
/*   Implement the `buildNav` function:

  1. It takes an array of objects as its argument, and returns a nav element.
  2. The array passed into the function contains the data needed to construct the nav.
  3. Each object in the array contains the data needed to construct a single anchor tag inside the nav.
  4. Each object contains `href`, `textContent` and `title` properties.

See below an example of a return value of `buildNav`, depending on the data passed into it:

```html
<nav>
  <a href="https://www.example.com" title="Go to the home page">Home</a>
  <a href="https://www.example.com/about" title="Learn more about our company">About</a>
  <a href="https://www.example.com/services" title="View our available services">Services</a>
  <a href="https://www.example.com/blog" title="Read our latest blog posts">Blog</a>
  <a href="https://www.example.com/contact" title="Get in touch with us">Contact</a>
</nav>
```

❗ After the `buildNav` function declaration you will see the function being used to create a nav and attach it to the DOM.
 */
{/* <section>
  <div class="learner-card">
    <p>Kenneth Fisher</p>
    <p>Learner ID: 24</p>
    <p>Date of Birth: 1990-01-01</p>
    <p>Favorite Language: Python</p>
  </div>
  <div class="learner-card">
    <p>Jess Williams</p>
    <p>Learner ID: 53</p>
    <p>Date of Birth: 1985-05-10</p>
    <p>Favorite Language: JavaScript</p>
  </div>
  <div class="learner-card">
    <p>Brandon Nguyen</p>
    <p>Learner ID: 72</p>
    <p>Date of Birth: 1992-09-15</p>
    <p>Favorite Language: C#</p>
  </div>
  <div class="learner-card">
    <p>Sabah Beydoun</p>
    <p>Learner ID: 41</p>
    <p>Date of Birth: 1988-03-25</p>
    <p>Favorite Language: Ruby</p>
  </div>
  <div class="learner-card">
    <p>Daniel Castillo</p>
    <p>Learner ID: 17</p>
    <p>Date of Birth: 1995-11-05</p>
    <p>Favorite Language: Java</p>
  </div>
</section> */}
  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card


  
  function buildLearnerCard(learner, languages) {
    const card = document.createElement('div');
    card.classList.add('learner-card');
const paragraph = document.createElement('p');
paragraph.textContent = learner.fullName;

const idElement = document.createElement('p');
idElement.textContent = `Learner ID: ${learner.id}`;

const dob = document.createElement('p');
dob.textContent = `Date of Birth: ${learner.dateOfBirth}`;

const favLangP = document.createElement('p');
const favLanguage = languages.find(lang => lang.id === learner.favLanguage);
favLangP.textContent = `Favorite Language: ${favLanguage.name}`;

[paragraph, dob, favLangP, idElement].forEach(p => {
  card.appendChild(p);
})

card.addEventListener('click', evt => {
  document.querySelectorAll('.learner-card').forEach(card => {
    card.classList.add('active')
  })

})

return card;



  }

  
  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]
    learners.forEach(learner =>{
      const learnerCard = buildLearnerCard(learner, languages)
      document.querySelector('section').appendChild(learnerCard);
    })
    


  }

  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  {/* <footer>
    <div class="company-info">
      <p class="company-name">Bloom Institute of Technology</p>
      <p class="address">123 Main Street, City, Country</p>
      <p class="contact-email">Email:
         <a href="mailto:info@example.com"> info@example.com</a>
       </p>
       </div>
       <div class="social-media">
        <a href="https://twitter.com/example">Twitter</a>
        <a href="https://www.facebook.com/example">Facebook</a>
        <a href="https://www.instagram.com/example">Instagram</a>
        </div>
        <div>© BLOOM INSTITUTE OF TECHNOLOGY 2024</div>
        </footer> */}

        function buildFooter(footerData) {
          const footer = document.createElement('footer');
      
          const companyInfo = document.createElement('div');
          const companyName = document.createElement('p');
          const address = document.createElement('p');
          const contact = document.createElement('p');
          const socials = document.createElement('div');
          const twitter = document.createElement('a');
          const facebook = document.createElement('a');
          const instagram = document.createElement('a');
          const bloom = document.createElement('div');
      
          footer.appendChild(companyInfo);
          footer.appendChild(socials);
          footer.appendChild(bloom);
          companyInfo.appendChild(companyName);
          companyInfo.appendChild(address);
          companyInfo.appendChild(contact);
          socials.appendChild(twitter);
          socials.appendChild(facebook);
          socials.appendChild(instagram);
      
          companyInfo.classList.add('company-info');
          companyName.classList.add('company-name');
          address.classList.add('address');
          contact.classList.add('contact-email');
          socials.classList.add('social-media');
      
          companyName.textContent = footerData.companyName;
          address.textContent = footerData.address;
          contact.innerHTML = `Email: <a href="mailto:${footerData.contactEmail}"> ${footerData.contactEmail}</a>`;
          twitter.textContent = "Twitter";
          facebook.textContent = "Facebook";
          instagram.textContent = "Instagram";
          twitter.href = footerData.socialMedia.twitter;
          facebook.href = footerData.socialMedia.facebook;
          instagram.href = footerData.socialMedia.instagram;
          bloom.textContent = "© BLOOM INSTITUTE OF TECHNOLOGY 2024";
      
          return footer;
      }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card

  document.addEventListener('click', evt =>{
    if(evt.target === document.querySelector('section')){
      const learners = document.querySelectorAll('.learner-card')
      learners.forEach(card => card.classList.remove('active'))
    }

  })
}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
