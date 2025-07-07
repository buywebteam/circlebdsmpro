import { PiTelegramLogoThin } from "react-icons/pi";

const TelegramIcon = () => {
  return (
    <a
      href="https://http:/t.me/circlebdsmsupport"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out"
    >
      <PiTelegramLogoThin color="white" size={32} />
    </a>
  );
};

export default TelegramIcon;
