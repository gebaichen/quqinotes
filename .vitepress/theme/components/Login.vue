<template>
  <el-row class="login-container">
    <el-col :lg="16" :md="12" class="left">
      <div>
        <div>Quqi Notes</div>
        <div></div>
      </div>
    </el-col>
    <el-col :lg="8" :md="12" class="right">
      <h2 class="title" style="color: #3c3c43">欢迎回来</h2>
      <div>
        <span class="line"></span>
        <span>账号密码登录</span>
        <span class="line"></span>
      </div>
      <el-form class="w-[250px]" ref="formRef" v-bind:model="form" :rules="rules">
        <el-form-item prop="mobile">
          <el-input placeholder="请输入手机号" v-model="form.mobile">
            <template #prefix>
              <el-icon>
                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728="">
                  <path fill="currentColor"
                        d="M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0z"></path>
                </svg>
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" show-password placeholder="请输入密码" v-model="form.password">
            <template #prefix>
              <el-icon>
                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728="">
                  <path fill="currentColor"
                        d="M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32H224zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96z"></path>
                  <path fill="currentColor"
                        d="M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32zm192-160v-64a192 192 0 1 0-384 0v64h384zM512 64a256 256 0 0 1 256 256v128H256V320A256 256 0 0 1 512 64z"></path>
                </svg>
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="记住账号">
          <el-switch v-model="remember"/>
        </el-form-item>
        <el-form-item>
          <el-button round class="w-[250px]" type="primary" @click="onSubmit">登 录</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script setup>
import {reactive, ref, watch, onMounted} from 'vue';
import {ElNotification} from 'element-plus';
import {useData} from 'vitepress';

const {theme} = useData();
const localUrl = theme.value.localUrl;
const loginUrl = localUrl + '/api/v2/notes/login';
// 定义登录表单的数据
const form = reactive({
  mobile: '',
  password: '',
});

// 表单的引用对象
const formRef = ref(null);

// 校验规则
const rules = {
  mobile: [
    {
      required: true,
      message: '用户名不能为空',
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur',
    },
  ],
};
// 点击登录的事件
// localStorage.setItem('jwt', 'Bearer xasdjssalsdfsadfasdf')
// location.href = '/'
// 点击登录的事件
const onSubmit = () => {
  // 实现校验
  formRef.value.validate((valid) => {
    if (!valid) {
      return false;
    }
    fetch(loginUrl,
        {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(form),
        },
    ).then(response => response.json()).then(ret => {
      console.log(ret);
      if (ret.code === 0) {
        ElNotification({
          title: '成功',
          message: '登录成功，2s 之后进行跳转',
          type: 'success',
        });
        setTimeout(function() {
          localStorage.setItem('jwt', ret.access_token);
          // console.log(ret.data);
          localStorage.setItem('user', JSON.stringify(ret.data));
          location.href = ret?.next ? ret.next : '/';
        }, 2000);
      } else {
        ElNotification({
          title: '失败',
          message: ret.message,
          type: 'error',
        });
      }
    }).catch(error => {
      ElNotification({
        title: '错误',
        message: '网络有问题或者是服务器出问题，请联系管理员',
        type: 'error',
      });
    });
  });
};

const remember = ref(true);
watch(form, (old) => {
  if (remember.value) {
    localStorage.setItem('info', JSON.stringify(form));
  } else {
    localStorage.removeItem('info');
  }
});

onMounted(() => {
  Object.assign(form, JSON.parse(localStorage.getItem('info') || '{}'));
});
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  background-color: var(--vp-c-brand-light);
}

.login-container .left,
.login-container .right {
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-container .right {
  background-color: #ffffff;
  flex-direction: column;
}

.left > div > div:first-child {
  color: #ffffff;
  font-size: 3rem;
  line-height: 1;
  font-weight: 700;

}

.left > div > div:last-child {
  color: #E5E7EB;
  font-size: 0.875rem;
}

.right .title {
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
}

.right > div {
  display: flex;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  color: #D1D5DB;
  justify-content: center;
  align-items: center;
}

.right .line {
  width: 4rem;
  height: 1px;
  background-color: #edf2f7;
}
</style>