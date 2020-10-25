import React, { Component } from "react";
import { AnyColor, ColorXYFeature } from "../../../../types";
import ColorEditor from "../../../color-editor/color-editor";

import { BaseFeatureProps } from "../../base";


type ColorProps = BaseFeatureProps<ColorXYFeature>;

export default class Light extends Component<ColorProps, {}> {
  render() {
    const { deviceState, feature, onChange } = this.props;
    const value = {};
    for (const innerFeature of feature.features) {
      value[innerFeature.property] = deviceState[feature.property]?.[innerFeature.property];
    }

    return <ColorEditor
      onChange={(v) => onChange(feature.endpoint, { [feature.property]: v })}
      value={value as AnyColor}
      brightness={deviceState.brightness}
      format={feature.name} />
  }
}