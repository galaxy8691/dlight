import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class AutoAwesomeRound extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"m19.46 8 .79-1.75L22 5.46a.5.5 0 0 0 0-.91l-1.75-.79L19.46 2a.5.5 0 0 0-.91 0l-.79 1.75-1.76.79a.5.5 0 0 0 0 .91l1.75.79.79 1.76c.18.39.74.39.92 0zM11.5 9.5 9.91 6c-.35-.78-1.47-.78-1.82 0L6.5 9.5 3 11.09c-.78.36-.78 1.47 0 1.82l3.5 1.59L8.09 18c.36.78 1.47.78 1.82 0l1.59-3.5 3.5-1.59c.78-.36.78-1.47 0-1.82L11.5 9.5zm7.04 6.5-.79 1.75-1.75.79a.5.5 0 0 0 0 .91l1.75.79.79 1.76a.5.5 0 0 0 .91 0l.79-1.75 1.76-.79a.5.5 0 0 0 0-.91l-1.75-.79-.79-1.76a.508.508 0 0 0-.92 0z\"/>")
      .name("AutoAwesomeRound")
  }
}

export default AutoAwesomeRound as Pretty as Typed<DLightIconType, HTMLSpanElement>
