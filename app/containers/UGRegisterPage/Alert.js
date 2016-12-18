/**
 * Created by Yang on 17/11/16.
 */
import styled, { css } from 'styled-components';

const Alert = css`
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
}
`;
const AlertDanger = styled.div`
  color: #A94442;
  background-color: #F2DEDE;
  border-color: #EBCCD1;
  ${Alert}
`;

export default AlertDanger;
