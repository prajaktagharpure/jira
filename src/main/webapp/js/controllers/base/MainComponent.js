import PubSub from "pubsub-js";
import C from "../../core/constants.js";

export default class MainComponent{
    constructor(riotScope) {
        this.riotScope = riotScope;
    
        this.riotScope.on("before-mount", this.onBeforeMount.bind(this));
        this.riotScope.on("mount", this.onMount.bind(this));
    
        this.riotScope.on("before-unmount", this.onBeforeUnmount.bind(this));
        this.riotScope.on("unmount", this.onUnmount.bind(this));
    
        this.riotScope.on("update", this.onUpdate.bind(this));
        this.riotScope.on("updated", this.onUpdated.bind(this));
    
        this.riotInit();

        this.render = this.render || function() {};
        
        //Pubsub Subscriptions
        PubSub.subscribe(C.pubsub.STATE_CHANGE, () => this.render());
        

    }
    
    riotInit() {
      this.rs = this.riotScope;
    }
    /**
     * Triggers right before tag is mounted on the page
     */
    onBeforeMount() {}

    /**
     * Triggers right after tag is mounted on the page
     */
    onMount() {}

    /**
     * Triggers before the tag is removed from the page
     */
    onBeforeUnmount() {}

    /**
     * Triggers after the tag is removed from the page
     */
    onUnmount() {
       
    }

    /**
     * Triggers right before the tag is updated.
     * allows recalculation of context data before the UI expressions are updated
     */
    onUpdate() {}

    /**
     * Triggers right after the tag is updated. allows do some work with updated DOM
     */
    onUpdated() {}
}