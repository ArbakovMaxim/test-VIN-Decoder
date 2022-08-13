import { ItemCarStyled, ListCarStyled } from './ListCar.styled';

export const ListCar = ({ autoInfo }) => {
  return (
    <>
      <h2>Information about the requested VIN code </h2>
      <ListCarStyled>
        {autoInfo.map(({ VariableId, Variable, Value }) => (
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
    </>
  );
};
