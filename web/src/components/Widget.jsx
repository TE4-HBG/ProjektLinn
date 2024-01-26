import PropTypes from "prop-types";
import { CountdownWidget } from "./CountdownWidget";

/* All widgets */
export const widgets = {
  countdown: CountdownWidget,
};

/* Base component for all widgets */
export const Widget = ({ type, data }) => {
  const component = widgets[type];
  if (!component) return <div>Widget not found</div>;
  return component({ data });
};

/**
 * @param {{type: string, data: object}} props
 */
Widget.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};
