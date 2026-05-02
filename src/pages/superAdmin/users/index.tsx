import MainUsers from "../../../components/superadmin/users/Main";


type Activities_TP = {
    title: string;
};
function Users({ title }: Activities_TP) {
    return (
        <>
            <title>{title}</title>

            <div>
                <MainUsers/>
            </div>
        </>
    );
}

export default Users;