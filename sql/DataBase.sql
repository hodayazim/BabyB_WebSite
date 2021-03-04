---------                     Uni-code ���� ����� ����� ������ ����� ����   - Varchar 
---------                         Uni-code ���� ����� �� ����� ������ ����  - Nvarchar 
create database Baby_B
use Baby_B

create table Users         --�������--
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


create table Account    --�������--
(
IdAccount int identity (1,1),
IdUser int,                      --��� �����--
City varchar(50),
Street varchar(50),
ApartmentNumber int,
HomeNumber int
)

-- ���� ����� ���� ����� �� ������
--����� �� ������ ���� �� ����� ���� 

create table ChildrenFamily          --����� �����--
(
ChildCode int identity (1,1),
IdMother int,                        --��� ��� ���� ������--
IdFather int,
FirstName nvarchar (20),
LastName nvarchar (20), 
BirthdayDate Date           /*�� ��� ����� �� ��� ���� �� ����� ����� ��� ������ ���� ���"� ����� ����  map �����*/
)


create table Products                 --������--
(
IdProduct int identity (100,1),
NameProduct nvarchar(30),
Category varchar(20),
Subcategory varchar(30),
DescriptionProduct varchar(300),       --����� ����--
UnitsInStock smallint,                 --���� ������--
Price money,
Color nvarchar,
DiscountPercentage Tinyint,            --����� ����--
ImageOfProduct image, 
Company varchar(20),
size Tinyint
)


create table OrdersProducts                  --����� ������ �� ���� ��� ���� �� ���� ����--
(
IdShoppingCart int,
IdProduct int,
NameProduct nvarchar(30),
Category varchar(20),
Subcategory varchar(30),
DescriptionProduct varchar(300),       --����� ����--
UnitsInStock smallint,                 --���� ������--
Price money,
Color nvarchar,
DiscountPercentage Tinyint,            --����� ����--
ImageOfProduct image, 
Company varchar(20),
size Tinyint
)
	
create table OldOrders                      --���� ����� �����--
(
PurchaseNumber int identity(1,1),
IdShoppingCart int,
TotalPeace money,
DateOfAcquisition date,                   --����� �����--
DateOfReceipt date                        --����� ���� ���--
)

   
create table ShoppingCart             --�� ����� �����-- 
(
IdShoppingCart int identity(1,1),
IdUser int,                            --��� �����-
IdProduct int ,
NameProduct nvarchar(30),
Category varchar(20),
Subcategory varchar(30),
AmountOfPurchases Int,
ImageOfProduct image,
Company varchar(20),
DateAdded date,
Color nvarchar,
Price money,
size Tinyint,
DiscountPercentage Tinyint,            --����� ����--
)


create table FameilyAddres
(
IdFamily int identity (1,1),
City nvarchar(30),
Street nvarchar(30), 
)


create table Keywords           --����� ����--
(
IdKeywords int identity (1,1),
NameKeywords nvarchar,
PossibleContent text                      -- ���� �����--
)


create table DefaultTemplates    --������ ����� ����--
(
IdTemplates int identity (1,1),
NameTemplates varchar,
StringSolution text                        --����� �� ������ �������--
)


create table Category(
Category text,
SubCategory text
)


create table SubscriptionArchive   --������ ������--
(
IdFamily int identity (1,1),
IdUser int,                --��� �����--
ParetntsfirstName nvarchar (20), 
LastName nvarchar (20),
EMail varchar(35), 
GetPostMail bit
)


create table ChildrenArchive
(
IdMothre int identity (1,1),              --��� ��� ���� ������--
IdFother int,
ChildCode int,
FirstName nvarchar (20),
LastName nvarchar (20), 
DateBorn Date   
)


create table OrdersProductsArchive
(
IdShoppingCart int,
IdProduct int,
NameProduct nvarchar(30),
Category varchar(20),
Subcategory varchar(30),
DescriptionProduct varchar(300),       --����� ����--
UnitsInStock smallint,                 --���� ������--
Price money,
Color nvarchar,
DiscountPercentage Tinyint,            --����� ����--
ImageOfProduct image, 
Company varchar(20),
size Tinyint
)


create table OldOrdersArchive                      --���� ����� �����--
(
PurchaseNumber int identity(1,1),
IdShoppingCart int,
TotalPeace money,
DateOfAcquisition date,             --����� �����--
DateOfReceipt date                  --����� ���� �����--
)