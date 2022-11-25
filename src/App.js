import Banner from "./pages/Banner/Banner";
import BlogAndPosts from "./pages/BlogAndPosts/BlogAndPosts";
import Navigation from "./pages/Shared/Nav";

function App() {
  return (
    <div className="mb-5">
      <Navigation />
      <Banner />
      <BlogAndPosts />
    </div>
  );
}

export default App;
