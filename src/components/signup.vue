<template>
	<div class="p-4 flex flex-col items-center">
		<h1 class="text-xl text-orange-500 font-Bes mb-2">ثبت نام</h1>
		<div class="form-control w-full mt-1">
			<label class="label justify-center">
				<span class="label-text text-center font-Bes">نام و نام خانوادگی</span>
			</label>
			<input
				type="text"
				placeholder="نام و نام خانوادگی خود را وارد کنید "
				class="outline-none mb-2 bg-white border-2 p-2 rounded-md font-Mes block mx-auto hover:border-orange-400 hover:bg-gray-100 hover:shadow-sm"
			/>
		</div>
		<div class="form-control w-full mt-1">
			<label class="label justify-center">
				<span class="label-text text-center font-Bes">نام کاربری</span>
			</label>
			<input
				type="text"
				placeholder="نام کاربری خود را وارد کنید "
				class="outline-none mb-2 bg-white border-2 p-2 rounded-md font-Mes block mx-auto hover:border-orange-400 hover:bg-gray-100 hover:shadow-sm"
			/>
		</div>
		<div class="form-control w-full mt-1">
			<label class="label justify-center">
				<span class="label-text text-center font-Bes">شماره تلفن</span>
			</label>
			<input
				type="number"
				placeholder="شماره تلفن خود را وارد کنید "
				class="outline-none mb-2 bg-white border-2 p-2 rounded-md font-Mes block mx-auto hover:border-orange-400 hover:bg-gray-100 hover:shadow-sm"
			/>
		</div>
		<div class="form-control w-full mt-1">
			<label class="label justify-center">
				<span class="label-text text-center font-Bes">رمزعبور</span>
			</label>
			<input
				type="text"
				placeholder="رمز عبور خود را وارد کنید"
				class="outline-none mb-2 bg-white border-2 p-2 rounded-md font-Mes block mx-auto hover:border-orange-400 hover:bg-gray-100 hover:shadow-sm"
			/>
		</div>
		<router-link
			to="/user/signup/code"
			class="bg-orange-400 text-white font-Les p-2 m-2 rounded-md hover:bg-orange-500"
		>
			ارسال کد
		</router-link>
	</div>
</template>

<script>
export default {
	setup() {},
};
</script>

<style></style>
