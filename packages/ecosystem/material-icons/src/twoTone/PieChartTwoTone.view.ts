import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class PieChartTwoTone extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M4 12c0 4.07 3.06 7.44 7 7.93V4.07C7.06 4.56 4 7.93 4 12zm9 7.93A8.002 8.002 0 0 0 19.93 13H13v6.93zm0-15.86V11h6.93A8.002 8.002 0 0 0 13 4.07z\" opacity=\".3\"/><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.86-7-7.93s3.06-7.44 7-7.93v15.86zm2 0V13h6.93A8.002 8.002 0 0 1 13 19.93zM13 11V4.07c3.61.45 6.48 3.32 6.93 6.93H13z\"/>")
      .name("PieChartTwoTone")
  }
}

export default PieChartTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
