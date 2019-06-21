import MainComponent from "./base/MainComponent.js";
import Pubsub from "pubsub-js";

export default class TicketTile extends MainComponent{
    riotInit(){
        super.riotInit();
        this.rs.daysSpan = Math.ceil((this.rs.opts.tile.days * 100) / 30);
        this.rs.displayTaskDetails = e => PubSub.publish("OPEN_SIDEBOARD", e.item.tile);
    }
    render(){
      this.rs.update();
    }

}