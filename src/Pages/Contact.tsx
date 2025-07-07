import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current as HTMLFormElement,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          toast.success("Your message has been sent successfully!");
          if (form.current) {
            form.current.reset();
          }
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to send message. Please try again.");
        }
      );
  };
  return (
    <section id="contact" className="bg-black text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
          Contact Us
        </h2>
        <p className="text-center text-gray-400 mb-8">
          Please fill out the form and tell us your message or request. Please
          note club membership and dungeon reservations are not available to
          persons under 25 years old.
        </p>
        <p className="text-center text-gray-400 mb-8">
          You will receive a feedback mail 10-30 mins after completing this
          form.
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block mb-1 text-sm text-gray-400">
              Full Name *
            </label>
            <input
              type="text"
              id="full_name"
              name="full_name"
              placeholder="Your Name"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          {/* State or City */}
          <div>
            <label className="block mb-1 text-sm text-gray-400">
              State or City *
            </label>
            <input
              type="text"
              id="state_city"
              name="state_city"
              placeholder="Indicate your preferred State or City"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          {/* What can we do for you */}
          <div>
            <label className="block mb-1 text-sm text-gray-400">
              What can we do for you? *
            </label>
            <select
              id="service"
              name="service"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            >
              <option value="">Select an option</option>
              <option value="Play Session">Play Session</option>
              <option value="Classes">Classes</option>
              <option value="Dungeon Reservation">Dungeon Reservation</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Membership Registration">
                Membership Registration
              </option>
            </select>
          </div>

          {/* Age */}
          <div>
            <label className="block mb-1 text-sm text-gray-400">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              min="0"
              placeholder="How old are you?"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm text-gray-400">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-400">
              Choose a Preferred Payment Method *
            </label>
            <select
              id="payment_method"
              name="payment_method"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            >
              <option value="">Select an option</option>
              <option value="Paypal">Paypal</option>
              <option value="Cashapp">Cashapp</option>
              <option value="Bitcoin">Bitcoin</option>
              <option value="Giftcard">Giftcard</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-400">
              Leave a note for us (installment details, if any)
            </label>
            <textarea
              id="installment_note"
              name="installment_note"
              placeholder="If you wish to make the payments in installments, describe how (max 2 parts)."
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              rows={4}
            ></textarea>
            <p className="text-sm bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent mt-1">
              NOTE: Payments in installments cannot be more than 2 parts.
            </p>
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 text-sm text-gray-400">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message here"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              rows={5}
              required
            ></textarea>
          </div>

          {/* Submit button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-black font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition cursor-pointer"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
