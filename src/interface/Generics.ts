export function checkInterface <T>( item : unknown, ...key : (keyof T)[]) : item is T {
    if (item && typeof item === 'object' && key.filter( keyItem => !(keyItem in item)).length === 0) {
      return true
    } else {
      return false
    }
  }
  