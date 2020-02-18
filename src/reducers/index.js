export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ],
  addedFeatures: []
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ADDED_FEATURE":
      console.log(state.additionalPrice, action.payload.price)

      return {
        ...state,

        additionalPrice: state.additionalPrice + action.payload.price,

        car:
        {
          ...state.car,

          features: [
            ...state.car.features, {
              name: action.payload.name,
              id: action.payload.id,
              price: action.payload.price
            }
          ],
        },

        additionalFeatures: state.additionalFeatures.filter(additionalFeature => additionalFeature !== action.payload)

      }

    case "ADD_ADDITIONAL_FEATURE":

      return {
        ...state,

        additionalPrice: state.additionalPrice - action.payload.price,

        car:
        {
          ...state.car,

          features: state.car.features.filter(addedFeature => addedFeature !== action.payload)
        },

        additionalFeatures: [
          ...state.additionalFeatures, { name: action.payload.name, id: action.payload.id, price: action.payload.price }
        ]

      }

    default:
      return state
  }
}

