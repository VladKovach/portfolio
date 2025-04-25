import React, { useState } from "react";
import { AnimatedBorder } from "./ui/AnimatedBorder/AnimatedBorder";

const Contact = () => {
  const [values, setValues] = useState({ email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Simple front-end validation rules
  const validate = (name, value) => {
    switch (name) {
      case "email":
        if (!value) return "It'll be much better to write one)";
        // basic email regex
        if (!/^\S+@\S+\.\S+$/.test(value)) return "Please enter a valid email";
        break;
      case "subject":
        if (!value) return "It'll be much better to write one)";
        break;
      case "message":
        if (!value) return "Message cannot be empty";
        if (value.length < 10) return "Could you please write at least 10 characters?";
        break;
      default:
        return;
    }
  };

  const handleChange = (e) => {
    console.log('errors = ', errors);
    
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (touched[name]) {
      setErrors((err) => ({ ...err, [name]: validate(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors((err) => ({ ...err, [name]: validate(name, value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // validate all
    const newErrors = {};
    Object.keys(values).forEach((k) => {
      const error = validate(k, values[k]);
      if (error) newErrors[k] = error;
    });
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      setTouched({ email: true, subject: true, message: true });
      return;
    }
    // otherwise submit via Formspree
    e.target.submit();
  };
  return (
    <div className="scroll-mt-20">
      <h2 className="font-bold text-3xl">Contact</h2>
      <AnimatedBorder>
        <div className="max-w-xl mx-auto p-6  ">
          <p className="mb-6 font-bold text-center">
            Have a question or a proposal? Feel free to reach out!😊
          </p>
          <form
            onSubmit={handleSubmit}
            action="https://formspree.io/f/your-form-id"
            method="POST"
            noValidate
            className="space-y-6"
          >
            {[
              { label: "Email", name: "email", type: "email", placeholder: "you@example.com" },
              { label: "Subject", name: "subject", type: "text", placeholder: "Subject" },
            ].map(({ label, name, type, placeholder }) => (
              <label key={name} className="block">
                <span className="block text-sm font-medium ">{label}</span>
                <input
                  className={`
                mt-1 block w-full bg-grayDark px-4 py-2 transition-colors duration-150 rounded-lg
                focus:bg-backgroundDark focus:shadow focus:shadow-textLight focus:outline-none 
                ${errors[name] && " border border-customOrange" }
              `}
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  value={values[name]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                {errors[name] && <p className="mt-1 text-customOrange text-sm">{errors[name]}</p>}
              </label>
            ))}

            <div className="block">
              <label className="block text-sm font-medium ">Your Message</label>
              <textarea
                className={`
              mt-1 block w-full px-4 py-2 bg-grayDark transition-all duration-300 relative rounded-lg resize-none h-32
              focus:bg-backgroundDark focus:shadow focus:shadow-textLight focus:outline-none 
                ${errors.message && " border border-customOrange" }
              `}
                name="message"
                placeholder="Type your message here..."
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {errors.message && <p className="mt-1 text-customOrange text-sm">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full font-bold shadow-btn hover:shadow-btnhover hover:scale-98 text-white  py-2 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </AnimatedBorder>
    </div>
  );
};

export default Contact;
