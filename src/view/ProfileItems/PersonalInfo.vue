<template>
  <div class="container-personal-info">
    <div class="user-avatar">
      <el-popconfirm
        confirmButtonText="Confirm"
        cancelButtonText="Cancel"
        hideIcon
        title="Upload new avatar."
        @onConfirm="changeAvatar"
      >
        <img :src="initAvatarUrl" alt="error" slot="reference">
      </el-popconfirm>
    </div>
    <div class="user-info">
      <el-form ref="formRef" :model="formData" :rules="rules">
        <el-form-item v-for="item in formSchema" :key="item.field"
          :label="item.label" :prop="item.field" label-position="top">
          <FormItem
            @input="modifyForm"
            :renderData="{ schema: item, form: formData }"
          ></FormItem>
        </el-form-item>
      </el-form>
      <div class="buttons">
        <el-button>Cancel</el-button>
        <el-button>Submit</el-button>
      </div>
    </div>

    <!-- 上传用户头像的对话框 -->
    <el-dialog :visible.sync="showDialog" title="Select Profile Photo">
      <el-upload
        class="avatar-uploader"
        action="''"
        :http-request="uploadAvatar"
        :show-file-list="false"
        :before-upload="beforeAvatarUpload"
        accept="image/jpeg,image/jpg,image/png">
        <img v-if="newAvatarUrl" :src="newAvatarUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <div class="avatar-submit-button">
        <el-button @click="cancelAvatar">Cancel</el-button>
        <el-button type="success"
          :disabled="disableAvatarSubmit" @click="submitAvatar">Submit</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import FormItem from '../../components/formItem'
import { client } from '../../plugins/aliOSS'

export default {
  data () {
    return {
      showDialog: false,
      initAvatarUrl: '',
      newAvatarUrl: '',
      avatarFileName: '',
      disableAvatarSubmit: true,

      formData: {
        name: '',
        phone: '',
        desc: ''
      },
      formSchema: [
        { label: 'Name', field: 'name', type: 'input' },
        { label: 'Telephone', field: 'phone', type: 'input' },
        {
          label: 'Description',
          field: 'desc',
          type: 'input',
          props: {
            type: 'textarea'
          },
          attrs: {
            rows: 5
          }
        }
      ],
      rules: {

      }
    }
  },
  components: {
    FormItem
  },
  methods: {
    modifyForm (schema, value) {
      this.$set(this.formData, schema.field, value)
    },
    changeAvatar () {
      this.showDialog = true
    },
    beforeAvatarUpload (item) {
      const isIMAGE = item.type === 'image/jpeg' || 'image/jpg' || 'image/png'
      return isIMAGE
    },
    uploadAvatar (item) {
      const originName = item.file.name
      const type = originName.substring(originName.lastIndexOf('.'))
      const fileName = new Date().getTime() + type

      client().multipartUpload(fileName, item.file).then(res => {
        console.log(res)
        if (res.res.status === 200) {
          this.newAvatarUrl = 'https://cloudmarkdown.oss-cn-beijing.aliyuncs.com/' +
            fileName
          this.disableAvatarSubmit = false
        }
      }).catch(err => {
        alert(err)
      })
    },

    cancelAvatar () {
      this.newAvatarUrl = ''
      this.disableAvatarSubmit = true
      this.showDialog = false
    },
    submitAvatar () {
      this.initAvatarUrl = this.newAvatarUrl
      this.cancelAvatar()
    }
  },
  created () {
    this.initAvatarUrl = 'https://cloudmarkdown.oss-cn-beijing.aliyuncs.com/test.jpg'
  }
}
</script>

<style lang="less" scoped>
.container-personal-info {
  display: flex;
  flex-direction: row;

  padding: 50px 100px;
  width: 100%;
}

.user-avatar {
  width: 120px;
  padding: 20px 10px 10px 0;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
}

.user-info {
  padding: 0 20px;
  width: 60%;
}

.buttons {
  float: right;
  margin-top: 20px;
}

.avatar-uploader {
  /deep/ .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  /deep/ .el-upload:hover {
    border-color: #409EFF;
  }
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.avatar-submit-button {
  margin-top: -20px;
  float: right;
}
</style>
