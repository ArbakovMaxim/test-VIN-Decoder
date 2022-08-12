import { Header, ItemLinkCarStyled } from './Header.styled';

export const HeaderBox = () => {
  return (
    <Header>
      <h1>
        Welcome to the American Government Automotive Inspection Service in VIN
        code
      </h1>
      <ItemLinkCarStyled to={`/`}>Search VIN code</ItemLinkCarStyled>
      <ItemLinkCarStyled to={`/variables`}>Variables</ItemLinkCarStyled>
    </Header>
  );
};
