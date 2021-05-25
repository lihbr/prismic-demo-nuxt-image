<template>
  <div class="container">
		<header>
			<h1>{{ $prismic.asText(data.title) }}</h1>
			<nav>
				<ul>
					<li v-for="item in data.menu_items" :key="item.label">
						<prismic-link :field="item.link">{{ item.label }}</prismic-link>
					</li>
				</ul>
			</nav>
		</header>
		<!-- Interesting gallery bit starts here! -->
		<section>
			<ul>
				<li v-for="(item, index) in data.image_gallery" :key="item.image.url" :class="{
					'col-span-2': index % 5 < 3,
					'col-span-3': index % 5 >= 3,
				}">
					<prismic-image :field="item.image" />
				</li>
			</ul>
		</section>
  </div>
</template>

<script>
export default {
	async asyncData({ $prismic, error }) {
		// We query our document from Prismic, is has data we need to display our gallery~
    const document = await $prismic.api.getSingle("gallery");

    if (document) {
      return { data: document.data };
    } else {
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>

<style>
/* Some basic CSS to style our gallery... */

:root {
	--beet: #a54a5e;
	--slate: #6a5959;
	--cream: #fffefe;
}

html, body {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-size: 16px;
	font-family: sans-serif;
	background: var(--cream);
}

.container {
	max-width: 1280px;
	padding: 0 1rem;
	margin: 2rem auto;
}

header {
	margin: 2rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

h1 {
	font-size: 1.25rem;
	font-weight: 400;
	color: var(--beet);
	margin: 0;
}

ul {
	list-style-type: none;
	margin: 0;
	padding: 0;
}

a {
	font-size: 1.25rem;
	color: var(--slate);
	text-decoration: none;
	padding: .25rem .5rem;
}

a:hover {
	background: var(--beet);
	color: var(--cream);
}

section ul {
	display: grid;
	grid-template-columns: repeat(6, minmax(0, 1fr));
	grid-auto-flow: row;
	gap: 1rem;
}

section img {
	width: 100%;
	height: 480px;
	object-fit: cover;
}

.col-span-2 {
	grid-column: span 2/span 2;
}

.col-span-3 {
	grid-column: span 3/span 3;
}
</style>
