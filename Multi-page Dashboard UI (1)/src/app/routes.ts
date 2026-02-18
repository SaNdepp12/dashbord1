import { createBrowserRouter } from "react-router";
import Entry from "./pages/entry";
import TechDashboard from "./pages/tech-dashboard";
import JourneyDetails from "./pages/journey-details";
import ComingSoon from "./pages/coming-soon";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Entry,
  },
  {
    path: "/tech-dashboard",
    Component: TechDashboard,
  },
  {
    path: "/journey/:journeyId",
    Component: JourneyDetails,
  },
  {
    path: "/business-dashboard",
    Component: ComingSoon,
  },
  {
    path: "*",
    Component: Entry,
  },
]);
