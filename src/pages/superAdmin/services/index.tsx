import MainServices from "../../../components/superadmin/services/Main";


type Activities_TP = {
    title: string;
};
function Services({ title }: Activities_TP) {
    return (
        <>
            <title>{title}</title>

            <div>
                <MainServices />
            </div>
        </>
    );
}

export default Services;