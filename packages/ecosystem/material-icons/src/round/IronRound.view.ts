import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class IronRound extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M8.27 10c.34 0 .68-.16.84-.47.17-.31.51-.53.89-.53h4c.55 0 1 .45 1 1v1H6c-2.21 0-4 1.79-4 4v2c0 .55.45 1 1 1h13c.55 0 1-.45 1-1v-1c1.66 0 3-1.34 3-3V9c0-.55.45-1 1-1s1-.45 1-1-.45-1-1-1c-1.66 0-3 1.34-3 3v4c0 .55-.45 1-1 1v-4c0-1.66-1.34-3-3-3h-4c-1.13 0-2.11.62-2.63 1.55-.36.65.16 1.45.9 1.45z\"/>")
      .name("IronRound")
  }
}

export default IronRound as Pretty as Typed<DLightIconType, HTMLSpanElement>
