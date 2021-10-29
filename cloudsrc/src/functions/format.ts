import { formatWithOptions } from 'util'

export default (object: any) => {
  return formatWithOptions({ depth: 6 }, object)
}
