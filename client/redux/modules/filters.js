const FILTER_BY_CUISINE = 'FILTER_BY_CUISINE';
const FILTER_BY_INTERESTS = 'FILTER_BY_INTERESTS';
const FILTER_BY_BUDGET = 'FILTER_BY_BUDGET';

const initialState = {
    budgetFilters: [],
    cuisineFilters: [],
    interestsFilters: []
};

export function filterByBudget(filters) {
    return {
        type: FILTER_BY_BUDGET,
        payload: filters
    };
}


export function filterByInterests(filters) {
    return {
        type: FILTER_BY_INTERESTS,
        payload: filters
    };
}


export function filterByCuisine(filters) {
    return {
        type: FILTER_BY_CUISINE,
        payload: filters
    };
}

export function filtersReducer(state = initialState, action) {
    switch (action.type) {
        case FILTER_BY_CUISINE:
            return { ...state, cuisineFilters: action.payload };
        case FILTER_BY_INTERESTS:
            return { ...state, interestsFilters: action.payload};
        case FILTER_BY_BUDGET:
            return {...state, budgetFilters: action.payload };
        default:
            return state;
    }
}