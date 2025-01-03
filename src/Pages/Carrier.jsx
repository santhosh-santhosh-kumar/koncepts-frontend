import { IoCall } from "react-icons/io5";
import { TbMailFilled } from "react-icons/tb";
import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const carrierdetails = {
  inputs: [
    { id: 1, detail: "First Name", type: "text", name: "FirstName"  },
    { id: 2, detail: "Last Name", type: "text", name: "LastName" },
    { id: 3, detail: "E-Mail", type: "email", name: "Email" },
    { id: 4, detail: "Phone No", type: "text", name: "PhoneNumber"  },
    { id: 5, detail: "College Name", type: "text", name: "CollegeName" },
    { id: 7, detail: "Department", type: "text", name: "Department"  },
    { id: 8, detail: "Portfolio Link", type: "text", name: "PortfolioLink" },
  ],
  inputradio: [
    { id: "one", detail: "1st year", type: "radio" },
    { id: "two", detail: "2nd year", type: "radio" },
    { id: "three", detail: "3rd year", type: "radio" },
    { id: "four", detail: "4th year", type: "radio" },
  ],
};

const Carrier = () => {
    const [data,setData]=useState(false)
  const [carrierData, setCarrierData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    PhoneNumber: "",
    CollegeName: "",
    selectedYear: "",
    Department: "",
    PortfolioLink: "",
    resume: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarrierData({ ...carrierData, [name]: value });
  };

  const handleRadioChange = (e) => {
    console.log(e.target.value)
    setCarrierData({ ...carrierData, selectedYear: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validFileTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!validFileTypes.includes(file.type)) {
        setErrors({
          ...errors,
          resume: "Please upload a valid PDF or Word document.",
        });
        setCarrierData({ ...carrierData, resume: null });
      } else {
        setErrors({ ...errors, resume: "" });
        setCarrierData({ ...carrierData, resume: file });
      }
    }
  };

  const validate = () => {
    const newErrors = {};
    Object.entries(carrierData).forEach(([key, value]) => {
      if (key !== "resume" && key !== "PortfolioLink" && !value) {
        newErrors[key] = `${key} is required.`;
      }
    });
    if (!carrierData.selectedYear) {
      newErrors.selectedYear = "Please select a year.";
    }
    if (!carrierData.resume) {
      newErrors.resume = "Please upload your resume.";
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

    const formData = new FormData();
    Object.entries(carrierData).forEach(([key, value]) =>
      formData.append(key, value)
    );

    try {
      const response = await axios.post(
        "https://asgapi.konceptsdandd.com/carreer",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
    //   formData.forEach((value, key) => console.log(`${key}: ${value}`));
      setCarrierData({
        FirstName: '',
        LastName: '',
        Email: '',
        PhoneNumber: '',
        CollegeName: '',
        selectedYear: '',
        Department: '',
        PortfolioLink: '',
        resume: null,
    });
    toast.success("Successfully submitted",{
        style: {
            background: "#4caf50",
            color: "#fff",
            padding: "20px 40px 20px 40px",
            fontSize: "18px",
            borderRadius: "10px",
           
          }
      });
      
    } catch (error) {
      toast.error(error);
      console.error("Error:", error);
    }

  };

  return (
    <>
      <div className="pt-36 pb-20">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="text-center w-full md:w-1/2 px-5 py-8 shadow-xl border-2 border-gray-300 rounded-3xl hover:scale-105 transition-transform duration-500">
              <h2 className="pb-4 font-Heading text-3xl">
                Get In <span className="text-darkblue capitalize">Touch</span>
              </h2>
              <a href="tel:+919791177077" className="no-underline">
                <h3 className="text-gray-600 font-medium text-lg font-ContentText capitalize">
                  Call us for quick support!
                </h3>
              </a>
              <div className="flex items-center justify-center gap-3 pt-3">
                <IoCall size={35} />
                <a
                  href="tel:+919042253201"
                  className="no-underline text-black text-xl"
                >
                  +91 90422 53201
                </a>
              </div>
            </div>
            <div className="text-center w-full md:w-1/2 px-5 py-8 shadow-xl border-2 border-gray-300 rounded-3xl hover:scale-105 transition-transform duration-500">
              <h2 className="pb-4 font-Heading text-3xl">
                Reach Out <span className="text-darkblue">Via E-mail</span>
              </h2>
              <a
                href="mailto:sridhar@konceptsdandd.com"
                className="no-underline"
              >
                <h3 className="text-gray-600 font-medium text-lg font-ContentText capitalize">
                  Send us an email for inquiries!
                </h3>
              </a>
              <div className="flex items-center gap-3 justify-center pt-3">
                <TbMailFilled size={35} />
                <a
                  href="mailto:sridhar@konceptsdandd.com"
                  className="no-underline text-black text-xl"
                >
                  tejusdigis@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="py-10">
            <div className="text-center font-Heading text-xl lg:text-3xl">
              <h1>
                Looking <span className="text-darkblue">for Internship?</span>
              </h1>
              <h2 className="">
                Are you a Student and Looking for Internship? We are Hiring!
              </h2>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="bg-white py-5">
                <div className="w-full md:w-1/2 mx-auto">
                  {carrierdetails.inputs.map((item) => (
                    
                    <div key={item.id}>
                      <div className="flex w-full group items-center mb-2">
                        <div className="w-[35%] border-b border-darkblue py-3">
                          <label
                            htmlFor={item.name}
                            className="text-[15px] md:text-xl"
                          >
                            {item.detail}
                          </label>
                        </div>
                        <div className="w-[75%] border-b border-darkblue relative after:w-[0] after:absolute after:content-[''] after:bg-darkblue after:h-[3px] after:-bottom-[2px] after:left-0 after:duration-1000 group-hover:after:w-[100%] group-focus-within:after:w-[100%]">
                          <input
                            onChange={handleChange}
                            type={item.type}
                            name={item.name}
                            id={item.name}
                            value={carrierData[item.name]}
                            className="outline-none w-full text-[16px] md:text-xl text-darkblue px-2 py-3"
                          />
                        </div>
                      </div>
                      {errors[item.name] && (
                        <p className="text-red-500">{errors[item.name]}</p>
                      )}
                    </div>
                  ))}

                  <div className="grid grid-cols-2 gap-3 mt-5">
                    {carrierdetails.inputradio.map((item) => (
                      <div key={item.id} className="mx-auto">
                        <input
                          onChange={handleRadioChange}
                          name="year"
                          id={item.id}
                          type={item.type}
                          value={item.detail}
                        />
                        <label
                          htmlFor={item.id}
                          className="pl-3 cursor-pointer"
                        >
                          {item.detail}
                        </label>
                      </div>
                    ))}
                    {errors.selectedYear && (
                      <p className="text-red-500 text-[15px] font-light">
                        {errors.selectedYear}
                      </p>
                    )}
                  </div>

                  <div className="mt-5">
                    <label htmlFor="resume" className="text-xl block">
                      Upload Resume (PDF/Word only)
                    </label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      accept=".pdf, .doc, .docx"
                      onChange={handleFileChange}
                      className="mt-2"
                    />
                    {errors.resume && (
                      <p className="text-red-500 text-[15px] font-light">
                        {errors.resume}
                      </p>
                    )}
                  </div>

                  <div className="pt-2 text-center">
                    <button className=" bg-darkblue  font-bold text-white text-lg px-8 py-2 rounded-lg mt-3 transition-all hover:rounded-tr-3xl hover:rounded-bl-3xl duration-500">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carrier;
