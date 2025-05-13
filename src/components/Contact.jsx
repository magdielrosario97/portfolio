import { useState } from "react";

const Contact = () => {
   const [form, setForm] = useState({ name: "", email: "", message: "" });
   const [status, setStatus] = useState("");

   const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
   };

   const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

   const validateForm = () => {
      if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
         setStatus("Please fill in all fields.");
         return false;
      }
      if (!isValidEmail(form.email)) {
         setStatus("Please enter a valid email address.");
         return false;
      }
      return true;
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (!validateForm()) return;

      setStatus("Sending... This may take a few seconds. Please don't close the tab.");

      try {
         const res = await fetch("https://portfolio-contact-form-7eia.onrender.com/contact", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
         });

         const data = await res.json();
         if (res.ok) {
            setStatus("Message sent!");
            setForm({ name: "", email: "", message: "" });
         } else {
            setStatus(data.message || "Failed to send.");
         }
      } catch (err) {
         setStatus("Uh oh! Something went wrong. Try again later.");
      }
   };

   return (
      <section id="contact" className="py-20 px-4 bg-white text-center">
         <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Me</h2>
         <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
            <label className="block">
               <span className="sr-only">Your Name</span>
               <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded"
               />
            </label>

            <label className="block">
               <span className="sr-only">Your Email</span>
               <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded"
               />
            </label>

            <label className="block">
               <span className="sr-only">Your Message</span>
               <textarea
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border rounded"
               />
            </label>
            <button
               type="submit"
               className="w-full bg-emerald-700 text-white py-2 px-4 animate-bounce shadow-xl/30 hover:bg-emerald-800 transition-colors duration-200 cursor-pointer border rounded"
            >
               Send
            </button>
            {status && (
               <p
                  className={`text-sm mt-2 ${
                     status.includes("sent")
                        ? "text-green-600"
                        : status.includes("wrong") || status.includes("Failed")
                        ? "text-red-600"
                        : "text-gray-600"
                  }`}
               >
                  {status}
               </p>
            )}
         </form>
      </section>
   );
};

export default Contact;
