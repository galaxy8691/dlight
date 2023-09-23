import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class AutoFixNormalTwoTone extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"m4.415 18.167 7.17-7.17 1.414 1.414-7.17 7.17z\" opacity=\".3\"/><path d=\"m20 7 .94-2.06L23 4l-2.06-.94L20 1l-.94 2.06L17 4l2.06.94zm-2.29 2.12-2.83-2.83c-.2-.19-.45-.29-.71-.29-.26 0-.51.1-.71.29L2.29 17.46a.996.996 0 0 0 0 1.41l2.83 2.83c.2.2.45.3.71.3s.51-.1.71-.29l11.17-11.17c.39-.39.39-1.03 0-1.42zM5.83 19.59l-1.41-1.41L11.59 11 13 12.41l-7.17 7.18zM14.41 11 13 9.59l1.17-1.17 1.41 1.41L14.41 11z\"/>")
      .name("AutoFixNormalTwoTone")
  }
}

export default AutoFixNormalTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
