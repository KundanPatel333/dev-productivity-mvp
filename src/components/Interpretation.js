const Interpretation = ({ metrics }) => {
  let insights = [];

  if (metrics.cycleTime > 5) {
    insights.push("Work is taking slightly longer than expected.");
  }

  if (metrics.bugRate > 0.15) {
    insights.push("There are quite a few bugs after release.");
  }

  if (metrics.deploymentFrequency < 6) {
    insights.push("Deployments are not very frequent.");
  }

  return (
    <div>
      <h3>What's happening?</h3>
      <ul>
        {insights.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Interpretation;