import styled from 'styled-components';
import bp from 'bootstrap-styled-mixins/lib/breakpoints';

const ContentWrapper = styled.div`
  ${(props) => `
    padding: 20px 60px 20px 60px !important;
    ${bp.down(
    'md',
    props.theme['$grid-breakpoints'],
    `
      padding: 10px 30px 10px 30px !important;
    `
  )};
  `}
`;

export default ContentWrapper;
