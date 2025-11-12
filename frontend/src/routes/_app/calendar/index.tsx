import { Container } from "@/components/container";
import { CreateMeeting } from "@/components/meeting/create-meeting";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/calendar/")({
  component: CalendarComponent,
});

function CalendarComponent() {
  return (
    <main className="mt-8">
      <Container>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-medium">Calendar</h1>
          <CreateMeeting />
        </div>
      </Container>
    </main>
  );
}
