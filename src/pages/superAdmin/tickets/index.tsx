import MainTickets from "../../../components/superadmin/tickets/Main";


type Activities_TP = {
    title: string;
};
function Tickets({ title }: Activities_TP) {
    return (
        <>
            <title>{title}</title>

            <div>
                <MainTickets/>
            </div>
        </>
    );
}

export default Tickets;