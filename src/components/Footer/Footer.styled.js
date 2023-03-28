import styled from '@emotion/styled';

export const Footer = styled.footer`
  padding-top: 19px;
  padding-bottom: 35px;
  background-color: #000;
  color: #fff;
  @media (min-width: 1440px) {
    padding-top: 80px;
  }
`;
export const FooterLogo = styled.div`
  padding-bottom: 19px;

  font-family: 'Inter';
  font-weight: 800;

  font-size: 36px;
  line-height: 1.22;
  text-align: center;

  color: #ffffff;
  border-bottom: 1px solid #ffffff;
  @media (min-width: 1440px) {
    padding-bottom: 45px;
  }
`;
export const ReachAndCompanyWrap = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  @media (min-width: 1440px) {
    padding-top: 11px;
    justify-content: flex-staer;
    gap: 48px;
    padding-left: 20px;
  }
`;
export const ReachWrap = styled.div`
  display: block;
`;
export const Subtitle = styled.h3`
  margin-bottom: 20px;
  font-family: 'Poppins';

  font-weight: 600;
  font-size: 16px;
  line-height: 1.62;

  color: var(--white);
  @media (min-width: 1440px) {
    font-size: 18px;
  }
`;
export const ContactItem = styled.li`
  margin-bottom: 20px;
  transition: back-ground-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: var(--svghover);
  }
  &:last-child {
    margin-bottom: 0px;
  }
  @media (min-width: 1440px) {
    font-size: 16px;
  }
`;

export const LinksWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  @media (min-width: 1440px) {
    padding-top: 11px;
    gap: 60px;
  }
`;

export const FooterDescWrap = styled.div`
  @media (min-width: 1440px) {
    padding-top: 19px;
    display: flex;
    gap: 60px;
    &:last-child {
      gap: 96px;
    }
  }
`;

export const FooterContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
  @media (min-width: 360px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media (min-width: 1440px) {
    padding-left: 79px;
    padding-right: 79px;
  }
`;
