import logo from "./logo.svg";
import "./App.css";
import { FormattedMessage, FormattedDate, FormattedTime } from "react-intl";

function App(props) {
  const { setLocale } = props;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <button onClick={() => setLocale("en")}>英文</button>
          <button onClick={() => setLocale("zh-Hant")}>中文</button>
          <button onClick={() => setLocale("ja")}>日文</button>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FormattedMessage id="app.learn" values={{ name: "React" }} />
          <br />
          <FormattedDate
            value={new Date()}
            year="numeric"
            month="long"
            day="numeric"
            weekday="long"
          />
          <br />
          <FormattedTime value={new Date()} />
        </a>
      </header>
    </div>
  );
}

export default App;
