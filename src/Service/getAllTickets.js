export const getAllTickets = () => {
  return fetch('http://localhost:3000/tickets.json')
    .then((res) => res.json())
    .then((body) => body.tickets)
    .catch((err) => {
      console.log(err)
    })
}
