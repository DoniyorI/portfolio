import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wj9gulo",
        "template_dzw2uvk",
        form.current,
        "wUjMvvLPRp-kZOhsv"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="bg-world-map bg-no-repeat bg-cover bg-center">
      <form ref={form} onSubmit={sendEmail}>
        <section className="text-gray-700 body-font relative">
          <div className="container  pt-20 pb-10 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl title-font mb-4 text-white font-Roboto font-extrabold">
                Contact Me
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-center text-white">
                Email: &nbsp;
                <span className="text-amber-500">Doniyori@buffalo.edu</span>
                &nbsp; || Phone:
                <span className="text-amber-500">(917) 362-5432</span>
              </p>
              <p className="text-white font-Roboto font-thin pt-0.5">
                ...or use the following form
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-rows-3 gap-x-5 gap-y-5 px-8 md:px-20 lg:px-42">
              <div className="relative text-left text-white">
                <label for="name" className="leading-7 text-sm"></label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  className="w-full h-14 bg-gray-100 rounded-xl border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Name"
                />
              </div>

              <div className="grid row-span-3 text-left text-white">
                <label for="message" className="leading-7 text-sm"></label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full h-52 bg-gray-100 rounded-xl border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  placeholder="Message"
                ></textarea>
              </div>

              <div className="relative text-left text-white">
                <label for="tel" className="leading-7 text-sm"></label>
                <input
                  type="tel"
                  id="name"
                  name="phone_number"
                  className="w-full h-14 bg-gray-100 rounded-xl border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Phone Number"
                />
              </div>

              <div className="relative text-left text-white">
                <label for="email" className="leading-7 text-sm"></label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  className="w-full h-14 bg-gray-100 rounded-xl border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="example@email.com"
                />
              </div>
            </div>

            <div className="p-6 w-full">
              <button
                type="submit"
                value="Send"
                className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Send Message
              </button>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};
export default Contact;
