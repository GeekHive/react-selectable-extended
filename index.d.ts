import * as React from 'react';

/** `SelectableGroup` properties */
interface SelectableGroupProperties<T = any, K extends keyof ElementTagNameMap = 'div'> {
  /** If false, all of the selectable features are disabled, and event handlers removed. */
  enabled?: boolean;
  /**
   * Allows to enable/disable preventing the default action of the onmousedown event
   * (with e.preventDefault). True by default. Disable if your app needs to capture this event
   * for other functionalities.
   */
  preventDefault?: boolean;
  /**
   * Enable to fire the `onSelection` callback while the mouse is moving. Throttled to 50ms
   * for performance in IE/Edge.
   */
  selectOnMouseMove?: boolean;
  /** Callback fired after user completes selection. */
  onSelection?: (selectedKeys: T[]) => void;
  /**
   * Callback fired rapidly during selection (while the selector is being dragged). Passes
   * an array containing the keys of the items currently under the selector to the callback
   * function.
   */
  duringSelection?: (selectedKeys: T[]) => void;
  /** The amount of buffer to add around your `<SelectableGroup />` container, in pixels. */
  tolerance?: number;
  /** The component to render. Defaults to `div`. */
  component?: K;
  /**
   * Whether the `<SelectableGroup />` container is a fixed/absolute position element or the
   * grandchild of one.
   */
  fixedPosition?: boolean;
  /**
   * When enabled, makes all new selections add to the already selected items, except for selections
   * that contain only previously selected items—in this case it unselects those items. */
  dontClearSelection?: boolean;
}

/** Create a container for one or more `Selectable` components. */
export class SelectableGroup extends React.Component<SelectableGroupProperties> {}

/** Additional `Selectable` component properties */
interface SeelctableProperties<T> {
  selectableKey?: T;
}

/** Create a `Selectable` component from an existing component. */
export function createSelectable<P = {}, T = any>(
  component: React.Component<P> | React.StatelessComponent<P>
): React.ComponentClass<P & SeelctableProperties<T>>;
