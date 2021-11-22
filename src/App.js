import Todo from "./components/Todo";

function App() {
    //this is called a component in js. must return somthing that can be rendered in the browser
    return (
        <div>
            <h1> My Todos </h1>
            <Todo text="Learn React" />
            <Todo text="Master React" />
            <Todo text="Explore the Full React Course" />
        </div>
    ); //returning jsx code (html in js)
}

export default App; //
