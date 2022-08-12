import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as api from 'services/Api';
import { WraperInfo } from './Variables.styled';

const Variables = () => {
  const { ID } = useParams();
  const [variablesInfo, setVariablesInfo] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const infoVariable = await api.getCarVariables();
      if (infoVariable) {
        setVariablesInfo(infoVariable.data.Results);
      }
    };
    fetchMovies();
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
          <li>Description: {oneVariable.Description}</li>
          <li>GroupName: {oneVariable.GroupName}</li>
        </ul>
      ))}
    </WraperInfo>
  );
};

export default Variables;
