import MainComponent from "./base/MainComponent";
import prajiavatar from "../../img/praji.png"; //they can go in some UTIL or something
import useravatar from "../../img/useravatar.svg";
import "babel-polyfill";
import $ from "jquery";
import { async } from "q";
import { setTimeout } from "timers";
import A from "../actions/actions.js";
import C from "../core/constants.js";
import dragula from "dragula";



export default class MainBoard extends MainComponent{
        
    riotInit(){
      super.riotInit();
      this.rs.tickets = [];
      this.rs.queues = [];
      this.rs.counter = 0;
      this.rs.QC = C.ticket.queues;
      

      //handlers
      this.rs.createTicket = () => {
        let settings = {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            "ticket_type": "STORY",
            "ticket_number": "SOFT-5149",
            "ticket_name": "CART - Purchased Products - Offer Labels",
            "priority": "HIGH",
            "ticket_label": "CART",
            "ticket_storypt": 1,
            "queue": C.ticket.queues[Math.floor(Math.random() * C.ticket.queues.length)]
          })
        };
        A.ticket.createTicket(settings, this.rs.tickets);
        
      };
      

      A.ticket.storeTickets(); //Store all the tickets
      
    }
    render(){
      let lastMutataion = A.ticket.getCurrentMutation();
      
      if(lastMutataion === C.pubsub.STORE_ALL_TICKETS || lastMutataion === C.pubsub.UPDATE_TICKETS){
        
        if(lastMutataion === C.pubsub.STORE_ALL_TICKETS)
          this.rs.tickets = A.ticket.getTickets();
        if(this.rs.queues.length)
          A.ticket.storeQueues(this.rs.tickets, useravatar, false);
        else
          A.ticket.storeQueues(this.rs.tickets, useravatar);

        
      }
      
      this.rs.update({
        queues: A.ticket.getQueues()
      });
      

      if(lastMutataion === C.pubsub.UPDATE_TICKETS || lastMutataion === C.pubsub.STORE_QUEUES){
        
        let containerList = [];
      
        this.rs.queues.forEach((queue, index)=>{
          containerList.push(document.getElementById("ticket-tile-" + index));
        });
        dragula(containerList, {
          revertOnSpill: true
        })
        .on("drop", (elem, target, source, sibling) => {
          A.ticket.updateQueues(elem, target, source);
        });
        
      }

    }


    onMount(){
      super.onMount();
      
      
    }
}