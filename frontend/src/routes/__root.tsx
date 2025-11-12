import { ModeToggle } from "@/components/mode-toggle";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const RootLayout = () => (
  <>
    <Outlet />
    <TanStackRouterDevtools />
    <div className="fixed right-5 bottom-5">
      <ModeToggle />
    </div>
  </>
);

export const Route = createRootRoute({ component: RootLayout });
