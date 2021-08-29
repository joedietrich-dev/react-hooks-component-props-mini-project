function MinutesToRead({ minutes }) {
  const fiveMinutes = "☕️";
  const tenMinutes = "🍱";
  const indicator = minutes < 30 ? fiveMinutes.repeat(Math.ceil(minutes / 5))
    : tenMinutes.repeat(Math.ceil(minutes / 10));
  return <>{indicator} {minutes} min read</>
}

export default MinutesToRead