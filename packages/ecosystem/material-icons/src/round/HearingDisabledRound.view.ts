import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class HearingDisabledRound extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M16.96 3.3a.983.983 0 0 1 .07-1.32l.01-.01c.42-.42 1.12-.38 1.49.08C20.07 3.94 21 6.36 21 9a11 11 0 0 1-2.36 6.81l-1.43-1.43A8.962 8.962 0 0 0 19 9c0-2.17-.77-4.16-2.04-5.7zM7.49 4.66A5.05 5.05 0 0 1 10 4c2.8 0 5 2.2 5 5 0 .8-.23 1.69-.63 2.54l1.48 1.48c.02-.04.05-.08.08-.13C16.62 11.65 17 10.26 17 9c0-3.93-3.07-7-7-7-1.49 0-2.85.44-3.97 1.2l1.46 1.46zM10 6.5c-.21 0-.4.03-.59.08l3.01 3.01c.05-.19.08-.38.08-.59A2.5 2.5 0 0 0 10 6.5zm10.49 13.99L3.51 3.51A.996.996 0 1 0 2.1 4.92l1.42 1.42c-.2.49-.35 1-.43 1.54-.1.59.38 1.12.97 1.12h.04c.48 0 .89-.35.96-.82.02-.08.04-.16.06-.23l6.62 6.62c-.88.68-1.78 1.41-2.27 2.9-.5 1.5-1 2.01-1.71 2.38-.2.09-.47.15-.76.15-.88 0-1.63-.58-1.9-1.37-.13-.39-.53-.63-.95-.63-.66 0-1.15.64-.95 1.26a4.008 4.008 0 0 0 5.44 2.39c1.36-.71 2.13-1.73 2.73-3.55.32-.98.9-1.43 1.71-2.05.03-.02.05-.04.08-.06l5.91 5.91c.39.39 1.02.39 1.41 0 .4-.39.4-1.02.01-1.41z\"/>")
      .name("HearingDisabledRound")
  }
}

export default HearingDisabledRound as Pretty as Typed<DLightIconType, HTMLSpanElement>
