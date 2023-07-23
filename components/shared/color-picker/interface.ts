import type {Color} from './color';
import {HSL, HSLA, HSV, HSVA} from "@ctrl/tinycolor/dist/interfaces";

export interface HSB {
    h: number | string;
    s: number | string;
    b: number | string;
}

export interface RGB {
    r: number | string;
    g: number | string;
    b: number | string;
}

export interface HSBA extends HSB {
    a: number;
}

export interface RGBA extends RGB {
    a: number;
}

export type ColorGenInput<T = Color> =
    | string
    | number
    | RGB
    | RGBA
    | HSB
    | HSBA
    | HSL | HSLA | HSV | HSVA
    | T;

export type TransformOffset = {
    x: number;
    y: number;
};

export interface BaseColorAtomProps {
    className?: string;
    initOffset?: TransformOffset;
    value?: ColorGenInput;
    defaultValue?: ColorGenInput;
    layerPoints?: Color[];
    disabled?: boolean;
    onChange?: (color: Color) => void
}

export enum ColorAtomType {
    Hex = 'HEX',
    Hue = 'hue',
    Saturation = 'saturation',
    Brightness = 'brightness',
    Alpha = 'alpha',
    Luminance = 'luminance',
    Red = 'red',
    Green = 'green',
    Blue = 'blue',
    Cyan = 'cyan',
    Magenta = 'magenta',
    Yellow = 'yellow',
    Key = 'key',
    GreenRed = 'green-red',
    BlueYellow = 'blue-yellow',
}

export interface CommonPickerPanelProps {
    value?: ColorGenInput;
    defaultValue?: ColorGenInput;
    layerPoints?: Color[];
    onChange?: (color: Color, type: ColorAtomType) => void
}