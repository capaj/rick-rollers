CREATE TABLE `botMetaTags` (
	`id` text PRIMARY KEY NOT NULL,
	`linkId` text NOT NULL,
	`title` text,
	`description` text,
	`imageUrl` text,
	`pageUrl` text,
	FOREIGN KEY (`linkId`) REFERENCES `links`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `links` (
	`id` text PRIMARY KEY NOT NULL,
	`username` text NOT NULL,
	`email` text NOT NULL,
	`clickCount` integer DEFAULT 0 NOT NULL,
	`botRedirect` text
);
 