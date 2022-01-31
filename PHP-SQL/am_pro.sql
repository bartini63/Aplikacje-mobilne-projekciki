-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 29 Sty 2022, 13:50
-- Wersja serwera: 10.4.22-MariaDB
-- Wersja PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `am_pro`
--


CREATE DATABASE am_pro;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `newuser`
--

CREATE TABLE `newuser` (
  `UserID` int(12) NOT NULL,
  `UserEmail` varchar(100) NOT NULL,
  `UserPw` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `newuser`
--

INSERT INTO `newuser` (`UserID`, `UserEmail`, `UserPw`) VALUES
(1, 'bartini63@gmail.com', 'bereteusz'),
(2, '123@vp.pl', '123456789'),
(3, '456@gmail.com', '987654321');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `newuser`
--
ALTER TABLE `newuser`
  ADD PRIMARY KEY (`UserID`),
  ADD UNIQUE KEY `UserEmail` (`UserEmail`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `newuser`
--
ALTER TABLE `newuser`
  MODIFY `UserID` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
