import {ChangeApplicationName} from './actions'

export function changeName(name) {
  return {type: ChangeApplicationName, name}
}