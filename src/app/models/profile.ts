import { Injectable } from '@angular/core';

import { Adapter} from '../utils/adapter';

export class Profile {
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public state?: string,
        public dateOfBirth?: string,
        public phoneNumber?: string,
        public createdAt?: string
    ){}


}

@Injectable({
    providedIn: 'root'
})
export class ProfileAdapter implements Adapter<Profile> {
    adapt(item: any): Profile {
        return new Profile(
            item.id,
            item.fullName,
            item.email,
            item.state,
            item.dateOfBirth,
            item.phoneNumber,
            item.createdAt
        )
    }
}