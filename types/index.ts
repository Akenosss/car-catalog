import {MouseEventHandler} from "react";

export interface CustomButtonProps {
    title: String;
    containerStyles?: String;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}

export interface SearchManufacturerProps {
    manufacturer: String,
    setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
    city_mpg: number;
    class: String;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: String;
    fuel_type: String;
    highway_mpg: number;
    make: String;
    model: String;
    transmission: String;
}