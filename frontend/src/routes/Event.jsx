import EventGrid from "../components/EventGrid/EventGrid";
import dummyEventData from "../dummyEventData";

export default function Event() {
  return (
    <div className="p-4">
      <h1 className="font-semibold text-2xl text-dark-primary">
        Upcoming Recommended Events
      </h1>
      <p className="font-light text-text-secondary mb-4">
        Here we draw on multiple sources to bring you trainings, workshops and
        events from Barclays worldwide based on your roles, skills and
        interests.
      </p>
      <EventGrid data={dummyEventData} />
    </div>
  );
}
