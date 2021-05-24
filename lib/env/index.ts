/* eslint-disable prettier/prettier */
import { registerInt, registerString } from "./register"

// #region Globals
const NODE_ENV = registerString('NODE_ENV')
const IS_PROD = NODE_ENV?.toLowerCase() === 'production'
export const IS_DEV = !IS_PROD

export const IS_SERVER = typeof window === 'undefined'
// #endregion

// #region Application
export const CONFIG_PATH = registerString('CONFIG_PATH') ?? "./config.json"
// #endregion

// #region Redis
export const REDIS_URL = registerString('REDIS_URL')
// #endregion
