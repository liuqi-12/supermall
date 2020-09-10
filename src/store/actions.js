const actions = {
    addCart(context, info) {
        // console.log(context.state.cartList)
        // context相当于this.$store
        console.log(info);
      return new Promise((resolve, reject) => {
          // 1.查看是否添加过
          const oldInfo = context.state.cartList.find(item => item.iid === info.iid);
    
          // 2.+1或者新添加
          if (oldInfo) {
            context.commit('addCount',oldInfo)
           
            resolve("数量+1");
          } else {
            info.count = 1;
            info.checked = true;
            context.commit('addGood',info)
            
            resolve("添加商品成功");
          }
        });
      }
}

export default actions

