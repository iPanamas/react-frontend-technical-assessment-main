import styled from '@emotion/styled';

export const Section = styled.section`
  position: relative;
  padding-top: 15px;
  padding-bottom: 25px;
  background-color: var(--cardbg);
  color: var(--white);
  @media (min-width: 768px) {
    padding-top: 20px;
  }
  @media (min-width: 1440px) {
    width: 491px;
    padding-top: 40px;
    padding-left: 50px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;

export const TitleOfCard = styled.h2`
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  margin-bottom: 6px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 1440px) {
    font-family: 'Poppins';
    text-align: left;
    font-weight: 600;
    font-size: 28px;
  }
`;
export const Text = styled.p`
  font-size: 11px;
  line-height: 1.45;
  color: var(--cardsubtext);
  text-align: center;
  margin-bottom: 12px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
    margin-bottom: 111px;
      text-align: left;
`;
export const List = styled.ul`
  margin-bottom: 58px;
`;

export const Location = styled.p`
  width: 220px;
  text-align: center;
  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
    text-align: left;
  }
`;
export const BigElipse = styled.img`
  position: absolute;
  display: block;
  right: 0;
  bottom: 0;
  @media (min-width: 1440px) {
    display: none;
  }
`;
export const SmallElipse = styled.img`
  position: absolute;
  display: block;
  right: 26px;
  bottom: 52px;
  @media (min-width: 1440px) {
    display: none;
  }
`;
export const Sosial = styled.a`
  fill: var(--svgfill);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 50%;
  transition: back-ground-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    fill: var(--white);
    stroke: var(--black);
    border-radius-color: var(--black);
  }
`;

export const DesctopBig = styled.img`
  display: none;
  @media (min-width: 1440px) {
    position: absolute;
    display: block;
    right: 0;
    bottom: 0;
  }
`;
export const DesctopSmall = styled.img`
  display: none;
  @media (min-width: 1440px) {
    position: absolute;
    display: block;
    right: 70px;
    bottom: 71px;
  }
`;
