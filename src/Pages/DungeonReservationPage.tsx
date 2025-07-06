import ServiceDetail from "../Components/Servicedetails";

const DungeonReservationPage = () => (
  <ServiceDetail
    title="Dungeon Reservation"
    image="/b6.jpg"
    description="Rent a luxury private dungeon near you and make all your kink fantasies come true."
    extra={
      <ul className="list-disc pl-5 space-y-2">
        <li>Luxurious private space</li>
        <li>Fully equipped dungeon</li>
        <li>Discreet location</li>
      </ul>
    }
  />
);

export default DungeonReservationPage;
