'use client';

import styled from 'styled-components';

const StyledPage = styled.div`
  .page {
    background-color: #000000;
  }
`;

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <div className="wrapper">
        <div className="container">Hooray</div>
      </div>
    </StyledPage>
  );
}
