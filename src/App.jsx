import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
export default function App() {
  return (
    <>
      <Header />
      
      <main id="get-started" style={{ maxWidth: 1024, margin: "24px auto", padding: "0 16px" }}>
        <h2>Welcome to MyWebsite</h2>
        <p id="learn-more">
          Keep building: add features, cards, or a footer next. This section is here
          so the hero buttons can scroll to something.
        </p>
      </main>
    </>
  );
}