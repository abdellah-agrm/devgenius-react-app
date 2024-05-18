import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Action() {
  const [difficult, setDifficult] = useState('');
  const navigate = useNavigate();

  const handleGetStarted = (e) => {
    e.preventDefault();
    navigate(`/random-idea/${difficult}`);
    setDifficult('');
  };

  return (
    <form onSubmit={handleGetStarted} className='flex gap-2 justify-center mt-5 pb-5'>
      <select className="h-12 cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg py-0 px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        value={difficult} onChange={(e) => setDifficult(e.target.value)} required>
        <option value="" disabled>Difficulty</option>
        <option value="beginner">Beginner</option>
        <option value="advanced">Advanced</option>
      </select>

      <button type="submit" className="h-12 inline-flex items-center justify-center px-6 text-lg text-white dark:text-gray-900 bg-gradient-to-r from-green-400 to-purple-500 rounded-md">
        <strong>Generate Idea</strong>
      </button>
    </form>
  );
}

export default Action;
