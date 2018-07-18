CREATE TABLE Type_Equipment(
  	idType INT NOT NULL AUTO_INCREMENT,
  	PRIMARY KEY(idType),
  	name VARCHAR(20)
);

CREATE TABLE Equipment(
	idEquipment INT NOT NULL AUTO_INCREMENT,
	PRIMARY KEY(idEquipment),
	name VARCHAR(20),
	descEquipment VARCHAR(200),
	idType INT,
	FOREIGN KEY(idType) REFERENCES Type_Equipment(idType)
);

CREATE TABLE Place(
	idPlace INT NOT NULL AUTO_INCREMENT,
	PRIMARY KEY(idPlace),
	name VARCHAR(20)
);

CREATE TABLE Rent_Place(
	idRent_Place INT NOT NULL AUTO_INCREMENT,
	PRIMARY KEY(idRent_Place),
	day DATE,
	moment VARCHAR(10),
	idPlace INT,
	FOREIGN KEY(idPlace) REFERENCES Place(idPlace)
);

CREATE TABLE Equipment_Quantity(
	idEquipment_Quantity INT NOT NULL AUTO_INCREMENT,
	PRIMARY KEY(idEquipment_Quantity),
	quantity INT,
	idEquipment INT,
	FOREIGN KEY(idEquipment) REFERENCES Equipment(idEquipment)
);

CREATE TABLE Booking(
	idBooking INT NOT NULL AUTO_INCREMENT,
	PRIMARY KEY(idBooking),
	date_time Date, 	
	idRent_Place INT,
	status VARCHAR(20) NOT NULL,
	FOREIGN KEY(idRent_Place) REFERENCES Rent_Place(idRent_Place),
	idEquipment_Quantity INT,
	FOREIGN KEY(idEquipment_Quantity) REFERENCES Equipment_Quantity(idEquipment_Quantity),
	idUser INT,
	FOREIGN KEY(idUser) REFERENCES Users(idUser)
);

CREATE TABLE Options(
	idOption INT NOT NULL AUTO_INCREMENT,
	PRIMARY KEY(idOption),
	price INT,
	numberOfHalfDays INT
);

CREATE TABLE Users(
	idUser INT NOT NULL AUTO_INCREMENT,
	PRIMARY KEY(idUser),
	name VARCHAR(20) NOT NULL,
	surname VARCHAR(20) NOT NULL,
	mail VARCHAR(20) NOT NULL,
	password TEXT NOT NULL,
	phone INT,
	urlAvatar VARCHAR(100),
	work VARCHAR(20),
	shortBiography TEXT(2000),
	role VARCHAR(20),
	idOption INT,
	FOREIGN KEY(idOption) REFERENCES Options(idOption)
);

CREATE TABLE Images(
	idImage INT NOT NULL AUTO_INCREMENT,
	PRIMARY KEY(idImage),
	name VARCHAR(20),
	urlImage VARCHAR(100)
);