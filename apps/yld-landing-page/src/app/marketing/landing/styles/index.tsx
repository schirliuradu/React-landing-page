import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
`;

export const StyledLanding = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  position: relative;
`;

export const StyledLandingWrapper = styled(Flex)`
  max-width: 1350px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  padding: 50px 20px 0;
`;

export const StyledLandingBackgroundLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(https://www.yeldo.com/_next/image?url=%2Fassets%2Fimages%2Fcommon%2Fdeal-by-deal-hero.png&w=1920&q=85);
  object-fit: cover;
  background-size: cover;
  object-position: left center;
  background-repeat: no-repeat;
  z-index: -1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
