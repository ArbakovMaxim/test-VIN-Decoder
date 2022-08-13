import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import * as api from 'services/Api';
import { ListCar } from 'components/ListCar/ListCar';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { ListLastVin } from 'components/ListLastVin/ListLastVin';

const localStor = JSON.parse(localStorage.getItem('vin')) || false;

const Home = () => {
  const [autoInfo, setAutoInfo] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [lastSearch, setLastSearch] = useState([]);

  useEffect(() => {
    if (localStor) {
      setLastSearch(localStor);
    } else {
      return;
    }
  }, []);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    if (lastSearch.length === 5) {
      lastSearch.shift();
    }
    const newLocalStor = [...lastSearch, searchQuery];
    const newState = JSON.stringify(newLocalStor);
    localStorage.setItem('vin', newState);
    setLastSearch(newLocalStor);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  useEffect(() => {
    const fetchAuto = async searchInput => {
      if (searchInput === '') {
        return;
      }
      const auto = await api.getDecodeVIN(searchInput);

      if (auto) {
        setAutoInfo(auto);
      }
      if (auto.length === 0) {
        toast.info('according to your request, nothing was found. ');
      }
    };

    fetchAuto(searchQuery);
  }, [searchQuery]);

  return (
    <div>
      <SearchForm setSearchQuery={setSearchQuery} />
      {lastSearch.length === 0 ? (
        <p>Serch VIN Code</p>
      ) : (
        <ListLastVin lastVin={lastSearch} setSearchQuery={setSearchQuery} />
      )}
      {autoInfo.length > 0 && <ListCar autoInfo={autoInfo} />}
      <ToastContainer />
    </div>
  );
};

export default Home;
