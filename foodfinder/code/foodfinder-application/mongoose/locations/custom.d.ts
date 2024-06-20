export declare type FilterWishlistType = {
    on_wishlist: {
        $in: string[];
    };
};

// type representing the filters for a query
export declare type FilterLocationType = {
    location_id: string | string[];
};