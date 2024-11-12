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
              <a-button type="primary"  @click="search">
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
      <a-table row-key="key" size="small" :bordered="{ cell: true }" :columns="columns" :data="data"
        :row-selection="rowSelection" v-model:selectedKeys="selectedKeys" :pagination="pagination"
        @page-change="pageChange" @page-size-change="pageSizeChange">
        <template #avatar="{ record }">
          <a-avatar auto-fix-font-size :size="30" :style="{ backgroundColor: '#14a9f8' }">
            {{ record.avatar }}
          </a-avatar>
        </template>
        <template #status="{ record }">
          <a-space>
            <a-tag size="small" color="green" v-if="record.status == 1">启用</a-tag>
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
    </div>
  </div>
</template>

<script setup lang="ts">
import * as api from '@/api/modules/login';
const formData = reactive({
  form: {
    name: "",
    phone: "", 
    status: "",
  },
  search: false
});
const selectedKeys = ref([]);
const rowSelection = reactive({
  type: "checkbox",
  showCheckedAll: true,
  onlyCurrent: false
});
const pagination = ref({ showPageSize: true, showTotal: true, current: 1, pageSize: 10, total: 10 });
const pageChange = (page: number) => {
  pagination.value.current = page;
};
const pageSizeChange = (pageSize: number) => {
  pagination.value.pageSize = pageSize;
};
const columns = [
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
    dataIndex: "status",
    align: "center",
    slotName: "status"
  },
  {
    title: "创建时间",
    dataIndex: "createTime"
  },
  {
    title: "操作",
    slotName: "optional",
    align: "center"
  }
];

const data = reactive([]);

const search = async function () {

  console.log('--')
  fetchData();
}

const fetchData = async function () {
  console.log('---',)
  let res = await api.Userlist({
    current: pagination.value.current,
    pageSize: pagination.value.pageSize,
    ...formData.form
  })
  console.log('--', res)
}

onMounted(() => {
  fetchData();
})
// 
// console.log('---', res)
</script>

<style lang="scss" scoped></style>
