import React from "react";
import { useFormik } from "formik";
import { schema } from "../schema";

const onSubmit = (values, actions) => {
  console.log("submitted");
};
export default function BasicForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: schema,
    onSubmit,
  });

  console.log(formik.errors);

  return (
    <div style={styles.formContainer}>
      <h2>Sample Form</h2>
      <form style={styles.form} onSubmit={formik.handleSubmit}>
        <div style={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            placeholder="Vinsmoke Sanji"
            value={formik.values.name}
            onChange={formik.handleChange}
            style={styles.input}
          />
          {formik.errors.name && formik.touched.name ? (
            <p className="error">{formik.errors.name}</p>
          ) : (
            <p />
          )}
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email">E-Mail:</label>
          <input
            id="email"
            type="email"
            placeholder="sanji.thecook@xyzmail.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            style={styles.input}
          />
          {formik.errors.email && formik.touched.email ? (
            <p className="error">{formik.errors.email}</p>
          ) : (
            <p />
          )}
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={formik.values.password}
            onChange={formik.handleChange}
            style={styles.input}
          />
          {formik.errors.password && formik.touched.password ? (
            <p className="error">{formik.errors.password}</p>
          ) : (
            <p />
          )}
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="confirmpassword">Confirm Password:</label>
          <input
            id="confirmpassword"
            type="password"
            placeholder="Confirm your password"
            value={formik.values.confirmpassword}
            onChange={formik.handleChange}
            style={styles.input}
          />
          {formik.errors.confirmpassword && formik.touched.confirmpassword ? (
            <p className="error">{formik.errors.confirmpassword}</p>
          ) : (
            <p />
          )}
        </div>
        <button
          type="submit"
          disabled={formik.isSubmitting}
          style={styles.submitBtn}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

const styles = {
  formContainer: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  submitBtn: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};
