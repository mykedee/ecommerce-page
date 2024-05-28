import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full py-3 text-sm bg-footer-bg">
      <div className="w-full md:w-11/12 lg:w-9/12 mx-auto py-10">
        <div className="grid row-cols-1 md:grid-cols-3 gap-y-3">
          <div className="mx-3 ">
            <h6 className="my-4 pb-2">CONTACT. </h6>
            <p className="my-4">
              Do you have any questions? Please send us an email to:
            </p>
            <p className="my-4 font-bold"> office@thefittery.de</p>
            <p className="my-4">We will respond within 2 working days.</p>
          </div>

          <div className="mx-3 ">
            <h6 className="my-4 pb-2">IMPORTANT.</h6>
            <p className="cursor-default my-4">
              <Link to="/" className=" cursor-pointer ">
                Conditions{" "}
              </Link>
            </p>

            <p className="cursor-default my-4">
              <Link to="/" className="cursor-pointer ">
                data protection{" "}
              </Link>
            </p>

            <p className="cursor-default my-4">
              <Link to="/" className="cursor-pointer">
                FAQ{" "}
              </Link>
            </p>

            <p className="cursor-default my-4">
              <Link to="/" className="cursor-pointer">
                imprint{" "}
              </Link>
            </p>

            <p className="cursor-default my-4">
              <Link to="/" className="cursor-pointer">
                Return
              </Link>
            </p>
            <p className="cursor-default my-4">
              <Link to="/" className="cursor-pointer">
                Shipping + delivery times{" "}
              </Link>
            </p>

            <p className="cursor-default my-4">
              <Link to="/" className="cursor-pointer ">
                revocation
              </Link>
            </p>
          </div>
          <div className="mx-3 ">
            <h6 className="my-4 pb-2">OUR WORLD</h6>
            <p className="cursor-default my-4">
              <Link to="/" className="cursor-pointer">
                sustainability
              </Link>
            </p>

            <p className="cursor-default my-4">
              <Link to="/" className="cursor-pointer">
                cooperation
              </Link>
            </p>

            <p className="cursor-default my-4">
              <Link to="/" className="cursor-pointer">
                Instagram
              </Link>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2">
          <p className="mx-3">
            &copy; {new Date().getFullYear} the fittery | created with a lot of
            love.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
