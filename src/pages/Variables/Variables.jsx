import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as api from 'services/Api';
import { WraperInfo } from './Variables.styled';

const Variables = () => {
  const { variable } = useParams();
  const [variablesInfo, setVariablesInfo] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const car = await api.getCarVariables(variable);
      if (car) {
        setVariablesInfo(car.data);
      }
    };
    fetchMovies();
  }, [variable]);

  console.log(variablesInfo);

  return (
    <WraperInfo>
      <ul>
        <li>
          <p>DataType: "string"</p>
        </li>
        <li>
          <p>
            Description: "
            <p>
              This field stores any other battery information that does not
              belong to any of the other battery related fields.
            </p>
            "
          </p>
        </li>
        <li>
          <p></p>
        </li>
        <li>
          <p></p>
        </li>
        <li>
          <p></p>
        </li>
      </ul>
    </WraperInfo>
  );
};

export default Variables;
