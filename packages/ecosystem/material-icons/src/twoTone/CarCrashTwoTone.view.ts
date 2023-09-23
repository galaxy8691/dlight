import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class CarCrashTwoTone extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M17.91 13c.06.16.09.33.09.5 0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5c0-.39.15-.74.39-1A7.16 7.16 0 0 1 13.1 11H5v5h14v-3.07c-.33.05-.61.07-1.09.07zM7.5 15c-.83 0-1.5-.67-1.5-1.5S6.67 12 7.5 12s1.5.67 1.5 1.5S8.33 15 7.5 15z\" opacity=\".3\"/><path d=\"M18 1c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm.5 6h-1V3h1v4zm0 1v1h-1V8h1zM6 13.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S8.33 15 7.5 15 6 14.33 6 13.5zm13-.57a6.72 6.72 0 0 0 2-.6V19c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1v-1H6v1c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-8l2.08-5.99C5.29 4.42 5.84 4 6.5 4h4.79c-.19.63-.29 1.31-.29 2H6.85L5.81 9h5.86c.36.75.84 1.43 1.43 2H5v5h14v-3.07zm-1.09.07a6.92 6.92 0 0 1-2.53-.51c-.23.27-.38.62-.38 1.01 0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5c0-.18-.03-.34-.09-.5z\"/>")
      .name("CarCrashTwoTone")
  }
}

export default CarCrashTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
