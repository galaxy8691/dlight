import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class GroupWorkRound extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5zM9.5 8a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1-5 0zm6.5 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z\"/>")
      .name("GroupWorkRound")
  }
}

export default GroupWorkRound as Pretty as Typed<DLightIconType, HTMLSpanElement>
