const now = new Date();

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

export default [
  {
    id: 1,
    title: "Event 1",
    start: "2024-03-30T00:00:00.000Z",
    end: "2024-03-30T12:00:00.000Z",
  },
  {
    id: 5,
    title: "Event 1",
    start: "2024-04-28T00:00:00.000Z",
    end: "2024-04-28T12:00:00.000Z",
  },
  {
    id: 2,
    title: "Event 2",
    start: "2024-04-28T06:00:00.000Z",
    end: "2024-04-28T10:08:00.000Z",
  },
  {
    id: 3,
    title: "Event 3",
    start: "2024-05-01T00:00:00.000Z",
    end: "2024-05-01T06:00:00.000Z",
  },
  {
    id: 2,
    title: "Event 4",
    start: "2024-04-21T00:00:00.000",
    end: "2024-04-21T06:00:00.000",
  },
];
