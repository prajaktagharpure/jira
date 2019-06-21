import TicketTile from "../controllers/TicketTile.js"
<ticket-tile>
  <div class="ticket-tile-container container {opts.tile.priority.toLowerCase()}_sideborder {opts.index === 0 ? 'first': ''}" onclick={ displayTaskDetails }>
    <div class="left-container">
      <ticket-type type={opts.tile.ticket_type.toLowerCase()}></ticket-type>
      <div class="ticket-tile-priority {opts.tile.priority.toLowerCase()}">
      </div>
    </div>
    <div class="middle-container">
      <span class="middle-container-row ticket-tile-number">{opts.tile.ticket_number}</span>
      <span class="middle-container-row ticket-tile-name">{opts.tile.ticket_name}</span>
      <ticket-label label={opts.tile.ticket_label || 'None' } ></ticket-label>
      <span class="middle-container-row ticket-tile-status">{opts.tile.queue}</span>
    </div>
    <div class="right-container">
      <div class="ticket-tile-avatar">
        <img class="avatar-img" src={tile.avatar}  />
        <!-- <img class="avatar-img" src="praji.png" /> -->
      </div>
      <div class="ticket-tile-storypts bold">
        {opts.tile.ticket_storypt}
      </div>
    </div>
    <div class="bottom-container">
      <div class="ticket-tile-days" style="width: {daysSpan}%"></div>
    </div>

  </div> <!-- ticket-tile-container -->
new TicketTile(this)
</ticket-tile>
