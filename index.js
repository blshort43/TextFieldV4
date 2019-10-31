/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card } from 'versa-ui';
import { CardStyle, InputStyle, LegendStyle, ErrorTextStyle } from './Views';

const StyledCard = styled(Card)`
  ${CardStyle};
`;
const StyledInput = styled.input`
  ${InputStyle};
`;
const StyledLegend = styled.legend`
  ${LegendStyle};
`;
const ErrorText = styled.p`
  ${ErrorTextStyle};
`;

class TextField extends React.PureComponent {
  state = {
    focused: false,
  };

  handleFocus = () => {
    this.setState({ focused: true });
  };

  handleBlur = () => {
    if (this.props.value) {
      this.setState({ focused: true });
    } else {
      this.setState({ focused: false });
    }
  };

  render() {
    const {
      type,
      name,
      value,
      label,
      labelColor,
      error,
      errorText,
      placeholder,
      onKeyDown,
      height,
      ...props
    } = this.props;
    return (
      <StyledCard
        {...props}
        style={{ border: 'none' }}
        onBlur={this.handleBlur}
        onFocus={this.handleFocus}
        onKeyDown={onKeyDown}
      >
        <StyledLegend
          labelColor={labelColor}
          style={{
            opacity: `${this.state.focused || this.props.value ? 1 : 0}`,
            transform: `${
              this.state.focused || this.props.value
                ? 'translate(0, 0)'
                : 'translate(10px, 18px)'
            }`,
          }}
        >
          {label}
        </StyledLegend>
        <StyledInput
          {...props}
          error={error}
          name={name}
          placeholder={placeholder || label}
          type={type}
          value={value || ''}
          height={height}
          style={{
            width: '100%',
            margin: '0',
          }}
        />
        <ErrorText
          style={{
            opacity: `${error ? 1 : 0}`,
            textAlign: 'center',
          }}
        >
          {errorText}
        </ErrorText>
      </StyledCard>
    );
  }
}

TextField.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.any,
  label: PropTypes.string,
  labelColor: PropTypes.string,
  error: PropTypes.bool,
  errorText: PropTypes.string,
  placeholder: PropTypes.string,
  onKeyDown: PropTypes.func,
};

export default TextField;
