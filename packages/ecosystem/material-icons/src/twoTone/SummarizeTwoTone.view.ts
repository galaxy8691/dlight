import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class SummarizeTwoTone extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M14 5H5v14h14v-9h-5V5zM8 17c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z\" opacity=\".3\"/><circle cx=\"8\" cy=\"8\" r=\"1\"/><path d=\"M15 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V9l-6-6zm4 16H5V5h9v5h5v9z\"/><circle cx=\"8\" cy=\"12\" r=\"1\"/><circle cx=\"8\" cy=\"16\" r=\"1\"/>")
      .name("SummarizeTwoTone")
  }
}

export default SummarizeTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
