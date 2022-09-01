export interface Profile {

  /**
   * Is the teacher profile
   * @type {boolean}
   * @default {false}
   */
  isTeacher: boolean

  /**
   * First name
   * @type {string | null}
   * @default {null}
   */
  firstName: string | null

  /**
   * Last name
   * @type {string | null}
   * @default {null}
   */
  lastName: string | null

  /**
   * Path to avatar
   * @type {string | null}
   * @default {null}
   */
  avatarUrl: string | null

}
