import store from '../store'

var checkAge = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('用户名不能为空'));
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error('请输入正确的用户名'));
    } else {
      callback();
    }
  }, 500);
};
var validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入密码'));
  } else {
    if ($store.login.ruleForm2.checkPass !== '') {
      $refs.ruleForm2.validateField('checkPass');
    }
    callback();
  }
};

export default {
  namespaced: true,
  state: {
    ruleForm2: {
      pass: '',
      checkPass: '',
      age: ''
    },
    rules2: {
      pass: [{
        validator: validatePass,
        trigger: 'blur'
      }],
      age: [{
        validator: checkAge,
        trigger: 'blur'
      }]
    }
  },
  getters: {
    // ruleForm2: state => state.ruleForm2,
    // rules2: state => state.rules2,
  },
  mutations: {
    submitForm(formName) {
      $refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      $refs[formName].resetFields();
    }
  },
  actions: {}
}
