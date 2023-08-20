import { Formik } from "formik";
import { Link } from "react-router-dom";
import { object, string, ObjectSchema } from "yup";

interface IinitialValues {
  username: string;
  password: string;
}
interface Person {
  username: string;
  password: string;
}
const initialValues: IinitialValues = {
  username: "",
  password: "",
};
const Login = () => {
  const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
  const validationSchema: ObjectSchema<Person> = object({
    username: string().required("وارد کردن نام الزامیست"),
    password: string()
      .required()
      .matches(passwordRegExp, "create strong password"),
  });

  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-1/3 p-5 border-2 rounded bg-gray-50">
        <h2 className="text-center font-bold">Login</h2>
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
              <button
                disabled={!isValid}
                type="submit"
                className="font-bold rounded-lg shadow-lg shadow-indigo-500/40 bg-white p-2 mt-5"
              >
                ورود
              </button>
              <Link to="/signup">
                <p className="mt-5 text-gray-400 hover:text-gray-600">
                  هنوز ثبت نام کردم!!!
                </p>
              </Link>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
