<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button type="primary" @click="submitValue">安妮</el-button>
    <el-select
      v-model="value"
      multiple
      collapse-tags
      filterable
      :filter-method="handleFilter"
      reserve-keyword
      @change="handleChange"
      style="margin-left: 20px;"
      placeholder="请选择"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: [],
      options: [
        {
          value: "",
          label: "全选"
        },
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        },
        {
          value: "选项6",
          label: "黄金糕"
        },
        {
          value: "选项7",
          label: "双皮奶"
        },
        {
          value: "选项8",
          label: "蚵仔煎"
        },
        {
          value: "选项9",
          label: "龙须面"
        },
        {
          value: "选项10",
          label: "北京烤鸭"
        }
      ],
      optionsCopy: [
        {
          value: "",
          label: "全选"
        },
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        },
        {
          value: "选项6",
          label: "黄金糕"
        },
        {
          value: "选项7",
          label: "双皮奶"
        },
        {
          value: "选项8",
          label: "蚵仔煎"
        },
        {
          value: "选项9",
          label: "龙须面"
        },
        {
          value: "选项10",
          label: "北京烤鸭"
        }
      ],
      cacheSelect: ""
    };
  },
  methods: {
    handleFilter(val) {
      if (val) {
        //val存在
        this.options = this.optionsCopy.filter(item => {
          if (
            !!~item.label.indexOf(val) ||
            !!~item.label.toUpperCase().indexOf(val.toUpperCase())
          ) {
            return true;
          }
        });
      } else {
        //val为空时，还原数组
        this.options = this.optionsCopy;
      }
    },
    handleChange(val) {
      // 全选
      if (val[val.length - 1] === "") {
        this.value = this.optionsCopy.map(v => v.value);
        this.cacheSelect = val[val.length - 1];
      } else if (
        // 取消全选
        !val.includes("") &&
        val.length === this.optionsCopy.length - 1 &&
        this.cacheSelect === ""
      ) {
        this.value = [];
        this.cacheSelect = ""; // 取消全选的标志，也是全选的标志
      } else {
        // 选择其他
        this.value = this.value.filter(v => v !== "");
        this.cacheSelect = val[val.length - 1];
        // 选择了所有的其他
        if (this.value.length === this.optionsCopy.length - 1) {
          this.value = this.optionsCopy.map(v => v.value);
          this.cacheSelect = ""; // 取消全选的标志，也是全选的标志
        }
      }
    },
    submitValue() {
      console.log(this.value);
    }
    // handleChange(val) {
    //   console.log(val);
    //   if (val[val.length - 1] === "") {
    //     console.log("全选");
    //     this.value = this.optionsCopy.map(v => v.value);
    //     this.cacheSelect = val[val.length - 1];
    //   } else if (
    //     !val.includes("") &&
    //     val.length === this.optionsCopy.length - 1 &&
    //     this.cacheSelect === ""
    //   ) {
    //     this.value = [];
    //     this.cacheSelect = ""; // 取消全选的标志，也是全选的标志
    //     console.log("取消全选");
    //   } else {
    //     console.log("选择其他");
    //     // console.log("111");
    //     this.value = this.value.filter(v => v !== "");
    //     this.cacheSelect = val[val.length - 1];
    //     if (this.value.length === this.optionsCopy.length - 1) {
    //       console.log("选择了所有的其他");
    //       this.value = this.optionsCopy.map(v => v.value);
    //       this.cacheSelect = ""; // 取消全选的标志，也是全选的标志
    //     }
    //   }
    // },
  }
};
</script>

<style lang="less">
.about {
  color: red;
}
</style>
