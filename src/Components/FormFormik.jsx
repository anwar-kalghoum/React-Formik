import React from "react";
import { withFormik, Form, Field } from "formik";
import './style.css';
import * as yup from "yup"; // for everything

const Test = ({ values, errors, touched, isSubmitting, resetForm }) => {
    return (
        <Form>
            <div>
                <label>Email:</label>
                <div>
                    <Field type="email" name="email" placeholder="Email" className="inputs" />
                    <div style={{ color: "red", marginTop: ".5rem" }}> {touched.email && errors.email && <p>{errors.email}</p>} </div>
                </div>
            </div>
            <div>
                <label>Password:</label>
                <Field type="password" name="password" placeholder="Pasword" className="inputs" />
                <div style={{ color: "red", marginTop: ".5rem" }}> {touched.password && errors.password && <p>{errors.password}</p>}</div>
            </div>
            <label className="inputs">
                checkbox: <br />
                Paris <Field type="checkbox" name="newsLetter" checked={values.newsLetter} /> <br />
                France <Field type="checkbox" name="newsLetter2" checked={values.newsLetter2} />
            </label><br />
            <label className="inputs">
                Radio: <br />
                Paris <Field type="radio" name="r1" value="r1" />
                France <Field type="radio" name="r1" value="r2" />
            </label><br />
            <Field component="select" name="plan" className="inputs">
                <option value="free">Free</option>
                <option value="premium">Premium</option>
            </Field>
            <button disabled={isSubmitting}>Submit</button>
            <button type="reset">Reset</button>
        </Form>
    );
};

const FormikApp = withFormik({
    // Mapping Type
    mapPropsToValues({ email, password, newsLetter, newsLetter2, plan, r1, r2 }) {
        return {
            email: email || "",
            password: password || "",
            newsLetter: newsLetter || false,
            newsLetter2: newsLetter2 || false,
            plan: plan || "free",
            r1: r1 || false,
        };
    },
    // Validation schema
    validationSchema: yup.object().shape({
        email: yup
            .string()
            .email("Invalid email address")
            .required("Email is required!"),
        password: yup
            .string()
            .min(5, "Password must be 5 characters or longer")
            .required("Password is required!")
    }),
    // for handelSubmit
    handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
        // action
        console.log(values)
        setTimeout(() => {
            if (values.email === "jure@gmail.com") {
                setErrors({ email: "that email is already taken" });
            } else {
                resetForm();
            }
            setSubmitting(false);
        }, 2000);
    }
})(Test);

export default FormikApp;
