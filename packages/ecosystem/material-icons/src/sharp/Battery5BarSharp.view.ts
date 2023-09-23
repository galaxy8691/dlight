import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class Battery5BarSharp extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M17 4v18H7V4h3V2h4v2h3zm-2 2H9v4h6V6z\"/>")
      .name("Battery5BarSharp")
  }
}

export default Battery5BarSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
