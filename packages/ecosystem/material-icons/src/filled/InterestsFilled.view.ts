import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class InterestsFilled extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M7.02 13c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zM13 13v8h8v-8h-8zM7 2l-5 9h10L7 2zm12.25.5c-1.06 0-1.81.56-2.25 1.17-.44-.61-1.19-1.17-2.25-1.17C13.19 2.5 12 3.78 12 5.25c0 2 2.42 3.42 5 5.75 2.58-2.33 5-3.75 5-5.75 0-1.47-1.19-2.75-2.75-2.75z\"/>")
      .name("InterestsFilled")
  }
}

export default InterestsFilled as Pretty as Typed<DLightIconType, HTMLSpanElement>
