import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [services, setService] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <>
      <div className="text-center space-y-6 text-white mt-10">
        <p className="text-xl text-primary">Service</p>
        <h2 className="text-5xl">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised
          <br />
          words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid mt-10 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard
            key={service._id}
            service={service} // Ensure `service` object has the expected structure
          />
        ))}
      </div>
      <div className="mt-16 text-center">
        <button className="btn text-white  border-primary hover:border-primary  text-pr btn-outline">
          More Services
        </button>
      </div>
    </>
  );
};

export default Service;
