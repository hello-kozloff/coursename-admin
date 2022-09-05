export interface Profile {

  /**
   * Is the teacher profile
   * @type {boolean}
   * @default {false}
   */
  isTeacher: boolean

  /**
   * First name
   * @type {string}
   */
  firstName: string

  /**
   * Last name
   * @type {string}
   */
  lastName: string

  /**
   * Path to avatar
   * @type {string | null}
   * @default {null}
   */
  avatarUrl: string | null

}
