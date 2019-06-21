import service from "../services/service.js";
import store from "../store/index.js";
import C from "../core/constants.js";
import PubSub from "pubsub-js";

const ticketactions = {
  _serviceUrl: "http://localhost:3000/tickets",
  storeTickets: () => {
    let ticketdata = service.fetchData(ticketactions._serviceUrl); //returns a promise
      ticketdata.then( (tickets) => { 
        store.dispatch(C.pubsub.STORE_ALL_TICKETS, tickets);
        
      }, err => console.log(err));

  },
  getTickets: () => {
    
    return store.state.tickets ? store.state.tickets : null;
  },
  storeQueues: (tickets, useravatar, random = true) => {
    let queueList = {};
      C.ticket.queues = C.ticket.queues.map((queue)=>{
        let key = queue.toLowerCase().replace(/ /g, "_");
        queueList[key] = [];
        return queue;
      });
      let queues = [];
      

      tickets = tickets.map((ticket)=>{
        if(random){
          let randQueue = C.ticket.queues[Math.floor(Math.random() * C.ticket.queues.length)];
          ticket.queue = randQueue;
          ticket.days = Math.floor(Math.random() * 30) + 1  
          ticket.avatar = useravatar;
        }
        
        let key = ticket.queue.toLowerCase().replace(/ /g, "_");
        queueList[key].push(ticket);
        return ticket;
      });
      
  
      Object.keys(queueList).forEach((item) => {
        queues.push(queueList[item]); 
      });

      store.dispatch(C.pubsub.STORE_QUEUES, queues);
  },
  getQueues: () => {
    return store.state.queues ? store.state.queues : null;
  },
  updateQueues: (elem, target, source) => {
    store.dispatch(C.pubsub.UPDATE_QUEUES, {elem, target, source});
  },
  createTicket: (settings, tickets)=>{
    let ticketdata = service.postData(ticketactions._serviceUrl, settings); //returns a promise
    ticketdata.then( (ticket) => { 
      //store.dispatch(C.pubsub.STORE_ALL_TICKETS, tickets);
      console.log(ticket);
      ticketactions.updateTickets(ticket, tickets); //Ideally should be done through API
      console.log(tickets);
      
      
    }, err => console.log(err));
  },
  updateTickets: (ticket, tickets) => {
    store.dispatch(C.pubsub.UPDATE_TICKETS, {ticket, tickets});
  },
  getCurrentMutation: () => store.state.evt,

}


export default ticketactions;