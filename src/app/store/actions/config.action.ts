import {IConfig} from '../../models/config.interface';
import {Action} from '@ngrx/store';

export enum EConfigAction {
  getConfig = '[Config] Get Config',
  getConfigSuccess = '[Config] Get Config Success',
}

export class GetConfig implements Action {
  public readonly type = EConfigAction.getConfig;
}
export class GetConfigSuccess implements Action {
  public readonly type = EConfigAction.getConfigSuccess;
  constructor(public payload: IConfig) {}
}

export type ConfigAction = GetConfig | GetConfigSuccess;
