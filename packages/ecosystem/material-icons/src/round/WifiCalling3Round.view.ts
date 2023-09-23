import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class WifiCalling3Round extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M21.54 4.8A7.902 7.902 0 0 0 16.49 3c-1.92 0-3.67.67-5.05 1.8-.34.28-.36.79-.05 1.1l.01.01c.27.27.7.29 1 .05 1.12-.91 2.54-1.45 4.09-1.45s2.97.55 4.09 1.45c.3.24.73.23 1-.05l.01-.01c.31-.31.29-.83-.05-1.1z\"/><path d=\"M19.45 8.04c.33-.33.28-.88-.11-1.15-.8-.56-1.79-.89-2.85-.89s-2.04.33-2.85.89c-.38.27-.44.82-.11 1.15.25.25.65.31.94.1.57-.4 1.27-.64 2.02-.64s1.45.24 2.02.64c.29.21.69.15.94-.1zm-2.96.86c-.32 0-.62.08-.89.21-.3.15-.34.56-.11.79l.65.65c.2.2.51.2.71 0l.65-.65c.23-.23.19-.64-.11-.79-.27-.14-.58-.21-.9-.21z\"/><path d=\"m15.63 14.4-2.52 2.5c-2.5-1.43-4.57-3.5-6-6l2.5-2.52c.23-.24.33-.57.27-.9L9.13 3.8c-.09-.46-.5-.8-.98-.8H4c-.56 0-1.03.47-1 1.03.17 2.89 1.05 5.6 2.43 7.97 1.58 2.73 3.85 4.99 6.57 6.57 2.37 1.37 5.08 2.26 7.97 2.43.56.03 1.03-.44 1.03-1v-4.15c0-.48-.34-.89-.8-.98l-3.67-.73a.985.985 0 0 0-.9.26z\"/>")
      .name("WifiCalling3Round")
  }
}

export default WifiCalling3Round as Pretty as Typed<DLightIconType, HTMLSpanElement>
