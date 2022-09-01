import { ID, Email } from 'types/utils'

export interface User {

  /**
   * Uniq user uuid
   * @type {ID}
   */
  id: ID

  /**
   * Uniq user email
   * @type {Email}
   */
  email: Email

}
