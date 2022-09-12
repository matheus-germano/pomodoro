import styled from "styled-components";

export const RangeInputWrapper = styled.input`

&[type="range"] {
  -webkit-appearance: none;
  height: 15px;
  background: var(--gray-800);
  border-radius: 10px;
}

/* Input Thumb */
&[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: var(--purple-500);
  cursor: pointer;
  transition: background .3s ease-in-out;

  &:hover {
    background: var(--purple-700);
  }
}

&[type="range"]::-moz-range-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: var(--purple-500);
  cursor: pointer;
  transition: background .3s ease-in-out;

  &:hover {
    background: var(--purple-700);
  }
}

&[type="range"]::-ms-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: var(--purple-500);
  cursor: pointer;
  transition: background .3s ease-in-out;

  &:hover {
    background: var(--purple-700);
  }
}

/* Input Track */
&[type=range]::-webkit-slider-runnable-track  {
  -webkit-appearance: none;
  box-shadow: none;
  border: none;
  background: transparent;
}

&[type=range]::-moz-range-track {
  -webkit-appearance: none;
  box-shadow: none;
  border: none;
  background: transparent;
}

&[type="range"]::-ms-track {
  -webkit-appearance: none;
  box-shadow: none;
  border: none;
  background: transparent;
}
`;