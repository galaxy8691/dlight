import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class Icon10kRound extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M10 10.5h1.5v3H10v-3zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM6.75 15c-.41 0-.75-.34-.75-.75V10.5h-.75c-.41 0-.75-.34-.75-.75S4.84 9 5.25 9H6.5c.55 0 1 .45 1 1v4.25c0 .41-.34.75-.75.75zM13 14c0 .55-.45 1-1 1H9.5c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1H12c.55 0 1 .45 1 1v4zm4.59 1c-.22 0-.42-.1-.55-.27l-1.54-1.98v1.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-4.5c0-.41.34-.75.75-.75s.75.34.75.75v1.5l1.54-1.98a.698.698 0 0 1 1.11.85L16.75 12l1.41 1.88c.34.46.01 1.12-.57 1.12z\"/>")
      .name("Icon10kRound")
  }
}

export default Icon10kRound as Pretty as Typed<DLightIconType, HTMLSpanElement>
