import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class SubdirectoryArrowLeftOutlined extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"m11 9 1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z\"/>")
      .name("SubdirectoryArrowLeftOutlined")
  }
}

export default SubdirectoryArrowLeftOutlined as Pretty as Typed<DLightIconType, HTMLSpanElement>
