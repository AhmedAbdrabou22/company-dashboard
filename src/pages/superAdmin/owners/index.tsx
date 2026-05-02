import MainOwners from "../../../components/superadmin/owner/Main";


type Activities_TP = {
    title: string;
};
function Owners({ title }: Activities_TP) {
    return (
        <>
            <title>{title}</title>

            <div>
                <MainOwners/>
            </div>
        </>
    );
}

export default Owners;