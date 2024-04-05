import React from "react";
import { useFormik } from "formik";

export default function Basicform() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
  });
  console.log(formik);
  return (
    <div>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          placeholder="Vinsmoke Sanji"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <label htmlFor="email">E-Mail:</label>
        <input
          id="email"
          type="text"
          placeholder="sanjicook@email.com"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <label htmlFor="name">Password:</label>
        <input
          id="password"
          type="password"
          placeholder="********"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <label htmlFor="name">Confirm Password:</label>
        <input
          id="confirmpassword"
          type="text"
          placeholder="********"
          value={formik.values.confirmpassword}
          onChange={formik.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
