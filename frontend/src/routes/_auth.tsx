import { Container } from "@/components/container";
import { getSession } from "@/lib/auth-client";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
  component: RouteComponent,
  beforeLoad: async () => {
    const { data } = await getSession();

    if (data?.session) {
      throw redirect({ to: "/" });
    }
  },
});

function RouteComponent() {
  return (
    <main className="flex h-screen">
      <Container className="flex-1">
        <Outlet />
      </Container>
    </main>
  );
}
