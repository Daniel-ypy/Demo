import { defineComponent } from "vue";
import { useStore } from "vuex";
import { Form } from "ant-design-vue";

export default defineComponent({
  name: "App",
  components: {
    Form
  },
  setup() {
    const store = useStore();
    return () => (
      <>
        <div class="login-box">
          <a-form>
            <a-tabs>
              <a-tab-pane key="1" tab="Tab 1">
                Content of Tab Pane 1
              </a-tab-pane>
              <a-tab-pane key="2" tab="Tab 2" force-render>
                Content of Tab Pane 2
              </a-tab-pane>
            </a-tabs>
          </a-form>
        </div>
      </>
    );
  }
});
