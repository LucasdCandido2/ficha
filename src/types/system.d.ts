export interface RPGSystem {
    id: string;
    name: string;
    version: string;
    title: string;
    fields: FieldConfig[];
    theme: {
        primary:string;
        secondary: string;
    };
    calculations?: Record<string, (data: any) => any>;
    validationRules?: Record<string, (value: any) => boolean>;
}

export interface FieldConfig {
    type: 'text' | 'number' | 'group' | 'select' | 'checkbox' | 'textarea' | 'file' | 'date';
    name: string;
    label: string;
    fields?: FieldConfig[];
    options?: string[];
    min?: number;
    max?: number;
}