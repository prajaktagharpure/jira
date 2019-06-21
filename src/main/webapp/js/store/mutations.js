import C from "../core/constants.js";
export default {
    storeAllTickets(state, payload){
        state.tickets = payload;
        state.evt = C.pubsub.STORE_ALL_TICKETS;

        return state;
    },
    storeQueues(state, payload){
        state.queues = payload;
        state.evt = C.pubsub.STORE_QUEUES;
        return state;
    },
    updateQueues(state, payload){

        let elQIdx = payload.elem.getAttribute("index");
        let srcId = payload.source.getAttribute("id");
        let targetId = payload.target.getAttribute("id");
        let srcQIdx = srcId.substr(srcId.length - 1);
        let targetQIdx = targetId.substr(srcId.length - 1);

        let ticket = state.queues[srcQIdx][elQIdx];
        ticket.queue = C.ticket.queues[targetQIdx];
        state.queues[srcQIdx].splice(elQIdx, 1);
        state.queues[targetQIdx].push(ticket);

        state.evt = C.pubsub.UPDATE_QUEUES;

        return state;
    },
    updateTickets(state, payload){
        state.tickets = payload.tickets;
        state.tickets.push(payload.ticket);

        state.evt = C.pubsub.UPDATE_TICKETS;
        return state;
    }
};
