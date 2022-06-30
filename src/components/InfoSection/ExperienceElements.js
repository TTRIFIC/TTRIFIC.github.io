import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: #010606;

  @media screen and (max-width: 480px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 1200px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 850px) {
    height: 2100px;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col1 col2 col3";

  @media screen and (max-width: 850px) {
    grid-template-areas: "col1" "col2" "col3";
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const Column3 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col3;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 40px;
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  margin-top: -16px;
`;

export const Heading = styled.h1`
  margin-bottom: 16px;
  font-size: 32px;
  line-height: 1.1;
  font-weight: 600;
  color: #f7f8fa;

  @media screen and (max-width: 850px) {
    font-size: 32px;
  }
`;

export const Employer = styled.p`
  max-width: 440px;
  margin-bottom: -8px;
  font-size: 32px;
  font-weight: 600;
  line-height: 36px;
  color: #fff;
`;

export const Position = styled.p`
  max-width: 440px;
  margin-bottom: 16px;
  margin-top: 16px;
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
  color: #fff;
`;

export const Description = styled.p`
  max-width: 440px;
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 24px;
  color: #fff;
`;
