import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class EqualizerSharp extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z\"/>")
      .name("EqualizerSharp")
  }
}

export default EqualizerSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
