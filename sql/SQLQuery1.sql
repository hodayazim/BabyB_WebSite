create table UsersArchive
(
IdUser int identity (1,1),       --��� �����-
IdAccount int,                   --����� ������--
UserName varchar(35),            --����� ����--
UserPassword varchar (15),       --�����--
UserStatus int,                   --����/����/����--
EMail nvarchar(100),
GetPostMail bit,
TotalPayments smallint,           --��"� �������-- 
)


create table AccountArchive 
(
IdAccount int identity (1,1),
IdUser int,                      --��� �����--
City varchar(50),
Street varchar(50),
ApartmentNumber int,
HomeNumber int
)