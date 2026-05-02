import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import PageTitle from "../../../shared/headers/PageTitle";
import Button from "../../../shared/buttons/Button";

type OtpValues = {
    otp: string[];
};

const initialValues: OtpValues = {
    otp: ["", "", "", ""],
};

const validationSchema = Yup.object({
    otp: Yup.array()
        .of(Yup.string().required())
        .length(4, "OTP must be 4 digits"),
});

const AdminVerifyOtp = () => {
    const navigate = useNavigate();

    const handleVerify = async (values: OtpValues) => {
        const code = values.otp.join("");
        console.log("OTP:", code);
        navigate("/");
    };

    // const handleResend = () => {
    //     console.log("Resend OTP");
    // };

    return (
        <div className="montserrat auth-container flex items-center justify-center">
            <div className="w-full max-w-md">

                <PageTitle title="Verify Your Email" />

                <p className="auth-description">
                    Enter the 4 digits code we sent to your email ahmedhospital.gov
                </p>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleVerify}
                >
                    {({ values, setFieldValue, isSubmitting }) => (
                        <Form>

                            {/* OTP Inputs */}
                            <div className="otp-container">
                                {values.otp.map((digit, index) => (
                                    <input
                                        key={index}
                                        id={`otp-${index}`}
                                        type="text"
                                        maxLength={1}
                                        value={digit}
                                        placeholder="0"
                                        onChange={(e) => {
                                            const val = e.target.value;

                                            if (!/^\d*$/.test(val)) return;

                                            const newOtp = [...values.otp];
                                            newOtp[index] = val.slice(-1);

                                            setFieldValue("otp", newOtp);

                                            if (val && index < 3) {
                                                const next = document.getElementById(`otp-${index + 1}`);
                                                next?.focus();
                                            }
                                        }}
                                        className="otp-input"
                                    />
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="otp-buttons">

                                {/* Verify Button */}
                                <Button
                                    text="Verify"
                                    loadingText="Verifying..."
                                    isLoading={isSubmitting}
                                />

                                {/* Resend Button (Shared Button) */}
                                <Button
                                    text="Resend Code"
                                    loadingText="Sending..."
                                    isLoading={false}
                                />

                            </div>

                        </Form>
                    )}
                </Formik>

            </div>
        </div>
    );
};

export default AdminVerifyOtp;