export interface JournalItem {
    $key?: string;
    item_id: number;
    itemName: string;
    brandName: string;
    calories: number;
    fat: number;
    protein: number;
    carbs: number;
    noServings: number;
    saturated_fat: number;
    trans_fatty_acid: number;
    polyunsaturated_fat: number;
    monounsaturated_fat: number;
    cholesterol: number;
    sodium: number;
    dietary_fiber: number;
    sugars: number;
    vitamin_a: number;
    vitamin_c: number;
    calcium: number;
    iron: number;
    servings_per_container: number;
    serving_size_qty: number;
    serving_size_unit: number;
    serving_weight_grams: number;



    defaultServingSize: number;
    selectedServingSize: number;
    selectedServingType: string;


}

export interface GoalMacros {
    fat: number;
    protein: number;
    carbs: number;
    saturated_fat: number;
    trans_fatty_acid: number;
    polyunsaturated_fat: number;
    monounsaturated_fat: number;
    cholesterol: number;
    sodium: number;
    dietary_fiber: number;
    sugars: number;
    vitamin_a: number;
    vitamin_c: number;
    calcium: number;
    iron: number;
 

}

export interface RemaiingMacros {
    fat: number;
    protein: number;
    carbs: number;
    saturated_fat: number;
    trans_fatty_acid: number;
    polyunsaturated_fat: number;
    monounsaturated_fat: number;
    cholesterol: number;
    sodium: number;
    dietary_fiber: number;
    sugars: number;
    vitamin_a: number;
    vitamin_c: number;
    calcium: number;
    iron: number;

}