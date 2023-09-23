import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class ModeCommentSharp extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M22 2H2v16h16l4 4z\"/>")
      .name("ModeCommentSharp")
  }
}

export default ModeCommentSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
