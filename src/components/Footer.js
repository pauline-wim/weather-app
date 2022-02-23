// CSS
import styled from "styled-components";

function Footer() {
  return (
    <FooterSection>
      <h2>Today's weather...</h2>
      <h2>DATE</h2>
      <p>© 2022. Pauline Wimmer.</p>
    </FooterSection>
  );
}

const FooterSection = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  nav {
    /* border: 2px solid red; */
    width: 150px;
    display: flex;
    justify-content: space-between;
  }
`;

export default Footer;
