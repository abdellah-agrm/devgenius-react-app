import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import projects from "../data/projects.json";
import Navbar from "./Navbar";
import Action from "./Action";
import Footer from "./Footer";

function RandomIdea() {
  const { difficulty } = useParams();
  const [randomOne, setRandomOne] = useState({});

  useEffect(() => {
    const filteredProjects = projects.filter(project => project.difficulty === difficulty);

    const randomIndex = Math.floor(Math.random() * filteredProjects.length);
    setRandomOne(filteredProjects[randomIndex]);
  }, [difficulty]);


  const handleGetStarted = (data) => {
    setRandomOne(data);
  };

  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen">
      <Navbar />

      <div className="grid grid-cols-8 gap-4 text-gray-900 dark:text-white text-md mt-8 mx-8 md:mx-28">
        <div className="col-span-8 sm:col-start-2 sm:col-span-6 block border-2 border-gray-300 rounded-md dark:border-gray-600 py-2 px-2.5">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Project name :</h2>
          <p>{randomOne.name}</p>
        </div>
        <div className="col-span-8 sm:col-start-2 sm:col-span-6 block border-2 border-gray-300 rounded-md dark:border-gray-600 py-2 px-2.5">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Project description :</h2>
          <p>{randomOne.description}</p>
        </div>
        <div className="col-span-8 sm:col-start-2 sm:col-span-6 block border-2 border-gray-300 rounded-md dark:border-gray-600 py-2 px-2.5">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Project steps :</h2>
          <ul className="max-w-md space-y-1 text-gray-600 list-inside dark:text-gray-300">
            {randomOne.steps ? (
              randomOne.steps.map((step, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" />
                  {step}
                </li>
              ))
            ) : (
              <li>No steps available</li>
            )}
          </ul>
        </div>
        <div className="col-span-8 sm:col-start-2 sm:col-span-6 block border-2 border-gray-300 rounded-md dark:border-gray-600 p-3">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Proposed languages :</h2>
          <div className="mt-4 grid grid-cols-3 md:grid-cols-5 xl:grid-cols-8 gap-2">
            {randomOne.languages ? (
              randomOne.languages.map((icon, index) => (
                <img key={index} src={`${process.env.PUBLIC_URL}/Icons/${icon}.png`} alt={icon} className="h-20 w-20" />
              ))
            ) : (
              <p>No languages available</p>
            )}
          </div>
        </div>
        <div className="col-span-8 sm:col-start-2 sm:col-span-6 block border-2 border-gray-300 rounded-md dark:border-gray-600 py-2 px-2.5">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Project difficulty :</h2>
          <p className="capitalize">{randomOne.difficulty}</p>
        </div>
      </div>

      <Action onGetStarted={handleGetStarted} />
      <Footer />
    </section>
  );
}

export default RandomIdea;
