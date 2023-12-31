import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('links', {
	id: text('id').primaryKey(),
	username: text('username').notNull(),
	email: text('email').notNull(),
	clickCount: integer('clickCount').notNull().default(0),
	botRedirect: text('botRedirect')
})

export const botMetaTags = sqliteTable('botMetaTags', {
	id: text('id').primaryKey(),
	linkId: text('linkId')
		.notNull()
		.references(() => users.id),
	title: text('title'),
	description: text('description'),
	imageUrl: text('imageUrl'),
	pageUrl: text('pageUrl')
})
