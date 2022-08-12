import {
  ItemCarStyled,
  ItemLinkCarStyled,
  ListCarStyled,
} from './ListCar.styled';

export const ListCar = ({ movies }) => {
  return (
    <ListCarStyled>
      {movies.map(({ VariableId, Variable, Value }) => (
        <ItemCarStyled key={VariableId}>
          <ItemLinkCarStyled to={`/cars/${VariableId}`}>
            {Value &&
              Value !== 'Not Applicable' &&
              `Value :${Value} Variable: ${Variable}`}
          </ItemLinkCarStyled>
        </ItemCarStyled>
      ))}
    </ListCarStyled>
  );
};
