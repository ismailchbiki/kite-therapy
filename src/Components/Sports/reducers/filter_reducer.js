import {
  LOAD_SPORTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_SPORTS,
  UPDATE_FILTERS,
  FILTER_SPORTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_SPORTS) {
    let maxPrice = action.payload.map((p) => p.price);
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      all_sports: [...action.payload],
      filtered_sports: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }
  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_SPORTS) {
    const { sort, filtered_sports } = state;
    let tempSports = [...filtered_sports];
    if (sort === "price-lowest") {
      tempSports = tempSports.sort((a, b) => a.price - b.price);
    }
    if (sort === "price-highest") {
      tempSports = tempSports.sort((a, b) => b.price - a.price);
    }
    if (sort === "name-a") {
      tempSports = tempSports.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (sort === "name-z") {
      tempSports = tempSports.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    return { ...state, filtered_sports: tempSports };
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === FILTER_SPORTS) {
    const { all_sports } = state;
    const { text, category, company, color, price, shipping } = state.filters;
    let tempSports = [...all_sports];
    //filtering
    //text
    if (text) {
      tempSports = tempSports.filter((sport) => {
        return sport.name.toLowerCase().startsWith(text);
      });
    }
    //category
    if (category !== "all") {
      tempSports = tempSports.filter((sport) => sport.category === category);
    }
    //company
    if (company !== "all") {
      tempSports = tempSports.filter((sport) => sport.company === company);
    }
    //colors
    if (color !== "all") {
      tempSports = tempSports.filter((sport) => {
        return sport.colors.find((c) => c === color);
      });
    }
    //price
    tempSports = tempSports.filter((sport) => sport.price <= price);
    //shipping
    if (shipping) {
      tempSports = tempSports.filter((sport) => sport.shipping === true);
    }
    return { ...state, filtered_sports: tempSports };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        company: "all",
        category: "all",
        color: "all",
        price: state.filters.max_price,
        shipping: false,
      },
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
