export const SET_LOADING = "SET_LOADING";

export function setLoading(bool) {
  return {
    type: SET_LOADING,
    bool,
  };
}
