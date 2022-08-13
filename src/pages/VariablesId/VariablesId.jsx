import sanitizeHtml from 'sanitize-html';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as api from 'services/Api';
import { WraperInfo } from './VariablesId.styled';

const VariablesId = () => {
  const { ID } = useParams();
  const [variablesInfo, setVariablesInfo] = useState([]);

  useEffect(() => {
    const fetchVariablesId = async () => {
      const infoVariable = await api.getCarVariables();
      if (infoVariable) {
        setVariablesInfo(infoVariable.data.Results);
      }
    };
    fetchVariablesId();
  }, []);

  const filterVariable = () => {
    return variablesInfo.filter(v => {
      return ID.includes(v.ID);
    });
  };

  const oneVariables = filterVariable();

  return (
    <WraperInfo>
      {oneVariables.map(oneVariable => (
        <ul key={oneVariable.ID}>
          <li>ID: {ID}</li>
          <li>name:{oneVariable.Name}</li>
          <li>DataType: {oneVariable.DataType}</li>
          <li>
            Description:{' '}
            {sanitizeHtml(oneVariable.Description, {
              allowedTags: [],
            })}
          </li>
          <li>GroupName: {oneVariable.GroupName}</li>
        </ul>
      ))}
    </WraperInfo>
  );
};

export default VariablesId;
