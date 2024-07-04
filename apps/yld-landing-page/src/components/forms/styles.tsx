import styled from 'styled-components';

export const StyledForm = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 4px;
  background: #ffffff;
`;

export const StyledFieldsRow = styled.div`
  display: flex;
  gap: 12px;
  background: #ffffff;
  & > * {
    flex: 1;
  }
`;
