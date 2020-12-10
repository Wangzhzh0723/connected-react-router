//  此action告诉仓库要调用历史对象上的方法
export const CALL_HISTORY_METHOD = "@@CALL_HISTORY_METHOD";

/**
 * ActionCreator
 * @param {*} path 要跳转的路径
 */
export default function push(payload) {
  return {
    type: CALL_HISTORY_METHOD,
    payload
  };
}
