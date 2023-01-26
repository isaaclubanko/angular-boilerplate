import { Injectable } from '@angular/core';

import { Adapter} from './utils/adapter';

export class FormField {
    constructor(
        public name: string,
        public group: {
            key: string, 
            name: string, 
            type: string, 
            refreshRequirementsOnChange: boolean,
            displayFormat?: string,
            example?: string,
            minLength?: number, 
            maxLength?: number,
            validationRegexp?: string,
            validationAsync?: string,
            valuesAllowed?: {name: string}[]
        }[]
    ){}

}

export class RequirementGroup {
    constructor(
        public type: string,
        public title: string,
        public fields: FormField[],
        public usageInfo?: string

    ){}
}

// @Injectable({
//     providedIn: 'root'
// })
// export class ProfileAdapter implements Adapter<Profile> {
//     adapt(item: any): Profile {
//         return new Profile(
//             item.id,
//             item.fullName,
//             item.email,
//             item.state,
//             item.dateOfBirth,
//             item.phoneNumber,
//             item.createdAt
//         )
//     }