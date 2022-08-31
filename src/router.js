import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import Foods from "./components/foods.vue";
import Food from "./components/food.vue";
import form from "./components/form.vue";
import signup from "./components/signup.vue";
import sendCode from "./components/code.vue";

const routes = [
	{ path: "/", component: Home },
	{ path: "/foods", component: Foods },
	{ path: "/food/:food", component: Food },
	{
		path: "/user",
		component: form,
		children: [
			{ path: "signup", component: signup },
			{ path: "signup/code", component: sendCode },
		],
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
