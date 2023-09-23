import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class GirlOutlined extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M12 7.5c.97 0 1.75-.78 1.75-1.75S12.97 4 12 4s-1.75.78-1.75 1.75S11.03 7.5 12 7.5zm2 8.5v4h-4v-4H8l2.38-6.38a1.733 1.733 0 0 1 3.24 0L16 16h-2z\"/>")
      .name("GirlOutlined")
  }
}

export default GirlOutlined as Pretty as Typed<DLightIconType, HTMLSpanElement>
