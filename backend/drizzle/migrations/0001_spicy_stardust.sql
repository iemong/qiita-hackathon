CREATE TABLE `url_reactions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`urlId` integer NOT NULL,
	`reactionId` integer NOT NULL,
	`count` integer NOT NULL,
	`createdAt` integer NOT NULL,
	`updatedAt` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `urls` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`url` text NOT NULL,
	`createdAt` integer NOT NULL,
	`updatedAt` integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE reactions ADD `type` text NOT NULL;--> statement-breakpoint
ALTER TABLE `reactions` DROP COLUMN `urlName`;--> statement-breakpoint
ALTER TABLE `reactions` DROP COLUMN `reaction`;