export function addAdditionalFeatures(newAdditionalFeature) {
  return { type: "ADD_ADDITIONAL_FEATURE", payload: newAdditionalFeature }
}


export function addAddedFeatures(newAddedFeature) {
  console.log(newAddedFeature)
  return { type: "ADD_ADDED_FEATURE", payload: newAddedFeature }
}
