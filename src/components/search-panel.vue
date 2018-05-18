<template>
  <div class="panel">
    <logo-select @getIndex="getIndex"/>
        <el-autocomplete
          class="inline-input"
          v-model="inputValue"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容"
          :trigger-on-focus="false"
          @select="selectDataList"
          prefix-icon="el-icon-search"
        >
          <i slot="suffix" class="el-input__icon el-icon-close" v-show="inputValue" @click="clearInput"></i>
          <div slot-scope="{ item }">{{ item }}</div>
        </el-autocomplete>
        <el-button type="success" @click="search">搜索</el-button>
  </div>
</template>

<script type="text/javascript">

import logoSelect from './logo-select'

  export default {
    name:'select-panel',
    components:{
      'logo-select':logoSelect,
    },
    data:() => ({
      inputValue:'',
      selectIndex:0,
      myData:[],
      logoData: [ {
              name: '百度搜索',
              searchSrc: 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd='
          }, {
              name: '360搜索',
              searchSrc: 'https://www.so.com/s?ie=utf-8&shb=1&src=360sou_newhome&q='
          }, {
              name: '搜狗搜索',
              searchSrc: 'https://www.sogou.com/web?query='
          }]
        }),
    methods:{
      getIndex(index){
        console.log(index);
        this.selectIndex = index;
      },
      querySearch(queryString,cb){
        this.$http.jsonp('https://sug.so.360.cn/suggest?word=' + queryString + '&encodein=utf-8&encodeout=utf-8').then(res => {
                this.myData = res.data.s;
                cb(this.myData);
        }).catch(error => {console.log(error);})
      },
      search(){
        window.location.href = this.logoData[this.selectIndex].searchSrc + this.inputValue;
        this.inputValue = '';
      },
      clearInput(){
        this.inputValue = '';
      },
      selectDataList(item){
        this.inputValue = item;
      }
    }
  }
</script>

<style type="text/css">
.el-icon-close{
  cursor: pointer;
}
.el-input {
  width:500px;
}
.el-input__inner{
  height: 50px;
}
.el-button {
  width: 90px;
  height: 50px;
}
.panel{
  font-size: 0;
}
</style>