import Alert from "./components/Alert";
import Button from "./components/button";

function App() {
  return (
    <div className="alert alert-primary" role="alert">
      <Alert>
        Hello <span>World</span>
      </Alert>
      <Button
        color="success"
        onClick={() => console.log("Clicked")}
        children="My Button"
      />
    </div>
  );
}

export default App;
