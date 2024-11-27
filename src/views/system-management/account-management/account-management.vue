<template>
  <div class="snow-page">
    <div class="snow-inner-page">
      <a-form :model="formData.form" :label-col-props="{ span: 6 }" :wrapper-col-props="{ span: 18 }">
        <a-row :gutter="16">
          <a-col :span="6">
            <a-form-item field="name" label="姓名">
              <a-input v-model="formData.form.name" placeholder="请输入姓名" allow-clear />
            </a-form-item>
          </a-col>
          <a-col :span="6">
            <a-form-item field="phone" label="手机号">
              <a-input v-model="formData.form.phone" placeholder="请输入手机号" allow-clear />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item field="status" label="用户状态">
              <a-select v-model="formData.form.status" placeholder="请选择用户状态" allow-clear>
                <a-option value="1">停用</a-option>
                <a-option value="2">启用</a-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="6">
            <a-space>
              <a-button type="primary" @click="search">
                <template #icon>
                  <icon-search />
                </template>
                <template #default>查询</template>
              </a-button>
              <a-button>
                <template #icon>
                  <icon-refresh />
                </template>
                <template #default>重置</template>
              </a-button>
            </a-space>
          </a-col>
        </a-row>

      </a-form>

      <div class="tabar">
        <a-button type="primary" @click="showModalForm">
          添加账号
        </a-button>
      </div>
      <a-table row-key="key" size="small" :bordered="{ cell: true }" :columns="columns" :data="data.list"
        v-model:selectedKeys="selectedKeys" :pagination="pagination" @page-change="pageChange"
        @page-size-change="pageSizeChange">
        <template #avatar="{ record }">
          <a-avatar auto-fix-font-size :size="30" :style="{ backgroundColor: '#14a9f8' }">
            {{ record.avatar }}
          </a-avatar>
        </template>
        <template #status="{ record }">
          <a-space>
            <a-tag size="small" color="green" v-if="record.isValid == 1">启用</a-tag>
            <a-tag size="small" color="red" v-else>停用</a-tag>
          </a-space>
        </template>
        <template #optional>
          <a-space>
            <a-button size="mini" type="primary">详情</a-button>
            <a-button size="mini">修改</a-button>
            <a-popconfirm content="确定删除这条数据吗?" type="warning">
              <a-button size="mini" type="primary" status="danger">删除</a-button>
            </a-popconfirm>
          </a-space>
        </template>
      </a-table>

      <a-modal v-model:visible="visible" :align-center="false" :footer="false">
        <template #title> 添加账号</template>
        <a-form :model="formData.form" :label-col-props="{ span: 4 }" :wrapper-col-props="{ span: 16 }">
          <a-form-item field="name" label="姓名">
            <a-input v-model="modaldata.name" placeholder="请输入姓名" allow-clear />
          </a-form-item>
          <a-form-item field="phone" label="账号">
            <a-input v-model="modaldata.no" placeholder="请输入手机号" allow-clear />
          </a-form-item>
          <a-form-item field="phone" label="密码">
            <a-input v-model="modaldata.password" placeholder="请输入手机号" allow-clear type="password" />
          </a-form-item>

          <a-form-item field="phone" label="手机号">
            <a-input v-model="modaldata.phone" placeholder="请输入手机号" allow-clear />
          </a-form-item>
          <a-form-item field="age" label="年龄">
            <a-input v-model="modaldata.age" placeholder="请输入手机号" allow-clear />
          </a-form-item>
          <a-form-item field="sex" label="性别">
            <a-select v-model="modaldata.sex" placeholder="请选择性别" allow-clear>
              <a-option value="0">男</a-option>
              <a-option value="1">女</a-option>
            </a-select>
          </a-form-item>
          <a-form-item field="role" label="角色">

            <a-checkbox-group v-model="checkedList" @change="onChange">
              <a-checkbox value="admin">
                管理员
              </a-checkbox>
              <a-checkbox value="user">
                普通用户
              </a-checkbox>
            </a-checkbox-group>
            <!-- <a-select v-model="modaldata.role" placeholder="角色" allow-clear>
              <a-option value="0">停用</a-option>
              <a-option value="1">启用</a-option>
            </a-select> -->
          </a-form-item>
          <a-form-item field="status" label="用户状态">
            <a-select v-model="modaldata.isValid" placeholder="请选择用户状态" allow-clear>
              <a-option value="0">停用</a-option>
              <a-option value="1">启用</a-option>
            </a-select>
          </a-form-item>
          <a-col :span="6">
            <a-space>
              <a-button type="primary" @click="sumbitForm"> 添加 </a-button>
              <a-button> 取消 </a-button>
            </a-space>
          </a-col>
        </a-form>
      </a-modal>



    </div>
  </div>
</template>

<script setup lang="ts">
import * as api from '@/api/modules/login';
import { Message } from "@arco-design/web-vue";


const formData = reactive({
  form: {
    name: "",
    phone: "",
    status: "",
  },
  search: false
});
const checkedList = ref([]);
const visible = ref<boolean>(false)
const selectedKeys = ref([]);
const modaldata = ref({});
const pagination = ref({ showTotal: true, current: 1, pageSize: 10, total: 10 });
const pageChange = (page: number) => {
  pagination.value.current = page;

  fetchData(page, 10)
};
const pageSizeChange = (pageSize: number) => {
  pagination.value.pageSize = pageSize;
};
const columns = [
  {
    title: "账号",
    dataIndex: "no"
  },

  {
    title: "姓名",
    dataIndex: "name"
  },

  {
    title: "手机号",
    dataIndex: "phone"
  },

  {
    title: "状态",
    dataIndex: "isValid",
    align: "center",
    slotName: "status"
  },
  // {
  //   title: "创建时间",
  //   dataIndex: "createTime"
  // },
  {
    title: "操作",
    slotName: "optional",
    align: "center"
  }
];

const data = ref({});





onMounted(() => { fetchData(1, 10); })
const search = async function () {
  fetchData(1, 10);
}

const showModalForm = function () {
  visible.value = !visible.value
}

async function sumbitForm() {
  let res = await api.UserAdd(modaldata.value);
  let { code } = res;
  if (code == 200) {
    Message.success('操作成功')
    showModalForm();
    fetchData(1, 10);
  }
}

function onChange(value) {
  modaldata.value.role = value.join(',');
}

const fetchData = async function (current, pageSize) {
  let res = await api.Userlist({
    current: current ? current : pagination.value.current,
    pageSize: pageSize ? pageSize : pagination.value.pageSize,
    ...formData.form
  })

  data.value = res.data;
  pagination.value.total = res.data.total;

}
// 
// console.log('---', res)
</script>

<style lang="scss" scoped>
.tabar {
  margin: 10px 0px;
  text-align: right;
}
</style>
