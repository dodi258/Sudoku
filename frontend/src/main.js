import App from '@/App.svelte'; //@가 src 디렉토리를 가리킴.

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;
