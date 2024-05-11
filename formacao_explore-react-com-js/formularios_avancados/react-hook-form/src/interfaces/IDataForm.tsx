export interface IDataForm {
    id?: string,
    name: string,
    email: string,
    password: string,
    passwordConfirmation?: string,
    profession: string,
    privacyTerms?: boolean
}