import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class MilitaryTechTwoTone extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"m13 11.07 2-1.2V4h-2zM9 4v5.87l2 1.2V4z\" opacity=\".3\"/><path d=\"M17 10.43V2H7v8.43c0 .35.18.68.49.86l4.18 2.51-.99 2.34-3.41.29 2.59 2.24L9.07 22 12 20.23 14.93 22l-.78-3.33 2.59-2.24-3.41-.29-.99-2.34 4.18-2.51c.3-.18.48-.5.48-.86zm-6 .64-2-1.2V4h2v7.07zm4-1.2-2 1.2V4h2v5.87z\"/>")
      .name("MilitaryTechTwoTone")
  }
}

export default MilitaryTechTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
