/* Header.css */
import styled from "styled-components";

const HeaderWrap = styled.div`
  border-bottom: 1px solid #999;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #0056b3;
  }

  .header nav {
    display: flex;
    gap: 20px;
  }

  .header nav a {
    color: #ffffff;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
  }

  .header nav a:hover {
    color: #2767ff;
  }
`;
export default HeaderWrap;
