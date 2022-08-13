import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { useState } from 'react';
import * as api from 'services/Api';
import { ListCar } from 'components/ListCar/ListCar';
import { SearchForm } from 'components/SearchForm/SearchForm';

const Home = () => {
  const [autoInfo, setAutoInfo] = useState([]);

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

  return (
    <div>
      <SearchForm fetchAuto={fetchAuto} />
      {autoInfo.length > 0 && <ListCar autoInfo={autoInfo} />}
      <ToastContainer />
    </div>
  );
};

export default Home;
