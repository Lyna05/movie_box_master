import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import fetchService from './services/fetch';
import Feed from './pages/Feed';
import CardDetails from './pages/CardDetails';
import SearchDetails from './pages/SearchDetails';

const App = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  const navigate = useNavigate();

  // useEffect(() => {
  //   const findSearch = async () => {
  //     const { results } = await fetchService.getSearch(search);
  //     console.log(results);
  //     setResults(results);
  //   };
  //   findSearch();
  // }, [search]);

  // useEffect(() => {
  //   const data = await fetchService.getSearch(search);
  //     setResults(data.results);
  // }, [third])

  console.log(results);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setSearch('');

    if (!search) {
      return;
    }
    try {
      const { results } = await fetchService.getSearch(search);
      // console.log(results);
      setResults(results);
      navigate(`/search/${search}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <Feed
              handleSearch={handleSearch}
              handleSearchChange={handleSearchChange}
            />
          }
        />
        <Route path="/movies/:id" element={<CardDetails />} />
        <Route
          path="/search/:searchTerm"
          element={<SearchDetails movies={results} />}
        />
      </Routes>
    </main>
  );
};

export default App;
