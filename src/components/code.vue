<template>
	<div class="p-4 flex flex-col items-center">
		<h1 class="text-xl text-orange-500 font-Bes mb-2">کد تایید</h1>
		<div class="form-control w-full mt-1">
			<label class="label justify-center">
				<span class="label-text text-center font-Bes">کد تایید</span>
			</label>
			<input
				type="text"
				placeholder="کد تایید ارسال شده به شمارتون رو وارد کنید"
				class="outline-none mb-2 bg-white border-2 p-2 rounded-md font-Mes block mx-auto hover:border-orange-400 hover:bg-gray-100 hover:shadow-sm"
			/>
		</div>
		<button
			class="bg-orange-400 text-white font-Les p-2 m-2 rounded-md hover:bg-orange-500"
		>
			تایید
		</button>
	</div>
</template>

<script>
export default {
	setup() {},
};
</script>

<style></style>
