export default {
    // model唯一命名空间
    namespace: 'example',   

    // 初始化状态数据，获取数据。
    state: {},             

    // 指订阅，用于订阅一个数据源，然后根据需要 dispatch 相应的 action
    // 监听数据
    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line

        },
    },

    // 指逻辑业务，处理接口交互返回。 Effects(yield ，call，put，select)
    // yield 关键字：yield 只把异步逻辑通过同步的方式组织起来。
    // put：用于触发 action，比如触发reducer或者effects的函数方法 。
    // Call：用于调用异步逻辑，支持 promise 。
    // Select：用于从 state 里获取数据。
    // 接收数据
    effects: {
        *fetch({ payload }, { call, put }) {  // eslint-disable-line
            yield put({ type: 'save' });
        },
    },

    // 指函数，接受 state 和 action，返回老的或新的 state ,即(state, action) => state。
    // 处理数据
    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },

};
