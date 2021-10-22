import React from 'react';

import styled from 'styled-components';

function Container({ children, className }) {
  return <main className={className}>{children}</main>;
}

export default styled(Container)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 0;
`;