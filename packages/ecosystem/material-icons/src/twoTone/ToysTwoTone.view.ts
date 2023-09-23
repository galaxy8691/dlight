import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

class ToysTwoTone extends View {
  _$forwardProps = true
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M18 12H6c-1.1 0-2 .9-2 2 0 .51.2.97.51 1.32C5.05 14.53 5.97 14 7 14c1.3 0 2.4.84 2.82 2h4.37c.41-1.16 1.51-2 2.82-2 1.03 0 1.95.53 2.49 1.32.3-.35.5-.81.5-1.32 0-1.1-.9-2-2-2z\" opacity=\".3\"/><path d=\"M18.75 10.08 17.4 6.05A2.978 2.978 0 0 0 14.56 4H9.44C8.15 4 7 4.82 6.6 6.05L5.81 8.4 4.41 7l.29-.29A.996.996 0 1 0 3.29 5.3l-2 2A.996.996 0 1 0 2.7 8.71l.3-.3 1.79 1.79C3.18 10.72 2 12.22 2 14c0 1.49.83 2.78 2.05 3.47A2.991 2.991 0 0 0 7 20c1.3 0 2.4-.84 2.82-2h4.37c.41 1.16 1.51 2 2.82 2 1.49 0 2.73-1.1 2.95-2.53C21.17 16.78 22 15.49 22 14c0-1.95-1.4-3.57-3.25-3.92zM13 6h1.56a1 1 0 0 1 .95.68l1.1 3.32H13V6zm-4.51.68A1 1 0 0 1 9.44 6H11v4H7.41l-.02-.02 1.1-3.3zM7 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm10 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2.49-2.68A3.028 3.028 0 0 0 17 14c-1.3 0-2.4.84-2.82 2H9.82C9.4 14.84 8.3 14 7 14c-1.03 0-1.95.53-2.49 1.32C4.2 14.97 4 14.51 4 14c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2 0 .51-.2.97-.51 1.32z\"/>")
      .name("ToysTwoTone")
  }
}

export default ToysTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
