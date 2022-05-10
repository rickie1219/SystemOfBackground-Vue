<template>
  <div class="user-container">
    <el-main>
      <div style="padding: 10px 0">
        <el-input
            style="width: 200px"
            placeholder="请输入名称"
            suffix-icon="el-icon-search"
            class="ml-5" v-model="usernameText"
            @click="handleSearch(1)">
        </el-input>
        <el-input
            style="width: 200px"
            placeholder="请输入邮箱"
            suffix-icon="el-icon-message"
            class="ml-5"
            v-model="emailText"
            @click="handleSearch(2)">
        </el-input>
        <el-input
            style="width: 200px"
            placeholder="请输入地址"
            suffix-icon="el-icon-position"
            class="ml-5"
            v-model="addressText"
            @click="handleSearch(3)">
        </el-input>
        <el-button class="ml-5" type="primary" @click="loadPage">搜索</el-button>
        <el-button class="ml-5" type="warning" @click="resetPage">重置</el-button>
      </div>

      <div style="margin:0 0 10px 0">
        <el-button
            type="primary"
            class="el-icon-circle-plus-outline"
            @click="handleAdd">
          新增
        </el-button>
        <el-button
            type="danger"
            class="el-icon-remove-outline"
            @click="handleDeleteAll">
          批量删除
        </el-button>
        <el-button
            type="primary"
            class="el-icon-bottom"
            @click="importData">
          导入
        </el-button>
        <el-button
            type="primary"
            class="el-icon-top"
            @click="exportData">
          导出
        </el-button>
      </div>

      <el-table :data="tableData" border stripe header-row-class-name="headerClass">
        <el-table-column prop="id" label="ID" width="80">
        </el-table-column>
        <el-table-column prop="username" label="用户名" width="140">
        </el-table-column>
        <el-table-column prop="nickname" label="昵称" width="120">
        </el-table-column>
        <el-table-column prop="email" label="邮箱" width="120">
        </el-table-column>
        <el-table-column prop="phone" label="电话" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="success" class="el-icon-edit-outline" @click="handleEdit(scope.$index, tableData)">编辑</el-button>
            <el-popconfirm
                confirm-button-text="确定"
                cancel-button-text="取消"
                icon-color="red"
                title="确定要删除这条数据吗？"
                @confirm="confirmEvent(scope.$index, tableData)"
                @cancel="cancelEvent"
            >
              <template #reference>
                <el-button type="danger" class="el-icon-delete ml-5">删除</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageNum"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
      </el-pagination>

      <!-- 添加用户的弹窗 -->
      <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input v-model="form.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="昵称" :label-width="formLabelWidth">
            <el-input v-model="form.nickname" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" :label-width="formLabelWidth">
            <el-input v-model="form.email" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="电话" :label-width="formLabelWidth">
            <el-input v-model="form.phone" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="地址" :label-width="formLabelWidth">
            <el-input v-model="form.address" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleAddSave">确 定</el-button>
        </div>
      </el-dialog>
    </el-main>
  </div>
</template>

<script>
import request from "../utils/request";

export default {
  name: "User",
  data() {
    return {
      tableData: [],
      total: 0,
      pageNum: 1,
      pageSize: 5,
      usernameText: '',
      emailText: '',
      addressText: '',
      key: '',
      dialogTitle: '',
      form: {
        username: '',
        nickname: '',
        email: '',
        phone: '',
        address: ''
      },
      dialogFormVisible: false,
      formLabelWidth: '120px',
      isCollapse: false,
      collapseBtnClass: 'el-icon-s-fold',
      sideWith: 200,
      logoTextShow: true
    }
  },
  created() {
    this.loadPage();
  },
  methods: {
    loadPage() {
      var urlPage = '/user/mybatisPlusPage';
      this.request(urlPage, {
        params: {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          username: this.usernameText,
          email: this.emailText,
          address: this.addressText
        }
      }).then(res => {
        console.log(res)
        this.tableData = res.records;
        this.total = res.total;
      })
    },
    resetPage() {
      this.usernameText = "";
      this.emailText = "";
      this.addressText = "";
      this.loadPage();
    },
    handleSearch(type) {
      if (type == 1) {
        this.key = this.usernameText;
      } else if (type == 2) {
        this.key = this.emailText;
      } else {
        this.key = this.addressText;
      }
      this.load(type);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
      this.loadPage(0);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.pageNum = val;
      this.loadPage(0);
    },
    handleAdd() {
      this.dialogTitle = '添加用户'
      this.form = {}
      this.dialogFormVisible = true
      console.log('新增')
    },
    handleAddSave() {
      console.log('保存')
      request(
          '/user/saveAndUpdate', {
            data: this.form,
            method: 'post'
          }).then(res => {
            if (res) {
              this.$message.success("保存成功！")
              this.dialogFormVisible = false
              this.form = {}
              this.loadPage()
            } else {
              this.$message.error("保存失败")
            }
      })
    },
    handleDeleteAll() {
      console.log('批量删除')
    },
    importData() {
      console.log('导入')
    },
    exportData() {
      console.log('导出')
    },
    handleEdit(index, tableData) {
      console.log('编辑')
      console.log('删除的ID 是 = ' + index + "  获取到的 tableData ID = " + tableData[index].id)
      this.dialogTitle = '编辑用户'
      this.form = tableData[index]
      this.dialogFormVisible = true
    },
    handleDelete(id) {
      console.log('删除')
    },
    confirmEvent(index, tableData) {
      console.log('删除的ID 是 = ' + index + "  获取到的 tableData ID = " + tableData[index].id)
      request('/user/tag/' + tableData[index].id, {
        method: 'delete'
      }).then(res => {
        if (res) {
          this.$message.success("删除成功！")
          this.loadPage()
        } else {
          this.$message.error("删除失败")
        }
      })

      // this.request.delete('/user' + id).then(res => {
      //   if (res) {
      //     this.$message.success("删除成功！")
      //     this.dialogFormVisible = false
      //     this.loadPage()
      //   } else {
      //     this.$message.error("删除失败")
      //   }
      // })
    },
    cancelEvent() {
      console.log('取消')
      console.log("======== 取消 操作 = haobuhao wan ")
    }
  }
}
</script>

<style scoped>

/*.el-button--text {*/
/*  margin-right: 15px;*/
/*}*/

.el-input {
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>