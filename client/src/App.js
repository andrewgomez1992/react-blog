import "./App.css";
import reactpic from "./assets/react.jpg";

function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">
          Qodebro Drew
        </a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>
      <div className="entry">
        <img src={reactpic} alt="" />
        <div className="texts">
          <h2>Redux, why?</h2>
          <p>
            Let's take a second to dive in and decide why or why not we'd be
            going with Redux in our next project. We will talk about pros and
            cons, and also mention some competitors who I've also broken down,
            links below!
          </p>
        </div>
      </div>
      <div className="entry">
        <img src={reactpic} alt="" />
        <div className="texts">
          <h2>Redux, why?</h2>
          <p>
            Let's take a second to dive in and decide why or why not we'd be
            going with Redux in our next project. We will talk about pros and
            cons, and also mention some competitors who I've also broken down,
            links below!
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
