import {IUser} from '../../models/user.interface';
import {Action} from '@ngrx/store';

export enum EUserAction {
  getUsers = '[User] Get Users',
  getUser = '[User] Get User',
  getUsersSuccess = '[User] Get Users Success',
  getUserSuccess = '[User] Get User Success',
}

export class GetUsers implements Action {
  public readonly type = EUserAction.getUsers;
}
export class GetUsersSuccess implements Action {
  public readonly type = EUserAction.getUsersSuccess;
  constructor(public payload: IUser[]) {}
}
export class GetUser implements Action {
  public readonly type = EUserAction.getUser;
  constructor(public payload: number) {}
}
export class GetUserSuccess implements Action {
  public readonly type = EUserAction.getUserSuccess;
  constructor(public payload: IUser) {}
}

export type UserAction = GetUser | GetUsers | GetUserSuccess | GetUsersSuccess;
