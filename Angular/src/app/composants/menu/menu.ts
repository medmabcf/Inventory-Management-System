export interface Menu{
    id?:String;
    titre?:String;
    icon?:String;
    url?:String;
    expanded?: boolean;
    sousMenu?: Array<Menu>;
}