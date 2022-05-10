<template>
  <div class="about">
    Scroll down to see the bottom-right button.
    <!-- 设置返回顶部的控件 -->
    <el-backtop target=".about" :bottom="100" visibility-height="300">
      <div
          style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
      >
        UP
      </div>
    </el-backtop>

    <h1>This is an about page</h1>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <h3>关于我们的页面</h3>
    <img src="@/assets/logo.png" style="width: 1000px"/>
    <h1>jiejie结尾</h1>
  </div>
</template>

<style>
.about {
  height: 100%;
  /*隐藏横向滚动条后，无法横向滚动，超出屏幕的内容无法显示*/
  /*overflow-x: hidden; */
  /*必须设置纵向滚动，不然返回顶部的按钮不显示*/
  overflow-y: scroll;
}
</style>
