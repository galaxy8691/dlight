import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class RectangleFilled extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M2 4h20v16H2z\"/>")
      .name("RectangleFilled")
  }
}

export default RectangleFilled as Pretty as Typed<DLightIconType, HTMLSpanElement>
