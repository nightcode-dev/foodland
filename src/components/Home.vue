<template>
	<div>
		<div class="bg1 p-4 py-8 flex flex-col items-center justify-center">
			<h1 class="text-3xl font-Des text-orange-500">فودلند</h1>
			<p class="text-xl font-Bes text-white">سرزمین مزه و طعم</p>
			<div class="w-full flex flex-col lg:flex-row justify-center px-8 py-2">
				<div class="card w-full lg:w-1/3 bg-base-100 shadow-xl m-2 opacity-75">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-28 h-28 mx-auto text-orange-500"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
						/>
					</svg>

					<div class="card-body items-center text-center font-Les">
						<h2 class="card-title text-orange-500 font-Bes">سالم و طبیعی</h2>
						<p>
							لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
							استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
							ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
							و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
						</p>
					</div>
				</div>
				<div class="card w-full lg:w-1/3 bg-base-100 shadow-xl m-2 opacity-75">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-28 h-28 mx-auto text-orange-500"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
						/>
					</svg>

					<div class="card-body items-center text-center font-Les">
						<h2 class="card-title text-orange-500 font-Bes">قیمت بصرفه</h2>
						<p>
							لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
							استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
							ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
							و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
						</p>
					</div>
				</div>
				<div class="card w-full lg:w-1/3 bg-base-100 shadow-xl m-2 opacity-75">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-28 h-28 mx-auto text-orange-500"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>

					<div class="card-body items-center text-center font-Les">
						<h2 class="card-title text-orange-500 font-Bes">
							پخت و تحویل سریع
						</h2>
						<p>
							لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
							استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
							ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
							و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-col items-center p-4 w-full">
			<h1 class="font-Bes text-xl text-orange-500">جدیدترین غذا ها</h1>
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
