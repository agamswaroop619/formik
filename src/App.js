import "./App.css";
import { useFormik } from "formik";
function App() {
  const formik = useFormik({
    initialValues: {
      name: "",
    },
  });
  console.log(formik);
  return (
    <div className="App">
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

export default App;
