import React, { useState, useRef } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const ContactDetails = {
  inputs: [
    { id: 1, detail: "Name", type: "text", name: "name" },
    { id: 2, detail: "Phone No", type: "text", name: "PhoneNumber" },
    { id: 3, detail: "E-mail", type: "email", name: "email" },
    { id: 4, detail: "Country", type: "text", name: "country" },
    { id: 5, detail: "Budget", type: "text", name: "budget" },
  ],

  checkbox: [
    { id: 1, service: "Web Development" },
    { id: 2, service: "Web Application Development" },
    { id: 3, service: "E-Commerce" },
    { id: 4, service: "Mobile App Development" },
    { id: 5, service: "Web Maintenance" },
    { id: 6, service: "SEO/ Digital Marketing" },
    { id: 7, service: "Branding" },
    { id: 8, service: "Others" },
  ],
};

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: "",
    PhoneNumber: "",
    email: "",
    country: "",
    budget: "",
    services: [],
    projectDetails: "",
  });

  const [errors, setErrors] = useState({});
  const [text, setText] = useState("");
  const textareaRef = useRef(null);

  const handleChange = (e) => {
    setText(e.target.value);
    //   textareaRef.current.style.height = 'auto';
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;

    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
  };
  const handleCheckboxChange = (e) => {
    const { value } = e.target;
    setContactData((prevState) => {
      const services = prevState.services.includes(value)
        ? prevState.services.filter((service) => service !== value)
        : [...prevState.services, value];
      return { ...prevState, services };
    });
  };

  const validate = () => {
    const newErrors = {};
    Object.entries(contactData).forEach(([key, value]) => {
      if (key !== "services" && !value) {
        newErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required.`;
      }
    });
    if (contactData.services.length === 0) {
      newErrors.services = "Please select at least one service.";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post(
        "https://asgapi.konceptsdandd.com/contact",
        contactData
      );

      setContactData({
        name: "",
        PhoneNumber: "",
        email: "",
        country: "",
        budget: "",
        services: [],
        projectDetails: "",
      });
      toast.success("successfully submitted", {
        style: {
          background: "#4caf50",
          color: "#fff",
          padding: "20px 40px 20px 40px",
          fontSize: "18px",
          borderRadius: "10px",
         
        },
      });
    } catch (error) {
      toast.error(error);
      console.error("Error:", error);
    }
  };

  return (
    <div className="pt-24 pb-10">
      <div className="container">
        <div className="flex justify-center">
          <h1 className="font-light text-6xl font-Heading mx-auto text-gray-700">
            Let's Talk Business
          </h1>
        </div>
        <div className="flex justify-center mt-3">
          <form onSubmit={handleSubmit} className="w-full py-3 rounded-2xl">
            <div className="flex flex-col md:flex-row justify-center gap-5 w-full rounded-2xl">
              <div className="w-full">
                {ContactDetails.inputs.map((item) => (
                  <div key={item.id} className="w-full">
                    <div className="flex w-full group items-center mb-2">
                      <div className="w-[25%] border-b border-darkblue py-3">
                        <label
                          htmlFor={item.name}
                          className="text-[15px] md:text-xl"
                        >
                          {item.detail}
                        </label>
                      </div>
                      <div className="w-[75%] border-b border-darkblue relative after:w-[0] after:absolute after:content-[''] after:bg-darkblue after:h-[2px] after:-bottom-[2px] after:left-0 after:duration-1000 group-hover:after:w-[100%] group-focus-within:after:w-[100%]">
                        <input
                          onChange={handleChange}
                          type={item.type}
                          name={item.name}
                          id={item.name}
                          value={contactData[item.name] || ""}
                          className="outline-none w-full text-[16px] md:text-xl text-darkblue py-3 px-4"
                        />
                      </div>
                    </div>
                    {errors[item.name] && (
                      <p className="text-red-500 text-[15px] font-light">
                        {errors[item.name]}
                      </p>
                    )}
                  </div>
                ))}
                <div className="flex w-full group items-start mb-2">
                  <div className="w-[25%] border-b border-darkblue py-[25px] md:py-[20px]">
                    <label htmlFor="" className="text-[15px] md:text-xl">
                      Project Details
                    </label>
                  </div>
                  <div className="w-[75%] border-b py-[17px] border-darkblue relative after:w-[0] after:absolute after:content-[''] after:bg-darkblue after:h-[3px] after:-bottom-[2px] after:left-0 after:duration-1000 group-hover:after:w-[100%] group-focus-within:after:w-[100%]">
                    <textarea
                      name="projectDetails"
                      value={contactData.projectDetails}
                      onChange={handleChange}
                      rows="1"
                      className="overflow-y-hidden resize-none outline-none w-full text-[16px] md:text-xl text-darkblue px-4"
                      ref={textareaRef}
                    ></textarea>
                  </div>
                </div>
                <div className="hidden lg:flex justify-end  mt-3">
                  <button className="bg-darkblue  rounded-lg font-bold text-white text-lg px-3 py-2 transition-all hover:rounded-tr-2xl hover:rounded-bl-2xl duration-700">
                    Submit
                  </button>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="px-3 py-3">
                  <h2 className="font-light text-2xl font-Heading mx-auto text-gray-700">
                    Required Services *
                  </h2>
                  <div>
                    {ContactDetails.checkbox.map((item) => (
                      <div key={item.id} className="flex items-center py-2">
                        <input
                          type="checkbox"
                          value={item.service}
                          onChange={handleCheckboxChange}
                          className="opacity-50 checked:accent-gray-700 size-4"
                        />
                        <h3 className="text-[18px] my-auto text-gray-600 inline ml-3">
                          {item.service}
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>
                {errors.services && (
                  <p className="text-red-500 text-[15px] ml-4 font-light">
                    {errors.services}
                  </p>
                )}
              </div>
            </div>

            <div className="lg:hidden flex justify-start  mt-3">
              <button className="bg-darkblue  rounded-lg font-bold text-white text-lg px-3 py-2 transition-all hover:rounded-tr-2xl hover:rounded-bl-2xl duration-700">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
