const DashboardModel = {
  namespace: 'suspense',

  state: {
    name: 'suspense_name',
  },

  effects: {
    // *getProvinceList({ payload, callback }, { call, put }) {
    //   const response = yield call(getProvinceList, payload);
    //   if (callback) callback(response);
    // }
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    }
  },

  subscriptions: {},
};
export default DashboardModel;
