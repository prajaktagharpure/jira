import SideBoard from "../controllers/SideBoard.js"
<side-board class="side-board" hide={ !tktId }>
    <div>

        <a href="javascript:;" title="Close" onclick={close}>Close</a>

        <div class="ticket-details">
            {tktDetails.ticket_number} <br />
            {tktDetails.ticket_name} <br />
            {tktDetails.priority} <br />
            {tktDetails.queue} <br />
            {tktDetails.ticket_type} <br />
            {tktDetails.ticket_storypt} <br />
            {tktDetails.assigned_to} <br />
        </div>


    </div>

    new SideBoard(this);
</side-board>