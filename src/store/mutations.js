const mutations = {
  addCount(state,oldInfo) {
    oldInfo.count += 1;
  },
  addGood(state,info){
    state.cartList.push(info);
  }
};

export default mutations;
