import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CodingAgent from "./pages/CodingAgent";
import YouTubeAutomation from "./pages/YouTubeAutomation";
import VoiceAssistant from "./pages/VoiceAssistant";
import PhoneSecurity from "./pages/PhoneSecurity";
import Downloads from "./pages/Downloads";
import Settings from "./pages/Settings";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Dashboard} />
      <Route path={"/downloads"} component={Downloads} />
      <Route path={"/home"} component={Dashboard} />
      <Route path={"/coding"} component={CodingAgent} />
      <Route path={"/youtube"} component={YouTubeAutomation} />
      <Route path={"/voice"} component={VoiceAssistant} />
      <Route path={"/security"} component={PhoneSecurity} />
      <Route path={"/settings"} component={Settings} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
