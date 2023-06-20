export enum EmploymentType {
    'INTERN', 'REGULAR'
}
  
export interface recuitment{
    id	: number;
    title	:string;
    clubName : string;
    position : string;
    employmentType : EmploymentType;
}