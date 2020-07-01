/// <reference types="react-scripts" />

/**
 * Declare namespace FC
 */
declare namespace React {
  interface FunctionComponent<P = {}> {
    whyDidYouRender?: boolean
  }
}
