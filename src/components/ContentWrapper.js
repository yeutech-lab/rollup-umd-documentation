import styled from 'styled-components';
import bp from 'bootstrap-styled-mixins/lib/breakpoints';

const ContentWrapper = styled.div`
  ${(props) => `
    padding: 0 20px;
    ${bp.down(
    'md',
    props.theme['$grid-breakpoints'],
    `
        padding: 0 10px;
      `
  )};
  `}
`;

export default ContentWrapper;
