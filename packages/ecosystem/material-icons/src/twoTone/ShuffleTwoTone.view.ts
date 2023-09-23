import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class ShuffleTwoTone extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M20 4h-5.5l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5zM5.41 4 4 5.41l5.17 5.17 1.42-1.41zM20 20v-5.5l-2.04 2.04-3.13-3.13-1.41 1.41 3.13 3.13L14.5 20z\"/>")
      .name("ShuffleTwoTone")
  }
}

export default ShuffleTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
