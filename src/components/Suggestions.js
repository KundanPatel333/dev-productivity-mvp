const Suggestions = ({ metrics }) => {
  let tips = [];

  if (metrics.cycleTime > 5) {
    tips.push("Try breaking tasks into smaller parts.");
  }

  if (metrics.bugRate > 0.15) {
    tips.push("Focus more on testing before release.");
  }

  if (metrics.deploymentFrequency < 6) {
    tips.push("Try to release updates more regularly.");
  }

  return (
    <div>
      <h3>What can be improved?</h3>
      <ul>
        {tips.map((tip, i) => (
          <li key={i}>{tip}</li>
        ))}
      </ul>
    </div>
  );
};

export default Suggestions;