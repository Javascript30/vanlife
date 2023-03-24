# VanLife Project React Router Dom {React Course, Scrimba}

This is a solution to the [Van Life Project React Course](https://scrimba.com/playlist/pK3JwPTg).
The course is offered for FREE on Scrimba by Bob Ziroll [Learn React Router Dom](https://scrimba.com/learn/learnreact)(An amazing tutor -- really understood his course)


## Table of contents

- [VanLife Project React Router Dom {React Course, Scrimba}](#vanlife-project-react-router-dom-react-course-scrimba)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
  - [Author](#author)

## Overview

### The challenge

Requirements : -

Recreate the vanlife routes from the figma file shared

### Screenshot

Screenshot of the Tenzies Game mock up

![](./src/assets/images/screenshot.jpg)

### Links

- Solution URL: [GitHub Link](https://github.com/Javascript30/vanlife.git)
- Live Site URL: [Netlify Deploy](https://vannlife.netlify.app/)

## My process

1. Recreated the design as per [Figma](hhttps://www.figma.com/file/igDA2NiMDhoaIIAqm5EnTq/%23VanLife?t=rtzs9MOecAOmAe5p-0)

2. Started with the mockup -- deleteting unrequired files and adding the `component` and `images` files to the structure after `npm create vite@latest tenzies -- --template react`
   
3. Created the `navbar` , `home`, `footer` and `about` components
   
4. Added the use of `miragejs` as a fake server to render the `vans`

5. Writing out this `README.md` file

### Built with

- React
- JSX syntax
- Semantic HTML5 markup
- CSS custom properties
- Grid

### What I learned

- Using Figma files to code

- ##### Using `miragejs` as a fake api server
   
  ```jsx
   // Imported the `server.js` file in `App.jsx`
   // Used `useEffect` and `useState` to fetch and display the vans on the `Vans` page
  const [vans, setVans] = useState([]);
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);
  const myVans = vans.map((van) => {
    return (
      <Van
        key={van.id}
        name={van.name}
        price={van.price}
        image={van.imageUrl}
        type={van.type}
      />
    );
  });
  ```
  
- ##### Fixing the footer to the bottom
  Had to separate the `Home` component footer and the other pages footer position to fix overflow issues
  The footers position property in `styles.css` is relative whereas in `home.css` it's fixed as shown in the snippet below
```css
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
```



- ##### React! React! React!

### Continued development

- Learning more React! (yeah reenacting React problems and tackling them)

- Better turnaround time -- simple stuff but worked on it for a while

- Less Code (code cleanup)

## Author

- Website - [Lesley Kimutai](https://leskim.github.io/myweb/)
- Frontend Mentor - [Frontend Mentor](https://www.frontendmentor.io/profile/Leskim)
