<template>
  <div class="withdraw">
    <el-card>
      <h3>提现管理</h3>
      <el-divider></el-divider>

      <el-row :gutter="20">
        <el-col :span="8">
          <el-card>
            <h4>合约余额</h4>
            <p style="font-size: 24px; color: #409eff;">{{ contractBalance }} wei</p>
            <p>({{ contractBalance / 1000000000000000000 }} ETH)</p>
            <el-button 
              type="danger" 
              size="large" 
              @click="withdrawAll"
              :disabled="contractBalance <= 0"
              style="margin-top: 20px;"
            >
              全部提现
            </el-button>
          </el-card>
        </el-col>
        <el-col :span="16">
          <el-card>
            <h4>提现记录</h4>
            <el-table :data="withdrawList" border style="width: 100%;">
              <el-table-column prop="time" label="提现时间"></el-table-column>
              <el-table-column prop="amount" label="提现金额(wei)">
                <template slot-scope="scope">
                  {{ scope.row.amount }} ({{ scope.row.amount / 1000000000000000000 }} ETH)
                </template>
              </el-table-column>
              <el-table-column prop="status" label="状态">
                <template slot-scope="scope">
                  <el-tag :type="scope.row.status === 'success' ? 'success' : 'danger'">
                    {{ scope.row.status === 'success' ? '成功' : '失败' }}
                  </el-tag>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'WithDraw',
  data() {
    return {
      contractBalance: 3500000000000000000, // 模拟合约余额（3.5 ETH）
      withdrawList: [
        // 模拟提现记录
        {
          time: '2026-03-15 10:30:00',
          amount: 1000000000000000000,
          status: 'success'
        },
        {
          time: '2026-03-10 14:20:00',
          amount: 500000000000000000,
          status: 'success'
        }
      ]
    }
  },
  methods: {
    // 全部提现
    withdrawAll() {
      this.$confirm('确定要提现合约全部余额吗？', '提现确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 模拟提现（实际需调用合约的 withdraw 方法）
        const amount = this.contractBalance
        this.withdrawList.unshift({
          time: new Date().toLocaleString(),
          amount: amount,
          status: 'success'
        })
        this.contractBalance = 0
        this.$message.success('提现成功！')
      }).catch(() => {
        this.$message.info('已取消提现')
      })
    }
  }
}
</script>