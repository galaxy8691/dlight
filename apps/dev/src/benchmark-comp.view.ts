import { View, render } from "@dlightjs/dlight"
import { buildData } from "./data"

@View
class Button {
  @Content text
  @Prop id
  @Prop onClick

  View() {
    div().class("col-sm-6 smallpad"); {
      button(this.text)
        .onClick(this.onClick)
        .id(this.id)
        .class("btn btn-primary btn-block")
    }
  }
}

@View
class Row {
  @Prop className
  @Prop id
  @Prop label
  @Prop selectRow
  @Prop deleteRow

  View() {
    tr().class(this.className); {
      td(this.id).class("col-md-1")
      td().class("col-md-4"); {
        a(this.label).onClick(this.selectRow)
      }
      td().class("col-md-1"); {
        a().onClick(this.deleteRow); {
          span()
            .class("glyphicon glyphicon-remove")
            .ariaHidden("true")
        }
      }
      td().class("col-md-6")
    }
  }
}

@View
class Main {
  rows = []

  selectIdx = -1
  addRows() {
    this.rows = buildData(1000)
  }

  swapRows() {
    if (this.rows.length > 998) {
      const tmp = this.rows[1]
      this.rows[1] = this.rows[998]
      this.rows[998] = tmp
      this.rows = [...this.rows]
    }
  }

  clearRows() {
    this.rows = []
  }

  selectRow(idx) {
    this.selectIdx = idx
  }

  deleteRow(id) {
    this.rows = [...this.rows.filter(row => row.id !== id)]
  }

  addBig() {
    this.rows = buildData(10000)
  }

  append() {
    this.rows = [...this.rows, ...buildData(1000)]
  }

  update() {
    for (let i = 0; i < this.rows.length; i += 10) {
      this.rows[i] = { ...this.rows[i], label: this.rows[i].label + " !!!" }
    }
    this.rows = [...this.rows]
  }

  View() {
    div().class("container"); {
      div().class("jumbotron"); {
        div().class("row"); {
          div().class("col-sm-6"); {
            h1("DLight.js Component (keyed)")
          }
          div().class("col-md-6"); {
            div().class("row"); {
              Button("Create 1,000 rows")
                .onClick(this.addRows)
                .id("run")
              Button("Create 10,000 rows")
                .onClick(this.addBig)
                .id("runlots")
              Button("Append 1,000 rows")
                .onClick(this.append)
                .id("add")
              Button("Update every 10th rows")
                .onClick(this.update)
                .id("update")
              Button("Clear")
                .onClick(this.clearRows)
                .id("clear")
              Button("Swap Rows")
                .onClick(this.swapRows)
                .id("swaprows")
            }
          }
        }
      }
      div(); {
        table().class("table table-hover table-striped test-data"); {
          tbody(); {
            for (const { id, label } of this.rows) {
              key: id
              Row()
                .className(this.selectIdx === id ? "danger" : "")
                .id(id)
                .label(label)
                .selectRow(this.selectRow.bind(this, id))
                .deleteRow(this.deleteRow.bind(this, id))
            }
          }
        }
        span()
          .class("preloadicon glyphicon glyphicon-remove")
          .ariaHidden("true")
      }
    }
  }
}

render("main", Main)
