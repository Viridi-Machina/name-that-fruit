# Name That Fruit!
![image](https://github.com/Viridi-Machina/name-that-fruit/assets/146846939/33678cf3-b972-49e8-9a0a-e9e9f4f2b00d)

![image](https://github.com/Viridi-Machina/name-that-fruit/assets/146846939/8cf5f6fc-45b3-4356-9251-b8e07c029ac7)

## Visit the repository [here](https://github.com/Viridi-Machina/name-that-fruit) or view the live site [here](https://viridi-machina.github.io/name-that-fruit/)

## Summary
*Name That Fruit!* is an interactive site, predominantly using javascript, that hosts a quiz on identifying different fruits from accross the globe. Users will be able to select 3 varying difficulties to either test their knowledge or learn about new fruits they didn't even know existed. Pictures of each fruit will visually aid each question and help the learning experience, while animations and feedback will be given at all times to improve engagement.

## Author
Jacen Green

## UX

### Target Audience
*Name That Fruit!* is targeted at children and younger adults who either want a fun past-time or would like to learn more about the global food world through interactivity. 

### Project Goals
This site presents a landing page with the main quiz. The site is designed to be responsive on the more common screen sizes, and presents an interactive quiz. Animations and feedback is given as necessary to imrprove user engagement. The key goal of the site is to test new knowledge learnt using javascript that can be implemented in future projects.

### User Stories
### Child (age 5+)
"As a young child learning to use technology for learning, I want a fun game that engages me, so that I can learn about the world"

### Child (age 10+)
"As a young teenager with an interest in games and/or fruits, I want to have fun learning about the world, so that I can escape boredom and keep myself engaged"

### Parent
"As a parent of children, I want an interactive puzzle game or learning experience for my children, so that I can keep that engaged and learn something at the same time"

### Author
"As an aspiring developer, I want to practice my javascript knowledge, so that I can further enhance my skillset for future projects and expand my portfolio"

## Design Choices

### Colors
![image](https://github.com/Viridi-Machina/name-that-fruit/assets/146846939/56878e0a-310f-4dd8-8421-f0772f102334)

The site uses a minimalist approach colour design with bold yet faded pastel colours which fill the screen.
The pallet shown above simplifies the colour theme of the site; bold tertiary colours aim to appeal to a primarily young demographic.

The desired effect is for uses of the site to feel comfortable and enjoy what they are looking at as they engage in the site.

After discovering issues with oklch colour format in the previous project, hlsa was instead used as an effective tool for creating colours which are similar in hue without too much contrast. 

### Typography
![image](https://github.com/Viridi-Machina/name-that-fruit/assets/146846939/b12f3e44-b6be-4b22-92d8-2827583f8c5b)

![image](https://github.com/Viridi-Machina/name-that-fruit/assets/146846939/d0bcaafb-61da-4ca3-ade7-cb9e3a30060c)

The main header font, **'Londrina'**, is intended to be exciting for a younger audience, while remaining modern and still clear to read and adding style to the site.
The alternative font **'Kreon'** was chosen to be an appropriate addition to the header font as it resembles the font in style while being much lighter in weight for readibility in smaller blocks of text. The fonts were obtained from [Google Fonts](https://fonts.google.com/specimen/Figtree?preview.text=This%20is%20a%20preview%20of%20the%20Figtree%20font)

### Imagery
<details>
 <summary>View main header (mobile)</summary>
 
![image](https://github.com/Viridi-Machina/name-that-fruit/assets/146846939/8ad36b11-7325-4920-852b-a158719bc132)
</details>

The above images shows the main header styling used in the site. This main header specifically has been given a white glow effect to improve contrast and readability as it crosses over two distinct colour tones.

<details>
 <summary>View video showcase</summary>
 
![image](https://github.com/Viridi-Machina/name-that-fruit/assets/146846939/3682963a-b05e-4829-803b-fdba29a8b45a)
</details>

The above screenshot shows the main game in action, displaying the picture relevant to each question as well as a score and question counter to keep track.

### Animations and Transitions
The default screen has a submit button with 'pulse-glow' effect which has been added to indicate what is interactable as the form elements have been heavily stylised to improve engagement. See video below: 

https://github.com/Viridi-Machina/name-that-fruit/assets/146846939/a333d7f3-5177-4aba-a999-636eb91a4a79

The video also shows a general walkthrough of the site. A hover-glow effect has also been given to the difficulty selection options - it is subtle as to not be overwhelming or obnoxious. Although primarily designed for kids the aim is to produce work with style that can be enjoyed by far more than that key demographic.

## Site Structure
The site features just a single landing page so that focus can be directed towards the javascript work. Rather than loading multiple pages from links, id attributes for different 'screen' sections have been utilised to create a more seemless experience without browser loading or refreshing an entire page each time. The key components are as follows:
- Home screen, or instructions screen with username input.
- Difficulty select screen with an option of 3 choices; Easy Medium or Hard.
- The game screen, which displays the game window in center-focus as well as a reset button which returns to the difficulty screen and resets all scores back to 0. The user can simply refresh the page or click on the main header to return to the username page.

## Wireframes
Since the first first project the temporary license for Balsamiq Wireframes had expired, and the latest available license available through slack had an expiration which crossed over with this project time-frame, and thus would work. Ultimately a suitable replacement couldn't be found before work needed to begin on this project so a text-based wireframe was used instead - see image below:
<details>
 <summary>View wireframe (mobile)</summary>
 
![image](https://github.com/Viridi-Machina/name-that-fruit/assets/146846939/d913841f-4372-40b8-b2b3-fb00b43961f6)
</details>

## Implemented Features

### Navigation
The site is navigated through interactive elements on the page:
- The header acts as a logo and a link back to the home screen at all times.
- The 'Enter Username' button progresses to the difficulty select screen.
- 3 elements on the difficulty screen progress the user to the game screen which will display the chosen difficulty's array of images and answers.
- A reset button on the game screen will return the user to the difficulty screen once again.

### Functional Quiz
The site features the ability to select a username, before selecting a difficulty level and partaking in a quiz designed as a memory game. The user can reset at any point during the quiz to start again or select a new difficulty.

### Features not present
Due to the scope of the project and the short window offered for this project after recently learning a new and tricky language, functionality of the keyboard using key-press events had to be ommited. Furthermore, there was a genuine struggle throughout the 2 weeks to understand the way the functions and their paramaters worked. Eventually it started to click however this was hours before the deadline while countless hours were spent troubleshooting and debugging functions. 

## Testing

### HTML Validation

<details>
 <summary>View index.html validation</summary>
 
![screencapture-validator-w3-org-nu-2024-01-12-11_33_18](https://github.com/Viridi-Machina/name-that-fruit/assets/146846939/9d6960be-04a9-437d-b6b9-7fa451685024)
</details>

### CSS Validation

<details>
 <summary>View style.css validation</summary>
 
![screencapture-jigsaw-w3-org-css-validator-validator-2024-01-12-11_41_08](https://github.com/Viridi-Machina/name-that-fruit/assets/146846939/21224b57-bdeb-49d9-957c-6c7577ee5b5c)
</details>

## Core Web Vitals
![image](https://github.com/Viridi-Machina/name-that-fruit/assets/146846939/b9ecc7ef-c212-4cd6-a9ef-0bc5321ea888)

The above screenshot was taken from the lighthouse tool on chromedevtools where the deployed site was entered for testing. The scoring was as follow:
- **Best Practices 100%**
- **SEO 100%**
- **Performance 99%**
- **Accessability 90%** - This score is reduced because of apparent contrast issues however the score is still high. The colour contrast is a compromise that has been made to appeal to the younger generation.

# Technologies Used

## Languages
- HTML5
- CSS3
- javascript

# Deployment

## Deploy to GitHub Pages

**The tutorial below is taken from my previous project, however the process remains the same**

1. To deploy a repository to GitHub Pages, first navigate to repository's main page.
2. Navigate to the settings button in the top nav-bar.

![image](https://github.com/Viridi-Machina/p1-my-portfolio/assets/146846939/716e6449-caf7-45c8-9148-53a41efeebf4)

3. Under 'Code and automation' navigate to 'Pages' in the left-hand side-bar.

![image](https://github.com/Viridi-Machina/p1-my-portfolio/assets/146846939/6496640f-4056-4b3c-b603-166a09c336ca)

4. Ensure that the 'Source' is set to 'Deploy from a branch', 'main' branch is selected and /(root) folder is selected. Hit save.

![image](https://github.com/Viridi-Machina/p1-my-portfolio/assets/146846939/184c61b2-8f92-43d1-a198-8e64447a6149)

5. Navigate back to <> Code, and on the right-hand side of the screen there should be a new 'deployments' section.
   Do note that this could take a few minutes for the repository to deploy.

   ![image](https://github.com/Viridi-Machina/p1-my-portfolio/assets/146846939/d4e25b5b-29be-48dc-8887-73efeaf3bba1)

7. Finally, cick on the 'Deployments' header and you can view your live site from any platform.

## Forking The Repository

![image](https://github.com/Viridi-Machina/p1-my-portfolio/assets/146846939/b6011d57-cc6f-4d54-8331-d2cc79ada78f)

To fork a repository you must not be the owner of it already. If you are looking at someone else's repo you will be able to navigate to the fork button indicated in the image above.

# Credits

- [StackOverflow](https://stackoverflow.com/) - Multiple issues over many threads have been explained from the help given on this site. It has proven to be an exceptional resource for troubleshooting and trying new ways of coding.
- [Web Dev Simplified](https://www.youtube.com/@WebDevSimplified) on youtube - Another content creator who walks-through and offers guides on many css and javascript topics of frustration, as well as general tips and tricks.
- [MDN](https://developer.mozilla.org/en-US/) - This site has proven essential throughout the learning process so far regarding html and css standards.

## Image Credits:

- Banana, Lime, Grape, Grapefruit, Pear: iStock by Getty Images
- Apple: Shutterstock
- Orange: www.plantgrower.org
- Lemon: Adobe Stock Photos
- Peach: www.gardeningknowhow.com (credit to Roman Samokhin)
- Watermelon: www.thefruitbasketshop.co.uk
- Plumb: www.PNGimg.com
- Passionfruit: www.projuice.co.uk
- Papaya: www.broxbournemarket.com
- Mango: www.getfreshswansea.co.uk
- Lychee: www.etsy.com
- Tomato: www.themilefarmshop.co.uk
- Pomegranite: delishdeliveries.com.au
- Dragonfruit, Persimmon: exoticfruits.co.uk
- Acai: www.simplysupplements.co.uk
- Pineapple: countrybaskets.co.uk
- Guava: draxe.com
- Mangosteen: shop.tropicalbox.co.uk
- Kiwi: hellocosta.com
- Rambutan: fruitplug.co.uk
- Starfruit: homefreshinverclyde.co.uk
- Tamarillo: ecofields.co.ke
- Langsat: imgur.com

## Content
Some content has been inspired from the Love Maths project to get started, otherwise the rest of the code is my own work which I have adapted from various tutorials online.
