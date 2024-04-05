import React from "react";
import { useFormik } from "formik";

export default function Basicform() {
  const formik = useFormik({
    initialValues: {
      name: "",
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
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
