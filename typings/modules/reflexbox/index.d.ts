// Type definitions for Reflexbox v2.0.0
// Project: http://jxnblk.com/reflexbox/
// Definitions by: Evgeniy Khramkov <https://github.com/ewgeniux>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path='../../../node_modules/@types/react/index.d.ts' />

declare module "reflexbox" {
  export import Flex = Reflexbox.Flex;
}

declare namespace Reflexbox {
  interface RoboxProps {
    gutter?: number
    m?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    mx?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    my?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    mt?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    mb?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    ml?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    mr?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    p?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    px?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    py?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    pt?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    pb?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    pl?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    pr?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  }

  interface ReflexProps extends RoboxProps, React.Props<any> {
    flex?: boolean
    wrap?: boolean
    flexColumn?: boolean
    column?: boolean
    align?: 'stretch' | 'center' | 'baseline' | 'flex-start' | 'flex-end'
    justify?: 'center' | 'space-around' | 'space-between' | 'flex-start' | 'flex-end'
    flexAuto?: boolean
    auto?: boolean
    flexNone?: boolean
    order?: number
    col?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
    sm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
    md?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
    lg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
    is?: (props: any, propName: string, componentName: string) => Error | void
    style?: React.CSSProperties
  }

  function withReflex(params: {
    listen: boolean
  }): React.Component<ReflexProps, {}>;

  export interface FlexProps extends ReflexProps { }

  export class Flex extends React.Component<FlexProps, {}> { }

  export interface BoxProps extends ReflexProps { }

  export class Box extends React.Component<BoxProps, {}> { }

  export interface GridProps extends ReflexProps { }

  export class Grid extends React.Component<GridProps, {}> { }
}

declare module "reflexbox/Flex" {
  export import Flex = Reflexbox.Flex;
  export default Flex;
}