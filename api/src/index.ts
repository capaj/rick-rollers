/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
import { isbot } from 'isbot'

export interface Env {
	// Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
	rickrollers: KVNamespace;
	//
	// Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
	// MY_DURABLE_OBJECT: DurableObjectNamespace;
	//
	// Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
	// MY_BUCKET: R2Bucket;
	//
	// Example binding to a Service. Learn more at https://developers.cloudflare.com/workers/runtime-apis/service-bindings/
	// MY_SERVICE: Fetcher;
	//
	// Example binding to a Queue. Learn more at https://developers.cloudflare.com/queues/javascript-apis/
	// MY_QUEUE: Queue;
}

const destinationURL = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'

type MetaTagsConfig = {
	title: string
	description: string
	imageUrl: string
	pageUrl: string
}

function generateMetaTagsHTML(tags: MetaTagsConfig): string {
	return `
			<!DOCTYPE html>
			<html>
			<head>
					<title>${tags.title}</title>
					<meta charset="UTF-8">
					<meta name="viewport" content="width=device-width, initial-scale=1">e

					<!-- Open Graph / Facebook -->
					<meta property="og:type" content="website">
					<meta property="og:url" content="${tags.pageUrl}">
					<meta property="og:title" content="${tags.title}">
					<meta property="og:description" content="${tags.description}">
					<meta property="og:image" content="${tags.imageUrl}">

					<!-- Twitter -->
					<meta property="twitter:card" content="summary_large_image">
					<meta property="twitter:url" content="${tags.pageUrl}">
					<meta property="twitter:title" content="${tags.title}">
					<meta property="twitter:description" content="${tags.description}">
					<meta property="twitter:image" content="${tags.imageUrl}">
			</head>
			<body>

			</body>
			</html>
	`
}

// Example usage
const myMetaTagsSample: MetaTagsConfig = {
	title: 'Your Website Title',
	description: 'Description of your website',
	imageUrl: 'https://posthog.com/static/1a78058aa18990d2a5535b3efe44dac9/c512e/posthog-vs-amplitude.webp',
	pageUrl: 'https://posthog.com/blog/posthog-vs-amplitude',
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const statusCode = 301
		const userAgent = request.headers.get('user-agent')
		console.log('user-agent', userAgent)
		if (userAgent && isbot(userAgent)) {
			const fakeHTML = generateMetaTagsHTML(myMetaTagsSample)

			return new Response(fakeHTML, {
				status: 200,
				headers: {
					'content-type': 'text/html;charset=UTF-8',
				},
			})
		}
		return Response.redirect(destinationURL, statusCode)
	},
}
