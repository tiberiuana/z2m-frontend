import React, { FunctionComponent } from "react";
import Button from "../button";
import cx from "classnames";
type Primitive = number | string;

export type ValueWithLabelOrPrimitive = {
  value: number;
  name: string;
  description?: string;
} | Primitive;

type EnumProps = {
  value?: ValueWithLabelOrPrimitive;
  onChange(value: unknown): void;
  values: ValueWithLabelOrPrimitive[];
}


function isPrimitive(step: ValueWithLabelOrPrimitive): step is Primitive {
  return ["number", "string"].includes(typeof step);
}

const EnumEditor: FunctionComponent<EnumProps> = (props) => {
  const { onChange, values, value } = props;
  return <div className="btn-group me-2">
    {
      values.map(v => <Button<ValueWithLabelOrPrimitive>
        className={cx("btn btn-outline-secondary", { active: isPrimitive(v) ? v === value : v.value == (isPrimitive(value) ? value : value?.value) })}
        onClick={item => onChange(item)}
        key={isPrimitive(v) ? v : v.name}
        item={isPrimitive(v) ? v : v.value}
        title={isPrimitive(v) ? v as string : v.description}
      >{isPrimitive(v) ? v : v.name}</Button>)
    }
  </div>;
}
export default EnumEditor;