"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactUsSection() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    service: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("Message sent successfully!");
      setForm({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        service: "",
        subject: "",
        message: "",
      });
    } else {
      alert("There was an error sending your message.");
    }

    setIsSubmitting(false);
  };

  return (
    <div>
      <section className="bg-white py-16 px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between">
      {/* Left Side - Contact Information */}
      <div className="w-full sm:w-1/2 text-white ml-0 sm:ml-12 mb-12 sm:mb-0">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#BF0B30] mb-4">
          Contact us
        </h1>
        <h2 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-6 text-[#002768]">
          Get In Touch
        </h2>

        <div className="flex items-center space-x-6 mb-6">
          <div className="relative bg-[#BF0B30] rounded-full p-6">
            <Image
              src="/material-symbols_call (1).png"
              alt="Phone Icon"
              width={30}
              height={30}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <span className="text-lg text-[#002768]">+1 470-469-7096 | +92 310 6411092</span>
        </div>

        <div className="flex items-center space-x-6 mb-6">
          <div className="relative bg-[#BF0B30] rounded-full p-6">
            <Image
              src="/ic_baseline-email (1).png"
              alt="Email Icon"
              width={30}
              height={30}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <span className="text-lg text-[#002768]">hello@webfounder.com</span>
        </div>

        <div className="flex items-center space-x-6 mb-6">
          <div className="relative bg-[#BF0B30] rounded-full p-6">
            <Image
              src="/mdi_location.png"
              alt="Location Icon"
              width={30}
              height={30}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <span className="text-lg text-[#002768]">
            1014 Garner Rd SW, Lilburn, GA 30047, USA
          </span>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div
  className="w-full sm:w-1/2 p-8 shadow-xl"
  style={{
    borderRadius: "30px",
    border: "1px solid #001",
    background: "#FDFDFD",
    backdropFilter: "blur(33.150001525878906px)",
    WebkitBackdropFilter: "blur(33.150001525878906px)",
  }}
>
  <h2 className="text-3xl text-[#002768] mb-6">Contact Form</h2>
  <form onSubmit={handleSubmit}>
    <div className="flex flex-col sm:flex-row sm:space-x-4 mb-6">
      <input
        name="first_name"
        value={form.first_name}
        onChange={handleChange}
        type="text"
        className="w-full sm:w-1/2 p-3 rounded-lg bg-white text-[#002768] border-2 border-[#002768] mb-4 sm:mb-0"
        placeholder="First Name"
        required
      />
      <input
        name="last_name"
        value={form.last_name}
        onChange={handleChange}
        type="text"
        className="w-full sm:w-1/2 p-3 rounded-lg bg-white text-[#002768] border-2 border-[#002768]"
        placeholder="Last Name"
        required
      />
    </div>

    <div className="flex flex-col sm:flex-row sm:space-x-4 mb-6">
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        type="email"
        className="w-full sm:w-1/2 p-3 rounded-lg bg-white text-[#002768] border-2 border-[#002768] mb-4 sm:mb-0"
        placeholder="Email"
        required
      />
      <input
        name="phone"
        value={form.phone}
        onChange={handleChange}
        type="tel"
        className="w-full sm:w-1/2 p-3 rounded-lg bg-white text-[#002768] border-2 border-[#002768]"
        placeholder="Phone number"
        required
      />
    </div>

    <div className="mb-6">
      <select
        name="service"
        value={form.service}
        onChange={handleChange}
        className="w-full p-3 rounded-lg bg-white text-[#002768] border-2 border-[#002768]"
        required
      >
        <option value="">Select services</option>
        <option value="website">Website</option>
        <option value="seo">SEO</option>
        <option value="ecommerce">E-commerce</option>
        <option value="video">Video Animation</option>
      </select>
    </div>

    <div className="mb-6">
      <input
        name="subject"
        value={form.subject}
        onChange={handleChange}
        type="text"
        className="w-full p-3 rounded-lg bg-white text-[#002768] border-2 border-[#002768]"
        placeholder="Subject"
        required
      />
    </div>

    <div className="mb-6">
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        className="w-full p-3 rounded-lg bg-white text-[#002768] border-2 border-[#002768]"
        placeholder="Details"
        required
      />
    </div>

    <button
      type="submit"
      disabled={isSubmitting}
      className="bg-[#002768] text-white px-6 py-3 rounded-[75px] font-semibold border-2 border-[#002768] shadow-lg hover:shadow-xl hover:bg-opacity-20 transition-all duration-300"
    >
      {isSubmitting ? "Sending..." : "Send Message →"}
    </button>
  </form>
</div>

      <div>
      </div>
      
    </section>
    <div className="w-full mt-12">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.4057058062351!2d103.84773682247622!3d1.2872569858907945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da190bb5febd0b%3A0x3999e3ace9eb9af!2s68%20Circular%20Rd%2C%20Unit%2002-01%2C%20Singapore%20049422!5e0!3m2!1sen!2s!4v1748303191522!5m2!1sen!2s"
    width="100%"
    height="400"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>

    </div>
  );
}
