import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import {
    adminLoginSchema,
    type AdminLoginValues,
} from "../../../validations/adminValidations";
import FormInput from "../../../shared/inputs/FormInput";
import PageTitle from "../../../shared/headers/PageTitle";
import Button from "../../../shared/buttons/Button";
import PageDesc from "../../../shared/headers/PageDesc";
const initialValues: AdminLoginValues = {
    username: "",
    password: "",
};

const AdminNewPassword = () => {
    const navigate = useNavigate();

    const handleSubmit = async (values: AdminLoginValues) => {
        console.log("Login values:", values);
        await new Promise((r) => setTimeout(r, 800));
        navigate("/");
    };

    return (
        <div className="montserrat auth-container flex items-center justify-center">
            <div className="w-full">

                <PageTitle title="Enter New Password" />
                <PageDesc title="Please add the new password and confirm the new password" />


                <Formik
                    initialValues={initialValues}
                    validationSchema={adminLoginSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form noValidate style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

                            <FormInput
                                name="new password"
                                label="New Password"
                                placeholder="••••••••••••••••"
                                type="password"
                                required
                            />

                            <div>
                                <FormInput
                                    name="password"
                                    label="Confirm New Password"
                                    placeholder="••••••••••••••••"
                                    type="password"
                                    required
                                />

                            </div>

                            <Button
                                text="Submit"
                                loadingText="Signing in..."
                                isLoading={isSubmitting}
                            />
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default AdminNewPassword;