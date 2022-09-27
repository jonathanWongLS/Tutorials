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


13. Yarn commands tend to be shorter, less output in the command line