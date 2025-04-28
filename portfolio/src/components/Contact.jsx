import React, { useState } from "react";
import { AnimatedBorder } from "./ui/AnimatedBorder/AnimatedBorder";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [values, setValues] = useState({ email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const validate = (name, value) => {
    switch (name) {
      case "email":
        if (!value) return "It'll be much better to write one)";
        if (!/^\S+@\S+\.\S+$/.test(value)) return "Please enter a valid email";
        break;
      case "subject":
        if (!value) return "It'll be much better to write one)";
        break;
      case "message":
        if (!value) return "It'll be much better to write one)";
        if (value.length < 10) return "Could you please write at least 10 characters?";
        break;
      default:
        return;
    }
  };

  const handleChange = (e) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
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

    try {
      setLoading(true);
      setSuccessMessage("");

      await emailjs.sendForm("service_jmfmg4j", "template_w0wvef5", e.target, "BFtEbcnNLQJi0tb_z");
      setSuccessMessage("Your message was sent successfully! 🚀");
      setValues({ email: "", subject: "", message: "" });
      setTouched({});
      setErrors({});
    } catch (error) {
      console.error("Email sending error:", error);
      setSuccessMessage("Something went wrong. Please try again later. ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <h2 className="font-bold text-3xl">Contact</h2>
      <AnimatedBorder>
        <div className="max-w-xl mx-auto p-6">
          <p className="mb-6 font-bold text-center">
            Have a question or a proposal? Feel free to reach out!😊
          </p>
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {[
              { label: "Email", name: "email", type: "email", placeholder: "you@example.com" },
              { label: "Subject", name: "subject", type: "text", placeholder: "Subject" },
            ].map(({ label, name, type, placeholder }) => (
              <label key={name} className="block">
                <span className="block text-sm font-medium">{label}</span>
                <input
                  className={`
                    mt-1 block w-full bg-textLight dark:bg-grayDark px-4 py-2 rounded-lg
                    focus:bg-backgroundLight dark:focus:bg-backgroundDark focus:shadow focus:outline-none 
                    ${errors[name] && "border border-darkOrange"}
                  `}
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  value={values[name]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                {errors[name] && <p className="mt-1 text-darkOrange text-sm">{errors[name]}</p>}
              </label>
            ))}

            <div className="block">
              <label className="block text-sm font-medium">Your Message</label>
              <textarea
                className={`
                  mt-1 block w-full bg-textLight relative dark:bg-grayDark px-4 py-2 rounded-lg resize-none h-32
                  focus:bg-backgroundLight dark:focus:bg-backgroundDark focus:shadow focus:outline-none 
                  ${errors.message && "border border-darkOrange"}
                `}
                name="message"
                placeholder="Type your message here..."
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {errors.message && <p className="mt-1 text-darkOrange text-sm">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full font-bold shadow-btn hover:shadow-btnhover  active:shadow-btnhover active:scale-98 py-2 rounded-lg duration-100"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {successMessage && (
              <p className="mt-4 text-center font-semibold text-green-500">{successMessage}</p>
            )}
          </form>
        </div>
      </AnimatedBorder>
    </div>
  );
};

export default Contact;
