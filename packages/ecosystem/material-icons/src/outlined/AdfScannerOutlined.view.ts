import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class AdfScannerOutlined extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M19 12h-1V4H6v8H5c-1.66 0-3 1.34-3 3v5h20v-5c0-1.66-1.34-3-3-3zM8 6h8v6H8V6zm12 12H4v-3c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v3z\"/><circle cx=\"18\" cy=\"16\" r=\"1\"/>")
      .name("AdfScannerOutlined")
  }
}

export default AdfScannerOutlined as Pretty as Typed<DLightIconType, HTMLSpanElement>
