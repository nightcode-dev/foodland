<template>
	<div class="p-8">
		<div
			class="flex flex-wrap flex-col-reverse lg:flex-row justify-center w-full"
		>
			<div
				class="lg:w-1/3 w-full bg-base-200 shadow-xl lg:mr-4 mt-4 lg:mt-0 p-4 flex flex-col items-center h-min"
			>
				<div class="flex flex-wrap flex-col items-center" v-show="signup">
					<h1 class="text-xl text-orange-500 font-Bes mb-2">ثبت نام</h1>
					<p class="font-Les text-center">
						برای خرید از فودلند باید حتما اینجا اکانت داشته باشی تا پیدا کردن
						ادرس و اطلاعات و ارسال راحت باشه و اذیت نشی
					</p>
					<p class="font-Bes text-center mt-4">
						اکانت داری؟
						<router-link class="text-orange-400" to="/user/signin"
							>وارد شو</router-link
						>
					</p>
				</div>
				<div class="flex flex-wrap flex-col items-center" v-show="signin">
					<h1 class="text-xl text-orange-500 font-Bes mb-2">ورود</h1>
					<p class="font-Les text-center">
						برای خرید از فودلند باید حتما وارد اکانتت بشی تا بتونیم بفهمیم کی
						هستی
					</p>
					<p class="font-Bes text-center mt-4">
						اکانت نداری؟
						<router-link class="text-orange-400" to="/user/signup"
							>ثبت نام کن</router-link
						>
					</p>
				</div>
				<div class="flex flex-wrap flex-col items-center" v-show="code">
					<h1 class="text-xl text-orange-500 font-Bes mb-2">کد تایید</h1>
					<p class="font-Les text-center">
						با این کد من تایید می کنم که تو واقعا صاحب این شماره تلفن هستی
					</p>
				</div>
			</div>
			<div
				class="lg:w-1/3 w-full bg-base-200 shadow-xl p-4 flex flex-wrap flex-col items-center"
			>
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
export default {
	setup() {
		var signup = ref(false);
		var signin = ref(false);
		var code = ref(false);
		var route = useRoute();
		var page = route.path.split("/");
		page = page[page.length - 1];
		console.log(page);
		if (page == "signup") {
			signup.value = true;
			signin.value = false;
			code.value = false;
		} else if (page == "signin") {
			signup.value = false;
			signin.value = true;
			code.value = false;
		} else if (page == "code") {
			signup.value = false;
			signin.value = false;
			code.value = true;
		}
		return { signup, signin, code };
	},
};
</script>

<style></style>
