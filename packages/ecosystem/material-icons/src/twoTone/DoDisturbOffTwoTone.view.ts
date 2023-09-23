import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class DoDisturbOffTwoTone extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M12 4c-1.41 0-2.73.37-3.88 1.01l6 5.99H17v2h-.88L19 15.88c.63-1.15 1-2.47 1-3.88 0-4.41-3.59-8-8-8zm0 16c1.56 0 3-.45 4.23-1.23L10.46 13H7v-2h1.46L5.23 7.77A7.846 7.846 0 0 0 4 12c0 4.41 3.59 8 8 8z\" opacity=\".3\"/><path d=\"M12 4c4.41 0 8 3.59 8 8 0 1.41-.37 2.73-1.01 3.88l1.46 1.46A9.96 9.96 0 0 0 22 12c0-5.52-4.48-10-10-10a9.9 9.9 0 0 0-5.33 1.55l1.46 1.46A7.883 7.883 0 0 1 12 4zm5 7h-2.88l2 2H17zM2.41 2.13 1 3.54l2.78 2.78A9.92 9.92 0 0 0 2 12c0 5.52 4.48 10 10 10 2.11 0 4.07-.66 5.68-1.78L20.46 23l1.41-1.41L2.41 2.13zM12 20c-4.41 0-8-3.59-8-8 0-1.56.45-3 1.23-4.23L8.46 11H7v2h3.46l5.77 5.77A7.846 7.846 0 0 1 12 20z\"/>")
      .name("DoDisturbOffTwoTone")
  }
}

export default DoDisturbOffTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
