import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class PsychologyAltOutlined extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M19.94 9.06C19.5 5.73 16.57 3 13 3 9.47 3 6.57 5.61 6.08 9l-1.93 3.48c-.41.66.07 1.52.85 1.52h1v2c0 1.1.9 2 2 2h1v3h7v-4.68a7.016 7.016 0 0 0 3.94-7.26zm-5.05 5.57-.89.42V19h-3v-3H8v-4H6.7l1.33-2.33C8.21 7.06 10.35 5 13 5c2.76 0 5 2.24 5 5 0 2.09-1.29 3.88-3.11 4.63z\"/><path d=\"M12.5 12.54c-.41 0-.74.31-.74.73 0 .41.33.74.74.74.42 0 .73-.33.73-.74a.71.71 0 0 0-.73-.73zm0-5.54c-1.03 0-1.74.67-2 1.45l.96.4c.13-.39.43-.86 1.05-.86.95 0 1.13.89.8 1.36-.32.45-.86.75-1.14 1.26-.23.4-.18.87-.18 1.16h1.06c0-.55.04-.65.13-.82.23-.42.65-.62 1.09-1.27.4-.59.25-1.38-.01-1.8-.31-.49-.9-.88-1.76-.88z\"/>")
      .name("PsychologyAltOutlined")
  }
}

export default PsychologyAltOutlined as Pretty as Typed<DLightIconType, HTMLSpanElement>
