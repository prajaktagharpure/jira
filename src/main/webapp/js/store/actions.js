import C from "../core/constants";

export default {
    storeAllTickets(context, payload){
        context.commit(C.pubsub.STORE_ALL_TICKETS, payload);
    },
    storeQueues (context, payload){
        context.commit(C.pubsub.STORE_QUEUES, payload);
    },
    updateQueues (context, payload){
        context.commit(C.pubsub.UPDATE_QUEUES, payload);
    },
    updateTickets(context, payload){
        context.commit(C.pubsub.UPDATE_TICKETS, payload);
    }
};
