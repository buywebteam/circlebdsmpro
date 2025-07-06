import ServiceDetail from "../Components/Servicedetails";

const PlaySessionPage = () => (
  <ServiceDetail
    title="Play Session"
    image="/b9.jpg"
    description="Book a playful, erotic, and sensual session with our professional Dom or Sub."
    extra={
      <ul className="list-disc pl-5 space-y-2">
        <li>Pre-session consultation</li>
        <li>Custom play based on boundaries</li>
        <li>Aftercare provided</li>
      </ul>
    }
  />
);

export default PlaySessionPage;
