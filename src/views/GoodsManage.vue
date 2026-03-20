<template>
  <div class="goods-manage">
    <el-card>
      <h3>商品管理</h3>
      <el-divider></el-divider>
      
      <!-- 添加商品表单 -->
      <el-form :model="goodsForm" label-width="100px" inline @submit.prevent="addGoods">
        <el-form-item label="商品ID">
          <el-input v-model="goodsForm.goodsId" type="number" placeholder="请输入商品ID"></el-input>
        </el-form-item>
        <el-form-item label="商品名称">
          <el-input v-model="goodsForm.name" placeholder="请输入商品名称"></el-input>
        </el-form-item>
        <el-form-item label="商品价格(wei)">
          <el-input v-model="goodsForm.price" type="number" placeholder="请输入商品价格"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addGoods">添加商品</el-button>
        </el-form-item>
      </el-form>

      <el-divider></el-divider>

      <!-- 商品列表 -->
      <el-table :data="goodsList" border style="width: 100%; margin-top: 20px;">
        <el-table-column prop="goodsId" label="商品ID"></el-table-column>
        <el-table-column prop="name" label="商品名称"></el-table-column>
        <el-table-column prop="price" label="价格(wei)"></el-table-column>
        <el-table-column prop="productionTime" label="上架时间">
          <template slot-scope="scope">
            {{ formatTime(scope.row.productionTime) }}
          </template>
        </el-table-column>
        <el-table-column prop="sold" label="是否售出">
          <template slot-scope="scope">
            <el-tag :type="scope.row.sold ? 'danger' : 'success'">
              {{ scope.row.sold ? '已售出' : '未售出' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button 
              type="danger" 
              size="mini" 
              @click="removeGoods(scope.row.goodsId)"
              :disabled="scope.row.sold"
            >
              下架
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'GoodsManage',
  data() {
    return {
      goodsForm: {
        goodsId: '',
        name: '',
        price: ''
      },
      goodsList: [
        // 模拟数据
        {
          goodsId: 1,
          name: '有机大米',
          price: 1000000000000000000, // 1 ETH (wei)
          productionTime: 1710864000,
          sold: false
        },
        {
          goodsId: 2,
          name: '医用口罩',
          price: 500000000000000000, // 0.5 ETH (wei)
          productionTime: 1710950400,
          sold: true
        }
      ]
    }
  },
  methods: {
    // 格式化时间
    formatTime(timestamp) {
      return new Date(timestamp * 1000).toLocaleString()
    },
    // 添加商品
    addGoods() {
      if (!this.goodsForm.goodsId || !this.goodsForm.name || !this.goodsForm.price) {
        this.$message.error('请填写完整商品信息')
        return
      }
      // 模拟添加商品（实际需调用合约）
      this.goodsList.push({
        goodsId: this.goodsForm.goodsId,
        name: this.goodsForm.name,
        price: this.goodsForm.price,
        productionTime: Math.floor(Date.now() / 1000),
        sold: false
      })
      this.$message.success('商品添加成功')
      // 重置表单
      this.goodsForm = { goodsId: '', name: '', price: '' }
    },
    // 下架商品
    removeGoods(goodsId) {
      this.$confirm('确定要下架该商品吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 模拟下架商品（实际需调用合约）
        this.goodsList = this.goodsList.filter(item => item.goodsId !== goodsId)
        this.$message.success('商品下架成功')
      }).catch(() => {
        this.$message.info('已取消下架')
      })
    }
  }
}
</script>