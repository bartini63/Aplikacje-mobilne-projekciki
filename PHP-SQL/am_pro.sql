CREATE DATABASE am_pro;


CREATE TABLE `newuser` (
  `UserID` int(12) NOT NULL,
  `UserEmail` varchar(100) NOT NULL,
  `UserPw` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


ALTER TABLE `newuser`
  ADD PRIMARY KEY (`UserID`),
  ADD UNIQUE KEY `UserEmail` (`UserEmail`);

ALTER TABLE `newuser`
  MODIFY `UserID` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

