import developerData from "./data/mockData";
import Interpretation from "./components/Interpretation";
import Suggestions from "./components/Suggestions";

function App() {
  const { name, metrics } = developerData;

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial",
        backgroundColor: "#f0f2f5",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Developer Dashboard</h1>
      <h2 style={{ textAlign: "center", color: "gray" }}>{name}</h2>

      {/* Metrics Card */}
      <div
        style={{
          background: "#ffffff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          maxWidth: "600px",
          margin: "20px auto",
        }}
      >
        <h3>📊 Metrics</h3>
        <ul style={{ lineHeight: "1.8" }}>
          <li>Lead Time: {metrics.leadTime} days</li>
          <li>Cycle Time: {metrics.cycleTime} days</li>
          <li>Bug Rate: {(metrics.bugRate * 100).toFixed(0)}%</li>
          <li>Deployment Frequency: {metrics.deploymentFrequency}/month</li>
          <li>PR Throughput: {metrics.prThroughput}</li>
        </ul>
      </div>

      {/* Interpretation Card */}
      <div
        style={{
          background: "#ffffff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          maxWidth: "600px",
          margin: "20px auto",
        }}
      >
        <Interpretation metrics={metrics} />
      </div>

      {/* Suggestions Card */}
      <div
        style={{
          background: "#ffffff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          maxWidth: "600px",
          margin: "20px auto",
        }}
      >
        <Suggestions metrics={metrics} />
      </div>
    </div>
  );
}

export default App;