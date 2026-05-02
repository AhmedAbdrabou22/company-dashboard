import MainIssues from "../../../components/superadmin/issues/Main";


type Activities_TP = {
    title: string;
};
function Issues({ title }: Activities_TP) {
    return (
        <>
            <title>{title}</title>

            <div>
                <MainIssues/>
            </div>
        </>
    );
}

export default Issues;