import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class SignalCellularAlt2BarOutlined extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M5 14h3v6H5v-6zm6-5h3v11h-3V9z\"/>")
      .name("SignalCellularAlt2BarOutlined")
  }
}

export default SignalCellularAlt2BarOutlined as Pretty as Typed<DLightIconType, HTMLSpanElement>
