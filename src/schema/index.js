import { object, string, ref } from "yup";

const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

export const schema = object({
  name: string().required("Required"),
  email: string().email("Please enter Valid Email").required("Required"),
  password: string()
    .matches(
      passwordRules,
      "Password must contain 1 Upper Case Letter, 1 Lower Case letter and 1 Digit"
    )
    .required("Required"),
  confirmpassword: string()
    .oneOf([ref.password, null], "Passwords do not Match")
    .required("Confirm Password here"),
});
