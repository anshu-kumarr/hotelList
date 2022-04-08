interface payload {
  data: [data];
  count: number;
}
interface action {
  type: string;
  payload: payload;
}

interface data {
  id: number;
  email?: string;
  first_name?: string;
  last_name?: string;
  avatar?: string;
}
interface initial {
  hotelList: Array<data>;
  renderList: Array<data>;
  countOfHotel: number;
  displayIndex: number;
  showMap: Boolean;
}
const initialState: initial = {
  hotelList: [],
  renderList: [],
  countOfHotel: 0,
  displayIndex: 0,
  showMap: true,
};
export default function reducer(state = initialState, action: action) {
  switch (action.type) {
    case "INITIALIZE":
      return {
        ...state,
        hotelList: [...state.hotelList, ...action.payload.data],
        countOfHotel: action.payload.count,
      };
    case "TOGGLE":
      return {
        ...state,
        showMap: !state.showMap,
      };
    case "ADD_TO_DISPLAY":
      return {
        ...state,
        renderList: [...action.payload.data],
      };
    case "START":
      return {
        ...state,
        renderList: [...state.hotelList],
      };
    default:
      return state;
  }
}
