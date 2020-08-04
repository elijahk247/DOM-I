const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

console.log('Hello');

// Changing the Anchor tags in nav to reflect the original
const firstAnchor = document.querySelector('a');
firstAnchor.textContent = siteContent.nav['nav-item-1'];

const secondAnchor = firstAnchor.nextElementSibling;
secondAnchor.textContent = siteContent.nav['nav-item-2'];

const thirdAnchor = secondAnchor.nextElementSibling;
thirdAnchor.textContent = siteContent.nav['nav-item-3'];

const fourthAnchor = thirdAnchor.nextElementSibling;
fourthAnchor.textContent = siteContent.nav['nav-item-4'];

const fifthAnchor = fourthAnchor.nextElementSibling;
fifthAnchor.textContent = siteContent.nav['nav-item-5'];

const sixthAnchor = fifthAnchor.nextElementSibling;
sixthAnchor.textContent = siteContent.nav['nav-item-6'];


// Editing cta stuff 
const ctaMain = document.querySelector('.cta');
console.log(ctaMain);

const ctaTitle = ctaMain.querySelector('h1');
ctaTitle.innerText = 'Dom \n is \n Awesome';

const ctaButton = ctaMain.querySelector('button')
ctaButton.textContent = siteContent.cta.button;

const ctaImage = ctaMain.querySelector('img');
ctaImage.src = siteContent.cta['img-src'];


// main content stuff
const mainContent = document.querySelector('.main-content');
console.log(mainContent);

const mainImage = mainContent.querySelector('img');
mainImage.src = siteContent['main-content']['middle-img-src'];

const topContent = mainContent.querySelector('.text-content');
//console.log(topContent);

// top content edit
const topHeader = topContent.querySelector('h4');
console.log(topHeader);
topHeader.textContent = siteContent['main-content']['features-h4'];
const topParagraph = topContent.querySelector('p');
topParagraph.textContent = siteContent['main-content']['features-content'];


// second part of main-content 
const secondTopContent = topContent.nextElementSibling;

const secondTopHeader = secondTopContent.querySelector('h4');
secondTopHeader.textContent = siteContent["main-content"]['about-h4'];
const secondTopParagraph = secondTopContent.querySelector('p');
secondTopParagraph.textContent = siteContent["main-content"]['about-content'];


// bottom-content edit 
const bottomContent = mainContent.querySelector('.bottom-content');
console.log(bottomContent);

// first portion of bottom-content
const firstBottom = bottomContent.querySelector('.text-content');
console.log(firstBottom);

const firstBotHeader = firstBottom.querySelector('h4');
firstBotHeader.textContent = siteContent["main-content"]["services-h4"];
const firstBotPar = firstBottom.querySelector('p');
firstBotPar.textContent = siteContent["main-content"]["services-content"];

// second portion of bottom-content
const secondBottom = firstBottom.nextElementSibling;
console.log(secondBottom);

const secondBotHeader = secondBottom.querySelector('h4');
secondBotHeader.textContent = siteContent["main-content"]["product-h4"];
const secondBotPar = secondBottom.querySelector('p');
secondBotPar.textContent = siteContent["main-content"]["product-content"];

// third portioin of bottom-content

const thirdBottom = secondBottom.nextElementSibling;
console.log(thirdBottom);

const thirdBotHeader = thirdBottom.querySelector('h4');
thirdBotHeader.textContent = siteContent["main-content"]["vision-h4"];
const thirdBotPar = thirdBottom.querySelector('p');
thirdBotPar.textContent = siteContent["main-content"]["vision-content"];


// contact edit 
const contactInfo = document.querySelector('.contact');
console.log(contactInfo);

const contactHeader = contactInfo.querySelector('h4');
contactHeader.textContent = siteContent.contact["contact-h4"];
const contactPOne = contactInfo.querySelector('p');
contactPOne.textContent = siteContent.contact.address;
const contactPTwo = contactPOne.nextElementSibling;
contactPTwo.textContent = siteContent.contact.phone;
const contactPThree = contactPTwo.nextElementSibling;
contactPThree.textContent = siteContent.contact.email;

// footer edit
const footerEdit = document.querySelector('footer');
const footerParagraph = footerEdit.querySelector('p');
footerParagraph.textContent = siteContent.footer.copyright;
