import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormInput from "../../../shared/inputs/FormInput";
import PageTitle from "../../../shared/headers/PageTitle";
import Button from "../../../shared/buttons/Button";
import PageDesc from "../../../shared/headers/PageDesc";

type ForgotPasswordValues = {
    email: string;
};

const initialValues: ForgotPasswordValues = {
    email: "",
};

const validationSchema = Yup.object({
    email: Yup.string()
        .email("Invalid email")
        .required("Email is required"),
});

const AdminForgot = () => {
    const handleSubmit = async (values: ForgotPasswordValues) => {
        console.log("Forgot password email:", values.email);

    };

    return (
        <div className="montserrat auth-container flex items-center justify-center">
            <div className="w-full">

                {/* Title */}
                <PageTitle title="Forgot Password" />
                <PageDesc title="Write down your Email Adress and we will send you OTP" />

            

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form
                            noValidate
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "24px",
                            }}
                        >
                            {/* Email only */}
                            <FormInput
                                name="email"
                                label="Email"
                                placeholder="info@company.com"
                                type="email"
                                required
                            />

                            {/* Submit Button */}
                            <Button
                                text="Log In"
                                loadingText="Sending..."
                                isLoading={isSubmitting}
                            />
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default AdminForgot;