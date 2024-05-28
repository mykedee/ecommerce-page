import React from "react";

const Register = () => {
  return (
    <section className="text-primary-txt">
      {/* <div className="w-6/12 mx-auto py-4">
        <img className="w-64 mx-auto" src="../images/the-fittery-logo1.png" />
      </div> */}

      <div className="w-11/12 lg:w-8/12 mx-auto mt-36 ">
        <form className="w-full lg:w-6/12 mx-auto ">
          <hr className="md:block absolute right-0 left-0  hidden mb-10" />
          <h6 className="text-center text-4xl pt-8">CREATE ACCOUNT</h6>
          <div className="mb-5">
            <label htmlFor="firstname" className="text-sm">
              First name
            </label>
            <input className="block w-full p-3 text-sm font-medium bg-transparent inset-1 border" />
          </div>
          <div className="mb-5">
            {" "}
            <label htmlFor="firstname" className="text-sm">
              Last name
            </label>
            <input className="block w-full p-3 text-sm font-medium bg-transparent inset-1 border" />
          </div>
          <div className="mb-5">
            <label htmlFor="firstname" className="text-sm">
              E-mail address
            </label>

            <input className="block w-full p-3 text-sm font-medium bg-transparent inset-1 border" />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="text-sm">
              Password
            </label>
            <input className="block w-full p-3 text-sm font-medium bg-transparent inset-1 border" />
          </div>

          <div className="w-8/12 md:w-5/12 mx-auto">
            <button className="bg-primary-txt text-white p-3 mb-5 w-full">
              CREATE ACCOUNT
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
