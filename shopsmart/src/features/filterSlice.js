import { createSlice } from "@reduxjs/toolkit";
// INITIAL STATE: The default view of the app (all categories, max price, no rating)
const initialState = {
    selectedCategories: [],// Empty array = "Show All"
    selectedRating: null,// Null = "No rating filter applied"
    priceRange: 200,// Default starting max price
    selectedTags: [],// Empty array = "No tags filtered"
};

const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        //  TOGGLE CATEGORY: Logic to add or remove a category from the filter list
        toggleCategory(state, action) {
            const cat = action.payload;
            // If it's already in the list, remove it. If not, add it.
            state.selectedCategories.includes(cat)
                ? state.selectedCategories = state.selectedCategories.filter(c => c !== cat)
                : state.selectedCategories.push(cat);
        },

        setRating(state, action) {
            state.selectedRating = action.payload;
        },

        setPriceRange(state, action) {
            state.priceRange = action.payload;
        },

        toggleTag(state, action) {
            const tag = action.payload;
            state.selectedTags.includes(tag)
                ? state.selectedTags = state.selectedTags.filter(t => t !== tag)
                : state.selectedTags.push(tag);
        },

        clearFilters() {
            return initialState;
        }
    }
});
// Export actions for use in the Sidebar component
export const {
    toggleCategory,
    setRating,
    setPriceRange,
    toggleTag,
    clearFilters
} = filterSlice.actions;

export default filterSlice.reducer;
