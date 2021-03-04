USE [Baby_B]
GO

UPDATE [dbo].[ProductImage]
   SET [PathImage] = REPLACE([PathImage], 'C:/Users/hoday/Desktop/final project/Image', '')
 WHERE IdProductImage not in (1,2,55)
GO


UPDATE [dbo].[ProductImage]
SET [PathImage] = CONCAT('/images', [PathImage] )
 WHERE IdProductImage not in (1,2,55)
GO
