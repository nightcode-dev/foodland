<script>
export default {
	setup() {},
};
</script>

<template>
	<div>
		<div class="navbar bg-base-200">
			<div class="navbar-start dropdown">
				<button tabindex="1" class="btn btn-circle btn-ghost lg:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block w-5 h-5 stroke-current"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						></path>
					</svg>
				</button>
				<ul
					tabindex="1"
					class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52 lg:hidden"
				>
					<li>
						<router-link
							to="/"
							class="font-Bes hover:bg-transparent"
							active-class="text-orange-500"
							>خانه</router-link
						>
					</li>
					<li>
						<router-link
							to="/foods"
							class="font-Bes hover:bg-transparent"
							active-class="text-orange-500"
							>فروشگاه</router-link
						>
					</li>
				</ul>
			</div>
			<div class="lg:navbar-center">
				<a class="btn btn-ghost normal-case text-xl"
					><img src="./assets/logo.png" class="h-12" alt=""
				/></a>
			</div>
			<div
				class="lg:navbar-end md:navbar-end flex justify-start lg:justify-end"
			>
				<router-link
					to="/user/signup"
					active-class="text-orange-500"
					class="btn btn-ghost btn-circle"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM3 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 019.374 21c-2.331 0-4.512-.645-6.374-1.766z"
						/>
					</svg>
				</router-link>
				<div class="dropdown dropdown-end">
					<label tabindex="0" class="btn btn-ghost btn-circle">
						<div class="indicator">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
								/>
							</svg>
							<span class="badge badge-sm bg-orange-500 border-0 indicator-item"
								>3</span
							>
						</div>
					</label>
					<div
						tabindex="0"
						class="mt-3 card card-compact dropdown-content w-52 bg-base-200 shadow"
					>
						<div class="card-body">
							<span class="font-bold font-Bes text-lg">3 غذا</span>
							<span class="text-info font-Les">مجموع : 180000 تومان</span>
							<div class="card-actions">
								<button
									class="btn btn-primary bg-orange-500 outline-none border-0 btn-block font-Les"
								>
									مشاهده سبد خرید
								</button>
							</div>
						</div>
					</div>
				</div>
				<div class="flex-none hidden lg:block">
					<ul class="menu menu-horizontal p-0">
						<li>
							<router-link
								to="/"
								class="font-Bes hover:bg-transparent"
								active-class="text-orange-500"
								>خانه</router-link
							>
						</li>
						<li>
							<router-link
								to="/foods"
								class="font-Bes hover:bg-transparent"
								active-class="text-orange-500"
								>فروشگاه</router-link
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div>
			<router-view :key="$route.fullPath"></router-view>
		</div>
		<div class="bg-gray-700 p-4 text-right">
			<div class="w-full p-4">
				<h1 class="font-Des text-orange-500 mb-2">درباره فودلند</h1>
				<p class="font-Les text-white">
					لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
					استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
					ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
					کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
					در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
					طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
					الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
					صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
					شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
					اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
					قرار گیرد.
				</p>
			</div>
			<div class="w-full p-4">
				<h1 class="font-Des text-orange-500 mb-2">ادرس</h1>
				<div class="flex text-white text-right">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 ml-1"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
							clip-rule="evenodd"
						/>
					</svg>
					<p class="font-Les">خیابان مثالی , شهر مثالی , کشور مثالی</p>
				</div>
				<div class="flex text-white mt-2 text-right">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 ml-1"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
						/>
					</svg>
					<p class="font-Les">09876543210</p>
				</div>
				<div class="flex text-white mt-2 mb-2 text-right">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 ml-1"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
							clip-rule="evenodd"
						/>
					</svg>
					<p class="font-Les">example@gmail.com</p>
				</div>
			</div>
		</div>
		<div
			class="bg-gray-900 text-white flex items-center justify-center p-4 w-full h-12"
		>
			<p class="font-Bes">طراحی شده توسط امیرحسین آخوندزاده</p>
		</div>
	</div>
</template>

<style scoped></style>
