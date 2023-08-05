import "./App.css";
import EngagementMessagesOverTime from "./components/EngagementMessagesOverTime";

function App() {
  return (
    <div className="App">
      <p
        style={{
          marginTop: "10",
          fontSize: "30px",
          fontWeight: "bold",
          color: "#fff",
        }}
      >
        Engagement Data Chart Based On Channels and Messages
      </p>
      <EngagementMessagesOverTime />
    </div>
  );
}

export default App;
