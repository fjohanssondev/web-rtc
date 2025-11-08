import { Timer } from "@/components/ui/timer";
import { useParticipants } from "@livekit/components-react";

function MeetingDetails() {
  const participants = useParticipants();
  console.log(participants);
  return (
    <section className="py-4 bg-background">
      <div className="flex justify-between container mx-auto">
        <h1>Sprint Review</h1>
        <Timer />
      </div>
    </section>
  );
}

export { MeetingDetails };
