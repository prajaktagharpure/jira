import MainBoard from "../controllers/MainBoard.js"
<main-board>
  <div class="top-container">
    <a href="javascrit:;" title="Create New Ticket" onclick={createTicket}>Create</a>
  </div>
  <div class="main-board-container">
    <panel each={tkts, index in queues} tickets = {tkts} phase={QC[index]} index={index}></panel>
    <side-board> </side-board>
  </div>

  new MainBoard(this);
</main-board>
