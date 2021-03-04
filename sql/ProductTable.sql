USE [Baby_B]
GO

/****** Object:  Table [dbo].[Products]    Script Date: 21/01/2021 13:13:04 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Products](
	[IdProduct] [int] IDENTITY(1,1) NOT NULL,
	[NameProduct] [nvarchar](30) NULL,
	[BarcodeProduct] [nvarchar](30) NULL,
	[IdSubcategory] [int] NOT NULL,
	[DescriptionProduct] [varchar](500) NULL,
	[UnitsInStock] [smallint] NULL,
	[Price] [money] NULL,
	[Color] [nvarchar](20) NULL,
	[DiscountPercentage] [tinyint] NULL,
	[Company] [varchar](20) NULL,
	[size] [varchar](15) NULL,
 CONSTRAINT [PK_Products] PRIMARY KEY CLUSTERED 
(
	[IdProduct] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Products]  WITH CHECK ADD  CONSTRAINT [FK_Products_SubCategory] FOREIGN KEY([IdSubcategory])
REFERENCES [dbo].[SubCategory] ([IdSubCategory])
GO

ALTER TABLE [dbo].[Products] CHECK CONSTRAINT [FK_Products_SubCategory]
GO


