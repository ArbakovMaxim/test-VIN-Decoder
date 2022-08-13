import sanitizeHtml from 'sanitize-html';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as api from 'services/Api';
import { ItemLinkVariablesStyled, WraperVar } from './VariablesCar.styled';

const VariablesCar = () => {
  const { variable } = useParams();
  const [variablesInfo, setVariablesInfo] = useState([]);

  useEffect(() => {
    const fetchCarVariables = async () => {
      const car = await api.getCarVariables(variable);
      if (car) {
        setVariablesInfo(car.data.Results);
      }
    };
    fetchCarVariables();
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
              {sanitizeHtml(Description, {
                allowedTags: [],
              })}
            </ItemLinkVariablesStyled>
          </li>
        ))}
      </ul>
    </WraperVar>
  );
};

export default VariablesCar;
