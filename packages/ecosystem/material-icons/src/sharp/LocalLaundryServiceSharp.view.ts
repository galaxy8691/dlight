import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class LocalLaundryServiceSharp extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M9.17 16.83c1.56 1.56 4.1 1.56 5.66 0s1.56-4.1 0-5.66l-5.66 5.66zM20 2.01 4 2v20h16V2.01zM10 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM7 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm5 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z\"/>")
      .name("LocalLaundryServiceSharp")
  }
}

export default LocalLaundryServiceSharp as Pretty as Typed<DLightIconType, HTMLSpanElement>
