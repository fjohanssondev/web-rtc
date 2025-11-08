import { Link } from "@tanstack/react-router"
import { Button } from "./ui/button"

function Header() {
  return (
    <header className="border-b">
      <div className="flex container items-center mx-auto py-4">
        <div className="flex items-center">
          <span className="font-medium">Video App</span>
          <nav className="ml-24">
            <ul className="flex space-x-2">
              <li>
                <Link to="/" className="[&.active]:font-medium [&.active]:underline hover:underline">
                  Home
                </Link>{' '}
              </li>
              <li>
                <Link to="/meeting/create" className="[&.active]:font-medium [&.active]:underline hover:underline">
                  Create meeting
                </Link>{' '}
              </li>
            </ul>
          </nav>
        </div>
        <div className="ml-auto">
          <Button>Logout</Button>
        </div>
      </div>
    </header>
  )
}

export { Header }