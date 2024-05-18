import Action from "./Action";
import Footer from "./Footer";
import Navbar from "./Navbar";

function MainPage() {

  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen">
      <Navbar/>
      <div className="container px-6 py-16 mx-auto text-center">
        <div className="mt-10 mx-auto">
          <h1 className="text-4xl font-extrabold leading-none tracking-normal text-gray-900 dark:text-white md:text-6xl md:tracking-tight">
            <span>Welcome to</span> <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">DevGenius</span>
          </h1>
          <h1 className="my-0 text-4xl font-extrabold leading-none tracking-normal text-gray-900 dark:text-white md:text-6xl md:tracking-tight">Projects !</h1>
          <p className="mt-8 px-0 mb-4 text-lg text-gray-600 dark:text-gray-300 md:text-xl lg:px-24">
          Unleash your coding genius with a steady stream of project ideas at your fingertips.<br/>
          Whether you're a seasoned developer looking for your next challenge or a newcomer eager to learn and create, <br/>
          DevGenius Projects is here to spark your creativity.
          </p>
        </div>
        <Action />
      </div>
      <Footer/>
    </section>
  );
}

export default MainPage;
