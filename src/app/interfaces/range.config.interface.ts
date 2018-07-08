export interface IRangeConfig {
  label?: string;
  minValue: number;
  initialMinValue?: number;
  maxValue: number;
  initialMaxValue?: number;
  step?: number;
  disabled: boolean;
  showValues: boolean;
}
