import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ActiveBrandType, ItemType } from "@/types";

interface StateType {
    loading: boolean,
    error: boolean,
    products: ItemType[],
    filteredByCategory: ItemType[],
    filteredCategoryBrands: ItemType[],
    activeBrand: ActiveBrandType,
}

const initialState: StateType = {
    loading: true,
    error: false,
    products: [],
    filteredByCategory: [],
    filteredCategoryBrands: [],
    activeBrand: undefined,
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async()=> {
    const res = await fetch('https://dummyjson.com/products');
    return res.json();
})


export const shopSlice = createSlice({
    name: 'shopSlice',
    initialState,
    reducers: {
        filterByCategory: (state, action:PayloadAction<string>) => {
            const filteredByCategory = state.products.filter(item=>item.category === action.payload);
            state.filteredByCategory = filteredByCategory;
            state.filteredCategoryBrands = filteredByCategory;
        },
        filterCategoryBrand: (state, action:PayloadAction<string>) => {
            const filteredCategoryBrands = state.filteredByCategory.filter(item=>item.brand === action.payload);
            state.filteredCategoryBrands = filteredCategoryBrands;
            
        },
        setActiveBrand: (state, action: PayloadAction<ActiveBrandType>) => { state.activeBrand = action.payload},

    },
    extraReducers: (builder) => {

        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
          });

        builder.addCase(fetchProducts.fulfilled, (state, action) => {
          state.loading = false;
          state.products=action.payload.products;
          state.filteredByCategory=action.payload.products;
          state.filteredCategoryBrands=action.payload.products;
        });

        builder.addCase(fetchProducts.rejected, (state) => {
            state.loading = false;
            state.error = true;
          });

      },
})


export const { filterByCategory, filterCategoryBrand, setActiveBrand } = shopSlice.actions;
export default shopSlice.reducer;