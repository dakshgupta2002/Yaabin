<script>
	import { onMount } from 'svelte';

	export let preview;
	export let centerFocused;
	let resRight;
	let resLeft;
	let resCenter;

	async function fetchImage() {
		const resp = await fetch('https://dog.ceo/api/breeds/image/random');
		const data = await resp.json();
		return data;
	}
	const updateImages = () => {
		console.log("url("+resLeft.message+")");
		document.getElementById('leftImg').style.backgroundImage = "url("+resLeft.message+")";
		document.getElementById('rightImg').style.backgroundImage = "url("+resRight.message+")";
		document.getElementById('centerImg').style.backgroundImage = "url("+resCenter.message+")";
	};
	onMount(async () => {
		resLeft = await fetchImage();
		resRight = await fetchImage();
		resCenter = await fetchImage();
		updateImages();
	});
	const left = async () => {
		resRight = resCenter;
		resCenter = resLeft;
		resLeft = await fetchImage();
		updateImages();
	};
	const right = async () => {
		resLeft = resCenter;
		resCenter = resRight;
		resRight = await fetchImage();
		updateImages();
	};

	const centerFocus = (centerImg, body, centerFocused) => {
		console.log('hello');
		if (centerFocused && centerImg && body) {
			centerImg.style.transform = 'scale(1.5)';
			centerImg.style.width = '100vw';
			body.innerHTML = resCenter.message;
		} else if (centerImg) {
			centerImg.style.transform = 'scale(1)';
			centerImg.style.width = '55vw';
			body.innerHTML = '';
		}
	};

	$: centerFocus(
		document.getElementById('centerImg'),
		document.getElementById('body'),
		centerFocused
	);
</script>

<div>
	<button
		class="close"
		on:click={() => {
			if (centerFocused) {
				centerFocused = false;
			} else preview = false;
		}}
		on:tap={() => {
			if (centerFocused) {
				centerFocused = false;
			} else preview = false;
		}}>X</button
	>
	<div>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="25.28"
			height="22.579"
			viewBox="0 0 25.28 22.579"
			class="beads"
		>
			<g id="Group_2190" data-name="Group 2190" transform="translate(-4352.72 -1246.618)">
				<path
					id="Path_1146"
					data-name="Path 1146"
					d="M4357.4,1255.553c-.07-.027-.143-.05-.215-.071v-7.42a.855.855,0,0,0-1.708,0v7.369a3.433,3.433,0,0,0-1.923,1.149,3.553,3.553,0,0,0-.352,4.067,3.483,3.483,0,0,0,2.275,1.614v6.081a.855.855,0,0,0,1.708,0v-6.11a3.509,3.509,0,0,0,.215-6.679Zm.612,3.06c0,.036.006.068,0,0Zm-2.508-1.418Zm-.7.542c.03-.036.055-.063,0,0Zm-.014,2.223,0,0C4354.887,1260.059,4354.815,1260,4354.79,1259.96Zm.736.565c-.042-.015-.121-.066,0,0Zm2.485-1.379c0,.013,0,.011,0,0Zm0-.069v.007a3.068,3.068,0,0,1-.078.331c-.017.056-.038.112-.059.167l-.011.02c-.068.124-.136.241-.214.358l-.009.014-.007,0a1.317,1.317,0,0,0-.116.128c-.032.033-.065.065-.1.1-.012.011-.063.053-.09.077a2.5,2.5,0,0,1-.24.156c-.041.023-.083.043-.124.066l-.044.02-.043.016a3.344,3.344,0,0,1-.342.1l-.092.014c-.038,0-.076.007-.114.009-.124.005-.245-.006-.369-.01h0l-.023-.006c-.07-.016-.139-.03-.208-.049s-.135-.044-.2-.066h0c-.1-.053-.2-.1-.295-.161-.048-.03-.093-.067-.141-.1l-.018-.019c-.1-.1-.19-.2-.285-.293-.038-.056-.076-.112-.111-.17-.024-.04-.047-.081-.069-.122-.007-.014-.034-.075-.05-.108a2.8,2.8,0,0,1-.09-.278c-.012-.047-.02-.094-.031-.14l-.008-.033c0-.014,0-.033,0-.064a2.914,2.914,0,0,1,0-.333c0-.037.042-.268,0-.063.009-.047.017-.094.028-.141a3.479,3.479,0,0,1,.1-.341l.007-.025.018-.028c.034-.061.064-.124.1-.184s.062-.1.094-.146a.335.335,0,0,1,.024-.032c.073-.082.145-.163.226-.238l.053-.047.1-.077a3.139,3.139,0,0,1,.354-.2h0c.067-.022.133-.046.2-.065.045-.013.092-.024.138-.035l.09-.016.114-.012c.062,0,.124-.005.185,0s.123.006.185.009h.029l.031.009c.139.035.274.07.411.114l.017.006,0,0a2.226,2.226,0,0,0,.215.115q.06.036.117.075c.02.013.04.028.059.042l.043.035c.081.082.163.163.244.245l.025.024.013.02c.038.058.078.114.114.174s.065.123.1.184l.017.028.008.025c.044.137.079.272.114.411l0,.02c.007.087.013.174.015.262S4358.018,1259,4358.015,1259.077Z"
					fill="#f2d0b8"
				/>
				<path
					id="Path_1147"
					data-name="Path 1147"
					d="M4366.507,1246.825a3.507,3.507,0,0,0-3.846,1.027,3.555,3.555,0,0,0-.352,4.068,3.482,3.482,0,0,0,2.275,1.613v14.809a.855.855,0,0,0,1.708,0v-14.837a3.509,3.509,0,0,0,.215-6.68Zm.612,3.061c0,.036.006.068,0,0Zm-2.508-1.418Zm-.7.541c.03-.036.055-.062,0,0Zm-.014,2.224,0,0C4363.994,1251.332,4363.922,1251.27,4363.9,1251.233Zm.736.564c-.042-.014-.121-.065,0,0Zm2.485-1.379c0,.013,0,.011,0,0Zm0-.068v.006a3.068,3.068,0,0,1-.078.331c-.018.057-.038.112-.059.167l-.011.021c-.068.123-.137.24-.214.358l-.009.013-.007.005a1.281,1.281,0,0,0-.116.127c-.032.033-.065.066-.1.1-.012.011-.063.053-.09.076a2.749,2.749,0,0,1-.24.157c-.041.023-.084.042-.124.065l-.044.021-.043.016c-.113.035-.225.071-.342.095-.022.005-.067.011-.092.015s-.076.007-.114.008c-.124.006-.245-.005-.369-.01h0l-.023-.005c-.07-.016-.139-.03-.209-.05s-.134-.043-.2-.065h0c-.1-.053-.2-.1-.295-.16-.048-.031-.093-.067-.141-.1l-.018-.019c-.1-.1-.19-.194-.285-.292-.038-.057-.076-.112-.111-.171-.024-.04-.047-.08-.069-.121-.007-.015-.034-.076-.05-.108a2.678,2.678,0,0,1-.09-.279c-.012-.046-.02-.093-.031-.14l-.008-.032c0-.014,0-.034,0-.065a2.807,2.807,0,0,1,0-.333c0-.037.041-.268,0-.063.009-.047.017-.094.027-.141.026-.116.064-.227.1-.34l.007-.025.018-.029c.034-.06.064-.123.1-.183s.062-.1.094-.146a.193.193,0,0,1,.024-.032,3.244,3.244,0,0,1,.226-.239l.053-.047c.026-.018.1-.075.1-.077a3.32,3.32,0,0,1,.354-.2h0c.067-.023.133-.046.2-.065.046-.013.093-.025.139-.035l.09-.017.114-.012c.062,0,.123,0,.185,0s.123.006.185.008h.029l.031.008c.139.035.274.071.411.115l.017.005,0,.005c.061.046.148.075.215.115l.117.074.059.042.042.036.245.244.025.024.013.02c.038.059.078.115.114.175s.065.123.1.183l.017.029.007.025c.045.137.08.271.115.411l0,.02c.007.087.013.174.015.262S4367.125,1250.276,4367.121,1250.35Z"
					fill="#f2d0b8"
				/>
				<path
					id="Path_1148"
					data-name="Path 1148"
					d="M4378,1263.03a3.564,3.564,0,0,0-2.331-3.3,2.855,2.855,0,0,0-.325-.1v-11.564a.855.855,0,0,0-1.708,0v11.568a3.416,3.416,0,0,0-1.813,1.124,3.553,3.553,0,0,0-.352,4.067,3.482,3.482,0,0,0,2.165,1.593v1.928a.854.854,0,0,0,1.708,0v-1.91A3.551,3.551,0,0,0,4378,1263.03Zm-1.719-.243c0,.036.006.068,0,0Zm-2.508-1.418Zm-.7.541c.029-.036.054-.061,0,0Zm-.015,2.224,0,0C4373.156,1264.233,4373.084,1264.171,4373.059,1264.134Zm.736.565c-.041-.015-.121-.066,0,0Zm2.485-1.379c0,.013,0,.011,0,0Zm0-.069v.007a3.193,3.193,0,0,1-.078.331c-.018.056-.038.112-.059.167l-.011.02c-.068.124-.137.241-.214.358l-.009.014-.007,0a1.094,1.094,0,0,0-.116.128c-.032.033-.065.065-.1.1-.012.011-.063.053-.09.077a2.476,2.476,0,0,1-.24.156c-.041.023-.083.043-.124.066l-.044.02-.043.016a3.375,3.375,0,0,1-.342.1l-.092.014c-.038,0-.076.007-.114.009-.124.005-.245-.006-.369-.01h0l-.023-.006c-.07-.016-.139-.03-.208-.049s-.135-.044-.2-.066h0c-.1-.053-.2-.1-.295-.161-.048-.03-.093-.067-.141-.1l-.018-.019c-.1-.1-.19-.195-.285-.293-.038-.056-.076-.112-.111-.17-.024-.04-.047-.081-.069-.122l-.05-.108a2.785,2.785,0,0,1-.09-.278c-.012-.047-.02-.094-.031-.14l-.008-.033c0-.014,0-.033,0-.064a2.914,2.914,0,0,1,0-.333c0-.037.041-.268,0-.063.009-.047.017-.094.027-.141.026-.116.064-.228.1-.341l.007-.025.017-.028c.035-.061.065-.124.1-.184s.062-.1.094-.146a.351.351,0,0,1,.024-.032c.073-.082.145-.163.226-.238l.053-.047c.026-.019.1-.076.1-.077a3.1,3.1,0,0,1,.354-.2h0c.067-.023.133-.047.2-.066.045-.013.092-.024.138-.035l.09-.016.114-.012c.062,0,.123-.005.185,0s.123.006.185.009h.029l.031.009c.139.035.274.07.411.115l.016.005.006,0a2.226,2.226,0,0,0,.215.115c.039.024.079.049.117.075.02.013.04.028.059.042l.043.035.244.245.025.024.013.02c.038.058.078.114.114.174s.065.123.1.184l.017.028.008.025c.044.137.079.272.114.411l0,.02c.007.087.013.174.014.262S4376.287,1263.177,4376.283,1263.251Z"
					fill="#f2d0b8"
				/>
			</g>
		</svg>

		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="171"
			height="41"
			viewBox="0 0 171 41"
			class="viewMap"
		>
			<g id="Group_2191" data-name="Group 2191" transform="translate(-3995 -1804)">
				<path
					id="Rectangle_121"
					data-name="Rectangle 121"
					d="M0,0H158.383A12.617,12.617,0,0,1,171,12.617V28.383A12.617,12.617,0,0,1,158.383,41H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z"
					transform="translate(3995 1804)"
					fill="#1d2531"
				/>
				<text
					id="VIEW_MAP"
					data-name="VIEW MAP"
					transform="translate(4095.185 1830.263)"
					fill="#c5ffbb"
					font-size="19.018"
					font-family="SegoeUI, Segoe UI"
					letter-spacing="0.1em"><tspan x="-51.387" y="0">VIEW MAP</tspan></text
				>
				<g id="Group_335" data-name="Group 335">
					<path
						id="Path_1149"
						data-name="Path 1149"
						d="M4041.133,1822.474h-1.8a8.97,8.97,0,0,0-8.122-8.122v-1.8a.819.819,0,1,0-1.637,0v1.8a8.97,8.97,0,0,0-8.122,8.122h-1.8a.818.818,0,0,0,0,1.637h1.8a8.971,8.971,0,0,0,8.122,8.122v1.8a.819.819,0,0,0,1.637,0v-1.8a8.971,8.971,0,0,0,8.122-8.122h1.8a.809.809,0,0,0,.818-.818.822.822,0,0,0-.818-.819Zm-6.725,1.637h3.293a7.343,7.343,0,0,1-6.486,6.486V1827.3a.819.819,0,0,0-1.637,0v3.293a7.343,7.343,0,0,1-6.486-6.486h3.294a.818.818,0,0,0,0-1.637h-3.294a7.344,7.344,0,0,1,6.486-6.486v3.294a.819.819,0,0,0,1.637,0v-3.294a7.343,7.343,0,0,1,6.486,6.486h-3.293a.822.822,0,0,0-.818.819.835.835,0,0,0,.818.818Zm0,0"
						fill="#d0fbc0"
					/>
				</g>
			</g>
		</svg>
	</div>

	<div class="carousel">
		<div
			class="imageWrapper leftImg"
			id="leftImg"
			on:drag={(e) => {
				e.preventDefault();
			}}
			on:click={left}
			on:tap={left}
		/>

		<div
			class="imageWrapper rightImg"
			id="rightImg"
			on:drag={(e) => {
				e.preventDefault();
			}}
			on:click={right}
			on:tap={left}
		/>

		<div
			class="imageWrapper centerImg"
			id="centerImg"
			on:drag={(e) => {
				e.preventDefault();
			}}
			on:click={() => {
				centerFocused = true;
			}}
		/>
	</div>

	<h1 id="body" />
</div>

<style>
	img {
		display: inline;
	}
	.centerImg {
		position: absolute;
		width: 55vw;
		height: 47vh;
		top: 3vh;
		left: 19vw;
		z-index: 1;
		overflow: hidden;
		background-size: contain;
		display: flex;
		justify-content: center;
		align-content: center;
	}
	.leftImg {
		position: absolute;
		width: 45vw;
		height: 34vh;
		top: 10.5vh;
		left: -6vw;
		opacity: 0.5;
		overflow: hidden;
		background-size: contain;
		display: flex;
		justify-content: center;
		align-content: center;
	}
	.rightImg {
		position: absolute;
		width: 45vw;
		height: 34vh;
		top: 10.5vh;
		left: 59vw;
		opacity: 0.5;
		overflow: hidden;
		background-size: contain;
		display: flex;
		justify-content: center;
		align-content: center;
	}
	.viewMap {
		position: absolute;
		height: 4.5vh;
		width: 40vw;
		top: -7.5vh;
		left: -15vw;
	}
	.beads {
		position: absolute;
		height: 2.5vh;
		width: 5.8vw;
		top: -7.5vh;
		left: 85vw;
	}
	#body {
		position: absolute;
		top: 70vh;
		left: 5vw;
		z-index: 1;
	}
	.close {
		position: absolute;
		height: 2.5vh;
		width: 5.8vw;
		top: -15vh;
		left: 90vw;
	}

	.imageWrapper{
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		box-shadow: 2px 1px 10px 0px black;
	}
</style>
