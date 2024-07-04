import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 10rem 2rem;
  margin: 0 auto;
  width: 100%;
  max-width: 1300px;
`;

export const HeroContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  flex: 1;
  gap: 1rem;
`;

export const StyledFormWithContentContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  background: #ffffff;
  padding: 16px;
  border-radius: 5px;
`;

export const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 300px;
  width: 100%;
`;
