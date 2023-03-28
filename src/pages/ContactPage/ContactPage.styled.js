import styled from '@emotion/styled';

export const ContactWrapper = styled.div`
  padding-top: 14px;
  padding-bottom: 50px;
  min-height: 100%;
  display: flex;
  flex-flow: column;
  @media (min-width: 768px) {
    padding-top: 24px;
  }
  @media (min-width: 1440px) {
    padding-top: 34px;
  }
`;

export const Contact = styled.main`
  flex: 1 1 auto;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  margin-bottom: 10px;
  @media (min-width: 1440px) {
  }
`;
export const Text = styled.p`
  font-weight: 500;
  font-size: 14px;
  width: 184px;
  margin: 0 auto;
  text-align: center;
  color: var(--subText);
  padding-bottom: 20px;
  @media (min-width: 768px) {
    width: 100%;
    padding-bottom: 30px;
  }
  @media (min-width: 1440px) {
    width: 100%;
    padding-bottom: 50px;
  }
`;
export const Wrapper = styled.div`
  @media (min-width: 1440px) {
    flex-direction: row;
    display: flex;
    justify-content: center;
  }
`;
