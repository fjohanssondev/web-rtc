import { Timer } from "@/components/ui/timer";
// import { useParticipants } from "@livekit/components-react";
import { Container } from "@/components/container";

function MeetingDetails() {
  // const participants = useParticipants();

  return (
    <section className="py-4 bg-background">
      <Container className="flex items-center justify-between">
        <h1>Sprint Review</h1>
        <Timer startDate={new Date()} />
      </Container>
    </section>
  );
}

export { MeetingDetails };
