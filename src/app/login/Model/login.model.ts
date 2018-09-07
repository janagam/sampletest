import { Cartobject, WishlistObj } from '../../gw-ltst-prdcts/Model/latestprodutmodel';

export class Login {
    username: string;
    password: string;
}
export class User {
    UserName: string;
    Password: string;
    Email: string;
    FirstName: string;
    LastName: string;
}
export class UserCartData {
    userCartList: Cartobject[];
    userWishlist: WishlistObj[];
    customerdata: UserDetail;
}

export class UserDetail {
    firstname: string;
    userName: string;
    userId: number;
    access_token: string;

}

