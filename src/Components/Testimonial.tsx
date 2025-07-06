const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Alex",
      quote:
        "Circle BDSM provided me a safe and welcoming space to explore my deepest desires. Discreet, professional, and unforgettable.",
    },
    {
      name: "Casey",
      quote:
        "The dungeon was beyond my expectations. Clean, luxurious, and exactly what I needed for my private session.",
    },
    {
      name: "Jordan",
      quote:
        "The workshops taught me skills I never imagined I’d master. Highly recommended for anyone starting or deepening their journey.",
    },
    {
      name: "Taylor",
      quote:
        "From the first interaction, I felt respected and at ease. The club’s focus on consent and discretion is truly unmatched.",
    },
    {
      name: "Morgan",
      quote:
        "I discovered new sides of myself here, in an environment that’s both safe and thrilling. I couldn’t ask for more.",
    },
    {
      name: "Riley",
      quote:
        "A wonderful community that celebrates every individual’s unique desires. I’m grateful to be part of Circle BDSM.",
    },
  ];

  return (
    <section id="testimonial" className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
          Testimonials
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col"
          >
            <p className="text-gray-300 mb-4 italic">"{t.quote}"</p>
            <span className="mt-auto font-semibold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              — {t.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
