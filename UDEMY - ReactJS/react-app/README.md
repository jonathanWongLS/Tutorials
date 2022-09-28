# NOTES

## Section 1. Creating the ReactJS App

1. node -v (Tells what version of node.js exists)
2. Install yarn (a package manager and an alternative to npm). Check if installed with yarn -v
3. Install React Developer Tools (Google Chrome) which allows us to inspect components and help debug the react app
4. Create react app (**npx create-react-app my-app**)
5. Enter yarn start to start up the development server
6. In JSX, **"className"** instead of **"class"** compared to JS
7. Export default app --> Shows that the file is not the entry point into the app (Just a component)
8. Only one parent element per component
9. Two (2) types of components: **Stateless** and **ES6 class syntax**
10. Can use **props** to display values defined in App.js as parameter

function HelloWorld(props) {
    return (
        <\h1>Hello {props.name}</>
    )
}

<\HelloWorld name="Jared"/>

11. render() function in a component file

class HelloWorld extends React.Component{
    render() {
        return (
            <\h1>Hello {this.props.name}</>
        )
    }
}

12. Hook based approach (better way) vs Class based approach
- Hook based approach: Make use of the use they took
    - useState takes one argument (the value we want to store in state)
- Class based approach: Make use of **state** in the constructor of the class

# 2. Build a Mobile Menu

1. Yarn commands tend to be shorter, less output in the command line

2. Tailwind CSS - JavaScript configurable CSS (since we're building a JS app, it's nice to have CSS that's also configurable) [https://tailwindcss.com/docs/installation/using-postcss]


    - npm install -D tailwindcss
        - package.json includes dependency for tailwindcss   
        - index.css is imported in index.js file which we will be using (index.js)
    - Remove all contents in index.css and replace with tailwind decorators
    - tailwind.config.js
        - Where we will start defining any custom classes that don't ship with tailwind
    - postcss.config.js
        - paste code in tailwindcss docs

    - Add these two lines in package.json (under the scripts json object)
        - "build:css": "postcss src/index.css -o src/tailwind.css",
        - "watch:css": "postcss src/index.css -o src/tailwind.css -w"
        - These lines will search for src/index.css and create a tailwind.css file (Check for yourself :D)

    - Add to "start" and "build" in scripts (package.json)
        - "yarn build:css && react-scripts start"
        - "yarn build:css && react-scripts build"
    - Restart app with "yarn start"
    - Remove App.css as we don't need it anymore and replace imports of App.css to tailwind.css

3. Create a Menu component
    - Create Navigation.js
    - Install fontawesome packages (https://fontawesome.com/docs/web/use-with/react/)
    - Use state to control hamburger dropdown menu component
    - Create hook to change state of showMenu for Navigation 
    - Use state to open dropdown list and reveal new component
    - Added menu mask to differentiate menu and main page
    - Added onClick to mask where if clicked, menu will be closed

4. Animating the Menu Component (with React Spring)
    - Add import package (import { useTransition, animated } from 'react-spring') which will break the app 
        - Fix: yarn add react-spring then rebuild and start app
    - Use fade transition for the menu dropdown list
        - Adding the mask and onClick to close the menu
    - Added CSS for dropdown menu and used transformX to make the list slide in from the left   

5. React Router (Change content on the page, Change URL)
    - Add react-router (yarn add react-router-dom <- for websites {react-router-native <- for native apps})
    - Import dependencies to App.js
        - import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
    - Used Routes to list multiple Route with custom URLs
    - Appended the links to routes under the dropdown menu
    - Add new file "NavigationMenu" to hold menu list components
        - Import NavigationMenu to Navigation
        - Import Link dependency to NavigationMenu instead
        - Advantages: 
            - Looks cleaner and simpler
            - If a menu item is to be changed, changes can be easily made in NavigationMenu
            - Easy for other developers to learn
    - In NavigationMenu, replace onClick({() => setShowMenu(false)} to {props.closeMenu})
        - Add closeMenu = {() => setShowMenu(false)} in the NavigationMenu tag in Navigation
            - Passes the function to the child component (NavigationMenu)
    - Create new files Home.js and About.js
        - Use tags for these file routes in App.js 
        - Cleaner code
