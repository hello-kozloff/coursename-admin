export type UseLoadingReturn = {
  isLoading: boolean
  setLoading: (value: (((prevState: boolean) => boolean) | boolean)) => void
}
