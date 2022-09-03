<template>
	<div>
		<div class="flex flex-col items-center p-4">
			<h1 class="text-2xl font-Des text-orange-400">سبد خرید</h1>
			<h3 class="text-lg font-Les mt-1">
				محصولاتی که سفارش دادی اینجاست و حالا دیگه وقت تسویه حسابه
			</h3>
			<div class="overflow-x-auto w-full mt-4">
				<table class="table w-full">
					<!-- head -->
					<thead>
						<tr>
							<th>
								<label>
									<input type="checkbox" class="checkbox checkbox-orange-400" />
								</label>
							</th>
							<th class="font-Bes">نام محصول</th>
							<th class="font-Bes">قیمت</th>
							<th class="font-Bes">تعداد</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<!-- row 1 -->
						<tr v-for="(food, f) in myFoods" :key="f" class="hover">
							<th>
								<label>
									<input type="checkbox" class="checkbox" />
								</label>
							</th>
							<td>
								<div class="flex items-center space-x-3">
									<div class="avatar">
										<div class="mask mask-squircle w-12 h-12">
											<img
												:src="food.img"
												alt="Avatar Tailwind CSS Component"
											/>
										</div>
									</div>
									<div>
										<div class="font-bold font-Bes">{{ food.title }}</div>
									</div>
								</div>
							</td>
							<td class="font-Les">
								{{ food.price }}
							</td>
							<th>
								<input
									type="number"
									class="outline-none w-20 bg-white border-2 p-2 rounded-md font-Mes hover:border-orange-400 hover:bg-gray-100 hover:shadow-sm"
									value="1"
								/>
							</th>
							<th>
								<router-link
									:to="'/food/' + food.title"
									class="btn btn-ghost btn-md font-Bes"
									>اطلاعات</router-link
								>
							</th>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<th></th>
							<th></th>
							<th></th>
							<th></th>
							<th>
								<button
									class="bg-orange-400 text-white font-Mes p-2 text-lg m-2 rounded-md hover:bg-orannge-500 flex items-center"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										class="w-6 h-6 mr-1"
									>
										<path
											d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
										/>
										<path
											fill-rule="evenodd"
											d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
											clip-rule="evenodd"
										/>
										<path
											d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z"
										/>
									</svg>

									<p>تسویه حساب</p>
								</button>
							</th>
						</tr>
					</tfoot>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	setup() {
		var myFoods = [
			{
				title: "پیتزا",
				img: new URL("../assets/pizza.jpg", import.meta.url),
				price: "100000",
			},
			{
				title: "پاستا",
				img: new URL("../assets/pasta.jpg", import.meta.url),
				price: "60000",
			},
			{
				title: "سیب زمینی سرخ کرده",
				img: new URL("../assets/french fries.jpg", import.meta.url),
				price: "20000",
			},
		];
		return { myFoods };
	},
};
</script>

<style></style>
