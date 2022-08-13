import {
  ItemLastVinStyled,
  ListLastVinStyled,
  WrapperLastVin,
} from './ListLastVin.styled';
import { nanoid } from 'nanoid';

export const ListLastVin = ({ lastVin, setSearchQuery }) => {
  return (
    <>
      <h2>Last search</h2>
      <WrapperLastVin>
        <ListLastVinStyled>
          {lastVin.map(vin => (
            <ItemLastVinStyled
              key={nanoid()}
              onClick={() => {
                setSearchQuery(vin);
              }}
            >
              {vin}
            </ItemLastVinStyled>
          ))}
        </ListLastVinStyled>
      </WrapperLastVin>
    </>
  );
};
