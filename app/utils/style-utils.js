/**
 * Created by Yang on 16/11/16.
 */
import { css } from 'styled-components';

export const media = {
  handheld: (...args) => css`
    @media (max-width: 340px) {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (max-width: 768px) {
      ${css(...args)}
    }
  `,
};
