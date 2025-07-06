type ServiceDetailProps = {
  title: string;
  image: string;
  description: string;
  extra?: React.ReactNode;
};

const ServiceDetail = ({
  title,
  image,
  description,
  extra,
}: ServiceDetailProps) => {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
          {title}
        </h2>

        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />

        <p className="text-gray-300 text-lg mb-6">{description}</p>

        {extra && <div className="text-gray-400">{extra}</div>}
      </div>
    </section>
  );
};

export default ServiceDetail;
