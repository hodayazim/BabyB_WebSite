---------                     Uni-code יכול לאחסן נתוני מחרוזת שאינם מסוג   - Varchar 
---------                         Uni-code יכול לאחסן רק נתוני מחרוזת מסוג  - Nvarchar 
create database Baby_B
use Baby_B

create table Users         --משתמשים--
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


create table Account    --חשבונות--
(
IdAccount int identity (1,1),
IdUser int,                      --קוד משתמש--
City varchar(50),
Street varchar(50),
ApartmentNumber int,
HomeNumber int
)

-- הורה ראשון מזין פרטים של הילדים
--ובוחר אם להוסיף מייל של ההורה השני 

create table ChildrenFamily          --פירוט ילדים--
(
ChildCode int identity (1,1),
IdMother int,                        --קוד שלא יוצג למשתמש--
IdFather int,
FirstName nvarchar (20),
LastName nvarchar (20), 
BirthdayDate Date           /*עם ערך ומפתח כך ששם הילד זה המפתח והערך הוא התאריך לידה שעפ"י יחושב הגיל  map ליצור*/
)


create table Products                 --מוצרים--
(
IdProduct int identity (100,1),
NameProduct nvarchar(30),
Category varchar(20),
Subcategory varchar(30),
DescriptionProduct varchar(300),       --תיאור מוצר--
UnitsInStock smallint,                 --כמות שבמלאי--
Price money,
Color nvarchar,
DiscountPercentage Tinyint,            --אחוזי הנחה--
ImageOfProduct image, 
Company varchar(20),
size Tinyint
)


create table OrdersProducts                  --רשימת מוצרים עם שיוך לפי מספר סל שכבר נקנה--
(
IdShoppingCart int,
IdProduct int,
NameProduct nvarchar(30),
Category varchar(20),
Subcategory varchar(30),
DescriptionProduct varchar(300),       --תיאור מוצר--
UnitsInStock smallint,                 --כמות שבמלאי--
Price money,
Color nvarchar,
DiscountPercentage Tinyint,            --אחוזי הנחה--
ImageOfProduct image, 
Company varchar(20),
size Tinyint
)
	
create table OldOrders                      --פרטי הסלים שנקנו--
(
PurchaseNumber int identity(1,1),
IdShoppingCart int,
TotalPeace money,
DateOfAcquisition date,                   --תאריך רכישה--
DateOfReceipt date                        --תאריך קבלת הסל--
)

   
create table ShoppingCart             --סל קניות נוכחי-- 
(
IdShoppingCart int identity(1,1),
IdUser int,                            --קוד משתמש-
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
DiscountPercentage Tinyint,            --אחוזי הנחה--
)


create table FameilyAddres
(
IdFamily int identity (1,1),
City nvarchar(30),
Street nvarchar(30), 
)


create table Keywords           --מילות מפתח--
(
IdKeywords int identity (1,1),
NameKeywords nvarchar,
PossibleContent text                      -- תוכן אפשרי--
)


create table DefaultTemplates    --תבניות ברירת מחדל--
(
IdTemplates int identity (1,1),
NameTemplates varchar,
StringSolution text                        --שרשור של תוצאות מתאימות--
)


create table Category(
Category text,
SubCategory text
)


create table SubscriptionArchive   --ארכיון מנויים--
(
IdFamily int identity (1,1),
IdUser int,                --קוד משתמש--
ParetntsfirstName nvarchar (20), 
LastName nvarchar (20),
EMail varchar(35), 
GetPostMail bit
)


create table ChildrenArchive
(
IdMothre int identity (1,1),              --קוד שלא יוצג למשתמש--
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
DescriptionProduct varchar(300),       --תיאור מוצר--
UnitsInStock smallint,                 --כמות שבמלאי--
Price money,
Color nvarchar,
DiscountPercentage Tinyint,            --אחוזי הנחה--
ImageOfProduct image, 
Company varchar(20),
size Tinyint
)


create table OldOrdersArchive                      --פרטי הסלים שנקנו--
(
PurchaseNumber int identity(1,1),
IdShoppingCart int,
TotalPeace money,
DateOfAcquisition date,             --תאריך רכישה--
DateOfReceipt date                  --תאריך קבלת המוצר--
)