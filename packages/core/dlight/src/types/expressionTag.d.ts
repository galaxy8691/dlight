interface ExpressionTag {
  willMount: (node: any) => void
  didMount: (node: any) => void
  willUnmount: (node: any) => void
  didUnmount: (node: any) => void
  didUpdate: <T>(node: any, key: string, prevValue: T, currValue: T) => void
  element: HTMLElement[] | ((holder: HTMLElement[]) => void) | undefined
}

type ExpressionTagFunc = (nodes: any) => ExpressionTag

export const _: ExpressionTagFunc
