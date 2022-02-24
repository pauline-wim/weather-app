import dayjs from "dayjs";
// import advancedFormat from 'dayjs/plugin/advancedFormat';
// CSS
import styled from "styled-components";

function Footer() {
  const date = dayjs().format("· MMMM DD, YYYY ·");
  const hour = dayjs().format("HH:mm");
  return (
    <FooterSection>
      <h2>Today's weather...</h2>
      <div className="time">
        <h2>{date}</h2>
        <h3>{hour}</h3>
      </div>
      <p>© 2022. Pauline Wimmer.</p>
    </FooterSection>
  );
}

const FooterSection = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0 30px;
  nav {
    /* border: 2px solid red; */
    width: 150px;
    display: flex;
    justify-content: space-between;
  }
  .time {
    text-align: center;
  }
`;

export default Footer;
