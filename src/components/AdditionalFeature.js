import React from 'react';
import { addAdditionalFeatures, addAddedFeatures } from "../actions"
import { connect } from "react-redux"

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => { props.addAddedFeatures(props.feature) }}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(
  null,
  { addAddedFeatures }
)(AdditionalFeature);
