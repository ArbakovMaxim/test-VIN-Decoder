import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as api from 'services/Api';
import { ItemLinkVariablesStyled, WraperVar } from './VariableAll.styled';

const VariablesAll = () => {
  const { variable } = useParams();
  const [variablesInfo, setVariablesInfo] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const car = await api.getCarVariables(variable);
      if (car) {
        setVariablesInfo(car.data.Results);
      }
    };
    fetchMovies();
  }, [variable]);

  return (
    <WraperVar>
      <ul>
        {variablesInfo.map(({ ID, Name, Description }) => (
          <li key={ID}>
            <ItemLinkVariablesStyled to={`/variables/${ID}`}>
              Name : {Name}
              <br />
              Description:
              {Description}
            </ItemLinkVariablesStyled>
          </li>
        ))}
      </ul>
    </WraperVar>
  );
};

export default VariablesAll;
