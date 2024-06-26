import parts from "../../../assets/images/about_us/parts.jpg"
import person from "../../../assets/images/about_us/person.jpg"

const About = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" lg:w-1/2 relative">
          <img
            src={person}
            className="w-3/4 rounded-lg shadow-2xl"
          />
          <img
            src={parts}
            className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl"
          />
          </div>
          <div className=" lg:w-1/2 space-y-5 p-5">
            <h3 className="text-primary text-2xl">About Us</h3>
            <h1 className="text-5xl font-bold">We are qualified 
            <br />
            & of experience 
            <br />
            in this field
            </h1>
            <p className="">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            </p>
            <p>
            the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  
            </p>
            <button className="btn bg-primary hover:bg-secondary text-white rounded-xl border border-secondary hover:border-white">Get More Info</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
