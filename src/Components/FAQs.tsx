const FAQ = () => {
  const faqs = [
    {
      question:
        "Why are there no account of members to choose whom to play with?",
      answer:
        "We are a discreet BDSM club, and protecting the public image of our members is our utmost goal.",
    },
    {
      question: "Can I have a long term BDSM relationship with a playmate?",
      answer:
        "You can have a long-term relationship with a playmate if there is an agreement between the both of you.",
    },
    {
      question:
        "Why do I have to make payment to an individual account rather than the club's account?",
      answer:
        "The club doesn’t own any private dungeons; the private dungeons are owned by members of the club, and they provide them for rent.",
    },
    {
      question: "Will there be anyone else there while we are at the location?",
      answer:
        "No. Your privacy is our utmost concern and you will have the playspace to yourself, much like any other b & b type of rental.",
    },
    {
      question: "Do you offer couples instruction?",
      answer:
        "We have different BDSM professionals all over the state who are willing to take you in and train you. You only have to inquire and we will find one close to your preferred location that fits your description.",
    },
  ];

  return (
    <section id="faq" className="bg-black text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
          F.A.Q.
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Frequently Asked Questions
        </p>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                {faq.question}
              </h3>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
