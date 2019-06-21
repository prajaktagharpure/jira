import Panel from "../controllers/Panel.js"
<panel>

  <div class="panel-container">
    <div class="panel-info">
      <span class="num-tasks bold">{panelText} {opts.tickets.length}</span> {opts.phase}
    </div>
    <div class="ticket-tile" id="ticket-tile-{opts.index}">
     
        <ticket-tile class="ticket" each={tile,index in opts.tickets} tile={tile} index={index}></ticket-tile>
    </div> <!-- ticket-tile -->
  </div> <!-- panel-container -->
  new Panel(this);
</panel>
