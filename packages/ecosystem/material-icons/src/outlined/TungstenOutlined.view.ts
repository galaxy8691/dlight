import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class TungstenOutlined extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M11 19h2v3h-2zm-9-8h3v2H2zm17 0h3v2h-3zm-3.106 6.801 1.407-1.407 2.122 2.122-1.408 1.407zm-11.31.708 2.121-2.122 1.408 1.407-2.122 2.122zM15 8.02V3H9v5.02c-1.21.92-2 2.35-2 3.98 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.06-2-3.98zM11 5h2v2.1c-.32-.06-.66-.1-1-.1s-.68.04-1 .1V5zm1 10c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z\"/>")
      .name("TungstenOutlined")
  }
}

export default TungstenOutlined as Pretty as Typed<DLightIconType, HTMLSpanElement>
