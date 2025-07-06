const ContactUs = () => {
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

        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block mb-1 text-sm text-gray-400">
              Full Name *
            </label>
            <input
              type="text"
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
              placeholder="How old are you?"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              min="0"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm text-gray-400">Email *</label>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 text-sm text-gray-400">
              Message *
            </label>
            <textarea
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
              className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-black font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition"
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
