import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class SwipeRightOutlined extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"m18.89 13.77-3.8-1.67c-.13-.06-.28-.1-.44-.1H14V7.5a2.5 2.5 0 0 0-5 0v8.15l-1.87-.4c-.19-.03-1.02-.15-1.73.56L4 17.22l5.12 5.19c.37.38.88.59 1.41.59h6.55c.98 0 1.81-.7 1.97-1.67l.92-5.44a2 2 0 0 0-1.08-2.12zM17.08 21h-6.55l-3.7-3.78 4.17.89V7.5c0-.28.22-.5.5-.5s.5.22.5.5v6.18h1.76L18 15.56 17.08 21zM12 2.5C7.26 2.5 4.33 5.02 3.57 7H2c.73-2.88 4.51-6 10-6 3.22 0 6.18 1.13 8.5 3.02V2H22v5h-5V5.5h2.91c-2.12-1.86-4.88-3-7.91-3z\"/>")
      .name("SwipeRightOutlined")
  }
}

export default SwipeRightOutlined as Pretty as Typed<DLightIconType, HTMLSpanElement>
