/* eslint-disable indent */
import { css } from 'styled-components';

export const CardStyle = css`
  height: fit-content;
  box-shadow: none;
  margin-top: ${props =>
    props.marginTop || props.mt ? props.marginTop || props.mt : '8px'};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '6px')};
`;

// <input> or <select> styling
export const InputStyle = css`
  color: ${props => (props.color ? props.color : '#000000')};
  outline: none;
  font-family: inherit;
  padding: ${props =>
    props.padding || props.p ? props.padding || props.p : '12px'};
  transition: all 0.25s linear;
  box-sizing: border-box;
  border: ${props => {
    if (props.error) {
      return props.errorBorder || '1px solid red';
    }
    return props.border || '1px solid #909090';
  }};
  ::-webkit-datetime-edit {
    opacity: ${props => props.value === '' && '0.6'};
  }
  background: ${props => props.background || props.bg || 'none'};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '6px')};
  width: ${props => (props.width ? props.width : '100%')};
  height: ${props => (props.height ? props.height : '50px')};
  :hover {
    ::-webkit-datetime-edit {
      opacity: 1;
    }
    color: ${props =>
      props.colorHover ? props.colorHover : props.color || '#000000'};
    border: ${props => {
      if (props.error) {
        return props.errorBorder || '1px solid red';
      }
      return props.borderHover
        ? props.borderHover
        : props.border || '1px solid #000000';
    }};
    background: ${props =>
      props.backgroundHover
        ? props.backgroundHover
        : props.background || props.bg || 'none'};
    cursor: text;
    ::placeholder {
      opacity: 1;
    }
  }
  :focus {
    outline-offset: 0;
    color: ${props =>
      props.colorFocus ? props.colorFocus : props.color || '#000000'};
    border: ${props => {
      if (props.error) {
        return props.errorBorder || '1px solid red';
      }
      return props.borderFocus
        ? props.borderFocus
        : props.border || '1px solid #2e66ff';
    }};
    background: ${props =>
      props.backgroundFocus
        ? props.backgroundFocus
        : props.background || props.bg || 'none'};
    ::placeholder {
      opacity: 0;
    }
  }
`;

export const LegendStyle = css`
  color: ${props => (props.labelColor ? props.labelColor : '#000000')};
  outline: none;
  pointer-events: none;
  font-size: 12px;
  transition: all 0.25s ease-in-out;
  box-sizing: border-box;
`;

export const ErrorTextStyle = css`
  color: red;
  font-size: 12px;
  margin: 0;
  padding: 0;
`;
