import { defineComponent } from "vue";
import { useStore } from "vuex";
import HelloWorld from "@/components/HelloWorld"; // @ is an alias to /src

export default defineComponent({
  name: "App",
  setup() {
    const store = useStore();
    return () => (
      <>
        <div class="home">
          <img alt="Vue logo" src="../assets/logo.png" />
          <a-button onClick={() => alert("test")} type="primary">
            test
          </a-button>
          <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
          <h1>{store.state.title}</h1>
        </div>
      </>
    );
  }
});
