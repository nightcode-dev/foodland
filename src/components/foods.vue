<template>
	<div>
		<div class="bg1 p-4 py-8 flex flex-col items-center justify-center">
			<h1 class="text-3xl font-Des text-orange-500">همه غذاها</h1>
			<p class="text-xl font-Bes text-white">
				دنبال چه غذایی می گردی؟اینجی پیداش می کنی
			</p>
			<div
				class="bg-white w-10/12 lg:w-4/6 rounded-xl h-min p-2 flex flex-row mb-8 mt-8"
			>
				<div class="flex items-center justify-center">
					<button
						class="w-min h-min p-3 bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center rounded-xl"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</button>
				</div>
				<div class="flex items-center justify-center px-2 w-full">
					<input
						type="text"
						class="outline-none w-full h-full p-1 text-right text-md font-Les px-4"
						placeholder="دنبال چی می گردی؟"
					/>
				</div>
			</div>
		</div>
		<div class="flex flex-wrap justify-center w-full p-4">
			<div
				class="card card-compact w-96 bg-base-200 shadow-xl h-min mx-2 my-4"
				v-for="(food, f) in newFoods"
				:key="f"
			>
				<figure>
					<img :src="food.img" class="h-80 w-full" />
				</figure>
				<div class="card-body items-center">
					<h2 class="card-title text-orange-600 font-Bes">
						{{ food.title }}
					</h2>
					<div class="flex flex-col items-center text-md">
						<p class="font-Bes text-orange-400">قیمت:</p>
						<p class="font-Les">{{ food.price }} تومان</p>
					</div>
					<div class="card-actions justify-end">
						<router-link
							:to="'/food/' + food.title"
							class="bg-orange-400 text-white font-Les p-2 text-lg m-2 rounded-md hover:bg-orannge-500"
						>
							جزییات بیشتر
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	setup() {
		var newFoods = [
			{
				title: "پیتزا",
				img: new URL("../assets/pizza.jpg", import.meta.url),
				price: "100000",
			},
			{
				title: "هات داگ",
				img: new URL("../assets/hotdog.jpg", import.meta.url),
				price: "50000",
			},
			{
				title: "همبرگر",
				img: new URL("../assets/hamburger.jpg", import.meta.url),
				price: "70000",
			},
			{
				title: "پاستا",
				img: new URL("../assets/pasta.jpg", import.meta.url),
				price: "60000",
			},
			{
				title: "مرغ سوخاری",
				img: new URL("../assets/fried chicken.jpg", import.meta.url),
				price: "150000",
			},
			{
				title: "سیب زمینی سرخ کرده",
				img: new URL("../assets/french fries.jpg", import.meta.url),
				price: "20000",
			},
		];
		return { newFoods };
	},
};
</script>

<style></style>
