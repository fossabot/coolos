import type {Color} from './color';

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
    | T;

export type HsbaColorType = 'hue' | 'alpha';

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

export interface BasePickerPanelProps {
    value?: ColorGenInput;
    defaultValue?: ColorGenInput;
    layerPoints?: Color[];
    onChange?: (color: Color) => void
}