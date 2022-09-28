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
