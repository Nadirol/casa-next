export interface IProduct {
    id: number,
    title_vi: string,
    title_en: string,
    slug: string,
    image_url: string[],
    features_vi: IFeature[] | null,
    features_en: IFeature[] | null,
    specs_vi: ISpec[] | null,
    specs_en: ISpec[] | null,
    description_vi: string[] | null,
    description_en: string[] | null
}

export interface IFeature {
    icon: string,
    feature: string
}

export interface ISpec {
    key: string,
    value: string
}