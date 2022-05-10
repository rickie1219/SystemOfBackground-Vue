<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
export default {
  name: "VueTestModel",
  methods: {
    load(type) {
      console.log('type = ' + type);
      var url = "http://localhost:8085/user/page?pageNum=";
      if (type == 0) {
        url = url + this.pageNum + "&pageSize=" + this.pageSize;
      } else {
        var keyType = '';
        if (type == 1) {
          keyType = 'username';
        } else if (type == 2) {
          keyType = 'email';
        } else {
          keyType = 'address';
        }
        url = url + this.pageNum + "&pageSize=" + this.pageSize + "&key=" + this.key + "&type=" + keyType;
      }
      console.log("url = " + url);

      this.request(url).then(res => {
        console.log(res)
      })

      // fetch(url)
      //     .then(res => res.json()).then(result => {
      //   console.log(result);
      //   this.tableData = result.data;
      //   this.total = result.total;
      // });
    }
  }
}
</script>

<style scoped>

</style>