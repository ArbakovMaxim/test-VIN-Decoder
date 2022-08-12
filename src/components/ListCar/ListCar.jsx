import { ItemCarStyled, ListCarStyled } from './ListCar.styled';

export const ListCar = ({ movies }) => {
  return (
    <ListCarStyled>
      {movies.map(({ VariableId, Variable, Value }) => (
        <ItemCarStyled key={VariableId}>
          <p>
            {Value &&
              Value !== 'Not Applicable' &&
              `Value :${Value} 
              Variable: ${Variable}`}
          </p>
        </ItemCarStyled>
      ))}
    </ListCarStyled>
  );
};
