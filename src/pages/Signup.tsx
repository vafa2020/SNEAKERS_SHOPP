import { Formik } from "formik";
import { Link } from "react-router-dom";
import { object, string, ref, ObjectSchema } from "yup";

interface IinitialValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
interface Person {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const initialValues: IinitialValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Signup = () => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
  const validationSchema: ObjectSchema<Person> = object({
    username: string().required("وارد کردن نام الزامیست"),
    email: string().required().email(),
    // phone_number: string().required().matches(phoneRegExp, "not right!!!"),
    password: string()
      .required()
      .matches(passwordRegExp, "create strong password"),
    confirmPassword: string()
      .required()
      .oneOf([ref("password")], "Passwords must match"),
  });

  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-1/3 p-5 border-2 rounded bg-gray-50">
        <h2 className="text-center font-bold">SignUp</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
          validateOnMount
          enableReinitialize
        >
          {({
            values,
            errors,
            touched,
            isValid,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} className="flex flex-col mt-5">
              <input
                className="p-2 shadow-inner bg-white outline-0"
                type="text"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                placeholder="UserName"
              />
              {errors.username && touched.username && (
                <p className="text-red-500">{errors.username}</p>
              )}
              <input
                className="p-2 shadow-inner bg-white mt-2 outline-0"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Email"
              />
              {errors.email && touched.email && (
                <p className="text-red-500">{errors.email}</p>
              )}
              <input
                className="p-2 shadow-inner bg-white mt-2 outline-0"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="password"
              />
              {errors.password && touched.password && (
                <p className="text-red-500">{errors.password}</p>
              )}
              <input
                className="p-2 shadow-inner bg-white mt-2 outline-0"
                name="confirmPassword"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                placeholder="confirmPassword"
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <p className="text-red-500">{errors.confirmPassword}</p>
              )}
              <button
                disabled={!isValid}
                type="submit"
                className="font-bold rounded-lg shadow-lg shadow-indigo-500/40 bg-white p-2 mt-5"
              >
                ثبت نام
              </button>
              <Link to="/login">
                <p className="mt-5 text-gray-400 hover:text-gray-600">قبلا ثبت نام کردم!!!</p>
              </Link>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
