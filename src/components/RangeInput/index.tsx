import { RangeInputWrapper } from "./styles";

interface RangeInputProps {
  [x: string]: any;
}

export function RangeInput({ ...props }: RangeInputProps) {
  return (
    <RangeInputWrapper type="range" {...props} />
  );
}