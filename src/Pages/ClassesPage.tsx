import ServiceDetail from "../Components/Servicedetails";

const ClassesPage = () => (
  <ServiceDetail
    title="Classes"
    image="/b3.jpg"
    description="The Circle BDSM Pro hosts classes and workshops to help members acquire skills for meaningful BDSM interactions."
    extra={
      <ul className="list-disc pl-5 space-y-2">
        <li>Consent & communication</li>
        <li>Rope work & safety</li>
        <li>Dom/sub dynamics</li>
      </ul>
    }
  />
);

export default ClassesPage;
