CREATE TRIGGER `guardarActualizacionEntregan` AFTER INSERT ON `entregan` FOR EACH ROW INSERT INTO `actualizacionentregan` (`fecha`) VALUES (CURDATE());