import MainComponent from "./base/MainComponent.js"

export default class SideBoard extends MainComponent{
   
    riotInit(){
        super.riotInit();

        this.rs.tktId = this.rs.opts.id;
        this.rs.tktDetails = {};
        
        this.rs.close = () => {
            this.rs.update({
                tktId: null,
                tktDetails: {}
            });
            
        };

        //Hook to PubSub Events
        PubSub.subscribe("OPEN_SIDEBOARD", (msg, data)=>{
            console.log(data);
            console.log(msg);
            this.rs.update({
                tktId: data.id,
                tktDetails: data
            });
            
        });

    }
    render(){
      this.rs.update();
    }

}