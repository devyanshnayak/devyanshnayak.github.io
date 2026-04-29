<script>
</script>

<nav>
	<div>i love this</div>
	<div>hey is devi</div>
	<ul>
		<li>
			<a href="/">
				<img src="./home.svg" alt="home" />
			</a>
			<p>home</p>
		</li>
		<li>
			<a href="/about"><img src="./about.svg" alt="about" /> </a>
			<p>about</p>
		</li>
		<li>
			<a href="/projects"><img src="./projects.svg" alt="projects" /> </a>
			<p>projects</p>
		</li>
		<li>
			<a href="/contact-me"><img src="./contact.svg" alt="contact" /></a>
			<p>contacts</p>
		</li>
	</ul>
</nav>

<style>
	ul {
		list-style: none;
		display: flex;
		gap: 14px;
		padding: 7px;
		height: 68px;
		margin: 2px;
	}

	li {
		background-color: #00000077;
		backdrop-filter: blur(5px);
		color: lightyellow;
		border-radius: 20px;
		margin: 0px;
		padding: 10px;
		justify-content: center;
		align-items: center;
		display: flex;
		flex-direction: column;
		flex-shrink: 1;
	}
	li p {
		padding: 0;
		margin: 0px;
		font-size: 15px;
	}

	li img {
		max-height: 30px;
	}
	nav {
		border-radius: 50px;
		margin: 0;
		justify-content: space-between;
		color: white;
		display: flex;
	}
</style>
