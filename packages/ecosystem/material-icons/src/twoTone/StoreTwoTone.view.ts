import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class StoreTwoTone extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"m5.64 9-.6 3h13.92l-.6-3z\" opacity=\".3\"/><path d=\"M4 4h16v2H4zm16 3H4l-1 5v2h1v6h10v-6h4v6h2v-6h1v-2l-1-5zm-8 11H6v-4h6v4zm-6.96-6 .6-3h12.72l.6 3H5.04z\"/>")
      .name("StoreTwoTone")
  }
}

export default StoreTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
