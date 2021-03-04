USE [Baby_B]
GO

/****** Object:  Table [dbo].[Users]    Script Date: 28/12/2020 13:13:46 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Users](
	[IdUser] [int] IDENTITY(1,1) NOT NULL,
	[IdAccount] [int] NULL,
	[FirstNameUser] [nvarchar](50) NOT NULL,
	[LastNameUser] [nvarchar](50) NULL,
	[UserPassword] [varchar](15) NULL,
	[UserStatus] [int] NULL,
	[EMail] [nvarchar](100) NULL,
	[GetPostMail] [bit] NULL,
	[TotalPayments] [smallint] NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[IdUser] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Users] ADD  CONSTRAINT [DF_Users_GetPostMail]  DEFAULT ((0)) FOR [GetPostMail]
GO

ALTER TABLE [dbo].[Users] ADD  CONSTRAINT [DF_Users_TotalPayments]  DEFAULT ((0)) FOR [TotalPayments]
GO

ALTER TABLE [dbo].[Users]  WITH CHECK ADD  CONSTRAINT [FK_Users_Account] FOREIGN KEY([IdAccount])
REFERENCES [dbo].[Account] ([IdAccount])
GO

ALTER TABLE [dbo].[Users] CHECK CONSTRAINT [FK_Users_Account]
GO


