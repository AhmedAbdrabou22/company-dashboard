import MainServiceProvider from "../../../components/superadmin/serviceprovider/Main";


type Activities_TP = {
    title: string;
};
function ServiceProvider({ title }: Activities_TP) {
    return (
        <>
            <title>{title}</title>

            <div>
                <MainServiceProvider />
            </div>
        </>
    );
}

export default ServiceProvider;