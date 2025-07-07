import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section id="services" className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
          Services
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Dungeon Reservation */}
          <Link to="/services/dungeon-reservation">
            {" "}
            <div className="bg-gray-800 h-96 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow ">
              <img
                src="/b6.jpg"
                alt="Dungeon Reservation"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                  Dungeon Reservation
                </h3>
                <p className="text-gray-300 mb-4">
                  Rent a luxury private dungeon near you and make all your kink
                  fantasies come to life. Fill in the contact form to find out
                  if there is any place near you.
                </p>
              </div>
            </div>
          </Link>
          {/* Classes */}
          <Link to="/services/classes">
            {" "}
            <div className="bg-gray-800 h-96 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/b8.jpg"
                alt="Classes"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                  Classes
                </h3>
                <p className="text-gray-300">
                  The Circle BDSM Pro hosts a variety of classes and workshops
                  to help members acquire the skills they desire to successfully
                  engage in meaningful BDSM interactions.
                </p>
              </div>
            </div>
          </Link>
          {/* Play Session */}
          <Link to="/services/play-session">
            {" "}
            <div className="bg-gray-800 h-96 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/b9.jpg"
                alt="Play Session"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                  Play Session
                </h3>
                <p className="text-gray-300">
                  A professional Dom and Sub are always available for a playful,
                  erotic, and sensual session. Fill in the contact form to find
                  out if there is any around you to play with.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
