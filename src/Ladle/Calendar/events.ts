const now = new Date();

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

export default [
  {
    id: 1,
    title: "Physio Appointment",
    start: "2024-04-09T16:00:00.000Z",
    end: "2024-04-09T22:00:00.000Z",
  },
  {
    id: 2,
    title: "Short Event",
    start: "2024-04-12T16:00:00.000Z",
    end: "2024-04-12T22:00:00.000Z",
  },
];
