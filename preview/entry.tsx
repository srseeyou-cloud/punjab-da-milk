// Bundles the same components into one static HTML file for a quick phone preview.
// The real site is the Next.js app; this file is only used by preview/build.sh.
import { createRoot } from "react-dom/client";
import { Site } from "../components/Site";

createRoot(document.getElementById("root")!).render(<Site />);
