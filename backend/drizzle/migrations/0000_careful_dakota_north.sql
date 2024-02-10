CREATE TABLE `reactions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`urlName` text NOT NULL,
	`reaction` text NOT NULL,
	`createdAt` integer NOT NULL,
	`updatedAt` integer NOT NULL
);
