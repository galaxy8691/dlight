import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class RowingRound extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M4.75 18.25c-.41.41-.41 1.09 0 1.5.41.41 1.09.41 1.5 0L9 17h2l-2.5-2.5-3.75 3.75zM15 5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm5.29 15.3-2-2.01c-.18-.18-.44-.29-.71-.29H16.5l-6.29-6.29a9.79 9.79 0 0 0 2.29-1.39v2.27l3.58 3.58c.57-.55.92-1.32.92-2.16V8.26A2.27 2.27 0 0 0 14.74 6h-.02c-.34 0-.67.09-.96.23-.26.12-.5.29-.69.5l-1.4 1.55C10.61 9.45 8.66 10.35 7 10.32c-.6 0-1.08.48-1.08 1.08 0 .6.48 1.08 1.08 1.08.31 0 .61-.03.9-.07l7.11 7.09v1.08c0 .26.1.52.29.7l1.99 2.01c.39.39 1.02.39 1.42 0l1.58-1.58a.996.996 0 0 0 0-1.41z\"/>")
      .name("RowingRound")
  }
}

export default RowingRound as Pretty as Typed<DLightIconType, HTMLSpanElement>
