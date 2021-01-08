import { defineComponent, ref, reactive } from "vue";
import { useStore } from "vuex";
import "../user/login.scss";
import { message } from "ant-design-vue";
import router from "./../../router";
import { UserOutlined } from "@ant-design/icons-vue";

export default defineComponent({
  name: "App",
  setup() {
    const store = useStore();
    const formRef = ref<any>(null);
    const formData = reactive({
      userName: "",
      password: ""
    });

    const login = () => {
      formRef.value
        .validate()
        .then((res: object) => {
          //验证成功时跳转首页
          router.push({ path: "/" });
        })
        .catch((res: object) => {
          //验证失败提示错误信息
          message.error("用户名或密码未填");
        });
    };
    return () => (
      <>
        <div class="login-box">
          <a-form class="form" layout="inline" ref="formRef">
            <a-tabs>
              <a-tab-pane key="1" tab="管理员登录">
                <a-form-item label="用户名">
                  <a-input
                    v-model={formData.userName}
                    prefix={<UserOutlined />}
                    placeholder="用户名"
                    rules={[
                      { required: true, message: "Please input your username!" }
                    ]}
                  />
                </a-form-item>
                <a-form-item label="密码">
                  <a-input
                    v-model={formData.userName}
                    prefix={<UserOutlined />}
                    placeholder="密码"
                    rules={[
                      { required: true, message: "Please input your password!" }
                    ]}
                  />
                </a-form-item>
              </a-tab-pane>
              <a-tab-pane key="2" tab="用户登录" force-render>
                Content of Tab Pane 2
              </a-tab-pane>
            </a-tabs>
            <a-button class="btn btn-primary" onClick={login}>
              Login
            </a-button>
          </a-form>
        </div>
      </>
    );
  }
});
