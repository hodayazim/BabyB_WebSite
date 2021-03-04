create table UsersArchive
(
IdUser int identity (1,1),       --קוד משתמש-
IdAccount int,                   --חשבון משפחתי--
UserName varchar(35),            --כתובת מייל--
UserPassword varchar (15),       --סיסמה--
UserStatus int,                   --מנהל/צוות/לקוח--
EMail nvarchar(100),
GetPostMail bit,
TotalPayments smallint,           --סה"כ תשלומים-- 
)


create table AccountArchive 
(
IdAccount int identity (1,1),
IdUser int,                      --קוד משתמש--
City varchar(50),
Street varchar(50),
ApartmentNumber int,
HomeNumber int
)