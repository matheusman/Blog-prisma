-- CreateTable
CREATE TABLE `titles` (
    `id_title` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `subtitle` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `titles_title_key`(`title`),
    UNIQUE INDEX `titles_id_title_title_key`(`id_title`, `title`),
    PRIMARY KEY (`id_title`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `metas_tags` (
    `id_title` INTEGER NOT NULL,
    `keyword` VARCHAR(191) NOT NULL,
    `title_meta` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `metas_tags_id_title_title_meta_key`(`id_title`, `title_meta`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `paths_titles_imgs` (
    `id_title` INTEGER NOT NULL,
    `image_title` VARCHAR(191) NOT NULL,
    `alt_title` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `paths_titles_imgs_id_title_key`(`id_title`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `texts` (
    `id_text` INTEGER NOT NULL AUTO_INCREMENT,
    `id_title` INTEGER NOT NULL,

    UNIQUE INDEX `texts_id_title_key`(`id_title`),
    PRIMARY KEY (`id_text`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `paragrafos` (
    `id_text` INTEGER NOT NULL,
    `id_paragrafo` INTEGER NOT NULL AUTO_INCREMENT,
    `text_paragrafo` VARCHAR(191) NOT NULL,
    `image_paragrafo` VARCHAR(191) NULL,
    `alt_paragrafo` VARCHAR(191) NULL,
    `title_paragrafo` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `paragrafos_id_text_key`(`id_text`),
    PRIMARY KEY (`id_paragrafo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `lists` (
    `id_paragrafo` INTEGER NOT NULL,
    `title_list` VARCHAR(191) NULL,
    `paragrafo_list` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `lists_id_paragrafo_key`(`id_paragrafo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `metas_tags` ADD CONSTRAINT `metas_tags_id_title_title_meta_fkey` FOREIGN KEY (`id_title`, `title_meta`) REFERENCES `titles`(`id_title`, `title`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `paths_titles_imgs` ADD CONSTRAINT `paths_titles_imgs_id_title_fkey` FOREIGN KEY (`id_title`) REFERENCES `titles`(`id_title`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `texts` ADD CONSTRAINT `texts_id_title_fkey` FOREIGN KEY (`id_title`) REFERENCES `titles`(`id_title`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `paragrafos` ADD CONSTRAINT `paragrafos_id_text_fkey` FOREIGN KEY (`id_text`) REFERENCES `texts`(`id_text`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `lists` ADD CONSTRAINT `lists_id_paragrafo_fkey` FOREIGN KEY (`id_paragrafo`) REFERENCES `paragrafos`(`id_paragrafo`) ON DELETE RESTRICT ON UPDATE CASCADE;
